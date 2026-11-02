import assert from 'node:assert/strict';
import { createHash, generateKeyPairSync, sign } from 'node:crypto';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { Miniflare, createFetchMock } from 'miniflare';

test('a valid owner can change networks in Morocco while public aliases and forged assertions stay blocked', async t => {
  const issuer = 'https://briouel123moh.cloudflareaccess.com';
  const audience = 'a'.repeat(64);
  const email = 'owner@example.test';
  const { publicKey, privateKey } = generateKeyPairSync('rsa', { modulusLength: 2048 });
  const kid = 'local-fixture';
  const jwk = { ...publicKey.export({ format: 'jwk' }), kid, alg: 'RS256', use: 'sig' };
  const mocks = createFetchMock();
  mocks.disableNetConnect();
  mocks.get(issuer).intercept({ path: '/cdn-cgi/access/certs' }).reply(200, { keys: [jwk] }).persist();
  const verifier = await readFile('lib/access-owner.mjs', 'utf8');
  const digest = createHash('sha256').update(email).digest('hex');
  const fixtureVerifier = verifier.replace(/const ownerEmailDigest = "[a-f0-9]{64}"/, 'const ownerEmailDigest = "' + digest + '"');
  assert.notEqual(verifier, fixtureVerifier);
  const worker = new Miniflare({
    modules: [
      { type: 'ESModule', path: 'entry.mjs', contents: `
        import { onRequest } from './functions/_middleware.js';
        export default { fetch(request, env) {
          return onRequest({ request, env, next: () => new Response('Plans', { headers: { 'Cache-Control': 'public' } }) });
        } };
      ` },
      { type: 'ESModule', path: 'functions/_middleware.js', contents: await readFile('functions/_middleware.js', 'utf8') },
      { type: 'ESModule', path: 'lib/access-owner.mjs', contents: fixtureVerifier },
    ],
    compatibilityDate: '2026-07-01',
    bindings: { OWNER_ACCESS_AUD: audience }, cf: false, fetchMock: mocks,
  });
  t.after(async () => { await worker.dispose(); await mocks.close(); });
  const encode = data => Buffer.from(JSON.stringify(data)).toString('base64url');
  function token(mailbox) {
    const now = Math.floor(Date.now() / 1000);
    const claims = { iss: issuer, aud: [audience], type: 'app', email: mailbox, sub: 'test-user', exp: now + 300, iat: now - 1 };
    const data = encode({ alg: 'RS256', typ: 'JWT', kid }) + '.' + encode(claims);
    return data + '.' + sign('RSA-SHA256', Buffer.from(data), privateKey).toString('base64url');
  }
  const owner = token(email);
  for (const [host, ip, assertion, expected] of [
    ['iptv-usa-8k.com', '192.0.2.10', owner, 200],
    ['www.iptv-usa-8k.com', '198.51.100.25', owner, 200],
    ['iptv-usa-8k.pages.dev', '192.0.2.10', owner, 403],
    ['iptv-usa-8k.com', '192.0.2.10', token('other@example.test'), 403],
    ['iptv-usa-8k.com', '192.0.2.10', 'forged', 403],
  ]) {
    const res = await worker.dispatchFetch('https://' + host + '/plans/', {
      cf: { country: 'MA' },
      headers: { 'Cf-Access-Jwt-Assertion': assertion, 'CF-Connecting-IP': ip },
    });
    assert.equal(res.status, expected, host);
    assert.equal(res.headers.get('Cache-Control'), 'private, no-store');
    if (expected === 200) assert.equal(await res.text(), 'Plans');
  }
});
