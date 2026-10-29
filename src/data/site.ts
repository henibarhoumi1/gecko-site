// Contact details (from the team tool settings; confirm before launch).
export const site = {
  phone: '+216 26 191 555',
  whatsapp: 'https://wa.me/21626191555',
  email: 'contact@geckostudio.com',
  instagram: 'https://instagram.com/geckoagency_',
  instagramHandle: '@geckoagency_',
  // Every social profile shown on the contact page and in the footer. Add the others here once the links are confirmed.
  socials: [
    { name: 'Instagram', handle: '@geckoagency_', url: 'https://instagram.com/geckoagency_' },
  ],
  // Web3Forms access key for the forms. Empty = forms open WhatsApp with the answers filled in.
  formKey: '',
  // Live onboarding sheets (/onboarding/): the Gecko Supabase project. The anon key is public by design; the
  // database only exposes two functions to it (gecko/website/onboarding-live-sync.sql).
  sync: {
    url: 'https://qvvurndjthpujonhthjv.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF2dnVybmRqdGhwdWpvbmh0aGp2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTMyNzY1NjMsImV4cCI6MjEwODg1MjU2M30.Fix9z4ogXB2M7NrlMBlrYO3SgC_7rUsBzt4Wepyjfps',
  },
};
