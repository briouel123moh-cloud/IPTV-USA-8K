export const artwork = {
  "dashboard": {
    "path": "/images/iptv-usa-8k-dashboard.webp",
    "width": 1600,
    "height": 900,
    "en": {
      "title": "IPTV USA 8K | Live TV, sports and movies",
      "description": "American football fills the main screen, with illustrated movie scenes on the right and a city skyline beyond the living room."
    }
  },
  "sports": {
    "path": "/images/iptv-usa-8k-sports.webp",
    "width": 1200,
    "height": 675,
    "en": {
      "title": "IPTV USA 8K | Sports viewing",
      "description": "An American football player runs on the center screen above football, basketball, baseball and soccer categories."
    }
  },
  "cinema": {
    "path": "/images/iptv-usa-8k-cinema.webp",
    "width": 1200,
    "height": 675,
    "en": {
      "title": "IPTV USA 8K | Movies and series",
      "description": "Illustrated posters line a home cinema screen labeled sci-fi, drama, comedy and action."
    }
  }
};

export function imageFor(kind, language = 'en') {
  const item = artwork[kind];
  const text = item[language] || item.en;
  return { path: item.path, width: item.width, height: item.height, title: text.title, alt: text.description };
}
