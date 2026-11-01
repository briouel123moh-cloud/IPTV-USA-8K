export type QuestionLink = { route: string; label: string };
export type IptvQuestion = {
  id: string;
  q: string;
  a: string;
  link: QuestionLink;
  source?: { url: string; label: string };
};
export type QuestionCategory = { id: string; title: string; intro: string; questions: IptvQuestion[] };

const englishQuestions: QuestionCategory[] = [
  {
    id: 'understanding-iptv',
    title: 'Choosing an IPTV service in the USA',
    intro: 'Understand the service, compare your options and start with the viewing that matters to your home.',
    questions: [
      {
        id: 'what-is-iptv',
        q: 'What is IPTV, and how does it work in the USA?',
        a: 'IPTV is television delivered through an internet connection. Your setup usually combines access from a service, a compatible player or device, and your home network. Start with your everyday live channels and on-demand viewing, then test the actual player on your TV.',
        link: { route: 'guides', label: 'Explore the US IPTV guides' }
      },
      {
        id: 'iptv-player-or-subscription',
        q: 'Is an IPTV player the same as an IPTV subscription?',
        a: 'No. The player is the app that opens a supported account, playlist or portal; the subscription provides access under the service’s terms. Check the player cost and subscription cost separately, and confirm which login format your device needs.',
        link: { route: 'devices', label: 'Check your device and player' }
      },
      {
        id: 'iptv-cable-difference',
        q: 'How do I compare IPTV with cable or live TV streaming?',
        a: 'Compare the complete package: your local stations, essential channels, on-demand titles, simultaneous screens, equipment and support. Include internet service and any separate app fees in the total. A useful comparison uses the same household needs and access period for every option.',
        link: { route: 'iptv-vs-cable', label: 'Compare IPTV and cable costs' }
      },
      {
        id: 'iptv-rights-usa',
        q: 'Does the IPTV label tell me whether a service is authorized?',
        a: 'No. IPTV describes the delivery technology, while permission to distribute particular programs is a separate question. Check the operator, content rights and applicable terms before buying; a working trial or familiar channel logo does not establish those rights.',
        link: { route: 'choose-iptv', label: 'Use the provider comparison checklist' },
        source: { url: 'https://www.copyright.gov/what-is-copyright/', label: 'U.S. Copyright Office: copyright and permissions' }
      },
      {
        id: 'best-iptv-usa',
        q: 'What is the best IPTV subscription for my US household?',
        a: 'Start with your must-watch programs, English or Spanish audio, device models and busiest viewing time. Use the trial to test those requirements, then compare the full USD quote, screen allowance and renewal terms. The most useful plan is the one that fits your routine and works on your own setup.',
        link: { route: 'choose-iptv', label: 'Choose an IPTV subscription' }
      },
      {
        id: 'us-local-affiliates',
        q: 'Why do my ZIP code and local TV affiliates matter?',
        a: 'A network name can refer to different local station feeds. Tell support your ZIP code and the exact affiliate you follow, then check the local news, schedule and time zone during your trial. Availability in one US market does not establish the same lineup in another.',
        link: { route: 'channels', label: 'Build your local-channel shortlist' }
      }
    ]
  },
  {
    id: 'plans-prices-screens',
    title: 'IPTV USA plans, USD prices and multiple screens',
    intro: 'Choose your duration and simultaneous screens, then request the full quote before activating a plan.',
    questions: [
      {
        id: 'iptv-usa-price',
        q: 'How much does an IPTV USA subscription cost?',
        a: 'IPTV USA 8K provides a USD quote for your chosen subscription length and screen count. Select a combination on the plans page to prepare a short WhatsApp request. Confirm the complete total, any taxes or fees, and separate player costs before paying.',
        link: { route: 'iptv-cost-usa', label: 'Calculate your full IPTV budget' }
      },
      {
        id: 'subscription-lengths',
        q: 'Which IPTV subscription lengths can I request?',
        a: 'Choose 1, 2, 3, 6, 7, 12 or 24 months. Combine your preferred duration with one to six simultaneous screens, or ask for a custom setup. The team confirms the current offer and activation terms for your request on WhatsApp.',
        link: { route: 'plans', label: 'Compare all subscription lengths' }
      },
      {
        id: 'simultaneous-screens',
        q: 'Does a multi-device plan mean every installed app can play at once?',
        a: 'Count active streams rather than installed apps. One person switching between a TV and tablet has different needs from three people watching different programs together. Request the number of simultaneous screens you need and confirm how live TV and on-demand playback use the allowance.',
        link: { route: 'multi-device-iptv-usa', label: 'Plan your household screen count' }
      },
      {
        id: 'multiple-homes',
        q: 'Can I use my IPTV subscription at a second home or while traveling?',
        a: 'Ask about household, location and device rules before using another address. A plan with several screens does not automatically permit sharing between homes or access outside the United States. Include your intended locations in the request so the team can confirm the applicable terms.',
        link: { route: 'contact', label: 'Ask about your viewing setup' }
      },
      {
        id: 'renew-cancel-refund',
        q: 'What should I confirm about IPTV renewal and refunds?',
        a: 'Get the access dates, renewal method and cancellation or refund conditions in writing before payment. Compare the amount due today with the effective monthly cost, especially for a longer term. Keep the confirmed offer with your order details so you know what happens when access ends.',
        link: { route: 'plans', label: 'Review plan choices before purchase' }
      },
      {
        id: 'payment-methods',
        q: 'Does selecting a plan place an order or take payment?',
        a: 'No. The plan button prepares a WhatsApp message containing your duration and screen choice, and you decide whether to send it. The team provides the available offer, total USD quote and payment instructions before you choose to proceed.',
        link: { route: 'contact', label: 'Request a subscription quote' }
      }
    ]
  },
  {
    id: 'free-trial-activation',
    title: 'IPTV free trials, daily renewal and activation',
    intro: 'Test your device and viewing shortlist before you choose a subscription.',
    questions: [
      {
        id: 'get-free-trial',
        q: 'How do I generate an IPTV USA free trial?',
        a: 'Open the trial generator and choose the connection method for your app, Smart TV or MAG box. Follow the form instructions to request access, then enter the supplied details in a compatible player. Use your usual TV and home internet connection for the test.',
        link: { route: 'trial', label: 'Open the IPTV USA trial generator' }
      },
      {
        id: 'seven-day-trial',
        q: 'How does the seven-day IPTV trial work?',
        a: 'The program uses daily requests: return after 24 hours for another session, up to seven sessions in 30 days across our websites. Each session has its own displayed expiry and requires a new request. It is not a single login that stays active for seven uninterrupted days.',
        link: { route: 'trial', label: 'Read the daily-renewal trial steps' }
      },
      {
        id: 'trial-no-card',
        q: 'Do I need a credit card for the IPTV free trial?',
        a: 'No payment card is required by the trial form. Opening the generator or requesting a trial does not create an automatic paid subscription. Choose a paid plan separately after checking the viewing and setup that matter to you.',
        link: { route: 'trial', label: 'Try your setup without a payment card' }
      },
      {
        id: 'trial-expiry',
        q: 'Where can I check when my trial access expires?',
        a: 'Use the expiry shown with your issued access or in your player’s account information. The expiry belongs to that session and may differ from the time you first open the app. If the account expires or stops loading, check its details before requesting help or a new eligible session.',
        link: { route: 'contact', label: 'Get help with trial access' }
      },
      {
        id: 'trial-personal-information',
        q: 'What information does the trial form ask for?',
        a: 'The generator asks for your name, phone or WhatsApp number, email and connection choice. A MAG request also needs the device information shown in the form. Read the linked privacy information and keep the playback credentials you receive private.',
        link: { route: 'privacy', label: 'Read how trial information is handled' }
      },
      {
        id: 'trial-multiple-screens',
        q: 'Can I test several simultaneous screens during the free trial?',
        a: 'The plan screen selector describes your requested paid subscription, not the trial allowance. Check the connection limit on the issued trial and ask support how to assess a larger household setup. Start with the main TV, then test other devices only within the allowed connections.',
        link: { route: 'multi-device-iptv-usa', label: 'Prepare a multi-screen viewing test' }
      }
    ]
  },
  {
    id: 'devices-installation',
    title: 'Fire TV, Smart TV and IPTV player setup',
    intro: 'Check the exact model, operating system and login format before installing a player.',
    questions: [
      {
        id: 'iptv-firestick',
        q: 'Can I use IPTV on an Amazon Fire TV Stick?',
        a: 'Check your exact Fire TV model and its supported apps first. Amazon’s device table includes both Fire OS and Vega OS models, so a player or installation method for one may not work on the other. Use the official app route for your model and test it with your trial.',
        link: { route: 'devices', label: 'Check Fire TV compatibility' },
        source: { url: 'https://developer.amazon.com/docs/fire-tv/fire-os-overview.html', label: 'Amazon: Fire TV models and operating systems' }
      },
      {
        id: 'iptv-smart-tv',
        q: 'What should I check for IPTV on a Samsung, LG or other Smart TV?',
        a: 'Find the TV’s model, year and operating system, then check the apps offered in its US app store. Confirm that the chosen player supports your account format and remote control. Test the channel guide, sound and subtitles on that television before choosing a longer subscription.',
        link: { route: 'devices', label: 'Find your Smart TV setup' }
      },
      {
        id: 'iptv-apple-android-computer',
        q: 'Can I watch on Android TV, Apple TV, a phone or a computer?',
        a: 'Check player availability for the exact device and operating system. A mobile app listing does not automatically establish support for Android TV or Apple TV. Confirm the login method, any player charge and your subscription’s simultaneous-stream limit before adding another screen.',
        link: { route: 'devices', label: 'Compare supported device requirements' }
      },
      {
        id: 'xtream-m3u-mag',
        q: 'What is the difference between Xtream Codes, M3U and a MAG portal?',
        a: 'These are different ways a player or device receives access details. An Xtream-style login typically uses a server address, username and password; an M3U playlist uses a supplied URL; a MAG-style setup uses the portal and device details specified by the service. Follow the format issued for your connection instead of putting every value into the same field.',
        link: { route: 'iptv-setup-usa', label: 'Match the login format to your device' }
      },
      {
        id: 'iptv-player-cost',
        q: 'Does the IPTV subscription include a paid player app?',
        a: 'Do not assume a third-party player license is included. Check the player’s own pricing, supported devices and renewal conditions separately from the subscription quote. A free download can still offer paid features or a limited evaluation period.',
        link: { route: 'iptv-cost-usa', label: 'Include player costs in your budget' }
      },
      {
        id: 'change-device',
        q: 'How do I move from one device to another?',
        a: 'Confirm that your plan permits the change and that the new device supports the supplied connection format. Stop playback on the first screen, then set up and test the second within your connection allowance. Device-bound or MAG access may require support to update the registration.',
        link: { route: 'iptv-setup-usa', label: 'Prepare your next device setup' }
      }
    ]
  },
  {
    id: 'channels-sports-vod',
    title: 'US local channels, Spanish TV, sports and movies',
    intro: 'Turn a broad channel request into a useful shortlist of exact feeds, programs and languages.',
    questions: [
      {
        id: 'us-channel-list',
        q: 'How do I check local ABC, CBS, NBC, FOX or PBS channels?',
        a: 'Ask for the current lineup and your exact local affiliate, using your ZIP code and station name where possible. Check the local news, program schedule and guide time on your TV during the trial. These network names are examples to verify, not a promise that every affiliate is included.',
        link: { route: 'channels', label: 'Check US channel feeds and local editions' }
      },
      {
        id: 'spanish-latino-channels',
        q: 'Can I look for Spanish or Latino IPTV channels in the USA?',
        a: 'Build a shortlist around the Spanish-language programs and regional editions your household follows. Ask about the exact Univision or Telemundo feed, then check spoken audio, subtitles and guide language separately. A Spanish menu or translated title does not establish a Spanish soundtrack for every program.',
        link: { route: 'french-tv-usa', label: 'Plan English and Spanish household viewing' }
      },
      {
        id: 'us-live-sports',
        q: 'How should I test IPTV for NFL, NBA, MLB or college sports?',
        a: 'Name the exact game, date and broadcast feed you want to watch, including the commentary language. Confirm event availability, any local restrictions and separate package requirements before relying on a general sports label. During the trial, check motion, audio sync and live delay at your usual viewing time.',
        link: { route: 'sports', label: 'Build your live-sports checklist' }
      },
      {
        id: 'movies-series-vod',
        q: 'What should I check in an IPTV movies and series library?',
        a: 'Search for specific titles, seasons and episodes, then test the audio and subtitle options you use. Try pause, resume and episode navigation on your actual player. Catalogs and language versions can change, so confirm your priorities during the trial instead of judging by cover artwork alone.',
        link: { route: 'vod', label: 'Explore movie-night and series checks' }
      },
      {
        id: 'iptv-hd-4k-quality',
        q: 'Does IPTV USA 8K mean every channel is available in 8K?',
        a: 'No. IPTV USA 8K is the brand name; picture quality depends on the actual source, device, player, display and connection. Check the resolution and stability of the programs you watch rather than assuming an HD source becomes native 4K or 8K on a higher-resolution TV.',
        link: { route: 'vod', label: 'Compare picture quality on your screen' }
      },
      {
        id: 'epg-catchup-recording',
        q: 'Are EPG, catch-up TV and recording the same feature?',
        a: 'No. The EPG is the program guide, catch-up provides access to eligible earlier programs, and recording depends on the service and player’s capabilities. Test the feature you need on a specific channel and confirm any storage, replay-window or connection requirements.',
        link: { route: 'channels', label: 'Check the guide and replay features' }
      }
    ]
  },
  {
    id: 'connection-troubleshooting',
    title: 'Playback, buffering and connection help',
    intro: 'Change one thing at a time so you can identify the problem and send support a useful description.',
    questions: [
      {
        id: 'internet-speed',
        q: 'What internet speed do I need for IPTV?',
        a: 'The useful requirement depends on the stream quality and how many screens share the connection. Test sustained playback on the TV itself while your household uses the network normally. A fast speed-test result alone does not establish a stable Wi-Fi signal or uninterrupted delivery of a particular stream.',
        link: { route: 'test-connection', label: 'Test your actual home connection' }
      },
      {
        id: 'wifi-or-ethernet',
        q: 'Should I use Wi-Fi or Ethernet for IPTV?',
        a: 'If your device supports Ethernet, compare it with your usual Wi-Fi using the same program. That can help isolate a wireless problem near the TV. Also check the selected network, router position and device updates before changing several settings together.',
        link: { route: 'test-connection', label: 'Compare Wi-Fi and wired playback' }
      },
      {
        id: 'iptv-buffering',
        q: 'Why does my IPTV buffer or freeze in the evening?',
        a: 'First check whether the issue affects one channel, every channel, one device or other streaming apps. Compare an allowed alternative feed or connection, and change one setting at a time. Send support the device, player, program, approximate time and symptom so the problem can be narrowed down.',
        link: { route: 'iptv-buffering-usa', label: 'Follow the buffering troubleshooting steps' }
      },
      {
        id: 'invalid-login',
        q: 'What should I do if my IPTV login fails or no channels load?',
        a: 'Check the account expiry and the login format your player expects. Recheck the supplied server address, username and password for missing characters or extra spaces, and confirm device registration if relevant. Share the error and device model privately with support; do not post your password or full credential-bearing playlist URL.',
        link: { route: 'contact', label: 'Get help with a login problem' }
      },
      {
        id: 'audio-subtitles-guide-time',
        q: 'Why are the audio, subtitles or TV guide times wrong?',
        a: 'Check the available tracks for that title and the language and time-zone settings in your player. A guide may describe another local feed, while a translated title may still use a different spoken language. Compare another program, then report the exact channel or title and your time zone to support.',
        link: { route: 'french-tv-usa', label: 'Check language and regional settings' }
      },
      {
        id: 'vpn-and-access',
        q: 'Do I need a VPN, and will it fix IPTV buffering?',
        a: 'Do not assume a VPN is required or that it improves playback. It changes the network route and can affect speed, compatibility and the service’s location rules. Test your normal connection first and ask whether a VPN is permitted; it does not remove screen limits or establish content rights.',
        link: { route: 'test-connection', label: 'Check your connection before making changes' }
      }
    ]
  }
];

// The US storefront publishes English. Keep the legacy locale key as a safe
// data fallback for shared components; it does not create a French route.
export const questionCategories: Record<'en' | 'fr', QuestionCategory[]> = {
  en: englishQuestions,
  fr: englishQuestions
};

export function getQuestions(lang: 'en' | 'fr' = 'en'): IptvQuestion[] {
  return questionCategories[lang].flatMap(category => category.questions);
}
