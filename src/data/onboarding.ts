// The client onboarding sheet: every question Gecko needs answered before pre-production, in the order it is
// easiest to talk through on a call. The page at /onboarding/ renders it, saves answers in the browser as they
// are typed, and turns them into a PDF, a text summary or a link that carries the answers.
//
// Field types:
//   text, long        one line or a paragraph
//   pick, picks       one or several chips, with an optional "Other" box
//   scale             a slider between two words (left / right)
//   list              rows the client adds themselves, each with the sub fields in `cols`
//   assets            a checklist: for each item, have it / need help / not needed, plus a link
export type Col = { id: string; label: string; ph?: string; type?: 'text' | 'color' | 'url' };
export type Field = {
  id: string; label: string; hint?: string; ph?: string; half?: boolean;
  type: 'text' | 'long' | 'pick' | 'picks' | 'scale' | 'list' | 'assets';
  input?: 'email' | 'tel' | 'url' | 'date';
  opts?: string[]; other?: boolean;
  left?: string; right?: string;
  cols?: Col[]; add?: string; rows?: number;
  items?: string[];
};
export type Section = { id: string; name: string; title: string; why: string; min: number; fields: Field[] };

export const sections: Section[] = [
  {
    id: 'basics', name: 'Basics', title: 'Who we are working with', min: 2,
    why: 'Names, links and the person we talk to day to day.',
    fields: [
      { id: 'brand', label: 'Brand name', type: 'text', half: true },
      { id: 'company', label: 'Company name on invoices', type: 'text', half: true, hint: 'If different from the brand.' },
      { id: 'contact', label: 'Your name', type: 'text', half: true },
      { id: 'role', label: 'Your role', type: 'text', half: true, ph: 'Founder, marketing manager…' },
      { id: 'phone', label: 'WhatsApp', type: 'text', input: 'tel', half: true },
      { id: 'email', label: 'Email', type: 'text', input: 'email', half: true },
      { id: 'site', label: 'Website or online store', type: 'text', input: 'url', half: true },
      { id: 'insta', label: 'Instagram', type: 'text', half: true, ph: '@yourbrand' },
      { id: 'tiktok', label: 'TikTok', type: 'text', half: true, ph: '@yourbrand' },
      { id: 'where', label: 'Where you sell', type: 'picks', opts: ['Online store', 'Instagram DMs', 'Own shop', 'Retailers', 'Marketplaces', 'Abroad'], other: true },
      { id: 'since', label: 'How long the brand has been running', type: 'pick', opts: ['Not launched yet', 'Under 1 year', '1 to 3 years', '3 to 10 years', 'Over 10 years'] },
    ],
  },
  {
    id: 'brand', name: 'Brand', title: 'Your brand, in your words', min: 4,
    why: 'So every reel sounds and looks like you, not like a template.',
    fields: [
      { id: 'oneline', label: 'Describe the brand in one sentence', type: 'text', ph: 'We make … for … who want …' },
      { id: 'story', label: 'How it started, and why', type: 'long', hint: 'The real story. It often becomes the best ad.' },
      { id: 'words', label: 'Three words people should feel about you', type: 'picks', opts: ['Premium', 'Fun', 'Bold', 'Trusted', 'Natural', 'Modern', 'Local pride', 'Warm', 'Expert', 'Edgy', 'Elegant', 'Affordable'], other: true },
      { id: 'tone1', label: 'Tone', type: 'scale', left: 'Playful', right: 'Serious' },
      { id: 'tone2', label: '', type: 'scale', left: 'Loud', right: 'Calm' },
      { id: 'tone3', label: '', type: 'scale', left: 'Everyday', right: 'Luxury' },
      { id: 'tone4', label: '', type: 'scale', left: 'Tunisian', right: 'International' },
      { id: 'lang', label: 'Languages for the videos', type: 'picks', opts: ['Tunisian', 'French', 'English', 'Arabic', 'No voice, text only'], other: true },
      { id: 'never', label: 'Anything we should never say or show', type: 'long', ph: 'Words, topics, colours, competitors, claims…' },
    ],
  },
  {
    id: 'products', name: 'Products', title: 'What we are selling', min: 4,
    why: 'The products to feature first, and what makes each one sell.',
    fields: [
      { id: 'hero', label: 'Products to feature', type: 'list', add: 'Add a product', rows: 2,
        cols: [{ id: 'name', label: 'Product' }, { id: 'price', label: 'Price' }, { id: 'why', label: 'Why people buy it' }, { id: 'link', label: 'Link', type: 'url' }] },
      { id: 'best', label: 'Your best seller, and why you think it sells', type: 'long' },
      { id: 'priority', label: 'What you need to sell more of right now', type: 'long', hint: 'New stock, a slow product, a high margin item…' },
      { id: 'launches', label: 'Launches, promos or seasons coming up', type: 'long', ph: 'New collection in March, Ramadan, summer sale…' },
      { id: 'offer', label: 'Offers you can use in ads', type: 'picks', opts: ['Free delivery', 'Discount code', 'Bundle', 'Gift with order', 'Cash on delivery', 'Exchange or refund'], other: true },
    ],
  },
  {
    id: 'audience', name: 'Audience', title: 'Who buys from you', min: 4,
    why: 'Who we are talking to, what they want and what stops them.',
    fields: [
      { id: 'who', label: 'Describe your typical customer', type: 'long', ph: 'A 28 year old in Tunis who…' },
      { id: 'age', label: 'Age', type: 'picks', opts: ['Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55+'] },
      { id: 'gender', label: 'Mostly', type: 'pick', opts: ['Women', 'Men', 'Both'] },
      { id: 'loc', label: 'Where they are', type: 'picks', opts: ['Grand Tunis', 'Sahel', 'Sfax', 'All of Tunisia', 'Maghreb', 'Europe', 'Gulf'], other: true },
      { id: 'want', label: 'What they want when they buy from you', type: 'long', hint: 'The feeling or result, not the product.' },
      { id: 'stop', label: 'What makes people hesitate', type: 'picks', opts: ['Price', 'Trust', 'Quality doubts', 'Delivery time', 'Sizing', 'Don’t know the brand', 'Cheaper copies'], other: true },
      { id: 'quotes', label: 'Things customers actually say about you', type: 'long', hint: 'Paste reviews, DMs or comments. Their words make the best hooks.' },
    ],
  },
  {
    id: 'selling', name: 'Selling points', title: 'Why you, and not someone else', min: 3,
    why: 'The promise and the proof every ad is built on.',
    fields: [
      { id: 'promise', label: 'The main promise of the brand', type: 'text', ph: 'If they remember one thing, it is…' },
      { id: 'reasons', label: 'Top reasons to buy', type: 'list', add: 'Add a reason', rows: 3, cols: [{ id: 'reason', label: 'Reason', ph: 'Made in Tunisia, delivered in 24h…' }] },
      { id: 'proof', label: 'Proof you can show', type: 'picks', opts: ['Reviews', 'Sales numbers', 'Before and after', 'Press', 'Awards', 'Certifications', 'Famous customers'], other: true },
      { id: 'proofNote', label: 'Numbers or facts we can quote', type: 'long', ph: '10,000 orders, 4.9 stars, 3 years of warranty…' },
    ],
  },
  {
    id: 'market', name: 'Market', title: 'Competitors and references', min: 4,
    why: 'What is out there, and the content you love or never want.',
    fields: [
      { id: 'rivals', label: 'Main competitors', type: 'list', add: 'Add a competitor', rows: 2,
        cols: [{ id: 'name', label: 'Name' }, { id: 'link', label: 'Instagram or site', type: 'url' }, { id: 'note', label: 'What they do well or badly' }] },
      { id: 'admire', label: 'Brands you admire, from any industry', type: 'long' },
      { id: 'refs', label: 'Ads or videos you love', type: 'list', add: 'Add a reference', rows: 2,
        cols: [{ id: 'link', label: 'Link', type: 'url' }, { id: 'note', label: 'What you like about it' }] },
      { id: 'avoid', label: 'Content you don’t want to look like', type: 'long' },
    ],
  },
  {
    id: 'goals', name: 'Goals', title: 'What this project has to do', min: 3,
    why: 'One clear goal decides the hooks, the length and the call to action.',
    fields: [
      { id: 'goal', label: 'Main goal', type: 'pick', opts: ['More sales', 'Launch a product', 'Get known', 'More messages and leads', 'Visits to the shop', 'Grow the account'], other: true },
      { id: 'success', label: 'What would make this a success for you', type: 'long', ph: 'Cost per sale under…, 50 orders a week, sold out…' },
      { id: 'channels', label: 'Where the videos will run', type: 'picks', opts: ['Instagram ads', 'TikTok ads', 'Instagram posts', 'TikTok posts', 'Facebook', 'YouTube', 'Website', 'In store screens'], other: true },
      { id: 'ads', label: 'Do you run paid ads today?', type: 'pick', opts: ['Yes, we manage them', 'Yes, an agency or freelancer does', 'Not yet'] },
      { id: 'results', label: 'What has worked or flopped before', type: 'long', hint: 'Share screenshots of results if you can. We review what you share and build on it.' },
    ],
  },
  {
    id: 'concepts', name: 'Ideas', title: 'Concepts and formats', min: 4,
    why: 'Bring every idea you have. We shape them into scripts for your approval.',
    fields: [
      { id: 'ideas', label: 'Ideas you already have', type: 'long', hint: 'Rough is fine: a scene, a joke, a line, a trend.' },
      { id: 'formats', label: 'Formats you like', type: 'picks', opts: ['Founder talking', 'Customer style (UGC)', 'Product demo', 'Before and after', 'Street interview', 'Sketch or skit', 'Unboxing', 'Tutorial', 'Testimonial', 'Trend', 'Cinematic'], other: true },
      { id: 'face', label: 'Who appears on camera', type: 'picks', opts: ['The founder', 'Your team', 'Actors or models', 'Creators or influencers', 'Hands and product only', 'Open to ideas'] },
      { id: 'must', label: 'Must appear in every video', type: 'picks', opts: ['Logo', 'Price', 'Promo code', 'Website', 'Phone number', 'Delivery info', 'Legal mention'], other: true },
      { id: 'music', label: 'Music and sound', type: 'pick', opts: ['Trending sounds', 'Calm and premium', 'Energetic', 'Local music', 'Voice over first', 'Up to Gecko'] },
    ],
  },
  {
    id: 'assets', name: 'Assets', title: 'Files we need from you', min: 3,
    why: 'Paste a Google Drive or WeTransfer link next to each one, or tell us you need help.',
    fields: [
      { id: 'files', label: 'Brand files', type: 'assets',
        items: ['Logo (vector or PNG)', 'Brand guidelines', 'Fonts', 'Product photos', 'Past videos and ads', 'Packaging', 'Reviews and screenshots'] },
      { id: 'colors', label: 'Brand colours', type: 'list', add: 'Add a colour', rows: 2,
        cols: [{ id: 'hex', label: 'Colour', type: 'color' }, { id: 'name', label: 'Where it is used', ph: 'Main, background, accent…' }] },
      { id: 'drive', label: 'One folder with everything', type: 'text', input: 'url', ph: 'Google Drive, Dropbox or WeTransfer link' },
    ],
  },
  {
    id: 'shoot', name: 'Shoot', title: 'Shoot day', min: 3,
    why: 'Where, when and what we need on set.',
    fields: [
      { id: 'place', label: 'Where we can shoot', type: 'picks', opts: ['Studio', 'Your shop', 'Your office or workshop', 'A home', 'Outdoors', 'Up to Gecko'], other: true },
      { id: 'address', label: 'Address, if at your place', type: 'text' },
      { id: 'dates', label: 'Dates that work, and dates to avoid', type: 'long' },
      { id: 'stock', label: 'Products available for the shoot', type: 'long', hint: 'Which ones, how many units, colours and sizes.' },
      { id: 'onset', label: 'Who from your side comes on shoot day', type: 'text' },
      { id: 'rules', label: 'Anything we should know about the place', type: 'long', ph: 'Opening hours, parking, permits, noise…' },
    ],
  },
  {
    id: 'approvals', name: 'Approvals', title: 'Feedback and sign off', min: 2,
    why: 'Who decides, how we reach them and the dates that matter.',
    fields: [
      { id: 'approver', label: 'Who gives final approval', type: 'list', add: 'Add a person', rows: 1,
        cols: [{ id: 'name', label: 'Name' }, { id: 'role', label: 'Role' }, { id: 'phone', label: 'WhatsApp or email' }] },
      { id: 'others', label: 'Anyone else who gives feedback', type: 'text' },
      { id: 'channel', label: 'Best way to reach you', type: 'pick', opts: ['WhatsApp', 'Email', 'Phone call', 'Client portal'] },
      { id: 'deadline', label: 'Date the first videos must be live', type: 'text', input: 'date', half: true },
      { id: 'plan', label: 'Plan', type: 'pick', opts: ['Test', 'Regular', 'Pro', 'Creative Partner', 'Campaign', 'Not decided'], half: true },
      { id: 'notes', label: 'Anything else', type: 'long' },
    ],
  },
];

// What happens after the sheet, in order. From the commercial rules Heni set on 25 Oct.
export const next = [
  ['Concepts', 'We turn this into concepts and scripts and send them for your approval.'],
  ['Shoot', 'We plan the day, book what is needed and shoot.'],
  ['First edits', 'First cuts arrive 7 days after the shoot, as watermarked previews.'],
  ['Finals', 'Once you approve, the final files are ready to download in your client portal.'],
] as const;
