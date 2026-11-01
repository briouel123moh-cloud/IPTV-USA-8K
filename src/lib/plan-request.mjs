import { planDurations, screenOptions } from '../data/plan-options.mjs';

export function parsePlanSelection(search = '') {
  const params = new URLSearchParams(search);
  const requestedMonths = params.get('months') || '';
  const requestedScreens = params.get('screens') || '';
  return {
    months: requestedMonths === 'custom' || planDurations.some(n => String(n) === requestedMonths) ? requestedMonths : '',
    screens: requestedScreens === '7+' || screenOptions.some(n => String(n) === requestedScreens) ? requestedScreens : '1'
  };
}

export function planEnquiryUrl(contactPath, months, screens) {
  const selection = parsePlanSelection(new URLSearchParams({ months: String(months), screens: String(screens) }).toString());
  const params = new URLSearchParams({ months: selection.months, screens: selection.screens });
  return `${contactPath}?${params.toString()}#enquiry-form`;
}

function whatsappLink(phone, message) {
  const number = String(phone || '').replace(/[\s+()-]/g, '');
  if (!/^\d{8,15}$/.test(number)) throw new Error('A valid international WhatsApp number is required.');
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

function planWhatsAppMessage(lang, months, screens) {
  if (!['en', 'fr'].includes(lang)) throw new Error('Unsupported plan language.');
  const selected = parsePlanSelection(new URLSearchParams({ months: String(months), screens: String(screens) }).toString());
  const fr = lang === 'fr';
  const duration = selected.months === 'custom'
    ? (fr ? 'durée sur mesure' : 'custom duration')
    : selected.months ? `${selected.months} ${fr ? 'mois' : selected.months === '1' ? 'month' : 'months'}`
    : (fr ? 'durée à confirmer' : 'duration to confirm');
  const screensLabel = fr ? (selected.screens === '1' ? 'écran' : 'écrans') : (selected.screens === '1' ? 'screen' : 'screens');
  return fr
    ? `Bonjour, IPTV USA 8K : ${duration}, ${selected.screens} ${screensLabel}. Prix ?`
    : `Hi, IPTV USA 8K: ${duration}, ${selected.screens} ${screensLabel}. Price?`;
}

export function planWhatsAppUrl(lang, months, screens, phone) {
  return whatsappLink(phone, planWhatsAppMessage(lang, months, screens));
}

export function contactWhatsAppMessage(lang, { name = '', months = '', screens = '1', device = '', message = '' } = {}) {
  const fr = lang === 'fr';
  const lines = [planWhatsAppMessage(lang, months, screens)];
  if (name) lines.push(`${fr ? 'Prénom' : 'Name'}: ${name}`);
  if (device) lines.push(`${fr ? 'Appareil' : 'Device'}: ${device}`);
  if (message) lines.push(message);
  return lines.join('\n');
}

export function supportWhatsAppUrl(lang, phone) {
  if (!['en', 'fr'].includes(lang)) throw new Error('Unsupported support language.');
  return whatsappLink(phone, lang === 'fr'
    ? 'Bonjour, j’ai besoin d’aide pour IPTV USA 8K.'
    : 'Hi, I need help with IPTV USA 8K.');
}
