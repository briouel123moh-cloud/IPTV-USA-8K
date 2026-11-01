import { generator } from './generator.mjs';
import { planDurations } from './plan-options.mjs';
function httpsOrigin(value) {
  if (!value) return '';
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.pathname !== '/' || url.search || url.hash || url.username || url.password) throw new Error('PUBLIC_SITE_URL must be an HTTPS origin.');
  return url.origin;
}
function httpsUrl(value) {
  if (!value) return '';
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('Public endpoints must use HTTPS without credentials.');
  return url.href;
}
const origin = httpsOrigin(process.env.PUBLIC_SITE_URL ?? generator.productionOrigin);
const email = process.env.PUBLIC_CONTACT_EMAIL || '';
if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) throw new Error('Invalid contact email.');
const phone = (process.env.PUBLIC_WHATSAPP_NUMBER || generator.sharedSupportNumber).replace(/[\s+()-]/g, '');
if (phone && !/^\d{8,15}$/.test(phone)) throw new Error('Invalid international WhatsApp number.');

export const site = {
  name: 'IPTV USA 8K',
  logo: { path: '/brand-icon.png', width: 512, height: 512 },
  origin,
  indexable: process.env.PUBLIC_INDEXABLE === 'true' && Boolean(origin),
  email, phone,
  contactEndpoint: httpsUrl(process.env.PUBLIC_CONTACT_ENDPOINT || ''),
  trialUrl: httpsUrl(process.env.PUBLIC_TRIAL_URL || ''),
  // Maintained content review date; never replace it with the build timestamp.
  updated: '2026-11-01',
  currency: 'USD',
  // Quotes are confirmed by the shared support team; no online checkout.
  commerceMode: 'whatsapp_quote',
  // Do not publish unsupported USD prices or screen entitlements.
  plans: planDurations.map(months => ({ months, usd: null, screens: null })),
  markets: [
    { name: 'IPTV Belgium 8K', region: 'Belgium', url: 'https://iptv-belgique-8k.com' },
    { name: 'IPTV Canada 8K', region: 'Canada', url: 'https://iptv-canada-8k.com' },
    { name: 'Emerald IPTV', region: 'Ireland', url: 'https://emeraldiptv.irish' },
    { name: 'IPTV Ireland Subscription', region: 'Ireland', url: 'https://iptv-ireland-subscription.com' },
    { name: 'IPTV Suomi', region: 'Finland', url: 'https://iptv-suomi-iptv.fi' }
  ]
};
if (process.env.PUBLIC_INDEXABLE === 'true' && !origin) throw new Error('An owned production domain is required before indexing.');
