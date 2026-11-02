/** The accompanying Pages routing file sends only storefront and unknown paths here. */
export async function onRequest({ request, next }) {
  const country = (request.cf?.country || request.headers.get('CF-IPCountry') || '').toUpperCase();
  if (country === 'MA') {
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
  const host = new URL(request.url).hostname;
  if (host !== 'iptv-usa-8k.pages.dev' && !host.endsWith('.iptv-usa-8k.pages.dev')) return response;

  const preview = new Response(response.body, response);
  preview.headers.set('X-Robots-Tag', 'noindex, follow');
  return preview;
}
