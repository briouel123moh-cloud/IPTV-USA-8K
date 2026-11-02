import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { onRequest } from '../functions/_middleware.js';

test('edge country blocks storefront and API requests before any handler can issue a response', async () => {
  for (const host of ['iptv-usa-8k.com', 'build.iptv-usa-8k.pages.dev']) {
    for (const [method, path] of [['GET', '/'], ['HEAD', '/plans/'], ['POST', '/api/trial']]) {
      const request = new Request(`https://${host}${path}`, { method, headers: { 'CF-IPCountry': 'US', Cookie: 'vip=1' } });
      Object.defineProperty(request, 'cf', { value: { country: 'MA' } });
      const response = await onRequest({ request, next() { assert.fail('Restricted request reached the storefront'); } });
      assert.equal(response.status, 403);
      assert.equal(response.headers.get('cache-control'), 'private, no-store');
      if (method === 'HEAD') assert.equal(await response.text(), '');
    }
  }
});

test('allowed visitors reach the site, with noindex only on the Pages alias', async () => {
  for (const host of ['iptv-usa-8k.com', 'build.iptv-usa-8k.pages.dev']) {
    const request = new Request(`https://${host}/plans/`, { headers: { 'CF-IPCountry': 'US' } });
    const response = await onRequest({ request, next: () => new Response('Plans') });
    assert.equal(await response.text(), 'Plans');
    assert.equal(response.headers.get('x-robots-tag'), host.endsWith('.pages.dev') ? 'noindex, follow' : null);
  }
});

test('only the authenticated owner can load a private storefront response from Morocco', async (t) => {
  const pair = await crypto.subtle.generateKey({
    name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048,
    publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256',
  }, true, ['sign', 'verify']);
  const publicKey = await crypto.subtle.exportKey('jwk', pair.publicKey);
  const issuer = 'https://briouel123moh.cloudflareaccess.com';
  const audience = 'a'.repeat(64);
  const kid = 'fixture-key';
  t.mock.method(globalThis, 'fetch', async input => {
    assert.equal(typeof input === 'string' ? input : String(input.url || input), issuer + '/cdn-cgi/access/certs');
    return Response.json({ keys: [{ ...publicKey, kid, alg: 'RS256', use: 'sig' }] });
  });
  const encode = data => Buffer.from(JSON.stringify(data)).toString('base64url');
  const now = Math.floor(Date.now() / 1000);
  async function getToken(email) {
    const claims = { iss: issuer, aud: [audience], type: 'app', email, sub: 'fixture-user', exp: now + 300, iat: now, nbf: now };
    const signingInput = encode({ alg: 'RS256', typ: 'JWT', kid }) + '.' + encode(claims);
    const signature = await crypto.subtle.sign('RSASSA-PKCS1-v1_5', pair.privateKey, new TextEncoder().encode(signingInput));
    return signingInput + '.' + Buffer.from(signature).toString('base64url');
  }
  const originalDigest = crypto.subtle.digest.bind(crypto.subtle);
  t.mock.method(crypto.subtle, 'digest', async (algorithm, bytes) => {
    if (new TextDecoder().decode(bytes) === 'owner@example.test') {
      return Uint8Array.from(Buffer.from('de6d87856d0deb1d78fa5fe787a27e637dca0ed76bb304bb8d85f701413c0d4a', 'hex')).buffer;
    }
    return originalDigest(algorithm, bytes);
  });
  const token = await getToken('owner@example.test');
  const nonOwner = await getToken('someone-else@example.com');
  for (const [host, assertion, expected] of [
    ['iptv-usa-8k.com', token, 200], ['www.iptv-usa-8k.com', token, 200],
    ['iptv-usa-8k.pages.dev', token, 403], ['iptv-usa-8k.com', nonOwner, 403],
    ['iptv-usa-8k.com', 'forged', 403],
  ]) {
    const request = new Request('https://' + host + '/plans/', { headers: { 'Cf-Access-Jwt-Assertion': assertion } });
    Object.defineProperty(request, 'cf', { value: { country: 'MA' } });
    const response = await onRequest({ request, env: { OWNER_ACCESS_AUD: audience }, next() {
      assert.equal(expected, 200);
      return new Response('Plans', { headers: { 'X-Fixture': 'preserved', 'Cache-Control': 'public' } });
    } });
    assert.equal(response.status, expected, host);
    assert.equal(response.headers.get('Cache-Control'), 'private, no-store');
    if (expected === 200) {
      assert.equal(await response.text(), 'Plans');
      assert.equal(response.headers.get('x-fixture'), 'preserved');
    }
  }
});

test('published crawl files and real static assets bypass Functions while arbitrary routes stay guarded', async () => {
  const routes = JSON.parse(await readFile('dist/_routes.json', 'utf8'));
  assert.deepEqual(routes.include, ['/*']);
  for (const path of ['/robots.txt', '/sitemap.xml', '/sitemap-index.xml', '/favicon.svg', '/brand-icon.png', '/.well-known/acme-challenge/*']) assert.ok(routes.exclude.includes(path), path);
  assert.ok(routes.exclude.some(path => path.startsWith('/_astro/') && path.endsWith('.css')));
  assert.ok(routes.exclude.length + routes.include.length <= 100);
  assert.ok(!routes.exclude.some(path => path.includes('/api') || path.endsWith('.html') || path === '/images/*'));
});
