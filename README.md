# IPTV USA 8K

US storefront built with Astro. 21 pages, eight guides, 36 FAQs, original promotional imagery and42 duration/simultaneous-screen quote combinations. WhatsApp+212631479723. No online payment collection or invented prices.

## Hosting

Source repository: `briouel123moh-cloud/IPTV-USA-8K`.
Cloudflare Pages project: `iptv-usa-8k`.
Public review URL: https://iptv-usa-8k.pages.dev

The Cloudflare review is publicly accessible. It remains noindex pending an owned US domain; this is separate from its public accessibility. The earlier ChatGPT Sites version is retained as a private historical review, not the deployment target of this repository.

## Build and publish

Use Node22.23.4 or newer. Run `npm ci`, `npm run build`, then `npm test`. Pages output is `dist`; production branch is `main`. The root404.html is retained, so unknown paths must return404instead of the homepage.

If Git integration is enabled in Cloudflare, use build command `npm run build` and output directory `dist`. Otherwise deploy the exact verified source revision with `npx wrangler pages deploy dist --project-name iptv-usa-8k --branch main`. Authenticate through Cloudflare's supported login/token mechanism; never commit credentials. `wrangler.jsonc` contains no secrets.

## Domain launch

Connect the owned domain to this Pages project. Set `PUBLIC_SITE_URL` to its HTTPS origin and `PUBLIC_INDEXABLE=true`. Add that exact origin to the existing trial service's `usa` profile, make it the primary privacy destination, and preserve other profiles. Update source productionOrigin; rebuild, run `npm test` and `npm run check:launch`. The latter intentionally rejects the current pages.dev preview. Verify HTTPS, canonical redirects, trial embedding, pricing requests and404before submitting `/sitemap-index.xml`.

Indexable builds emit21canonical sitemapURLs with real page images and maintained modification dates. Preview builds emit no indexable sitemap entries. There are no claimed rankings, indexing deadlines, fabricated reviews or special AI-visibility guarantees.

## Trial service

The existing shared activation service is `https://control.emeraldiptv.irish/widget?site=usa&lang=en`. Provider credentials stay on its Worker. One new request is allowed after24hours, up to7in30days, with provider-defined expiry for each credential; this is not one continuous seven-day login. Limits are shared across network sites. No real trial was issued during QA.

Regional links include Belgium, Canada, Emerald, Ireland Subscription and Suomi. Emerald itself remains inbound-only. The USA site does not claim ownership of an unpurchased .com domain.

Research: `docs/us-keyword-research.md` and `docs/market-opportunities.md`. Keyword priorities are qualitative; no measured volume, KD or CPC is claimed.
