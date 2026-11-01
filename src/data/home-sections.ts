export type HomeSection = { id:string; eyebrow:string; heading:string; intro:string; tone?: "dark"|"soft"; topics:{heading:string;text:string}[]; link:{route:string;label:string}; cta?:string };
const english:HomeSection[] = [
  {
    "id": "us-iptv-channels",
    "eyebrow": "LOCAL NEWS · LIVE TV · YOUR FAVORITES",
    "heading": "IPTV USA channels: build your American TV lineup",
    "intro": "Your subscription should fit an ordinary evening as well as a big weekend. Start with the local news, entertainment and family programs you actually watch. During the trial, check the exact channel feed, guide and playback on your main TV.",
    "topics": [
      {
        "heading": "ABC, CBS, NBC, FOX and PBS: check the exact local feed",
        "text": "A national network name and a local affiliate are different details. Tell support your ZIP code and the station you follow, then confirm its current availability. Open a local bulletin and check the station, time zone and program guide together. These names are examples for your viewing checklist, not a guaranteed channel list."
      },
      {
        "heading": "News, entertainment and a usable TV guide",
        "text": "Choose a few regular programs, save their channels as favorites and reopen your player. Check whether program times match your location and whether descriptions are useful. An electronic program guide should help you decide what to watch without opening every channel."
      },
      {
        "heading": "Catch-up, captions and everyday convenience",
        "text": "If replay matters, test an eligible program from earlier in the day. Catch-up availability can differ by channel and title. Check closed captions, audio sync and remote navigation too: the small controls you use every evening matter as much as the size of a lineup."
      }
    ],
    "link": {
      "route": "channels",
      "label": "Explore US IPTV channels"
    }
  },
  {
    "id": "spanish-iptv-usa",
    "eyebrow": "ENGLISH + ESPAÑOL · ONE HOUSEHOLD",
    "heading": "Spanish IPTV USA: make bilingual viewing part of your plan",
    "intro": "Looking for Latino IPTV in the USA or a mix of English and Spanish TV at home? Build the trial around the programs and language versions your household wants. A translated title alone does not establish the audio available inside it.",
    "topics": [
      {
        "heading": "Univision, Telemundo and your Spanish-language shortlist",
        "text": "Ask about the exact channel, local edition or program you follow. Include Spanish news, novelas, sports commentary and family viewing in the same shortlist. Confirm availability during the trial and note which feed matches your ZIP code and time zone."
      },
      {
        "heading": "Spanish audio, subtitles and search",
        "text": "Open the audio and subtitle menus on several titles. Try a search with accents and check whether the player remembers your chosen language when the next episode starts. If one viewer prefers English captions and another wants Spanish audio, test that combination explicitly."
      },
      {
        "heading": "Two languages without competing for one screen",
        "text": "A living-room game in English and a bedroom series in Spanish can use two simultaneous streams. Count overlapping playback, not installed apps. Compare the requested connection allowance before buying and organize favorites around the way each person watches."
      }
    ],
    "link": {
      "route": "french-tv-usa",
      "label": "Read the Spanish and bilingual viewing guide"
    },
    "tone": "soft"
  },
  {
    "id": "iptv-usa-vod",
    "eyebrow": "MOVIE NIGHT · SERIES · ON DEMAND",
    "heading": "IPTV USA movies and series: build a watchlist you will use",
    "intro": "If your evenings revolve around movies and series, spend part of the trial in the on-demand library. Search for specific titles and seasons, then test playback controls on the device you will use at home. Availability is title-specific and can change.",
    "topics": [
      {
        "heading": "Find the right title, season and language version",
        "text": "A cover image is a starting point. Open the listing and confirm the release, season, episode order and audio options. Search a few favorites from your own watchlist and browse a genre you enjoy. A well-organized selection is more useful than an unverified catalog count."
      },
      {
        "heading": "4K IPTV USA: test source quality on your screen",
        "text": "A 4K display does not turn an HD source into native 4K. Check the source information and compare motion, dark scenes and picture stability using the same player. Choose the setting that works comfortably with your device and home connection."
      },
      {
        "heading": "Resume, subtitles and family controls",
        "text": "Pause a movie, skip forward, switch captions and return later. Resume history and language memory depend on the app and title, so test the actual features you need. Review the player’s parental controls before leaving a shared remote with younger viewers."
      }
    ],
    "link": {
      "route": "vod",
      "label": "Explore IPTV movies and series"
    }
  },
  {
    "id": "iptv-usa-sports",
    "eyebrow": "GAME NIGHT · LIVE ACTION · YOUR FEED",
    "heading": "Sports IPTV USA: prepare your live-game setup",
    "intro": "For a sports household, the useful test is a live event on the screen and network you normally use. Build your checklist around the fixture, channel and commentary—not a generic “all sports” promise. Confirm event availability before planning game night.",
    "topics": [
      {
        "heading": "NFL, NBA, MLB and college sports viewing",
        "text": "Write down the team, event and broadcaster you want to watch. Local and national coverage can differ, and blackout or package restrictions may apply. Test the specific live feed, scoreboard readability, motion and sound. League names describe viewing interests to check; they do not establish included rights."
      },
      {
        "heading": "English or Spanish commentary and the right start time",
        "text": "Check the audio language and whether an alternate commentary track is available. Match kickoff or tipoff to your time zone and confirm the guide entry before the event begins. For a household watching different games, request the right simultaneous-screen allowance."
      },
      {
        "heading": "Peak-time playback and live delay",
        "text": "Use the same TV and internet connection you plan to use on game night. If your device supports Ethernet, compare it with Wi-Fi while the household is online. Live internet video may arrive later than another feed; include that delay and any interruptions in your trial notes."
      }
    ],
    "link": {
      "route": "sports",
      "label": "Explore sports IPTV in the USA"
    },
    "tone": "dark"
  },
  {
    "id": "iptv-vs-cable-usa",
    "eyebrow": "TOTAL COST · YOUR CURRENT TV PACKAGE",
    "heading": "IPTV vs cable in the USA: compare the complete household cost",
    "intro": "A useful comparison keeps your channels, screens and equipment needs the same. Look at the full amount payable and the actual experience you get, rather than comparing one promotional monthly number with a different package.",
    "topics": [
      {
        "heading": "Subscription price and separate app costs",
        "text": "Request the total in USD for the full access period, including disclosed taxes or fees. Check whether a third-party player has a separate license. Include any streaming device or broadband change in your budget before deciding what offers better value."
      },
      {
        "heading": "Local channels, sports and household screens",
        "text": "List the local affiliates and events you would miss from your current package. Test their availability and the permitted simultaneous streams. A cheaper plan that leaves out an essential program or a second active screen is not the same offer."
      },
      {
        "heading": "A month-to-month start or a longer commitment",
        "text": "A short subscription can be a practical first purchase after the trial. Consider a longer term once your setup fits and the renewal and refund terms are clear. An annual total divided by twelve is a monthly equivalent, not necessarily monthly billing."
      }
    ],
    "link": {
      "route": "iptv-vs-cable",
      "label": "Compare IPTV and cable side by side"
    },
    "tone": "soft"
  },
  {
    "id": "iptv-usa-setup",
    "eyebrow": "EXACT MODEL · SUPPORTED PLAYER · FIRST PLAYBACK",
    "heading": "IPTV USA setup: Fire TV, Smart TV, Android and Apple",
    "intro": "Start with the model and operating system of the device you already own. Choose a supported player and the correct account format, then test your main television before setting up other screens. Keep the supplied login details private.",
    "topics": [
      {
        "heading": "Samsung, LG and other Smart TVs",
        "text": "Check the exact model, system version and app store. Player availability and features vary between TV generations. If a supported app is missing or remote navigation is awkward, assess a compatible external device before replacing your television."
      },
      {
        "heading": "Fire TV Stick: Fire OS and Vega OS are different",
        "text": "Do not assume every Fire TV device can use the same app or Android installation method. Amazon lists both Fire OS and Vega OS models. Check the exact model and its supported app store first, then follow the player’s official instructions for that operating system."
      },
      {
        "heading": "Android TV, Apple TV, computers and MAG boxes",
        "text": "Match the app to Android TV, tvOS, iOS, Windows or macOS as appropriate. MAG-style devices may use a portal and hardware address instead. Xtream Codes, M3U playlists and portals are different inputs; use the format supplied for your connection."
      }
    ],
    "link": {
      "route": "devices",
      "label": "Find your device setup"
    }
  },
  {
    "id": "iptv-usa-subscriptions",
    "eyebrow": "BUY IPTV USA · START WITH YOUR HOUSEHOLD",
    "heading": "IPTV USA subscriptions for one viewer or the whole home",
    "intro": "Choose an IPTV subscription around the busiest viewing moment in your household. Decide how many people will watch at once, select a useful duration and test your main device. Then request the complete offer for that setup on WhatsApp.",
    "topics": [
      {
        "heading": "Monthly, seasonal and annual subscription choices",
        "text": "Compare 1, 2, 3, 6, 7, 12 and 24-month requests against your actual plans. A first purchase, a temporary stay and an established home setup can call for different terms. Confirm the access dates, total USD price and renewal method before activation."
      },
      {
        "heading": "Multi-room IPTV and simultaneous streams",
        "text": "A TV, tablet and phone can all have an app installed while only one is playing. Count concurrent streams across live TV and on-demand viewing instead. If family movie night overlaps a live game, request the allowance that covers both."
      },
      {
        "heading": "Your ZIP code, local feed and time zone",
        "text": "Use your real viewing location when asking about regional channels and availability. Check the local affiliate and guide time rather than choosing the first similarly named feed. Your own home-network trial gives a better answer than a blanket nationwide performance claim."
      }
    ],
    "link": {
      "route": "plans",
      "label": "Compare IPTV USA subscription plans"
    }
  },
  {
    "id": "iptv-usa-plan-lengths",
    "eyebrow": "SEVEN DURATIONS · ONE CLEAR REQUEST",
    "heading": "IPTV USA plans: 1 month to 24 months",
    "intro": "Choose a duration that matches how long you expect to use the service. Seven requested lengths give you a practical range without sending you through separate checkout pages. The team confirms the available offer and the complete USD quote for your selection.",
    "topics": [
      {
        "heading": "1, 2 or 3 months for a flexible start",
        "text": "A shorter term can fit a first purchase or a defined period of viewing. Compare access dates and the full price, including a separate app license if needed. Use the trial first so the plan begins with a player and channel selection you understand."
      },
      {
        "heading": "6 or 7 months for a longer stretch",
        "text": "A half-year or seven-month request gives you another way to match access to your calendar. Write down the intended start and end dates. A future event or sports season still needs its own availability check; duration alone does not establish coverage."
      },
      {
        "heading": "12 or 24 months after a useful home test",
        "text": "A longer term is a larger upfront commitment. Ask what happens to renewal, support and connection changes during that period. Compare the total with shorter alternatives for the same screens. Choose based on confirmed fit rather than assuming the longest term is automatically the cheapest."
      }
    ],
    "link": {
      "route": "plans",
      "label": "Choose your IPTV subscription length"
    },
    "tone": "soft"
  },
  {
    "id": "iptv-usa-multiple-devices",
    "eyebrow": "1–6 SCREENS · CUSTOM HOUSEHOLD REQUESTS",
    "heading": "Multi-device IPTV USA: choose your simultaneous screens",
    "intro": "Build your requested plan around active viewing, not the number of devices you own. Select one to six simultaneous screens, or ask about seven or more. The support team confirms the available connection allowance and household terms before purchase.",
    "topics": [
      {
        "heading": "One viewer switching between TV, phone and laptop",
        "text": "One person may use several devices at different times and need only one active stream. Close playback on the previous screen before switching. Ask about the provider’s device rules and whether use outside the main home is permitted."
      },
      {
        "heading": "2 or 3 screens for overlapping games and shows",
        "text": "A game in the living room, a series in the bedroom and a tablet can create two or three active streams. Describe that overlap in your request. When permitted by the trial or agreed test, check the actual combination on your normal network."
      },
      {
        "heading": "4, 5 or 6 screens and custom 7+ setups",
        "text": "For a larger home, list the rooms, devices and players that will run together. Confirm whether separate accounts or app licenses are required. More connections do not repair weak Wi-Fi or grant unlimited sharing; choose the allowance and setup that match your household."
      }
    ],
    "link": {
      "route": "multi-device-iptv-usa",
      "label": "Plan your multi-screen setup"
    }
  },
  {
    "id": "best-iptv-usa",
    "eyebrow": "COMPARE BY WHAT YOU WILL ACTUALLY WATCH",
    "heading": "Best IPTV USA: choose by channels, setup and clear terms",
    "intro": "The best IPTV service for your household should earn its place on your screen. Start with your must-watch programs, test the supported player and compare a written offer. Clear answers to specific questions are more useful than bigger promotional numbers.",
    "topics": [
      {
        "heading": "Use the trial generator to check the essentials",
        "text": "Generate access, note its expiry and test the programs, audio and guide you care about. Try the same TV and viewing time you will use after subscribing. Record the exact channel, app and symptom if something does not work as expected."
      },
      {
        "heading": "Compare support and the full USD quote",
        "text": "Request the same duration and screens from each service you compare. Include any app or hardware costs, renewal details and support arrangements. A short WhatsApp request opens the conversation; the confirmed written quote provides the purchase details."
      },
      {
        "heading": "Buy IPTV in the USA with the offer in writing",
        "text": "Confirm the seller, available content, permitted use, price and activation before paying. Keep the renewal and refund terms with your order details. Once your trial fits, choose the subscription that meets your household’s real needs."
      }
    ],
    "link": {
      "route": "choose-iptv",
      "label": "Read the IPTV USA buying guide"
    },
    "tone": "soft"
  }
];
export const homeSections:Record<"en"|"fr",HomeSection[]> = {en:english,fr:english};
