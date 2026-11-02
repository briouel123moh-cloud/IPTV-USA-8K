# IPTV USA 8K

US storefront built with Astro. 21 pages, eight guides, 36 FAQs, original promotional imagery and 42 duration/simultaneous-screen quote combinations. WhatsApp +212631479723. No online payment collection or invented prices.

## Hosting

Source repository: `briouel123moh-cloud/IPTV-USA-8K`.
Cloudflare Pages project: `iptv-usa-8k`.
Production URL: https://iptv-usa-8k.com/

The owned production domain is connected to Cloudflare Pages. Production indexing is enabled; Pages hostnames retain host-specific noindex headers. The earlier ChatGPT Sites version is retained as a private historical review, not the deployment target of this repository.

## Build and publish

Cloudflare builds directly from this GitHub repository using branch `main`, Node 24, build command `npm run build` and output directory `dist`. The initial Git build succeeded on November 1, 2026.

The Pages automatic-deployment flag is enabled, but push-triggered deployment is not active: the repository's installed-apps screen does not list Cloudflare, and the verification commit did not trigger a build. Until the Cloudflare GitHub app is connected, explicitly trigger a Pages deployment of the current `main` revision after updates. The current public website has already been deployed successfully; this limitation affects subsequent unattended updates.

Locally use Node 22.23.4 or newer. Run `npm ci`, `npm run build`, then `npm test`. The root `404.html` is retained so unknown paths return 404 instead of the homepage. Never commit credentials; `wrangler.jsonc` contains no secrets.

## Production configuration

Production uses `PUBLIC_SITE_URL=https://iptv-usa-8k.com` and `PUBLIC_INDEXABLE=true`; preview builds remain `PUBLIC_INDEXABLE=false`. These variables are maintained in `wrangler.jsonc`, the source of truth for Pages builds; dashboard variables alone are insufficient while that file is present. Run the build, tests and launch gate with the same production variables: `PUBLIC_SITE_URL=https://iptv-usa-8k.com PUBLIC_INDEXABLE=true npm run check`, then the same variables with `npm run check:launch`. The trial profile includes apex and www origins with apex first for privacy links. The sitemap index is https://iptv-usa-8k.com/sitemap-index.xml.

Indexable builds emit 21 canonical sitemap URLs with real page images and maintained modification dates. Preview builds emit no indexable sitemap entries. There are no claimed rankings, indexing deadlines, fabricated reviews or special AI-visibility guarantees.

## Trial service

The existing shared activation service is `https://control.emeraldiptv.irish/widget?site=usa&lang=en`. The owned USA domain is registered as its primary origin; historical preview origins remain allowed. Provider credentials stay on its Worker. One new request is allowed after 24 hours, up to 7 in 30 days, with provider-defined expiry for each credential; this is not one continuous seven-day login. Limits are shared across network sites. No real trial was issued during QA.

The USA regional footer links to Canada, Belgium, Ireland Subscription, Suomi, Nordic IPTV Elite, Australia, Deutschland and Switzerland. Emerald receives promotional links only from Suomi, Ireland Subscription and Nordic IPTV Elite.

Research: `docs/us-keyword-research.md` and `docs/market-opportunities.md`. Keyword priorities are qualitative; no measured volume, KD or CPC is claimed.
