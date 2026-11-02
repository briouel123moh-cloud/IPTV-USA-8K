import {mkdir,readdir,readFile,writeFile} from 'node:fs/promises';
import {resolve} from 'node:path';
import {site} from '../src/data/site.mjs';
import {routes} from '../src/data/routes.mjs';
const output=resolve(process.argv[2]||'dist');
await mkdir(output,{recursive:true});
const xml=value=>String(value).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
async function renderedImages(path){
  let html;try{html=await readFile(resolve(output,`.${path}index.html`),'utf8');}catch(e){if(e.code==='ENOENT')return[];throw e;}
  return [...new Set([...html.matchAll(/<img\b[^>]*\ssrc="(\/images\/[^"?#]+)"[^>]*>/gi)].map(m=>`${site.origin}${m[1]}`))];
}
const entries=site.indexable?await Promise.all(routes.map(async route=>`<url><loc>${xml(site.origin+route.path)}</loc><lastmod>${site.updated}</lastmod>${(await renderedImages(route.path)).map(src=>`<image:image><image:loc>${xml(src)}</image:loc></image:image>`).join('')}</url>`)):[];
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">${entries.join('\n')}</urlset>\n`;
const index=site.indexable?`<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><sitemap><loc>${xml(site.origin)}/sitemap.xml</loc></sitemap></sitemapindex>\n`:sitemap;
const robots=`User-agent: *\nAllow: /\n${site.indexable?`Sitemap: ${site.origin}/sitemap-index.xml\n`:'# Review site: pages remain noindex until the production domain is connected.\n'}`;
const headers=`/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  X-Frame-Options: SAMEORIGIN
  Permissions-Policy: camera=(), microphone=(), geolocation=()
${site.indexable?'':'  X-Robots-Tag: noindex, follow\n'}
https://iptv-usa-8k.pages.dev/*
  X-Robots-Tag: noindex, follow
https://:preview.iptv-usa-8k.pages.dev/*
  X-Robots-Tag: noindex, follow
/_astro/*
  Cache-Control: public, max-age=31536000, immutable
/images/*
  Cache-Control: public, max-age=86400
/robots.txt
  Content-Type: text/plain; charset=utf-8
/sitemap.xml
  Content-Type: application/xml; charset=utf-8
/sitemap-index.xml
  Content-Type: application/xml; charset=utf-8
`;
// Exempt only real public assets, so a guessed asset path cannot reveal a storefront 404 page.
const assetPaths = (await readdir(output, { recursive: true }))
  .filter(path => /\.(?:css|js|mjs|webp|png|jpg|jpeg|svg|ico|woff2?|webmanifest)$/i.test(path))
  .map(path => '/' + path.split('\\').join('/'))
  .sort();
const functionRoutes = {
  version: 1,
  include: ['/*'],
  exclude: ['/robots.txt', '/sitemap.xml', '/sitemap-index.xml', '/.well-known/acme-challenge/*', ...assetPaths],
};
await Promise.all([writeFile(resolve(output,'robots.txt'),robots),writeFile(resolve(output,'sitemap.xml'),sitemap),writeFile(resolve(output,'sitemap-index.xml'),index),writeFile(resolve(output,'_headers'),headers),writeFile(resolve(output,'_routes.json'), JSON.stringify(functionRoutes))]);
console.log(`SEO output: ${entries.length} sitemap URLs; ${site.indexable?'indexable production':'noindex review site'}.`);
