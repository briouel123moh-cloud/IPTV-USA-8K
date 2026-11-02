import { isVerifiedOwner } from '../lib/access-owner.mjs';

const ownerHosts = new Set(['iptv-usa-8k.com', 'www.iptv-usa-8k.com']);

/** The accompanying Pages routing file sends only storefront and unknown paths here. */
export async function onRequest({ request, env, next }) {
  const host = new URL(request.url).hostname;
  const country = (request.cf?.country || request.headers.get('CF-IPCountry') || '').toUpperCase();
  if (country === 'MA') {
    if (ownerHosts.has(host) && await isVerifiedOwner(request, env?.OWNER_ACCESS_AUD)) {
      const response = await next();
      const ownerResponse = new Response(response.body, response);
      ownerResponse.headers.set('Cache-Control', 'private, no-store');
      ownerResponse.headers.set('X-Robots-Tag', 'noindex, follow');
      return ownerResponse;
    }
    return new Response(request.method === 'HEAD' ? null : 'Service unavailable in this region.', {
      status: 403,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'private, no-store',
        'X-Robots-Tag': 'noindex, follow',
      },
    });
  }

  const response = await next();
  if (host !== 'iptv-usa-8k.pages.dev' && !host.endsWith('.iptv-usa-8k.pages.dev')) return response;

  const preview = new Response(response.body, response);
  preview.headers.set('X-Robots-Tag', 'noindex, follow');
  return preview;
}
