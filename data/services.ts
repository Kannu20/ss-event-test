/* ─────────────────────────────────────────────
   Artist Shubham Khandelwal — Services Data Model
   Single source of truth for the entire /services module.
   Every category and sub-service page is generated from this tree.
   ───────────────────────────────────────────── */

export interface ServiceFeature {
  /** Emoji shown on the card */
  icon: string
  title: string
  description: string
}

export interface ServiceReason {
  /** Lucide icon key — mapped in ServiceWhyChoose */
  icon: string
  title: string
  description: string
}

export interface ServiceFlowStep {
  step: string
  title: string
  description: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export type MediaType = 'image' | 'video'

export interface MediaItem {
  /** Auto-detected media kind. Defaults to image when omitted. */
  type?: MediaType
  src: string
  alt: string
  /** Poster image for videos (shown in the grid + as the lightbox fallback). */
  poster?: string
}

export interface ServiceSEO {
  title: string
  description: string
  keywords: string[]
  ogImage?: string
}

export interface ServiceNode {
  /** URL segment for this node */
  slug: string
  /** Parent category slug — present only on sub-services */
  parentSlug?: string
  /** Parent category display title — used in breadcrumbs of sub-services */
  categoryTitle?: string
  /** Full display title (H1) */
  title: string
  /** Short label used in navigation menus */
  navLabel: string
  /** Eyebrow tag above the hero title */
  tag: string
  /** Emoji used in navigation + category cards */
  icon: string
  /** One-line hero subtitle */
  subtitle: string
  /** Hero + intro background image */
  heroImage: string
  intro: {
    label: string
    heading: string
    highlight: string
    paragraphs: string[]
  }
  features: {
    heading: string
    highlight: string
    items: ServiceFeature[]
  }
  reasons: {
    heading: string
    highlight: string
    items: ServiceReason[]
  }
  flow: {
    heading: string
    highlight: string
    steps: ServiceFlowStep[]
  }
  gallery: {
    heading: string
    highlight: string
    media: MediaItem[]
  }
  faqs: ServiceFAQ[]
  cta: {
    title: string
    subtitle: string
  }
  seo: ServiceSEO
  /** Sub-service pages nested under a category */
  children?: ServiceNode[]
}

/* ─────────────────────────────────────────────
   Shared flow templates keep tone consistent while
   each page still overrides copy to stay unique.
   ───────────────────────────────────────────── */

const WEDDING_CHILDREN: ServiceNode[] = [
  /* ── Haldi ─────────────────────────────── */
  {
    slug: 'haldi',
    parentSlug: 'wedding-events',
    categoryTitle: 'Wedding Events',
    title: 'Haldi Ceremony Hosting',
    navLabel: 'Haldi',
    tag: 'Wedding Hosting',
    icon: '💛',
    subtitle:
      'A sun-soaked morning of turmeric, folk songs and family mischief — hosted with the light, playful energy a haldi deserves.',
    heroImage: '/images/haldi4.jpeg',
    intro: {
      label: 'Your Haldi Host',
      heading: 'Turmeric, Laughter and',
      highlight: 'Folk-Song Energy',
      paragraphs: [
        'The haldi is the warm-up that sets the mood for the whole wedding — informal, colourful and full of family teasing. Shubham hosts it exactly that way: barefoot energy, folk sing-alongs and gentle games that pull cousins, chachas and grandparents into the fun instead of leaving them watching from the sides.',
        'He keeps the ceremony moving between rituals so there is never an awkward lull while the next batch of haldi is prepared — cueing the dhol, starting a Rajasthani folk number, or running a quick game so every guest feels part of the morning rather than a bystander.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Haldi',
      items: [
        { icon: '🎶', title: 'Folk Sing-Alongs', description: 'Traditional haldi and mangal geet led live, so the elders sing along and the whole courtyard joins in.' },
        { icon: '🥁', title: 'Dhol & Music Cues', description: 'Perfectly timed dhol and playlist cues that lift the energy every time a new relative applies the haldi.' },
        { icon: '🎨', title: 'Playful Family Games', description: 'Light, quick games between rituals — turmeric dares and couple teasers that get everyone laughing.' },
        { icon: '📸', title: 'Candid Moment Building', description: 'Shubham engineers the fun moments your photographer loves — smears, chases and joyful chaos on cue.' },
        { icon: '👨‍👩‍👧', title: 'Elder Involvement', description: 'Grandparents and aunts gently drawn in with dedicated moments so no generation feels left out.' },
        { icon: '☀️', title: 'Relaxed Daytime Flow', description: 'A gentle run-of-show that respects the ritual pace while keeping the courtyard buzzing.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Haldi',
      items: [
        { icon: 'smile', title: 'Reads the Room', description: 'A haldi is intimate — Shubham keeps the energy warm and familial, never loud or forced like a stage show.' },
        { icon: 'music', title: 'Sings Live', description: 'When the folk song deserves a real voice, Shubham puts down the mic-script and sings it himself.' },
        { icon: 'users', title: 'Includes Everyone', description: 'Shy relatives and restless kids alike get pulled into the celebration so the whole family participates.' },
        { icon: 'languages', title: 'Hindi & Rajasthani', description: 'Hosting in the languages your elders love, so the rituals feel rooted and authentic.' },
      ],
    },
    flow: {
      heading: 'How Your Haldi',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Welcome & Vibe Set', description: 'Shubham greets the families, starts the music soft, and eases everyone into the morning.' },
        { step: '02', title: 'Ritual Anchoring', description: 'Each round of haldi is announced and cued so relatives know when it is their moment.' },
        { step: '03', title: 'Songs & Games', description: 'Folk sing-alongs and quick family games fill the gaps and keep the courtyard alive.' },
        { step: '04', title: 'Grand Finale Smear', description: 'The playful, photo-perfect crescendo before the couple is walked off for their bath ritual.' },
      ],
    },
    gallery: {
      heading: 'Haldi',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/haldi3.jpeg', alt: 'Haldi ceremony hosted by Shubham Khandelwal' },
        { type: 'image', src: '/images/haldi4.jpeg', alt: 'Turmeric ceremony with folk songs' },
        { type: 'video', src: '/videos/haldi.mov', alt: 'Haldi celebration film', poster: '/images/haldi5.jpeg' },
        { type: 'image', src: '/images/haldi1.jpeg', alt: 'Family applying haldi to the couple' },
        { type: 'image', src: '/images/haldi2.jpeg', alt: 'Joyful haldi morning moments' },
        { type: 'image', src: '/images/haldi.jpeg', alt: 'Haldi ritual close up' },
      ],
    },
    faqs: [
      { question: 'How is haldi hosting different from a sangeet?', answer: 'A haldi is intimate and daytime — the hosting is lighter and more familial. Shubham keeps it playful with folk songs and small games rather than a high-energy stage performance, so it never feels like a formal show.' },
      { question: 'Will you sing the traditional haldi folk songs?', answer: 'Yes. Shubham sings mangal geet and Rajasthani folk numbers live, and encourages the elders to join in — it is one of the most loved parts of the morning.' },
      { question: 'Can you host the haldi in Rajasthani?', answer: 'Absolutely. Shubham hosts fluently in Hindi, Rajasthani and English, and tailors the language to the families present.' },
      { question: 'How long do you host the haldi for?', answer: 'Typically two to three hours covering the full ritual, songs and games. Timings are confirmed once he understands your run-of-show.' },
    ],
    cta: {
      title: "Make Your Haldi a Morning to Remember",
      subtitle: 'Book Shubham to host your haldi with folk songs, family games and effortless warmth.',
    },
    seo: {
      title: 'Haldi Ceremony Host & Anchor — Shubham Khandelwal',
      description: 'Playful haldi ceremony hosting with live folk songs, family games and warm daytime energy. Book Jaipur wedding anchor Shubham Khandelwal for your haldi.',
      keywords: ['haldi ceremony host', 'haldi anchor Jaipur', 'wedding haldi hosting', 'folk song singer haldi', 'haldi function anchor Rajasthan'],
      ogImage: '/images/haldi4.jpeg',
    },
  },
  /* ── Mehendi ───────────────────────────── */
  {
    slug: 'mehendi',
    parentSlug: 'wedding-events',
    categoryTitle: 'Wedding Events',
    title: 'Mehendi Function Hosting',
    navLabel: 'Mehendi',
    tag: 'Wedding Hosting',
    icon: '🌿',
    subtitle:
      'Music, banter and interactive games while the henna dries — a mehendi that stays lively from the first cone to the last dance.',
    heroImage: '/images/mehandi3.jpeg',
    intro: {
      label: 'Your Mehendi Host',
      heading: 'Keeping the Mehendi',
      highlight: 'Alive & Buzzing',
      paragraphs: [
        'A mehendi can drag — guests sit for hours while henna dries and the bride is stuck in one chair. Shubham fixes that. He turns the function into a living celebration with music sets, kitty-style games, dance-offs between the two sides and just enough friendly chaos to keep every guest entertained.',
        'He builds the flow around the bride so she stays the centre of attention even while her hands are busy, weaving in dedications, sing-alongs and surprise moments that make the afternoon feel like a party rather than a waiting room.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Mehendi',
      items: [
        { icon: '💃', title: 'Family Dance-Offs', description: 'Scripted friendly face-offs between the bride and groom sides that get everyone off their seats.' },
        { icon: '🎲', title: 'Interactive Games', description: 'Couple quizzes, antakshari and kitty games designed for a seated, henna-drying crowd.' },
        { icon: '🎤', title: 'Live Singing Sets', description: 'Romantic and peppy numbers performed live between games to keep the energy fresh.' },
        { icon: '👰', title: 'Bride-Centred Flow', description: 'The whole afternoon orbits the bride, with moments planned around her even while her hands are busy.' },
        { icon: '🎶', title: 'Curated Music', description: 'A tailored playlist and dhol cues that match the mehendi mood — soft, then building to a dance set.' },
        { icon: '🎁', title: 'Surprise Segments', description: 'Coordinated surprises from friends and family, cued so they land at exactly the right moment.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Mehendi',
      items: [
        { icon: 'sparkles', title: 'Kills the Dead Time', description: 'No more guests staring at their phones — Shubham keeps the room engaged for the whole function.' },
        { icon: 'music', title: 'Host + Performer', description: 'He hosts and sings, so you get both an anchor and live entertainment in one booking.' },
        { icon: 'heart', title: 'Bride Stays the Star', description: 'Every segment is built so the bride enjoys her own function instead of managing it.' },
        { icon: 'users', title: 'Both Families Bond', description: 'Games and dance-offs designed to break the ice between the two sides early in the wedding.' },
      ],
    },
    flow: {
      heading: 'How Your Mehendi',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Soft Open', description: 'Guests settle, henna begins, and Shubham eases in with music and light banter.' },
        { step: '02', title: 'Games & Interaction', description: 'Couple quizzes and family games keep the seated crowd laughing and involved.' },
        { step: '03', title: 'Dance-Off Build', description: 'The two sides go head to head as the energy climbs toward the dance floor.' },
        { step: '04', title: 'Open Floor Finale', description: 'Live singing and a full dance set close the function on a high.' },
      ],
    },
    gallery: {
      heading: 'Mehendi',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/mehandi.jpeg', alt: 'Mehendi function hosted by Shubham Khandelwal' },
        { type: 'image', src: '/images/mehandi3.jpeg', alt: 'Bride at her mehendi ceremony' },
        { type: 'video', src: '/videos/mehandi.mp4', alt: 'Mehendi celebration film', poster: '/images/mehandi4.jpeg' },
        { type: 'image', src: '/images/mehandi1.jpeg', alt: 'Mehendi artists at work' },
        { type: 'image', src: '/images/mehandi5.jpeg', alt: 'Mehendi function guests' },
        { type: 'image', src: '/images/mehandi2.jpeg', alt: 'Intricate mehendi design' },
      ],
    },
    faqs: [
      { question: 'How do you keep guests engaged when the henna is drying?', answer: 'That is exactly what Shubham specialises in. He runs seated-friendly games, antakshari, dance-offs and live singing so the room stays lively while the mehendi is applied.' },
      { question: 'Can you plan surprises from friends and family?', answer: 'Yes. Shubham coordinates and cues surprise performances or messages in advance so they land smoothly during the function.' },
      { question: 'Will the bride have to move around a lot?', answer: 'No. The flow is built around the bride so she stays comfortable and central while the celebration comes to her.' },
      { question: 'Do you provide the music or work with our DJ?', answer: 'Either. Shubham can curate the playlist and cues himself or coordinate closely with your DJ so every segment is perfectly timed.' },
    ],
    cta: {
      title: 'Turn Your Mehendi Into a Party',
      subtitle: 'Book Shubham to host your mehendi with games, live singing and non-stop energy.',
    },
    seo: {
      title: 'Mehendi Function Host & Anchor — Shubham Khandelwal',
      description: 'Lively mehendi function hosting with interactive games, dance-offs and live singing. Book Jaipur wedding anchor Shubham Khandelwal for your mehendi.',
      keywords: ['mehendi function host', 'mehendi anchor Jaipur', 'mehndi ceremony hosting', 'wedding mehendi games', 'mehendi entertainment Rajasthan'],
      ogImage: '/images/mehandi3.jpeg',
    },
  },
  /* ── Sangeet ───────────────────────────── */
  {
    slug: 'sangeet',
    parentSlug: 'wedding-events',
    categoryTitle: 'Wedding Events',
    title: 'Sangeet Night Anchoring',
    navLabel: 'Sangeet',
    tag: 'Wedding Hosting',
    icon: '🎶',
    subtitle:
      'The headline night of the wedding — performances, family face-offs and live singing, anchored so the energy never drops.',
    heroImage: '/images/sangeet.jpeg',
    intro: {
      label: 'Your Sangeet Host',
      heading: 'The Night the Whole Family',
      highlight: 'Takes the Floor',
      paragraphs: [
        'The sangeet is the show of the wedding, and it lives or dies on its host. Shubham anchors it like a stage production — introducing each performance with build-up, running the bride-side versus groom-side face-offs, and keeping the transitions so tight that the energy never sags between acts.',
        'With ten years on the mic and a singer\'s instinct for a crowd, he knows exactly when to slow down for an emotional dedication and when to detonate the dance floor. Every cue, name and performance order is scripted in advance so the night flows like it was rehearsed for weeks.',
      ],
    },
    features: {
      heading: "What Shubham Brings to Your",
      highlight: 'Sangeet',
      items: [
        { icon: '🎭', title: 'Performance Emceeing', description: 'Every family act introduced with build-up and cued to music so nothing feels amateur or unrehearsed.' },
        { icon: '⚔️', title: 'Bride vs Groom Face-Offs', description: 'Scripted dance and game battles between the two sides that turn guests into a roaring audience.' },
        { icon: '🎤', title: 'Live Singing', description: 'Shubham performs live sets — romantic numbers and floor-fillers — woven between the acts.' },
        { icon: '📜', title: 'Run-of-Show Scripting', description: 'A rehearsed order of performances, names and cues so the evening never stalls.' },
        { icon: '🕺', title: 'Dance Floor Management', description: 'He reads the room and opens the floor at the exact right moment to peak the energy.' },
        { icon: '🎉', title: 'Crowd Interaction', description: 'Games and audience moments that keep even the non-dancers involved all night.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Sangeet',
      items: [
        { icon: 'flame', title: 'Owns the Energy', description: 'Ten years of stage craft mean the momentum is deliberate, not left to chance — the night peaks on cue.' },
        { icon: 'mic', title: 'Anchor + Singer', description: 'A host who performs live vocals gives your sangeet a headline act built into the emceeing.' },
        { icon: 'pen', title: 'Fully Scripted', description: 'Performance order, names and cues rehearsed in advance so families never scramble mid-show.' },
        { icon: 'users', title: 'Both Sides United', description: 'The face-off format bonds the two families through friendly competition and shared laughter.' },
      ],
    },
    flow: {
      heading: 'How Your Sangeet',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Grand Opening', description: 'A high-impact welcome and couple entrance that sets the tone for the night.' },
        { step: '02', title: 'Family Performances', description: 'Each act introduced and cued, with Shubham building anticipation between them.' },
        { step: '03', title: 'Face-Off & Live Set', description: 'Bride vs groom battles and a live singing set push the energy to its peak.' },
        { step: '04', title: 'Open Dance Floor', description: 'The floor opens and the celebration runs full throttle to the finish.' },
      ],
    },
    gallery: {
      heading: 'Sangeet',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/sangeet.jpeg', alt: 'Sangeet night anchored by Shubham Khandelwal' },
        { type: 'image', src: '/images/sangeet1.jpeg', alt: 'Sangeet performance on stage' },
        { type: 'video', src: '/videos/sangeet.mp4', alt: 'Sangeet night highlights', poster: '/images/sangeet2.jpeg' },
        { type: 'image', src: '/images/sangeet3.jpeg', alt: 'Family dance at the sangeet' },
        { type: 'image', src: '/images/sangeet4.jpeg', alt: 'Sangeet celebration energy' },
      ],
    },
    faqs: [
      { question: 'Do you script and rehearse the family performances?', answer: 'Yes. Shubham collects the performance order and details in advance, scripts the introductions and cues, and can guide rehearsals so every act lands cleanly on the night.' },
      { question: 'Can you also sing during the sangeet?', answer: 'Absolutely — live singing is one of Shubham\'s signatures. He weaves performed sets between the acts to keep the energy fresh.' },
      { question: 'How do you handle the bride-side vs groom-side games?', answer: 'He runs structured, friendly face-offs with clear rules and scoring so the competition is fun, inclusive and never chaotic.' },
      { question: 'What if some performers get nervous or forget cues?', answer: 'Shubham manages the stage in real time — covering gaps, cueing music and settling nerves so the audience never notices a hiccup.' },
    ],
    cta: {
      title: 'Give Your Sangeet a Headline Host',
      subtitle: 'Book Shubham to anchor and perform at your sangeet night.',
    },
    seo: {
      title: 'Sangeet Night Anchor & Singer — Shubham Khandelwal',
      description: 'High-energy sangeet anchoring with performance emceeing, family face-offs and live singing. Book Jaipur sangeet anchor Shubham Khandelwal.',
      keywords: ['sangeet anchor Jaipur', 'sangeet night host', 'sangeet emcee Rajasthan', 'live stage performer sangeet', 'wedding sangeet anchoring'],
      ogImage: '/images/sangeet3.jpeg',
    },
  },
  /* ── Varmala ───────────────────────────── */
  {
    slug: 'varmala',
    parentSlug: 'wedding-events',
    categoryTitle: 'Wedding Events',
    title: 'Varmala & Jaimala Compering',
    navLabel: 'Varmala',
    tag: 'Wedding Hosting',
    icon: '🌸',
    subtitle:
      'The moment two families become one — built into a cinematic, goosebump-inducing highlight with the right words, music and timing.',
    heroImage: '/images/varmala.jpeg',
    intro: {
      label: 'Your Varmala Host',
      heading: 'The Entrance That Deserves',
      highlight: 'a Standing Ovation',
      paragraphs: [
        'The varmala is the single most photographed moment of the wedding, and too often it is rushed or lost in the noise. Shubham gives it the drama it deserves — a scripted build-up, the couple\'s story told in a few perfect lines, and music cued to the exact second the garlands rise.',
        'From the couple\'s grand entrance to the playful lift-them-up tussle between the two sides, he choreographs the energy so the crowd is roaring and the cameras catch a moment that feels straight out of a film.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Varmala',
      items: [
        { icon: '✨', title: 'Cinematic Build-Up', description: 'A scripted introduction that raises anticipation before the couple even appears.' },
        { icon: '🎼', title: 'Music-Cued Entrances', description: 'Entry songs and garland-moment music timed to the second for maximum impact.' },
        { icon: '💞', title: 'Couple Story Narration', description: 'A few beautifully written lines about the couple that make the moment personal and emotional.' },
        { icon: '🤝', title: 'Two-Sides Fun', description: 'The playful lift-and-dodge tussle managed so it is joyful and safe, not chaotic.' },
        { icon: '📷', title: 'Photo-Perfect Timing', description: 'Every beat paced so photographers and videographers capture the peak moment.' },
        { icon: '🎊', title: 'Crowd Crescendo', description: 'The audience cued to cheer at exactly the right instant the garlands are exchanged.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Varmala',
      items: [
        { icon: 'star', title: 'Turns It Into a Highlight', description: 'The varmala goes from a rushed formality to the emotional centrepiece of the wedding film.' },
        { icon: 'pen', title: 'Personal Scripting', description: 'The couple\'s real story is woven in, so the words mean something rather than sounding generic.' },
        { icon: 'clock', title: 'Impeccable Timing', description: 'Music, entrance and crowd all hit their mark together for a genuinely cinematic effect.' },
        { icon: 'camera', title: 'Camera-Aware', description: 'Shubham paces the moment for the cameras so nothing crucial is missed or cut short.' },
      ],
    },
    flow: {
      heading: 'How Your Varmala',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Anticipation Build', description: 'Shubham sets the scene and hushes the crowd as the entrance approaches.' },
        { step: '02', title: 'Grand Entrances', description: 'Bride and groom make their entrances to cued music and narrated build-up.' },
        { step: '03', title: 'The Garland Moment', description: 'The playful tussle and garland exchange, paced perfectly for the cameras.' },
        { step: '04', title: 'Celebration Peak', description: 'The crowd erupts on cue as the couple is united on stage.' },
      ],
    },
    gallery: {
      heading: 'Varmala',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/varmala.jpeg', alt: 'Varmala ceremony compered by Shubham Khandelwal' },
        { type: 'image', src: '/images/varmala2.jpeg', alt: 'Jaimala garland exchange moment' },
        { type: 'video', src: '/videos/vid2.mp4', alt: 'Varmala highlight film', poster: '/images/varmala3.jpeg' },
        { type: 'image', src: '/images/varmala4.jpeg', alt: 'Couple on stage during varmala' },
        { type: 'image', src: '/images/sangeet1.jpeg', alt: 'Grand wedding stage entrance' },
        { type: 'image', src: '/images/varmala5.jpeg', alt: 'Shubham Khandelwal hosting on stage' },
      ],
    },
    faqs: [
      { question: 'How do you make the varmala feel cinematic?', answer: 'Shubham scripts a build-up, narrates the couple\'s story in a few lines, and cues the entrance and garland music to the exact moment — so the whole sequence feels choreographed and film-worthy.' },
      { question: 'Will you personalise the narration to our story?', answer: 'Yes. He gathers details about how you met and your journey, then writes a short, tasteful narration that makes the moment uniquely yours.' },
      { question: 'Can you coordinate with our photographer and DJ?', answer: 'Definitely. Shubham briefs the photo-video team and DJ in advance so lighting, music and camera angles all peak together.' },
      { question: 'Do you manage the lift-the-couple tradition?', answer: 'Yes — he keeps the playful tussle fun and safe, guiding both sides so it stays joyful and photogenic rather than getting out of hand.' },
    ],
    cta: {
      title: 'Make Your Varmala Unforgettable',
      subtitle: 'Book Shubham to comper your varmala into the highlight of your wedding film.',
    },
    seo: {
      title: 'Varmala & Jaimala Compere — Shubham Khandelwal',
      description: 'Cinematic varmala and jaimala compering with scripted build-up, cued music and couple narration. Book Jaipur wedding anchor Shubham Khandelwal.',
      keywords: ['varmala compere', 'jaimala host Jaipur', 'varmala anchor', 'wedding entrance host', 'garland ceremony emcee Rajasthan'],
      ogImage: '/images/varmala.jpeg',
    },
  },
  /* ── Baraat On Wheels ──────────────────── */
  {
    slug: 'baraat-on-wheels',
    parentSlug: 'wedding-events',
    categoryTitle: 'Wedding Events',
    title: 'Baraat On Wheels Hosting',
    navLabel: 'Baraat On Wheels',
    tag: 'Wedding Hosting',
    icon: '🚗',
    subtitle:
      'A moving, dancing procession that never loses its beat — the baraat hosted and hyped from the first step to the venue gates.',
    heroImage: '/images/baraatonwheel.jpeg',
    intro: {
      label: 'Your Baraat Host',
      heading: 'A Procession That Stays',
      highlight: 'On Fire the Whole Way',
      paragraphs: [
        'A baraat is pure adrenaline — but it can lose steam when the dhol tires or the crowd spreads out. Shubham keeps the procession pumping from start to finish, riding the energy with the band, hyping the groom\'s side, and turning the whole street into a moving dance floor.',
        'The "on wheels" format adds a whole production — the groom\'s grand mobile entry, synchronised music, and a host who keeps the momentum and the safety in check so the baraat arrives at the venue at its absolute peak, not out of breath.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Baraat',
      items: [
        { icon: '🥁', title: 'Band & Dhol Sync', description: 'Live coordination with the band and dhol so the beat never drops across the procession.' },
        { icon: '🕺', title: 'Non-Stop Hype', description: 'Shubham works the crowd on the move, keeping every relative dancing the whole way.' },
        { icon: '🚗', title: 'Grand Mobile Entry', description: 'The groom\'s show-stopping entrance on wheels, choreographed for maximum impact.' },
        { icon: '🎆', title: 'Effects Cueing', description: 'Cold pyros, confetti and lighting cues timed to the music\'s biggest moments.' },
        { icon: '🛡️', title: 'Crowd & Flow Control', description: 'He keeps the procession together and moving safely so it never scatters or stalls.' },
        { icon: '🎤', title: 'Live Energy Calls', description: 'On-mic hype and chants that turn the street into one roaring celebration.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Baraat',
      items: [
        { icon: 'flame', title: 'Never Loses Steam', description: 'The energy is actively managed so the baraat arrives at its peak instead of fizzling out.' },
        { icon: 'car', title: 'Owns the Production', description: 'The mobile entry, effects and music are choreographed like a show, not left to improvisation.' },
        { icon: 'shield', title: 'Keeps It Safe', description: 'Shubham watches crowd flow and pacing so the fun never tips into chaos on a live road.' },
        { icon: 'users', title: 'Everyone Dances', description: 'He pulls in relatives of every age so the whole baraat moves as one.' },
      ],
    },
    flow: {
      heading: 'How Your Baraat',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Assembly & Warm-Up', description: 'Shubham gathers the baraatis, syncs with the band, and gets the first beats going.' },
        { step: '02', title: 'Grand Groom Entry', description: 'The groom\'s mobile entrance lands with cued music and effects.' },
        { step: '03', title: 'Procession Peak', description: 'Non-stop hype keeps the crowd dancing the entire route.' },
        { step: '04', title: 'Venue Arrival', description: 'The baraat reaches the gates at full energy for the milni welcome.' },
      ],
    },
    gallery: {
      heading: 'Baraat',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/baraatonwheel.jpeg', alt: 'Baraat on wheels hosted by Shubham Khandelwal' },
        { type: 'image', src: '/images/baraatonwheel2.jpeg', alt: 'Groom procession on wheels' },
        { type: 'video', src: '/videos/baraatonwheel.mp4', alt: 'Baraat procession film', poster: '/images/baraatonwheel.jpeg' },
        { type: 'image', src: '/images/sangeet4.jpeg', alt: 'Dancing baraat energy' },
        { type: 'image', src: '/images/banner.jpeg', alt: 'Wedding celebration procession' },
        { type: 'image', src: '/images/bow1.jpeg', alt: 'Shubham Khandelwal hyping the crowd' },
      ],
    },
    faqs: [
      { question: 'What exactly is a "baraat on wheels"?', answer: 'It is a baraat built around a grand mobile entry for the groom with synchronised music, effects and hosting — a full production on the move rather than a simple walking procession.' },
      { question: 'How do you keep the energy up across the whole route?', answer: 'Shubham actively works the crowd on the move, coordinates the band and dhol, and cues effects at the right moments so momentum is managed, not left to chance.' },
      { question: 'Do you coordinate the effects and music?', answer: 'Yes. He cues cold pyros, confetti and lighting with the band and DJ so the biggest beats hit with the biggest visuals.' },
      { question: 'Is it safe with traffic and crowds?', answer: 'Safety is part of the job — Shubham manages crowd flow and pacing throughout so the celebration stays fun and controlled on a live road.' },
    ],
    cta: {
      title: 'Give Your Baraat a Show-Stopping Host',
      subtitle: 'Book Shubham to host your baraat on wheels and keep the energy peaking to the gates.',
    },
    seo: {
      title: 'Baraat On Wheels Host & Anchor — Shubham Khandelwal',
      description: 'High-energy baraat on wheels hosting with grand groom entries, band sync and effects cueing. Book Jaipur wedding anchor Shubham Khandelwal.',
      keywords: ['baraat on wheels', 'baraat host Jaipur', 'groom entry host', 'wedding procession anchor', 'baraat hype man Rajasthan'],
      ogImage: '/images/baraatonwheel.jpeg',
    },
  },
]

const PARTIES_CHILDREN: ServiceNode[] = [
  /* ── Birthday Parties ──────────────────── */
  {
    slug: 'birthday-parties',
    parentSlug: 'parties',
    categoryTitle: 'Parties',
    title: 'Birthday Party Hosting',
    navLabel: 'Birthday Parties',
    tag: 'Party Hosting',
    icon: '🎂',
    subtitle:
      'From milestone birthdays to surprise bashes — hosted like a show with games, roasts and live singing tailored to the star of the day.',
    heroImage: '/images/birthday1.jpeg',
    intro: {
      label: 'Your Birthday Host',
      heading: 'A Birthday That Feels',
      highlight: 'Like a Show',
      paragraphs: [
        'A birthday should not run itself. Whether it is a first birthday, a milestone 50th or a surprise bash, Shubham hosts it like a proper event — themed games, a personal roast, cake-moment build-up and live singing that makes the guest of honour feel like a star.',
        'He tailors every segment to the person: their in-jokes, their favourite music, the friends who should get a moment on the mic. The host family relaxes and enjoys the party while Shubham keeps the room laughing and moving from the welcome to the last slice of cake.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Birthday',
      items: [
        { icon: '🎮', title: 'Themed Games', description: 'Games built around the guest of honour and the crowd — for kids, adults or a mixed party.' },
        { icon: '🎤', title: 'Personal Roast', description: 'A warm, funny roast full of inside jokes that has the whole room in stitches.' },
        { icon: '🎂', title: 'Cake-Moment Build-Up', description: 'The cake cutting turned into a proper highlight with music, countdown and crowd energy.' },
        { icon: '🎵', title: 'Live Singing', description: 'A live song for the birthday star and crowd favourites that get everyone singing along.' },
        { icon: '🎁', title: 'Surprise Coordination', description: 'Planned surprises and messages cued to land at exactly the right emotional beat.' },
        { icon: '📸', title: 'Candid Fun', description: 'Shubham engineers the moments that make the best photos and reels of the night.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Birthday',
      items: [
        { icon: 'gift', title: 'Makes One Person the Star', description: 'Every segment is built around the guest of honour so the birthday feels genuinely personal.' },
        { icon: 'smile', title: 'Reads Any Crowd', description: 'Kids\' party, family gathering or a rowdy friends\' night — he adapts the tone perfectly.' },
        { icon: 'music', title: 'Sings Live', description: 'A live performance the birthday star never expects turns the party into a memory.' },
        { icon: 'heart', title: 'Hosts Relax', description: 'The family enjoys the party instead of running around managing it.' },
      ],
    },
    flow: {
      heading: 'How Your Birthday',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Warm Welcome', description: 'Guests settle in, music sets the mood, and Shubham gets the room comfortable.' },
        { step: '02', title: 'Games & Roast', description: 'Themed games and a personal roast get everyone laughing and involved.' },
        { step: '03', title: 'Cake & Live Song', description: 'The cake-cutting highlight with a live performance for the birthday star.' },
        { step: '04', title: 'Open Floor', description: 'Dance, music and celebration to close the night on a high.' },
      ],
    },
    gallery: {
      heading: 'Birthday',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/birthday1.jpeg', alt: 'Birthday party hosted by Shubham Khandelwal' },
        { type: 'image', src: '/images/birthday2.jpeg', alt: 'Birthday celebration games' },
        { type: 'video', src: '/videos/birthday.mp4', alt: 'Birthday party film', poster: '/images/birthday1.jpeg' },
        { type: 'image', src: '/images/banner.jpeg', alt: 'Party crowd energy' },
        { type: 'image', src: '/images/birthday3.jpeg', alt: 'Celebration cake moment' },
      ],
    },
    faqs: [
      { question: 'Do you host kids\' birthdays as well as adult ones?', answer: 'Yes. Shubham adapts the games, tone and pacing to the crowd — playful and high-energy for kids, or witty and interactive for an adult celebration.' },
      { question: 'Can you plan a surprise party?', answer: 'Absolutely. He coordinates the reveal, the timing and the guests in advance so the surprise lands perfectly.' },
      { question: 'Will you personalise the roast and games?', answer: 'Yes — Shubham gathers stories and in-jokes beforehand so the roast and segments feel genuinely personal, never generic.' },
      { question: 'Do you sing at the party?', answer: 'He does. A live song for the birthday star is one of the most loved moments of the evening.' },
    ],
    cta: {
      title: 'Give the Birthday Star a Real Show',
      subtitle: 'Book Shubham to host your birthday party with games, roasts and live singing.',
    },
    seo: {
      title: 'Birthday Party Host & Anchor — Shubham Khandelwal',
      description: 'Birthday party hosting with themed games, personal roasts, cake-moment build-up and live singing. Book Jaipur event host Shubham Khandelwal.',
      keywords: ['birthday party host Jaipur', 'birthday anchor', 'party emcee', 'surprise party host', 'birthday entertainer Rajasthan'],
      ogImage: '/images/birthday.jpeg',
    },
  },
  /* ── Anniversary Celebration ───────────── */
  {
    slug: 'anniversary-celebration',
    parentSlug: 'parties',
    categoryTitle: 'Parties',
    title: 'Anniversary Celebration Hosting',
    navLabel: 'Anniversary Celebration',
    tag: 'Party Hosting',
    icon: '💐',
    subtitle:
      'A heartfelt evening honouring a journey together — hosted with warmth, nostalgia and live music that celebrates the couple.',
    heroImage: '/images/anniversary.jpeg',
    intro: {
      label: 'Your Anniversary Host',
      heading: 'Celebrating a Love That',
      highlight: 'Has Stood the Test of Time',
      paragraphs: [
        'An anniversary — especially a 25th or 50th — deserves more than a dinner. Shubham hosts it as a tribute: the couple\'s story retold, family messages woven in, a nostalgic music set, and moments that let children and grandchildren honour the two people at the centre of it all.',
        'He balances emotion and fun beautifully — a tear-jerking narration one moment, a playful "how well do you know each other" game the next — so the evening feels heartfelt without ever getting heavy, and the couple feels genuinely celebrated.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Anniversary',
      items: [
        { icon: '💞', title: 'Couple\'s Journey', description: 'Their story narrated warmly, turning the evening into a heartfelt tribute.' },
        { icon: '👨‍👩‍👧‍👦', title: 'Family Tributes', description: 'Children and grandchildren cued to share messages and moments on the mic.' },
        { icon: '🎵', title: 'Nostalgic Live Set', description: 'The couple\'s favourite songs performed live to bring back the memories.' },
        { icon: '🎲', title: 'Couple Games', description: 'Light, fun games that celebrate the couple and get the family laughing together.' },
        { icon: '🥂', title: 'Toast Moments', description: 'Beautifully cued toasts and felicitations that honour the milestone.' },
        { icon: '📷', title: 'Memory Highlights', description: 'Photo and video montage moments introduced and paced for full emotional effect.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Anniversary',
      items: [
        { icon: 'heart', title: 'Balances Emotion & Fun', description: 'He moves the room from tears to laughter with a rare, natural sense of timing.' },
        { icon: 'music', title: 'Live Nostalgia', description: 'Performing the couple\'s favourite songs live makes the tribute deeply personal.' },
        { icon: 'users', title: 'Involves the Family', description: 'Every generation gets a meaningful moment to honour the couple.' },
        { icon: 'star', title: 'Honours the Milestone', description: 'The evening is built to make the couple feel truly celebrated, not just gathered.' },
      ],
    },
    flow: {
      heading: 'How Your Anniversary',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Warm Welcome', description: 'Guests gather as Shubham sets a warm, celebratory tone for the couple.' },
        { step: '02', title: 'Journey & Tributes', description: 'The couple\'s story and family messages turn the evening into a tribute.' },
        { step: '03', title: 'Live Music & Games', description: 'A nostalgic live set and couple games balance heart with fun.' },
        { step: '04', title: 'Toast & Celebration', description: 'Toasts, cake and an open floor close the night in celebration.' },
      ],
    },
    gallery: {
      heading: 'Anniversary',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/anniversary1.jpeg', alt: 'Anniversary celebration hosted by Shubham Khandelwal' },
        { type: 'video', src: '/videos/anniversary.mp4', alt: 'Anniversary celebration film', poster: '/images/anniversary1.jpeg' },
        { type: 'image', src: '/images/anniversary2.jpeg', alt: 'Couple anniversary tribute' },
        

        
      ],
    },
    faqs: [
      { question: 'How do you make an anniversary feel special rather than just a dinner?', answer: 'Shubham builds the evening as a tribute — narrating the couple\'s journey, weaving in family messages, performing their favourite songs and cueing meaningful moments so the couple feels genuinely celebrated.' },
      { question: 'Can family members be part of the programme?', answer: 'Yes. He plans and cues moments for children and grandchildren to share tributes so every generation is involved.' },
      { question: 'Do you perform the couple\'s favourite songs live?', answer: 'He does. A live nostalgic set built around the couple\'s music is one of the most moving parts of the evening.' },
      { question: 'Is it suitable for a 25th or 50th anniversary?', answer: 'Perfectly. Milestone anniversaries are exactly where this heartfelt, tribute-style hosting has the most impact.' },
    ],
    cta: {
      title: 'Honour Your Journey Together',
      subtitle: 'Book Shubham to host your anniversary celebration with warmth and live music.',
    },
    seo: {
      title: 'Anniversary Celebration Host — Shubham Khandelwal',
      description: 'Heartfelt anniversary celebration hosting with couple tributes, family moments and live nostalgic music. Book Jaipur event host Shubham Khandelwal.',
      keywords: ['anniversary host Jaipur', 'anniversary celebration anchor', '25th anniversary emcee', '50th anniversary host', 'anniversary party entertainment'],
      ogImage: '/images/anniversary1.jpeg',
    },
  },
  {
    slug: 'pool-party',
    parentSlug: 'parties',
    categoryTitle: 'Parties',
    title: 'Pool Party Hosting',
    navLabel: 'Pool Party',
    tag: 'Party Hosting',
    icon: '🏊',
    subtitle:
      'Sun, splashes and non-stop music — a poolside party hosted with the games, energy and live sets that keep the whole crowd in the water and on the dance floor.',
    heroImage: '/images/pool.jpeg',
    intro: {
      label: 'Your Pool Party Host',
      heading: 'The Sunniest Party',
      highlight: 'You Will Throw All Year',
      paragraphs: [
        'A pool party lives or dies on its energy. Left to run itself, guests drift into corners and the vibe flattens by mid-afternoon. Shubham keeps the whole party moving — poolside games, splash challenges, a live music set and just enough friendly chaos to keep everyone in the water and coming back for more.',
        'He reads a relaxed daytime crowd perfectly, balancing high-energy moments with chill-out stretches so the party breathes. From themed welcome to the golden-hour finale, the hosts get to cool off and enjoy their own party while Shubham runs the show on the mic.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Pool Party',
      items: [
        { icon: '🏊', title: 'Poolside Games', description: 'Splash challenges, floating races and water games designed to pull every guest into the fun.' },
        { icon: '🎶', title: 'Live Music Sets', description: 'Feel-good live singing and curated poolside tracks that keep the energy sunny all day.' },
        { icon: '🕶️', title: 'Themed Hosting', description: 'Tropical, neon or all-white — hosting tuned to your pool party theme and dress code.' },
        { icon: '🍹', title: 'Vibe Management', description: 'Shubham reads the crowd, dialling energy up for games and down for chill-out sets.' },
        { icon: '🌞', title: 'Daytime Flow', description: 'A relaxed run-of-show that keeps a long, sunny afternoon moving without ever dragging.' },
        { icon: '📸', title: 'Reel-Worthy Moments', description: 'Fun moments engineered for the photos and reels your guests will actually post.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Pool Party',
      items: [
        { icon: 'flame', title: 'Keeps Energy High', description: 'A relaxed daytime crowd needs active hosting — Shubham makes sure the party never flattens.' },
        { icon: 'music', title: 'Host Plus Performer', description: 'Live singing means built-in entertainment, not just an announcer with a playlist.' },
        { icon: 'smile', title: 'Reads a Chill Crowd', description: 'He balances splashy games with easy chill-out moments so the vibe feels effortless.' },
        { icon: 'heart', title: 'Hosts Relax Too', description: 'You get to cool off and enjoy your own pool party while Shubham runs everything.' },
      ],
    },
    flow: {
      heading: 'How Your Pool Party',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Themed Welcome', description: 'Guests arrive to music and a warm welcome that sets the sunny tone.' },
        { step: '02', title: 'Games and Splashes', description: 'Poolside and in-water games get everyone involved and laughing.' },
        { step: '03', title: 'Live Set', description: 'A live singing set lifts the afternoon into a full-blown party.' },
        { step: '04', title: 'Golden-Hour Finale', description: 'The energy peaks into the evening for a perfect poolside close.' },
      ],
    },
    gallery: {
      heading: 'Pool Party',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/pool.jpeg', alt: 'Poolside party hosted by Shubham Khandelwal' },
        { type: 'video', src: '/videos/poolparty.mp4', alt: 'Pool party highlight film', poster: '/images/pool2.jpeg' },
        { type: 'image', src: '/images/pool1.jpeg', alt: 'Guests enjoying the pool party' },
        { type: 'image', src: '/images/pool2.jpeg', alt: 'Pool party games and fun' },
      ],
    },
    faqs: [
      { question: 'What makes a hosted pool party better than a DJ-only one?', answer: 'A DJ plays music; Shubham runs the whole experience — poolside games, live singing, crowd interaction and pacing — so the energy is actively managed and the party never flattens through the afternoon.' },
      { question: 'Can you host to a specific pool party theme?', answer: 'Yes. Tropical, neon, all-white or anything else — the hosting, music and games are tuned to your theme and dress code.' },
      { question: 'Do you run in-water and poolside games?', answer: 'Absolutely. Splash challenges, floating races and poolside games are designed to pull every guest in safely, whether they want to swim or stay dry.' },
      { question: 'Is it suitable for a mixed-age crowd?', answer: 'Yes. Shubham balances high-energy games with relaxed chill-out sets so kids, friends and older family members all enjoy the day.' },
    ],
    cta: {
      title: 'Throw the Pool Party of the Summer',
      subtitle: 'Book Shubham to host your pool party with games, live music and non-stop energy.',
    },
    seo: {
      title: 'Pool Party Host & Anchor — Shubham Khandelwal',
      description: 'High-energy pool party hosting with poolside games, live singing and themed entertainment. Book Jaipur event host Shubham Khandelwal for your pool party.',
      keywords: ['pool party host Jaipur', 'pool party anchor', 'poolside party emcee', 'summer party host', 'pool party entertainer Rajasthan'],
      ogImage: '/images/pool.jpeg',
    },
  },
]

const SHOWS_CHILDREN: ServiceNode[] = [
  /* ── Fashion Shows ─────────────────────── */
  {
    slug: 'fashion-shows',
    parentSlug: 'shows',
    categoryTitle: 'Shows',
    title: 'Fashion Show Hosting',
    navLabel: 'Fashion Shows',
    tag: 'Show Hosting',
    icon: '👗',
    subtitle:
      'Ramp-side command and runway-ready energy — a host who keeps a fashion show sharp, sequenced and buzzing between every walk.',
    heroImage: '/images/event.jpeg',
    intro: {
      label: 'Your Fashion Show Host',
      heading: 'The Voice That Owns',
      highlight: 'the Ramp',
      paragraphs: [
        'A fashion show runs on precision and energy, and the host holds both. Shubham introduces designers and sequences, keeps the audience engaged during set changes, and delivers the polished, on-trend commentary that makes a runway feel like a proper production rather than a series of walks.',
        'He works hand in glove with the choreographer and backstage team — cueing music, covering delays smoothly and hyping the showstopper walk — so the show stays tight, glamorous and on schedule from the opening sequence to the finale.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Fashion Show',
      items: [
        { icon: '🎙️', title: 'Designer Introductions', description: 'Polished, on-brand introductions for each designer, collection and sequence.' },
        { icon: '🎵', title: 'Music & Walk Cues', description: 'Tight coordination with the choreographer so music and walks land in sync.' },
        { icon: '⏱️', title: 'Backstage Cover', description: 'Smooth, engaging fills during set and outfit changes so momentum never drops.' },
        { icon: '🌟', title: 'Showstopper Hype', description: 'Build-up for the finale and showstopper walk that gets the room on its feet.' },
        { icon: '🎤', title: 'Sponsor & Brand Mentions', description: 'Sponsor call-outs and brand moments delivered naturally without breaking the flow.' },
        { icon: '🕶️', title: 'On-Trend Commentary', description: 'Sharp, contemporary compering that matches the tone of a premium runway.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Fashion Show',
      items: [
        { icon: 'zap', title: 'Keeps It Tight', description: 'Delays and set changes are covered so smoothly the audience never feels a gap.' },
        { icon: 'star', title: 'Premium Tone', description: 'His compering matches the glamour of a high-end runway — polished, never cheesy.' },
        { icon: 'clock', title: 'Runs On Schedule', description: 'Working with the choreographer, he keeps the sequence and timing locked in.' },
        { icon: 'mic', title: 'Commands Attention', description: 'The room stays focused on the ramp because the host holds the energy between walks.' },
      ],
    },
    flow: {
      heading: 'How Your Fashion Show',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Opening Sequence', description: 'Shubham sets the tone and introduces the show, sponsors and theme.' },
        { step: '02', title: 'Designer Walks', description: 'Each collection introduced and cued in sync with the choreography.' },
        { step: '03', title: 'Set-Change Fills', description: 'Engaging fills keep the audience with the show during transitions.' },
        { step: '04', title: 'Showstopper Finale', description: 'A high-energy build-up to the finale and showstopper walk.' },
      ],
    },
    gallery: {
      heading: 'Fashion Show',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/event.jpeg', alt: 'Fashion show hosted by Shubham Khandelwal' },
        { type: 'image', src: '/images/entertainment.jpeg', alt: 'Stage show hosting' },
        { type: 'video', src: '/videos/vid7.mp4', alt: 'Fashion show highlight film', poster: '/images/banner.jpeg' },
        { type: 'image', src: '/images/dark.jpeg', alt: 'Premium show lighting' },
        { type: 'image', src: '/images/main.jpeg', alt: 'Runway event compering' },
        { type: 'image', src: '/images/cele3.jpeg', alt: 'Show audience energy' },
      ],
    },
    faqs: [
      { question: 'Have you hosted runway and fashion events?', answer: 'Yes. Shubham hosts fashion shows with designer introductions, sponsor mentions and choreographer-synced cueing, keeping the production sharp and premium throughout.' },
      { question: 'How do you handle backstage delays?', answer: 'He covers set and outfit changes with engaging, on-brand fills so the audience stays with the show and never notices a gap.' },
      { question: 'Can you coordinate with our choreographer and music team?', answer: 'Absolutely — that coordination is central to a good fashion show. He locks cues with the choreographer and sound team in rehearsal.' },
      { question: 'Do you deliver sponsor and brand mentions?', answer: 'Yes, naturally woven into the compering so sponsors are honoured without interrupting the flow of the show.' },
    ],
    cta: {
      title: 'Give Your Runway a Commanding Host',
      subtitle: 'Book Shubham to host your fashion show with premium, perfectly-cued compering.',
    },
    seo: {
      title: 'Fashion Show Host & Compere — Shubham Khandelwal',
      description: 'Premium fashion show hosting with designer introductions, choreographer-synced cues and showstopper build-ups. Book Jaipur show host Shubham Khandelwal.',
      keywords: ['fashion show host Jaipur', 'runway compere', 'fashion show emcee', 'ramp show anchor', 'fashion event host Rajasthan'],
      ogImage: '/images/event.jpeg',
    },
  },
  /* ── Live Shows ────────────────────────── */
  {
    slug: 'live-shows',
    parentSlug: 'shows',
    categoryTitle: 'Shows',
    title: 'Live Show Hosting',
    navLabel: 'Live Shows',
    tag: 'Show Hosting',
    icon: '🎤',
    subtitle:
      'Concerts, cultural nights and stage productions — anchored and performed by a host who is also a live stage performer.',
    heroImage: '/images/entertainment.jpeg',
    intro: {
      label: 'Your Live Show Host',
      heading: 'An Anchor Who Is Also',
      highlight: 'the Entertainment',
      paragraphs: [
        'A live show needs more than a name-reader between acts — it needs a performer who can hold a stage alone when the moment calls for it. Shubham anchors concerts, cultural evenings and stage productions and, being a trained live stage performer himself, can step in as the act, cover a gap with a performance, and keep an audience of hundreds locked in.',
        'He manages the run-of-show with the technical team, introduces artists with genuine build-up, and reads the crowd in real time — pulling the energy up or letting an emotional moment breathe — so the whole production feels seamless and alive from lights-up to encore.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Live Show',
      items: [
        { icon: '🎶', title: 'Live Singing', description: 'A host who performs — filling gaps or headlining moments with live vocals.' },
        { icon: '🎭', title: 'Artist Introductions', description: 'Every act introduced with build-up so the audience is primed before they perform.' },
        { icon: '🎚️', title: 'Tech-Team Coordination', description: 'Run-of-show, sound and lighting cues managed with the backstage crew.' },
        { icon: '👏', title: 'Crowd Engagement', description: 'Real-time reading of a large audience to keep the energy exactly where it should be.' },
        { icon: '🎫', title: 'Segment Flow', description: 'Smooth transitions and fills so the show never stalls between acts.' },
        { icon: '🔥', title: 'Energy Peaks', description: 'Deliberate build to the headline moments and finale for maximum impact.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Live Show',
      items: [
        { icon: 'mic', title: 'Performer + Host', description: 'He can carry a gap or headline a moment himself — a safety net most anchors cannot offer.' },
        { icon: 'flame', title: 'Controls Large Crowds', description: 'Ten years of stage experience means he holds an audience of hundreds with ease.' },
        { icon: 'zap', title: 'Seamless Production', description: 'Tight coordination with the tech team keeps the show flowing without dead air.' },
        { icon: 'star', title: 'Real Stage Presence', description: 'The show feels alive because the host commands the stage, not just the microphone.' },
      ],
    },
    flow: {
      heading: 'How Your Live Show',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Lights-Up Open', description: 'A high-impact opening that sets the tone and welcomes the crowd.' },
        { step: '02', title: 'Act Introductions', description: 'Each artist introduced with build-up and cued with the tech team.' },
        { step: '03', title: 'Live Moments', description: 'Shubham performs or engages the crowd to bridge and lift the energy.' },
        { step: '04', title: 'Finale & Encore', description: 'A deliberate build to the headline finale and encore.' },
      ],
    },
    gallery: {
      heading: 'Live Show',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/entertainment.jpeg', alt: 'Live show hosted by Shubham Khandelwal' },
        { type: 'video', src: '/videos/vid1.mp4', alt: 'Live show highlight film', poster: '/images/cele2.jpeg' },
        { type: 'image', src: '/images/cele3.jpeg', alt: 'Stage show performance' },
        { type: 'image', src: '/images/event.jpeg', alt: 'Live event stage' },
        { type: 'image', src: '/images/banner.jpeg', alt: 'Cultural show production' },
        { type: 'image', src: '/images/main.jpeg', alt: 'Shubham Khandelwal performing live' },
      ],
    },
    faqs: [
      { question: 'What kinds of live shows do you host?', answer: 'Concerts, cultural evenings, college festivals and stage productions. Shubham anchors the show and, as a live stage performer, can also perform when the programme calls for it.' },
      { question: 'Can you actually perform if there is a gap?', answer: 'Yes — that is one of his biggest strengths. If an act is delayed, he can step in with a live performance so the audience never sits in silence.' },
      { question: 'Do you coordinate with the sound and lighting team?', answer: 'Always. Shubham runs the show alongside the technical crew, locking cues in rehearsal so the production flows seamlessly.' },
      { question: 'Can you handle large audiences?', answer: 'Comfortably. Ten years of stage experience means he holds and directs the energy of audiences numbering in the hundreds.' },
    ],
    cta: {
      title: 'Anchor Your Show With a Real Performer',
      subtitle: 'Book Shubham to host and perform at your live show or cultural night.',
    },
    seo: {
      title: 'Live Show Host, Anchor & Singer — Shubham Khandelwal',
      description: 'Live show hosting for concerts, cultural nights and stage productions, with live singing and full tech-team coordination. Book Shubham Khandelwal.',
      keywords: ['live show host', 'concert anchor Jaipur', 'cultural show emcee', 'stage show host', 'live stage performer host Rajasthan'],
      ogImage: '/images/entertainment.jpeg',
    },
  },
]

const EVENTS_CHILDREN: ServiceNode[] = [
  /* ── Corporate Events ──────────────────── */
  {
    slug: 'corporate-events',
    parentSlug: 'events',
    categoryTitle: 'Events',
    title: 'Corporate Event Hosting',
    navLabel: 'Corporate Events',
    tag: 'Corporate Hosting',
    icon: '🏢',
    subtitle:
      'Conferences, award nights, launches and dealer meets — a bilingual emcee who keeps the agenda sharp and the brand centre-stage.',
    heroImage: '/images/corporate1.png',
    intro: {
      label: 'Your Corporate Host',
      heading: 'The Emcee Who Keeps',
      highlight: 'the Room With You',
      paragraphs: [
        'Corporate stages have zero tolerance for a loose host. Shubham emcees conferences, product launches, award nights, annual days and dealer meets with the composure your brand demands — keeping the agenda tight, briefing speakers, moderating cleanly and landing every key message on time and on tone.',
        'He hosts fluently in Hindi and English, adapts to your brand voice, and knows when to be crisp and corporate and when to lift the room for the celebration segments. Leadership looks good, delegates stay engaged, and the run-of-sheet is respected to the minute.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Corporate Event',
      items: [
        { icon: '📋', title: 'Agenda Management', description: 'The run-of-sheet held to the minute so sessions start and end on time.' },
        { icon: '🗣️', title: 'Speaker Briefing', description: 'Speakers introduced accurately and handled smoothly on and off stage.' },
        { icon: '🏆', title: 'Award Segments', description: 'Recognition and award moments delivered with the right build-up and dignity.' },
        { icon: '🎤', title: 'Q&A Moderation', description: 'Panels and audience Q&A moderated cleanly so discussions stay focused.' },
        { icon: '🌐', title: 'Bilingual Hosting', description: 'Seamless hosting in Hindi and English to suit a mixed corporate audience.' },
        { icon: '🎯', title: 'Brand-Voice Alignment', description: 'Tone and messaging matched to your brand so the host feels on-brand throughout.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Corporate Event',
      items: [
        { icon: 'clock', title: 'Respects the Clock', description: 'Agendas run to time because the host actively manages the flow, not just the mic.' },
        { icon: 'briefcase', title: 'Boardroom-Ready Polish', description: 'Composed, articulate and brand-safe — the poise a corporate stage demands.' },
        { icon: 'languages', title: 'Bilingual Command', description: 'Fluent Hindi and English hosting keeps every delegate engaged.' },
        { icon: 'users', title: 'Keeps Delegates Engaged', description: 'He reads the room and lifts energy at the right moments so attention never drifts.' },
      ],
    },
    flow: {
      heading: 'How Your Corporate Event',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Briefing & Prep', description: 'Shubham studies the agenda, speakers and brand tone in advance.' },
        { step: '02', title: 'Sharp Open', description: 'A crisp welcome that sets the professional tone and frames the day.' },
        { step: '03', title: 'Sessions & Segments', description: 'Speakers, awards and Q&A moderated and cued to keep everything on time.' },
        { step: '04', title: 'Strong Close', description: 'A clean wrap-up and celebration segment that ends the event on a high.' },
      ],
    },
    gallery: {
      heading: 'Corporate',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/corporate1.png', alt: 'Corporate event hosted by Shubham Khandelwal' },
        { type: 'image', src: '/images/corparate.jpeg', alt: 'Conference stage hosting' },
        { type: 'video', src: '/videos/corporate2.mp4', alt: 'Corporate event film', poster: '/images/banner.png' },
        { type: 'image', src: '/images/corporate3.png', alt: 'Award night hosting' },
        { type: 'image', src: '/images/corporate4.png', alt: 'Professional emcee on stage' },
        { type: 'image', src: '/images/corporate5.png', alt: 'Corporate event production' },
      ],
    },
    faqs: [
      { question: 'What corporate events do you host?', answer: 'Conferences, product launches, award nights, annual days and dealer meets. Shubham emcees each with agenda management, speaker briefing and clean Q&A moderation.' },
      { question: 'Do you host in both Hindi and English?', answer: 'Yes. He hosts fluently in both and switches naturally to suit a mixed corporate audience.' },
      { question: 'Can you keep the event on schedule?', answer: 'That is a core part of the job — Shubham actively manages the run-of-sheet so sessions begin and end on time.' },
      { question: 'Will you align with our brand tone and messaging?', answer: 'Absolutely. He studies your brand voice and key messages in advance so the hosting feels on-brand from open to close.' },
    ],
    cta: {
      title: 'Give Your Corporate Event a Polished Host',
      subtitle: 'Book Shubham to emcee your conference, launch or award night.',
    },
    seo: {
      title: 'Corporate Event Emcee & Host — Shubham Khandelwal',
      description: 'Professional corporate emcee for conferences, launches, award nights and dealer meets. Bilingual, agenda-tight hosting. Book Shubham Khandelwal, Jaipur.',
      keywords: ['corporate emcee Jaipur', 'conference host', 'award night anchor', 'product launch host', 'dealer meet emcee Rajasthan'],
      ogImage: '/images/corparate1.png',
    },
  },
  /* ── Social Events ─────────────────────── */
  {
    slug: 'social-events',
    parentSlug: 'events',
    categoryTitle: 'Events',
    title: 'Social Event Hosting',
    navLabel: 'Social Events',
    tag: 'Social Hosting',
    icon: '🎉',
    subtitle:
      'Community gatherings, cultural programmes and celebrity nights — hosted with warmth, wit and a genuine feel for the crowd.',
    heroImage: '/images/anniversary2.jpeg',
    intro: {
      label: 'Your Social Host',
      heading: 'Bringing Communities',
      highlight: 'Together on Stage',
      paragraphs: [
        'Social events are all about the crowd — and Shubham thrives on reading a room full of different ages, backgrounds and expectations. From cultural programmes and community functions to celebrity nights and get-togethers, he hosts with the warmth and wit that makes strangers feel like one audience.',
        'He balances tradition and entertainment, gives the organisers and dignitaries their due moments, and keeps the programme flowing with games, live singing and interaction so a large, mixed gathering never fragments or loses momentum.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'Social Event',
      items: [
        { icon: '🤝', title: 'Community Warmth', description: 'A welcoming, inclusive style that makes a diverse crowd feel like one audience.' },
        { icon: '🎭', title: 'Cultural Programmes', description: 'Performances and traditions introduced with respect and the right build-up.' },
        { icon: '⭐', title: 'Celebrity & Guest Handling', description: 'Dignitaries and celebrity guests welcomed and managed smoothly on stage.' },
        { icon: '🎶', title: 'Live Entertainment', description: 'Live singing and interactive moments that keep a large gathering engaged.' },
        { icon: '🎲', title: 'Crowd Games', description: 'Inclusive games and interaction so every section of the audience takes part.' },
        { icon: '🏅', title: 'Felicitation Moments', description: 'Organisers, sponsors and honourees given dignified, well-timed recognition.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Social Event',
      items: [
        { icon: 'users', title: 'Unites a Mixed Crowd', description: 'He reads a diverse audience and keeps it together instead of letting it fragment.' },
        { icon: 'smile', title: 'Warmth & Wit', description: 'His natural, inclusive humour makes every section of the crowd feel welcome.' },
        { icon: 'music', title: 'Entertainer Built In', description: 'Live singing and interaction mean the programme never goes flat.' },
        { icon: 'star', title: 'Handles VIPs Gracefully', description: 'Celebrity guests and dignitaries are managed with the right respect and timing.' },
      ],
    },
    flow: {
      heading: 'How Your Social Event',
      highlight: 'Unfolds',
      steps: [
        { step: '01', title: 'Warm Welcome', description: 'Shubham sets an inclusive tone and welcomes the community and guests.' },
        { step: '02', title: 'Programme & Culture', description: 'Cultural acts and felicitations introduced and cued with respect.' },
        { step: '03', title: 'Entertainment & Games', description: 'Live singing and crowd games keep the whole gathering engaged.' },
        { step: '04', title: 'Celebratory Close', description: 'A high-energy close that leaves the community on a shared high.' },
      ],
    },
    gallery: {
      heading: 'Social Event',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/anniversary2.jpeg', alt: 'Social event hosted by Shubham Khandelwal' },
        { type: 'video', src: '/videos/social-event.mp4', alt: 'Social event highlight film', poster: '/images/cele1.jpeg' },
        { type: 'image', src: '/images/cele2.jpeg', alt: 'Community gathering hosting' },
        { type: 'image', src: '/images/cele3.jpeg', alt: 'Cultural programme celebration' },
        { type: 'image', src: '/images/event.jpeg', alt: 'Community event stage' },
        { type: 'image', src: '/images/main.jpeg', alt: 'Shubham Khandelwal hosting a gathering' },
      ],
    },
    faqs: [
      { question: 'What counts as a social event?', answer: 'Community functions, cultural programmes, celebrity nights, get-togethers and similar gatherings. Shubham hosts them with warmth, cultural sensitivity and live entertainment.' },
      { question: 'Can you handle celebrity guests and dignitaries?', answer: 'Yes. He welcomes and manages VIP guests and honourees smoothly, giving them the right moments without disrupting the programme flow.' },
      { question: 'How do you keep a large, mixed crowd engaged?', answer: 'By reading the room and using inclusive games, live singing and interaction so every age group and section of the audience feels part of the event.' },
      { question: 'Do you host cultural programmes respectfully?', answer: 'Absolutely — traditions and performances are introduced with genuine respect and appropriate build-up, balancing culture with entertainment.' },
    ],
    cta: {
      title: 'Bring Your Community Together',
      subtitle: 'Book Shubham to host your social event, cultural programme or celebrity night.',
    },
    seo: {
      title: 'Social & Cultural Event Host — Shubham Khandelwal',
      description: 'Warm, engaging hosting for community gatherings, cultural programmes and celebrity nights. Book Jaipur event host Shubham Khandelwal.',
      keywords: ['social event host Jaipur', 'cultural programme anchor', 'community event emcee', 'celebrity night host', 'get together anchor Rajasthan'],
      ogImage: '/images/anniversary2.jpeg',
    },
  },
]

/* ─────────────────────────────────────────────
   Top-level category tree
   ───────────────────────────────────────────── */

export const serviceTree: ServiceNode[] = [
  /* ═══ Wedding Events ═══ */
  {
    slug: 'wedding-events',
    title: 'Wedding Events',
    navLabel: 'Wedding Events',
    tag: 'Wedding Hosting',
    icon: '💍',
    subtitle:
      'From the first haldi to the final baraat, Shubham hosts every wedding function like its own show — warm, scripted and unforgettable.',
    heroImage: '/images/haldi1.jpeg',
    intro: {
      label: 'Wedding Hosting',
      heading: 'One Host for Every',
      highlight: 'Wedding Function',
      paragraphs: [
        'A wedding is not one event — it is a week of them, each with its own mood. Shubham hosts them all: the playful haldi, the buzzing mehendi, the headline sangeet, the cinematic varmala and the high-octane baraat on wheels. One familiar voice across every function means a consistency of energy and care that guests genuinely feel.',
        'Fluent in Hindi, English and Rajasthani, and a live stage performer on top of being an anchor, he scripts each function around your families and traditions so nothing is templated. Explore the individual functions below — each has its own dedicated approach.',
      ],
    },
    features: {
      heading: 'Every Wedding Function,',
      highlight: 'Expertly Hosted',
      items: [
        { icon: '💛', title: 'Haldi', description: 'Playful daytime hosting with folk songs and family games.' },
        { icon: '🌿', title: 'Mehendi', description: 'Interactive games and live singing that keep the function buzzing.' },
        { icon: '🎶', title: 'Sangeet', description: 'Performance emceeing and family face-offs, anchored like a show.' },
        { icon: '🌸', title: 'Varmala', description: 'A cinematic, cued garland moment worthy of your wedding film.' },
        { icon: '🚗', title: 'Baraat On Wheels', description: 'A grand mobile procession hyped to peak at the venue gates.' },
        { icon: '📜', title: 'Custom Scripts', description: 'Every function scripted around your families, culture and timeline.' },
      ],
    },
    reasons: {
      heading: 'Why Families Trust Shubham With Their',
      highlight: 'Wedding',
      items: [
        { icon: 'mic', title: 'One Voice, Every Function', description: 'The same trusted host across haldi to reception means consistent energy all week.' },
        { icon: 'music', title: 'Anchor & live stage performer', description: 'Hosting and live performance in one booking, woven through every function.' },
        { icon: 'languages', title: 'Hindi, English & Rajasthani', description: 'Fluent, rooted hosting that speaks to every generation of both families.' },
        { icon: 'pen', title: 'Nothing Templated', description: 'Custom scripts built around your traditions, not a recycled run-of-show.' },
      ],
    },
    flow: {
      heading: 'How Shubham Hosts Your',
      highlight: 'Wedding',
      steps: [
        { step: '01', title: 'Discovery Call', description: 'He learns your families, rituals, languages and the vibe you want.' },
        { step: '02', title: 'Function Scripts', description: 'A tailored run-of-show and script written for each function.' },
        { step: '03', title: 'Rehearsal & Coordination', description: 'Cues aligned with your planner, DJ and family before the day.' },
        { step: '04', title: 'Show Days', description: 'On the mic across every function, reading the room and keeping it flowing.' },
      ],
    },
    gallery: {
      heading: 'Wedding',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/haldi3.jpeg', alt: 'Haldi ceremony hosting' },
        { type: 'image', src: '/images/mehandi.jpeg', alt: 'Mehendi function hosting' },
        { type: 'video', src: '/videos/sangeet.mp4', alt: 'Wedding celebration film', poster: '/images/sangeet.jpeg' },
        { type: 'image', src: '/images/varmala.jpeg', alt: 'Varmala compering' },
        { type: 'image', src: '/images/baraatonwheel.jpeg', alt: 'Baraat on wheels hosting' },
        { type: 'image', src: '/images/haldi1.jpeg', alt: 'Wedding function anchoring by Shubham Khandelwal' },
      ],
    },
    faqs: [
      { question: 'Can Shubham host all our wedding functions?', answer: 'Yes — that is the ideal. From haldi and mehendi to sangeet, varmala and the baraat, one host across every function gives your celebration a consistent, familiar energy that guests love.' },
      { question: 'Does he only host, or does he perform too?', answer: 'Both. Shubham is an anchor and a live stage performer, so live performance is woven into the functions wherever it fits.' },
      { question: 'Which languages does he host in?', answer: 'Hindi, English and Rajasthani, tailored to the families present at each function.' },
      { question: 'Can we book just one function instead of the whole wedding?', answer: 'Of course. Each function has its own dedicated page and can be booked individually — explore them below.' },
    ],
    cta: {
      title: 'Plan a Wedding Your Guests Never Forget',
      subtitle: 'Book Shubham to host your wedding functions with warmth, scripts and live singing.',
    },
    seo: {
      title: 'Wedding Anchor & Host — Haldi to Baraat — Shubham Khandelwal',
      description: 'Complete wedding hosting — haldi, mehendi, sangeet, varmala and baraat on wheels — by Jaipur wedding anchor and live stage performer Shubham Khandelwal.',
      keywords: ['wedding anchor Jaipur', 'wedding host Rajasthan', 'sangeet anchor', 'varmala compere', 'wedding emcee', 'haldi mehendi host'],
      ogImage: '/images/sangeet.jpeg',
    },
    children: WEDDING_CHILDREN,
  },
  /* ═══ Parties ═══ */
  {
    slug: 'parties',
    title: 'Parties',
    navLabel: 'Parties',
    tag: 'Party Hosting',
    icon: '🥳',
    subtitle:
      'Birthdays and anniversaries hosted like proper celebrations — personal, playful and full of live entertainment.',
    heroImage: '/images/birthday1.jpeg',
    intro: {
      label: 'Party Hosting',
      heading: 'Private Celebrations,',
      highlight: 'Hosted Like a Show',
      paragraphs: [
        'The best parties do not run on autopilot — they have someone keeping the energy up and the moments landing. Shubham hosts birthdays and anniversaries as proper productions: personal roasts and tributes, tailored games, cake and milestone build-ups, and live singing that makes the guest of honour feel truly celebrated.',
        'Every party is shaped around the people in the room — their stories, their music, their in-jokes — so it never feels like a generic template. The hosts get to enjoy their own celebration while Shubham keeps the room laughing, singing and moving. Explore each celebration below.',
      ],
    },
    features: {
      heading: 'Celebrations Shubham',
      highlight: 'Brings to Life',
      items: [
        { icon: '🎂', title: 'Birthday Parties', description: 'Milestone and surprise birthdays with games, roasts and live singing.' },
        { icon: '💐', title: 'Anniversary Celebrations', description: 'Heartfelt tributes and nostalgic live music for the couple.' },
        { icon: '🎮', title: 'Tailored Games', description: 'Games designed around the guest of honour and the crowd.' },
        { icon: '🎤', title: 'Live Singing', description: 'Performed sets and dedications that turn a party into a memory.' },
        { icon: '🎁', title: 'Surprise Moments', description: 'Coordinated surprises cued to land at the perfect emotional beat.' },
        { icon: '📸', title: 'Reel-Worthy Fun', description: 'Moments engineered to make the best photos and videos of the night.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Party',
      items: [
        { icon: 'gift', title: 'Deeply Personal', description: 'Every segment is built around the guest of honour, never a copy-paste script.' },
        { icon: 'music', title: 'Host + Performer', description: 'Live singing means your party has built-in entertainment, not just an announcer.' },
        { icon: 'smile', title: 'Reads Any Room', description: 'From a kids\' birthday to a golden anniversary, he nails the tone every time.' },
        { icon: 'heart', title: 'Hosts Enjoy It Too', description: 'You get to be a guest at your own party while Shubham runs the show.' },
      ],
    },
    flow: {
      heading: 'How Shubham Hosts Your',
      highlight: 'Party',
      steps: [
        { step: '01', title: 'Get to Know You', description: 'He gathers the stories, music and in-jokes that make the celebration personal.' },
        { step: '02', title: 'Custom Programme', description: 'A tailored flow of games, tributes and live moments is built for your party.' },
        { step: '03', title: 'Coordinate Surprises', description: 'Surprises and guest moments are planned and cued in advance.' },
        { step: '04', title: 'Party Night', description: 'Shubham hosts and performs, keeping the room high from welcome to finale.' },
      ],
    },
    gallery: {
      heading: 'Party',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/birthday.jpeg', alt: 'Birthday party hosting' },
        { type: 'image', src: '/images/.jpeg', alt: 'Anniversary celebration hosting' },
        { type: 'video', src: '/videos/vid8.mp4', alt: 'Party highlight film', poster: '/images/cele2.jpeg' },
        { type: 'image', src: '/images/cele3.jpeg', alt: 'Celebration cake moment' },
        { type: 'image', src: '/images/anniversary2.jpeg', alt: 'Private party hosting' },
        { type: 'image', src: '/images/entertainment.jpeg', alt: 'Shubham Khandelwal hosting a party' },
      ],
    },
    faqs: [
      { question: 'What kinds of parties do you host?', answer: 'Birthdays of every age and milestone anniversaries. Each is hosted as a proper celebration with tailored games, tributes and live singing — explore the dedicated pages below.' },
      { question: 'Do you personalise the party?', answer: 'Completely. Shubham builds every segment around the guest of honour\'s stories, music and relationships, so nothing feels generic.' },
      { question: 'Can you plan surprises?', answer: 'Yes. Surprise reveals, guest messages and special moments are coordinated and cued in advance so they land perfectly.' },
      { question: 'Do you sing at parties?', answer: 'He does — live singing and dedications are one of the most loved parts of every celebration.' },
    ],
    cta: {
      title: 'Throw a Party Nobody Forgets',
      subtitle: 'Book Shubham to host your birthday or anniversary with games, tributes and live music.',
    },
    seo: {
      title: 'Party Host — Birthdays & Anniversaries — Shubham Khandelwal',
      description: 'Personal, high-energy hosting for birthday parties and anniversary celebrations with games, roasts, tributes and live singing. Book Shubham Khandelwal, Jaipur.',
      keywords: ['party host Jaipur', 'birthday anchor', 'anniversary host', 'private party emcee', 'celebration entertainer Rajasthan'],
      ogImage: '/images/birthday.jpeg',
    },
    children: PARTIES_CHILDREN,
  },
  /* ═══ Shows ═══ */
  {
    slug: 'shows',
    title: 'Shows',
    navLabel: 'Shows',
    tag: 'Show Hosting',
    icon: '🎭',
    subtitle:
      'Fashion shows and live productions anchored by a host who is also a performer — sharp, sequenced and full of energy.',
    heroImage: '/images/entertainment.jpeg',
    intro: {
      label: 'Show Hosting',
      heading: 'Productions That Run',
      highlight: 'Sharp and Alive',
      paragraphs: [
        'A show is a production, and a production needs a host who understands stagecraft. Shubham anchors fashion shows and live productions with the precision they demand — locking cues with choreographers and tech teams, covering transitions seamlessly, and holding the audience\'s attention between every act.',
        'Being a live stage performer as well as an anchor gives his shows something rare: a host who can step in and perform, cover a gap, or headline a moment himself. Whether it is a runway or a cultural concert, the result is a show that feels tight, premium and genuinely alive. Explore the show types below.',
      ],
    },
    features: {
      heading: 'Shows Shubham',
      highlight: 'Commands',
      items: [
        { icon: '👗', title: 'Fashion Shows', description: 'Designer introductions and choreographer-synced runway compering.' },
        { icon: '🎤', title: 'Live Shows', description: 'Concerts and cultural nights anchored — and performed — live.' },
        { icon: '🎚️', title: 'Tech Coordination', description: 'Sound, lighting and run-of-show cues locked with the backstage crew.' },
        { icon: '⏱️', title: 'Seamless Transitions', description: 'Set and act changes covered so the show never loses momentum.' },
        { icon: '🌟', title: 'Finale Build-Ups', description: 'Deliberate energy peaks for showstoppers and headline moments.' },
        { icon: '🎶', title: 'Live Performance', description: 'A host who can perform himself when the show calls for it.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Show',
      items: [
        { icon: 'zap', title: 'Production-Tight', description: 'Cues, transitions and timing are managed like a real production, not improvised.' },
        { icon: 'mic', title: 'Host + Performer', description: 'He can carry or headline a moment live — a safety net most anchors lack.' },
        { icon: 'star', title: 'Premium Tone', description: 'Compering that matches the polish of a high-end runway or stage.' },
        { icon: 'flame', title: 'Controls the Room', description: 'Ten years of stage craft keep audiences of any size locked in.' },
      ],
    },
    flow: {
      heading: 'How Shubham Runs Your',
      highlight: 'Show',
      steps: [
        { step: '01', title: 'Rehearsal & Cues', description: 'He locks the run-of-show with choreographers and the tech team.' },
        { step: '02', title: 'Opening Sequence', description: 'A high-impact open that frames the theme, sponsors and tone.' },
        { step: '03', title: 'Acts & Transitions', description: 'Each act introduced and cued, with transitions covered seamlessly.' },
        { step: '04', title: 'Showstopper Finale', description: 'A deliberate build to the finale that leaves the room buzzing.' },
      ],
    },
    gallery: {
      heading: 'Show',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/entertainment.jpeg', alt: 'Live show hosting' },
        { type: 'image', src: '/images/event.jpeg', alt: 'Fashion show hosting' },
        { type: 'video', src: '/videos/vid1.mp4', alt: 'Show highlight film', poster: '/images/banner.jpeg' },
        { type: 'image', src: '/images/dark.jpeg', alt: 'Premium show lighting' },
        { type: 'image', src: '/images/main.jpeg', alt: 'Shubham Khandelwal on stage' },
        { type: 'image', src: '/images/cele3.jpeg', alt: 'Show audience energy' },
      ],
    },
    faqs: [
      { question: 'What kinds of shows do you host?', answer: 'Fashion shows and live productions such as concerts and cultural nights. Each has its own dedicated approach — explore the pages below.' },
      { question: 'Can you perform as well as host?', answer: 'Yes. Shubham is a live stage performer, so he can step in to perform, cover a gap or headline a moment during the show.' },
      { question: 'Do you coordinate with our production team?', answer: 'Always. Cues with the choreographer, sound and lighting teams are locked in rehearsal so the show runs seamlessly.' },
      { question: 'Can you handle large audiences?', answer: 'Comfortably — his stage experience covers audiences from intimate showcases to crowds in the hundreds.' },
    ],
    cta: {
      title: 'Give Your Show a Host Who Performs',
      subtitle: 'Book Shubham to anchor your fashion show or live production.',
    },
    seo: {
      title: 'Show Host — Fashion & Live Shows — Shubham Khandelwal',
      description: 'Fashion show and live show hosting with choreographer-synced cues, seamless transitions and live performance. Book Jaipur show host Shubham Khandelwal.',
      keywords: ['fashion show host', 'live show anchor', 'stage show emcee Jaipur', 'runway compere', 'concert host Rajasthan'],
      ogImage: '/images/entertainment.jpeg',
    },
    children: SHOWS_CHILDREN,
  },
  /* ═══ Events ═══ */
  {
    slug: 'events',
    title: 'Events',
    navLabel: 'Events',
    tag: 'Event Hosting',
    icon: '🎟️',
    subtitle:
      'Corporate and social events hosted with the right register — sharp and professional, or warm and inclusive, exactly as the moment needs.',
    heroImage: '/images/event.jpeg',
    intro: {
      label: 'Event Hosting',
      heading: 'The Right Host for',
      highlight: 'Every Occasion',
      paragraphs: [
        'Not every event wants the same voice. A dealer meet needs crisp, agenda-tight professionalism; a community night wants warmth and inclusion. Shubham reads that difference instinctively and hosts corporate and social events in exactly the register each one calls for.',
        'From conferences, launches and award nights to cultural programmes and celebrity gatherings, he keeps the flow tight, the key people honoured and the audience engaged — hosting fluently in Hindi and English and lifting the room whenever the moment turns to celebration. Explore both event types below.',
      ],
    },
    features: {
      heading: 'Events Shubham',
      highlight: 'Hosts',
      items: [
        { icon: '🏢', title: 'Corporate Events', description: 'Conferences, launches, award nights and dealer meets, agenda-tight and bilingual.' },
        { icon: '🎉', title: 'Social Events', description: 'Community gatherings, cultural programmes and celebrity nights, hosted with warmth.' },
        { icon: '📋', title: 'Agenda Control', description: 'Run-of-sheets held to the minute so events start and finish on time.' },
        { icon: '🎤', title: 'Panel & Q&A Moderation', description: 'Clean, focused moderation for discussions and audience questions.' },
        { icon: '🏅', title: 'Awards & Felicitations', description: 'Recognition moments delivered with dignity and the right build-up.' },
        { icon: '🌐', title: 'Bilingual Hosting', description: 'Seamless Hindi and English hosting for any audience.' },
      ],
    },
    reasons: {
      heading: 'Why Book Shubham for Your',
      highlight: 'Event',
      items: [
        { icon: 'briefcase', title: 'Reads the Register', description: 'Corporate crisp or community warm — he matches the tone the event needs.' },
        { icon: 'clock', title: 'Runs to Time', description: 'Agendas are actively managed so nothing overruns or drags.' },
        { icon: 'languages', title: 'Bilingual Command', description: 'Fluent Hindi and English keeps every audience engaged.' },
        { icon: 'users', title: 'Keeps the Room With You', description: 'He reads the crowd and holds attention from open to close.' },
      ],
    },
    flow: {
      heading: 'How Shubham Hosts Your',
      highlight: 'Event',
      steps: [
        { step: '01', title: 'Brief & Prep', description: 'He studies the agenda, audience, key people and tone in advance.' },
        { step: '02', title: 'Set the Tone', description: 'An open pitched exactly right — professional or warm, as needed.' },
        { step: '03', title: 'Run the Programme', description: 'Sessions, awards and cultural acts moderated and cued to stay on time.' },
        { step: '04', title: 'Strong Finish', description: 'A clean, memorable close that lands the event\'s purpose.' },
      ],
    },
    gallery: {
      heading: 'Event',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/corparate.jpeg', alt: 'Corporate event hosting' },
        { type: 'image', src: '/images/event.jpeg', alt: 'Conference stage hosting' },
        { type: 'video', src: '/videos/vid3.mp4', alt: 'Event highlight film', poster: '/images/anniversary2.jpeg' },
        { type: 'image', src: '/images/banner.jpeg', alt: 'Event stage production' },
        { type: 'image', src: '/images/entertainment.jpeg', alt: 'Award night hosting' },
        { type: 'image', src: '/images/main.jpeg', alt: 'Shubham Khandelwal hosting an event' },
      ],
    },
    faqs: [
      { question: 'What is the difference between your corporate and social event hosting?', answer: 'Corporate hosting is crisp, agenda-tight and brand-aligned for conferences, launches and award nights. Social hosting is warm and inclusive for community, cultural and celebrity gatherings. Each has its own dedicated page below.' },
      { question: 'Do you host in Hindi and English?', answer: 'Yes, fluently in both, switching to suit the audience of any event.' },
      { question: 'Can you keep the programme on schedule?', answer: 'Managing the run-of-sheet is central to what Shubham does — events start and end on time.' },
      { question: 'Can you handle awards and felicitations?', answer: 'Absolutely. Recognition moments are delivered with the right dignity and build-up for both corporate and social events.' },
    ],
    cta: {
      title: 'Host Your Event With the Right Voice',
      subtitle: 'Book Shubham to host your corporate or social event.',
    },
    seo: {
      title: 'Event Host — Corporate & Social — Shubham Khandelwal',
      description: 'Corporate and social event hosting — conferences, launches, award nights, cultural programmes and celebrity gatherings. Book Shubham Khandelwal, Jaipur.',
      keywords: ['event host Jaipur', 'corporate emcee', 'social event anchor', 'award night host', 'conference emcee Rajasthan'],
      ogImage: '/images/event.jpeg',
    },
    children: EVENTS_CHILDREN,
  },
  /* ═══ School Programs (leaf) ═══ */
  {
    slug: 'school-programs',
    title: 'School Programs',
    navLabel: 'School Programs',
    tag: 'School Hosting',
    icon: '🎓',
    subtitle:
      'Annual days, prize distributions and cultural fests hosted with an energy that speaks to students, staff and parents alike.',
    heroImage: '/images/event.jpeg',
    intro: {
      label: 'School Hosting',
      heading: 'Bringing Energy to the',
      highlight: 'School Stage',
      paragraphs: [
        'School events have a tricky audience — restless students, proud parents and a formal management, all in one hall. Shubham hosts annual functions, prize distributions, cultural fests and inauguration ceremonies with an energy that keeps children engaged while giving teachers, chief guests and management the respect and formality the occasion needs.',
        'He introduces performances with genuine enthusiasm, keeps a long programme moving so it never drags, and handles the felicitation and prize-giving segments with the dignity schools expect. The result is an event that feels lively and memorable for students, yet polished and well-run for the institution.',
      ],
    },
    features: {
      heading: 'What Shubham Brings to Your',
      highlight: 'School Event',
      items: [
        { icon: '🎓', title: 'Annual Functions', description: 'The full annual day hosted with pace, warmth and energy from start to finish.' },
        { icon: '🏆', title: 'Prize Distribution', description: 'Award and prize segments run smoothly and with dignity for every recipient.' },
        { icon: '🎭', title: 'Cultural Fests', description: 'Student performances introduced with enthusiasm and cued in perfect sequence.' },
        { icon: '🎤', title: 'Chief Guest Handling', description: 'Dignitaries and chief guests welcomed and honoured with the right formality.' },
        { icon: '🧒', title: 'Student Engagement', description: 'An energy and language pitched to keep even the youngest students involved.' },
        { icon: '⏱️', title: 'Programme Pacing', description: 'A long, multi-act programme kept moving so it never drags or overruns.' },
      ],
    },
    reasons: {
      heading: 'Why Schools Book',
      highlight: 'Shubham',
      items: [
        { icon: 'graduation', title: 'Balances Fun & Formality', description: 'He keeps students engaged while giving management the polish and respect they expect.' },
        { icon: 'clock', title: 'Keeps Long Programmes Moving', description: 'Multi-act school functions stay paced and on time, never dragging.' },
        { icon: 'users', title: 'Speaks to Every Section', description: 'Students, parents, teachers and chief guests all feel addressed and included.' },
        { icon: 'star', title: 'Dignified Prize-Giving', description: 'Award and felicitation moments handled with the care an institution values.' },
      ],
    },
    flow: {
      heading: 'How Shubham Hosts Your',
      highlight: 'School Event',
      steps: [
        { step: '01', title: 'Coordinate With Staff', description: 'He aligns the programme, sequence and dignitaries with the school team.' },
        { step: '02', title: 'Formal Welcome', description: 'A respectful open welcoming management, chief guests and parents.' },
        { step: '03', title: 'Performances & Prizes', description: 'Cultural acts and prize distribution introduced, cued and paced.' },
        { step: '04', title: 'Memorable Close', description: 'A warm, energetic finish that sends everyone home proud.' },
      ],
    },
    gallery: {
      heading: 'School Event',
      highlight: 'Moments',
      media: [
        { type: 'image', src: '/images/event.jpeg', alt: 'School annual function hosting' },
        { type: 'image', src: '/images/entertainment.jpeg', alt: 'Stage performance hosting' },
        { type: 'video', src: '/videos/vid7.mp4', alt: 'School event film', poster: '/images/cele3.jpeg' },
        { type: 'image', src: '/images/banner.jpeg', alt: 'School event stage' },
        { type: 'image', src: '/images/main.jpeg', alt: 'Shubham Khandelwal hosting on stage' },
        { type: 'image', src: '/images/hero.jpeg', alt: 'Event hosting energy' },
      ],
    },
    faqs: [
      { question: 'What school events do you host?', answer: 'Annual functions, prize distributions, cultural fests, sports days and inauguration ceremonies — hosted with the right balance of energy for students and formality for management.' },
      { question: 'Can you keep young students engaged?', answer: 'Yes. Shubham pitches his energy and language to connect with children while keeping the programme respectful for parents and staff.' },
      { question: 'How do you handle chief guests and dignitaries?', answer: 'With appropriate formality — welcomes, felicitations and prize-giving are all handled with the dignity a school occasion requires.' },
      { question: 'Can you keep a long programme on time?', answer: 'Pacing a long, multi-act programme is a core strength — he keeps it moving so it stays lively and finishes on schedule.' },
    ],
    cta: {
      title: 'Host a School Event to Remember',
      subtitle: 'Book Shubham to host your annual function, prize distribution or cultural fest.',
    },
    seo: {
      title: 'School Event & Annual Function Host — Shubham Khandelwal',
      description: 'Energetic, dignified hosting for school annual functions, prize distributions and cultural fests. Book Jaipur event host Shubham Khandelwal.',
      keywords: ['school annual function host', 'prize distribution anchor', 'school event emcee Jaipur', 'cultural fest host', 'school program anchor Rajasthan'],
      ogImage: '/images/event.jpeg',
    },
  },
]

/* ─────────────────────────────────────────────
   Derived helpers — used across routes, nav & SEO
   ───────────────────────────────────────────── */

/** Absolute path for any node (category or sub-service). */
export function servicePath(node: Pick<ServiceNode, 'slug' | 'parentSlug'>): string {
  return node.parentSlug
    ? `/services/${node.parentSlug}/${node.slug}`
    : `/services/${node.slug}`
}

/** All top-level categories. */
export const serviceCategories = serviceTree

/** Find a category by its slug. */
export function getCategory(categorySlug: string): ServiceNode | undefined {
  return serviceTree.find((c) => c.slug === categorySlug)
}

/** Find a sub-service by category + service slug. */
export function getService(
  categorySlug: string,
  serviceSlug: string,
): ServiceNode | undefined {
  return getCategory(categorySlug)?.children?.find((s) => s.slug === serviceSlug)
}

/** Static params for the [category] route. */
export function getCategoryParams(): { category: string }[] {
  return serviceTree.map((c) => ({ category: c.slug }))
}

/** Static params for the [category]/[service] route. */
export function getServiceParams(): { category: string; service: string }[] {
  return serviceTree.flatMap((c) =>
    (c.children ?? []).map((s) => ({ category: c.slug, service: s.slug })),
  )
}

/** Navigation dropdown groups built from the tree (no hash routes). */
export const serviceNavGroups = serviceTree.map((c) => ({
  label: c.navLabel,
  href: servicePath(c),
  icon: c.icon,
  items: (c.children ?? []).map((s) => ({
    label: s.navLabel,
    href: servicePath(s),
  })),
}))

/** Flat list of category links for the footer. */
export const serviceFooterLinks = serviceTree.map((c) => ({
  label: c.navLabel,
  href: servicePath(c),
}))

/** All service routes for the sitemap. */
export function getAllServiceRoutes(): string[] {
  return serviceTree.flatMap((c) => [
    servicePath(c),
    ...(c.children ?? []).map((s) => servicePath(s)),
  ])
}
