# IPTV USA 8K

US storefront built with Astro. 21 pages, eight guides, 36 FAQs, original promotional imagery and 42 duration/simultaneous-screen quote combinations. WhatsApp +212631479723. No online payment collection or invented prices.

## Hosting

Source repository: `briouel123moh-cloud/IPTV-USA-8K`.
Cloudflare Pages project: `iptv-usa-8k`.
Public review URL: https://iptv-usa-8k.pages.dev

The Cloudflare review is publicly accessible. It remains noindex pending an owned US domain; this is separate from its public accessibility. The earlier ChatGPT Sites version is retained as a private historical review, not the deployment target of this repository.

## Build and publish

Cloudflare builds directly from this GitHub repository using branch `main`, Node 24, build command `npm run build` and output directory `dist`. The initial Git build succeeded on November 1, 2026.

The Pages automatic-deployment flag is enabled, but push-triggered deployment is not active: the repository's installed-apps screen does not list Cloudflare, and the verification commit did not trigger a build. Until the Cloudflare GitHub app is connected, explicitly trigger a Pages deployment of the current `main` revision after updates. The current public website has already been deployed successfully; this limitation affects subsequent unattended updates.

Locally use Node 22.23.4 or newer. Run `npm ci`, `npm run build`, then `npm test`. The root `404.html` is retained so unknown paths return 404 instead of the homepage. Never commit credentials; `wrangler.jsonc` contains no secrets.

## Domain launch

Connect the owned domain to this Pages project. Set `PUBLIC_SITE_URL` to its HTTPS origin and `PUBLIC_INDEXABLE=true`. Add that exact origin to the existing trial service's `usa` profile, make it the primary privacy destination, and preserve other profiles. Update source `productionOrigin`; rebuild, run `npm test` and `npm run check:launch`. The latter intentionally rejects the current pages.dev preview. Verify HTTPS, canonical redirects, trial embedding, pricing requests and 404 responses before submitting `/sitemap-index.xml`.

Indexable builds emit 21 canonical sitemap URLs with real page images and maintained modification dates. Preview builds emit no indexable sitemap entries. There are no claimed rankings, indexing deadlines, fabricated reviews or special AI-visibility guarantees.

## Trial service

The existing shared activation service is `https://control.emeraldiptv.irish/widget?site=usa&lang=en`. The new Cloudflare origin is registered and browser-verified. Provider credentials stay on its Worker. One new request is allowed after 24 hours, up to 7 in 30 days, with provider-defined expiry for each credential; this is not one continuous seven-day login. Limits are shared across network sites. No real trial was issued during QA.

Regional links include Belgium, Canada, Emerald, Ireland Subscription and Suomi. Emerald itself remains inbound-only. The USA site does not claim ownership of an unpurchased .com domain.

Research: `docs/us-keyword-research.md` and `docs/market-opportunities.md`. Keyword priorities are qualitative; no measured volume, KD or CPC is claimed.
