export const routePairs = {
  home:{en:''}, plans:{en:'plans'}, devices:{en:'devices'}, channels:{en:'channels'},
  sports:{en:'sports'}, vod:{en:'movies-series'}, guides:{en:'guides'}, trial:{en:'free-trial'},
  contact:{en:'contact'}, faq:{en:'faq'}, about:{en:'about'}, privacy:{en:'privacy'}, terms:{en:'terms'},
  'choose-iptv':{en:'guides/choose-iptv'}, 'test-connection':{en:'guides/test-connection'},
  'iptv-vs-cable':{en:'guides/iptv-vs-cable'}, 'iptv-cost-usa':{en:'guides/iptv-cost-usa'},
  'iptv-setup-usa':{en:'guides/iptv-setup-usa'}, 'iptv-buffering-usa':{en:'guides/iptv-buffering-usa'},
  'multi-device-iptv-usa':{en:'multi-device-iptv'}, 'french-tv-usa':{en:'spanish-iptv-usa'}
};
export function href(id,lang='en') {
  if(!routePairs[id])throw new Error(`Unknown route: ${id}`);
  if(lang!=='en')throw new Error('This USA site currently supports English.');
  const slug=routePairs[id].en;
  return slug?`/${slug}/`:'/';
}
export const routes=Object.entries(routePairs).map(([id,pair])=>({id,lang:'en',path:href(id),slug:pair.en}));
