// Sends what visitors give us to the Gecko app, so nothing lives only in WhatsApp:
//   saveLead  a brief or contact message, saved as a website prospect in the team app's Pipeline
//   track     one more in today's count for a page view, a brief step or a WhatsApp tap (no visitor data)
// Both are fire-and-forget: they never block the visitor or show an error, and WhatsApp still opens as before.
// Builds from main write to the live database; every other build (previews) writes to the testing one.

const live = import.meta.env.PUBLIC_INTAKE === 'live';
const backend = live
  ? {
      url: 'https://ryusfpyxozqmsjoirxgm.supabase.co',
      key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ5dXNmcHl4b3pxbXNqb2lyeGdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM0NzE5OTEsImV4cCI6MjEwOTA0Nzk5MX0.F6GhYc1mD0Q5Y3Hn1SSMM19CEAw7law_0BcIfp2Rkcs',
    }
  : {
      url: 'https://arzjqtysedaxktzyoxuf.supabase.co',
      key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyempxdHlzZWRheGt0enlveHVmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM2NTUxOTksImV4cCI6MjEwOTIzMTE5OX0.pN85_gbvJS7r4IYbjWzVWWy6i2DxlxDaHkEkfBjyhNs',
    };

function call(fn: string, body: unknown): Promise<boolean> {
  try {
    return fetch(`${backend.url}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      keepalive: true,
      headers: { apikey: backend.key, Authorization: `Bearer ${backend.key}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }).then((r) => r.ok, () => false);
  } catch {
    // Never let counting or saving get in the visitor's way.
    return Promise.resolve(false);
  }
}

const lang = () => (document.documentElement.lang === 'fr' ? 'fr' : 'en');

export type EventKind = 'view' | 'brief_start' | 'brief_done' | 'contact_done' | 'wa_click';

export function track(kind: EventKind): void {
  void call('count_site_event', { p_kind: kind, p_lang: lang() });
}

export function saveLead(data: {
  kind: 'brief' | 'contact' | 'lead';
  name?: string; brand?: string; email?: string; phone?: string; message?: string; plan?: string;
  answers?: Record<string, string>; website?: string;
}): Promise<boolean> {
  return call('submit_website_lead', { p_data: { ...data, lang: lang(), page: location.pathname } });
}
