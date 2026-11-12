/**
 * Prefer a single indexable host.
 * www (and any non-canonical host) previously served 200 with
 * <link rel="canonical" href="https://abq.construction/..."> which
 * Search Console reports as "Alternate page with proper canonical tag".
 */
const CANONICAL_HOST = 'abq.construction';

interface Env {
  ASSETS: Fetcher;
}

function shouldRedirectToCanonical(hostname: string): boolean {
  const host = hostname.toLowerCase();
  if (host === CANONICAL_HOST) return false;
  if (host === `www.${CANONICAL_HOST}`) return true;
  // Preview / workers.dev hosts should not compete with the apex domain.
  if (host.endsWith('.workers.dev')) return true;
  return false;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (shouldRedirectToCanonical(url.hostname)) {
      url.protocol = 'https:';
      url.hostname = CANONICAL_HOST;
      url.port = '';
      return Response.redirect(url.toString(), 301);
    }

    return env.ASSETS.fetch(request);
  },
};
