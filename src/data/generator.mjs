/** Public storefront integration only. Provider secrets remain on the existing control Worker. */
export const generator = Object.freeze({
  origin: 'https://control.emeraldiptv.irish',
  siteId: 'usa',
  profileName: 'IPTV USA 8K',
  productionOrigin: 'https://iptv-usa-8k.com',
  previewOrigin: 'https://iptv-usa-8k.pages.dev',
  sharedSupportNumber: '212631479723',
  registered: true
});

export function generatorUrl(lang = 'en', override = process.env.PUBLIC_TRIAL_URL || '') {
  if (!['en'].includes(lang)) throw new Error('Unsupported trial language.');
  const url = new URL(override || `${generator.origin}/widget?site=${generator.siteId}`);
  if (url.protocol !== 'https:' || url.username || url.password) throw new Error('The trial generator must use HTTPS without URL credentials.');
  url.searchParams.set('lang', lang);
  return url.href;
}

export function generatorSupportUrl(lang = 'en') {
  if (!['en'].includes(lang)) throw new Error('Unsupported support language.');
  const message = lang === 'fr' ? 'Bonjour, j’ai besoin d’aide pour IPTV USA 8K.' : 'Hi, I need help with IPTV USA 8K.';
  return `https://wa.me/${generator.sharedSupportNumber}?text=${encodeURIComponent(message)}`;
}

// Persist this additive public profile in the existing control Worker's TRIAL_SITES_JSON.
// Keep its existing profile entries and secrets unchanged. Keep the verified production domain first for localized privacy links.
export const usaGeneratorProfile = Object.freeze({
  name: generator.profileName,
  whatsapp: generator.sharedSupportNumber,
  package: '38180',
  origins: [generator.productionOrigin],
  locale: 'en',
  locales: ['en'],
  countryCode: '1',
  phoneExample: '+1 415 555 0123',
  privacyPaths: { en: '/privacy/' },
  accent: '#b52336'
});
