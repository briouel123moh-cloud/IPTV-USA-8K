export type CatalogId="channels"|"sports"|"vod";
export type CatalogLocale="en"|"fr";
type TopicSection={heading:string;paragraphs:string[];bullets?:string[]};
export type CatalogPage={title:string;description:string;heading:string;intro:string;eyebrow:string;highlights:string[];sections:TopicSection[];table:{heading:string;caption:string;columns:string[];rows:string[][]};faq:{q:string;a:string}[];related:{id:string;label:string}[];ctaHeading:string;ctaBody:string};
const english:Record<CatalogId,CatalogPage> = {
  "channels": {
    "title": "IPTV USA Channels | Local TV, English & Spanish",
    "description": "Build your IPTV USA channel checklist around local affiliates, English and Spanish TV, EPG and captions. Test the actual lineup before subscribing.",
    "heading": "IPTV USA channels: find your everyday TV.",
    "intro": "Local news before work. Your favorite show after dinner. A weekend game with the household. Start with the channels and programs you would actually miss, then use the trial to check the current lineup on your own screen.",
    "eyebrow": "US CHANNELS · LOCAL AFFILIATES · EPG",
    "highlights": [
      "Local-feed checklist",
      "English & Spanish viewing",
      "Guide and caption checks"
    ],
    "sections": [
      {
        "heading": "US local channels: ABC, CBS, NBC, FOX and PBS",
        "paragraphs": [
          "A network name alone does not identify your local station. Make a shortlist using your ZIP code, the affiliate or station you follow and the programs you need. For local news, confirm the market and station branding while a bulletin is playing. For national programming, check the exact channel and time zone rather than accepting a similar name in the guide.",
          "ABC, CBS, NBC, FOX and PBS are examples for that checklist, not a published IPTV USA 8K channel lineup. Ask about the actual available feed and confirm it during the trial. The answer can differ by program, location and current distribution arrangements."
        ]
      },
      {
        "heading": "English and Spanish TV for the same household",
        "paragraphs": [
          "Build a second list for the languages used at home. If Univision or Telemundo is part of your routine, ask for the precise channel, local edition and show. For movies and series, verify spoken audio separately from subtitles and the language of the menu.",
          "Test a search with a Spanish title or accent and open the audio settings on a few programs. Check whether the player remembers a preferred track and whether another person can find their favorites easily. Two people watching different programs at once may require two simultaneous connections."
        ]
      },
      {
        "heading": "An EPG that matches your location and viewing time",
        "paragraphs": [
          "The electronic program guide should show useful titles, descriptions and times. Set your actual time zone in the player, open a live channel and compare what is playing with the guide entry. A feed from another time zone can look plausible while following a different schedule.",
          "Save several favorites, restart the player and see whether your list remains easy to use. Check captions and alternate audio where available. If catch-up is important, play an eligible earlier program; an icon does not establish that every channel can be replayed."
        ],
        "bullets": [
          "Check the station and current program together.",
          "Compare guide times with your local clock.",
          "Test captions, audio sync and remote navigation."
        ]
      },
      {
        "heading": "Use your trial to make a channel shortlist",
        "paragraphs": [
          "Begin on the television and home connection you normally use. Open one channel from each priority category, switch between them and watch long enough to assess sound and motion. Repeat the essentials during your usual evening viewing time rather than testing only a quiet morning.",
          "Keep a short note of missing programs or incorrect feeds. Support can act on an exact station, title, app and time more easily than “the channels do not work.” Keep passwords and credential-bearing playlist links out of public screenshots."
        ]
      },
      {
        "heading": "Choose your plan after checking the lineup",
        "paragraphs": [
          "Compare the trial result with your intended duration and active screens. The subscription selector covers 1–24-month requests and one to six simultaneous screens, plus custom household enquiries. The team confirms the available configuration and USD quote before activation.",
          "Confirm the seller, content availability, permitted location and purchase terms alongside the channel results. A trial is evidence of playback at that time; it does not establish future event coverage or distribution rights. Keep the confirmed offer with your order details."
        ]
      }
    ],
    "table": {
      "heading": "Your US channel checklist",
      "caption": "Examples to ask about and verify; not a guaranteed channel lineup.",
      "columns": [
        "Viewing priority",
        "Details to request",
        "What to test"
      ],
      "rows": [
        [
          "Local broadcast TV",
          "ABC, CBS, NBC, FOX or PBS affiliate and ZIP code",
          "Station identity, local bulletin and time zone"
        ],
        [
          "Spanish-language TV",
          "Univision, Telemundo or your preferred program",
          "Exact feed, audio language and captions"
        ],
        [
          "News and entertainment",
          "Your regular channel and weekly show",
          "Live playback, EPG title and remote navigation"
        ],
        [
          "Family and on-demand viewing",
          "Specific title, season and language",
          "Episode order, parental controls and resume"
        ]
      ]
    },
    "faq": [
      {
        "q": "Is there one channel list for every US location?",
        "a": "Do not assume so. Ask about your ZIP code, local affiliate and must-watch programs, then verify the actual lineup during the trial. Regional and program availability can differ."
      },
      {
        "q": "Can I keep the same favorites on every device?",
        "a": "That depends on the player and its sync features. Test your TV and phone separately; some favorites stay on one device."
      }
    ],
    "related": [
      {
        "id": "french-tv-usa",
        "label": "Spanish and bilingual viewing"
      },
      {
        "id": "devices",
        "label": "Choose your IPTV device setup"
      },
      {
        "id": "sports",
        "label": "Plan your live sports test"
      }
    ],
    "ctaHeading": "Your channels. Your screen. Try it first.",
    "ctaBody": "Open the generator, check your essential feeds and guide, then compare the subscription that fits your household."
  },
  "sports": {
    "title": "Sports IPTV USA | Live-Game Setup & Trial Checklist",
    "description": "Plan your sports IPTV USA trial around the exact event, channel, commentary and device. Check motion, guide times and simultaneous screens before buying.",
    "heading": "Sports IPTV USA: get your game-night setup right.",
    "intro": "The event you want. The commentary you prefer. A screen that keeps up with the action. Build your trial around your real sports routine, then choose a plan for the number of people watching at once.",
    "eyebrow": "LIVE ACTION · YOUR EVENT · YOUR SCREEN",
    "highlights": [
      "Exact-event checklist",
      "Motion and audio checks",
      "Multi-screen planning"
    ],
    "sections": [
      {
        "heading": "NFL, NBA, MLB and college sports: ask about the exact event",
        "paragraphs": [
          "Write down the team, fixture, date and broadcast you want. Local, national and streaming coverage are different packages, and availability can depend on location. A channel name or league logo does not answer whether a particular game is included.",
          "Use NFL football, NBA basketball, MLB baseball or college sports as the start of a precise question. Confirm the actual feed and any package or blackout restriction before planning the evening. League and broadcaster references here describe viewing interests; they are not a statement of included coverage."
        ]
      },
      {
        "heading": "English or Spanish commentary and the correct time zone",
        "paragraphs": [
          "If ESPN, FOX Sports or a Spanish-language feed is part of your shortlist, ask about the event and channel version together. Commentary can differ between feeds, and an alternate audio track may not be available. Open the intended version during the trial where possible.",
          "Set your player to your real time zone, then compare the guide entry with the event start time. Check whether a listing represents pre-game coverage, the live fixture or a replay. A useful favorites list gets you to the correct feed quickly."
        ]
      },
      {
        "heading": "Test motion, sound and live delay on your actual TV",
        "paragraphs": [
          "Watch a moving camera shot, a readable scoreboard and a passage of commentary. Check whether audio stays aligned with the picture. Compare a suitable HD or 4K source on your own screen rather than choosing by an advertised resolution label alone.",
          "Internet video can arrive later than a different broadcast feed. Evaluate delay alongside picture stability and your own viewing needs. If a source repeatedly freezes, note the event, channel, player, device and approximate time so support can investigate a specific example."
        ]
      },
      {
        "heading": "Two games, one household: plan your simultaneous streams",
        "paragraphs": [
          "A game in the living room and a different match on a bedroom TV create two active streams. Add another person watching a movie and the requirement can become three. Count the busiest overlapping moment instead of the number of installed apps.",
          "Select one to six requested screens on the plans page, or send a custom enquiry for seven or more. Confirm whether live TV and on-demand viewing share the allowance and which household rules apply. Trial connection limits may differ from the paid configuration."
        ]
      },
      {
        "heading": "Peak-time network checks before a big game",
        "paragraphs": [
          "Use the same screen and connection you will use later, with the household online as normal. If your device supports it, compare Ethernet with Wi-Fi using the same feed. Change one setting at a time so you can tell what helped.",
          "Confirm the event again before it starts and keep the support route handy. A longer subscription does not repair a weak wireless signal or guarantee a future fixture. Choose the duration after the home test and the specific offer both fit."
        ]
      }
    ],
    "table": {
      "heading": "Your sports trial checklist",
      "caption": "Check the actual event and source; availability is confirmed separately.",
      "columns": [
        "Before the event",
        "During the test",
        "What to record"
      ],
      "rows": [
        [
          "Fixture, channel and location",
          "Correct live feed or scheduled coverage",
          "Team, event, date and channel"
        ],
        [
          "Preferred commentary",
          "Audio track, captions and sync",
          "Language and any audio issue"
        ],
        [
          "Your normal TV and player",
          "Motion, scoreboard and stability",
          "Device, app and source quality"
        ],
        [
          "Concurrent household viewing",
          "Agreed screen allowance and network",
          "Streams active at the same time"
        ]
      ]
    },
    "faq": [
      {
        "q": "Does sports IPTV include every game or pay-per-view event?",
        "a": "Do not assume that. Ask about the exact event, location, package and any extra charge. Confirm current availability before paying or planning a viewing night."
      },
      {
        "q": "Will more connections make a live game stop buffering?",
        "a": "More connections increase the agreed simultaneous-stream allowance; they do not fix a source, device or Wi-Fi problem. Test the cause before changing your plan."
      }
    ],
    "related": [
      {
        "id": "test-connection",
        "label": "Test your home connection"
      },
      {
        "id": "multi-device-iptv-usa",
        "label": "Plan simultaneous screens"
      },
      {
        "id": "channels",
        "label": "Check US channels and guide"
      }
    ],
    "ctaHeading": "Start with your screen before game night.",
    "ctaBody": "Use the trial to assess your player and playback, then request the duration and screens your household needs."
  },
  "vod": {
    "title": "IPTV USA Movies & Series | VOD, 4K & Language Checks",
    "description": "Explore IPTV USA movies and series with a practical VOD trial. Check titles, seasons, English or Spanish audio, subtitles and playback on your own TV.",
    "heading": "IPTV USA movies and series: make room for movie night.",
    "intro": "From a favorite series to a film you have been meaning to watch, on-demand viewing should be simple to find and comfortable to use. Try your own watchlist, languages and playback controls before choosing a subscription.",
    "eyebrow": "MOVIES · SERIES · YOUR NEXT NIGHT IN",
    "highlights": [
      "Title and season checks",
      "English & Spanish options",
      "HD and 4K source testing"
    ],
    "sections": [
      {
        "heading": "Start with a real watchlist, not a catalog count",
        "paragraphs": [
          "Choose a few specific films, series and seasons you want to watch. Search by title, open the details and confirm the version. A familiar poster does not establish that every season, episode or language track is available.",
          "Explore a genre you enjoy as well as your exact shortlist. Check whether episodes are ordered clearly and whether the app distinguishes trailers, extras and the main title. The useful result is a selection that fits your household, not the biggest advertised number."
        ]
      },
      {
        "heading": "English and Spanish audio, subtitles and captions",
        "paragraphs": [
          "Open the audio and subtitle menus inside several titles. A Spanish title in the library can still have a different soundtrack, and a dubbed version can differ from one with subtitles. Check the combination you actually prefer.",
          "Try an accented search and a full episode, then move to the next episode. See whether the player retains your chosen language. If viewers have different accessibility or language needs, include those needs in your trial notes before requesting a plan."
        ]
      },
      {
        "heading": "4K IPTV movies: source, player, display and connection",
        "paragraphs": [
          "Picture quality depends on the entire playback path. A source must be available at the desired resolution, your player and device must support it, and your display and connection must handle it. A 4K TV alone cannot add detail missing from an HD source.",
          "Test a suitable title on your own TV. Look at dark scenes, motion, sound and interruptions, then compare the quality setting that works best. IPTV USA 8K is the brand name; it does not mean every stream is 8K."
        ]
      },
      {
        "heading": "Resume playback and the controls you use every evening",
        "paragraphs": [
          "Pause, seek forward, return to the start and reopen a title after leaving the app. Check whether progress is remembered and whether a series continues to the correct episode. Features can depend on the player rather than the subscription alone.",
          "For a shared TV, review the player’s parental controls and how favorites or profiles behave. Test remote navigation from the sofa and note any awkward controls before committing to that app. A small interface issue can matter more after a month of everyday use."
        ]
      },
      {
        "heading": "Choose a VOD setup for one screen or several",
        "paragraphs": [
          "A movie in the living room and a series in another room can use separate simultaneous streams. Confirm how VOD and live channels count toward your allowance and whether app licenses are separate on each device.",
          "Once the trial fits, choose a requested duration and one to six screens. The team confirms the available offer and full USD quote on WhatsApp. Keep the current content and renewal terms with your order; on-demand availability can change."
        ]
      }
    ],
    "table": {
      "heading": "Your VOD trial checklist",
      "caption": "Check a few titles you actually plan to watch.",
      "columns": [
        "What matters",
        "Where to check",
        "A useful result"
      ],
      "rows": [
        [
          "The correct movie or series",
          "Title details and season list",
          "Right release, season and episode order"
        ],
        [
          "Language and accessibility",
          "Audio and subtitle menus",
          "Usable English/Spanish track and captions"
        ],
        [
          "Picture and playback",
          "A full scene on your actual TV",
          "Stable source quality and synchronized audio"
        ],
        [
          "Daily controls",
          "Pause, seek, resume and profiles",
          "An interface the household can use easily"
        ]
      ]
    },
    "faq": [
      {
        "q": "Are all movies and series available in Spanish?",
        "a": "No blanket language guarantee applies. Check the audio and subtitle menu for the exact title, season and version you want during the trial."
      },
      {
        "q": "Does an 8K brand name guarantee an 8K source?",
        "a": "No. The source, supported player and device, display and connection determine playback quality. Test the actual title rather than relying on a brand or poster."
      }
    ],
    "related": [
      {
        "id": "french-tv-usa",
        "label": "Spanish and bilingual viewing"
      },
      {
        "id": "devices",
        "label": "Match your player and device"
      },
      {
        "id": "plans",
        "label": "Compare IPTV subscription options"
      }
    ],
    "ctaHeading": "Try your watchlist on your own screen.",
    "ctaBody": "Open the trial generator, check your titles and language options, and find the subscription that fits your evenings."
  }
};
export const catalog:Record<CatalogId,Record<CatalogLocale,CatalogPage>> = {channels:{en:english.channels,fr:english.channels},sports:{en:english.sports,fr:english.sports},vod:{en:english.vod,fr:english.vod}};
