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

test('published crawl files and real static assets bypass Functions while arbitrary routes stay guarded', async () => {
  const routes = JSON.parse(await readFile('dist/_routes.json', 'utf8'));
  assert.deepEqual(routes.include, ['/*']);
  for (const path of ['/robots.txt', '/sitemap.xml', '/sitemap-index.xml', '/favicon.svg', '/brand-icon.png', '/.well-known/acme-challenge/*']) assert.ok(routes.exclude.includes(path), path);
  assert.ok(routes.exclude.some(path => path.startsWith('/_astro/') && path.endsWith('.css')));
  assert.ok(routes.exclude.length + routes.include.length <= 100);
  assert.ok(!routes.exclude.some(path => path.includes('/api') || path.endsWith('.html') || path === '/images/*'));
});
