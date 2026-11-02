import { isVerifiedOwner } from "./access-owner.mjs";

const hostname = "owner.iptv-usa-8k.com";
const audience = "df53cbe31574f293a4e7e04845e7238a064c93ada8773fedf2274aafa488eafc";

const websites = [
  ["Canada", "https://iptv-canada-8k.com/"],
  ["États-Unis", "https://iptv-usa-8k.com/"],
  ["Royaume-Uni", "https://iptv-uk.cloud/"],
  ["Irlande", "https://iptv-ireland-subscription.com/"],
  ["Finlande", "https://iptv-suomi-iptv.fi/"],
  ["Nordic IPTV Elite", "https://www.nordiciptv-elite.com/"],
  ["Emerald IPTV", "https://emeraldiptv.irish/"]
];
const previews = [
  ["Belgique", "https://preview-be.iptv-usa-8k.com/"],
  ["Australie", "https://preview-au.iptv-usa-8k.com/"],
  ["Allemagne", "https://preview-de.iptv-usa-8k.com/"],
  ["Suisse", "https://preview-ch.iptv-usa-8k.com/"]
];
const trialProfiles = [
  ["Canada", "canada", "fr"], ["États-Unis", "usa", "en"], ["Royaume-Uni", "uk", "en"],
  ["Irlande", "ireland-subscription", "en"], ["Finlande", "suomi", "fi"], ["Nordic", "nordic", "en"],
  ["Emerald", "emerald", "en"], ["Belgique", "belgium", "fr"], ["Australie", "australia", "en"],
  ["Allemagne", "germany", "de"], ["Suisse", "switzerland", "fr"]
];
const trialMenu = trialProfiles.map(([name, id, lang]) =>
  [name, "https://control.emeraldiptv.irish/widget?site=" + id + "&amp;lang=" + lang]);
const menu = sites => sites.map(([name, url]) => `<li><a href="${url}">${name}</a></li>`).join("");
const page = `<!doctype html><html lang="fr"><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex,nofollow"><title>Mes sites IPTV</title>
<style>html{font:1.1rem/1.5 system-ui;color:#172435;background:#f4f6f8}main{max-width:52rem;margin:4vh auto;padding:1.25rem}h1{font-size:2.3rem;margin:.35em 0}h2{margin:1.4em 0 .3em}ul{list-style:none;padding:0;display:flex;gap:.65rem;flex-wrap:wrap}a{color:#114a70}li a{display:block;background:#fff;border:1px solid #bbcbd5;border-radius:.5rem;padding:.55rem .95rem;text-decoration:none}a:hover,a:focus-visible{text-decoration:underline}footer{margin-top:2rem}</style><main><h1>Mes sites IPTV</h1><p>Choisis un site pour l’ouvrir. Tu peux garder cette page en favori sur ton téléphone ou ton ordinateur.</p><h2>Sites en production</h2><ul>${menu(websites)}</ul><h2>Aperçus privés</h2><ul>${menu(previews)}</ul><h2>Formulaires d’essai</h2><p>Ouvre le formulaire directement si ton navigateur bloque la connexion dans le cadre intégré du site.</p><ul>${menu(trialMenu)}</ul><footer><a href="/cdn-cgi/access/logout">Se déconnecter</a></footer></main></html>`;
const headers = {
  "Cache-Control": "private, no-store",
  "Content-Security-Policy": "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'",
  "Content-Type": "text/html; charset=utf-8",
  "Referrer-Policy": "no-referrer",
  "X-Content-Type-Options": "nosniff",
  "X-Robots-Tag": "noindex, nofollow"
};
export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.hostname !== hostname || !await isVerifiedOwner(request, audience)) {
      return new Response("Accès réservé au propriétaire.", { status: 403, headers });
    }
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response(null, { status: 405, headers: { ...headers, Allow: "GET, HEAD" } });
    }
    if (url.pathname !== "/") return new Response("Page introuvable.", { status: 404, headers });
    return new Response(request.method === "HEAD" ? null : page, { headers });
  }
};
