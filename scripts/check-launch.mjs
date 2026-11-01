import { site } from '../src/data/site.mjs';

const blockers = [];
if (!['whatsapp_quote','checkout'].includes(site.commerceMode)) blockers.push('Declare a supported commerce mode.');
if (!site.origin) blockers.push('Set PUBLIC_SITE_URL to the purchased, connected HTTPS domain.');
if (!site.indexable) blockers.push('Set PUBLIC_INDEXABLE=true only for the verified production domain.');
if (site.origin) {
  const hostname = new URL(site.origin).hostname;
  if (hostname.endsWith('.chatgpt.site') || /(?:^|\.)(?:pages\.dev|workers\.dev|example\.com|example\.org|example\.net|example|invalid|test|localhost)$/.test(hostname) || hostname === '127.0.0.1' || hostname === '[::1]') blockers.push('Use the owned production domain, not a preview or reserved hostname.');
}
if (!site.email && !site.phone && !site.contactEndpoint) blockers.push('Connect a working sales/support contact: verified email, international WhatsApp number or HTTPS form endpoint.');
if (site.commerceMode === 'checkout') for (const plan of site.plans) {
  if (typeof plan.usd !== 'number' || !Number.isFinite(plan.usd) || plan.usd <= 0) blockers.push(`Confirm the ${plan.months}-month total price in USD in src/data/site.mjs.`);
  if (!Number.isInteger(plan.screens) || plan.screens < 1) blockers.push(`Confirm simultaneous screens for the ${plan.months}-month plan in src/data/site.mjs.`);
}
if (blockers.length) {
  console.error('Production configuration is not ready.');
  for (const issue of blockers) console.error(`- ${issue}`);
  process.exitCode = 1;
} else {
  console.log('Technical launch configuration passed for WhatsApp quotes and trial access. Confirm individual prices, screen entitlements and sales terms with the customer before payment.');
}
