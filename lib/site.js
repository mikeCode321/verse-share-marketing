// Edit these values in one place.
export const SITE = {
  name: 'VerseShare',
  tagline: 'Scripture, right inside iMessage.',
  supportEmail: 'support@yourdomain.com', // <-- change to your real forwarding address
  appStoreUrl: '', // <-- paste your App Store link once the app is live
  lastUpdated: 'October 31, 2026',
};

// Prefixes public-folder files with the GitHub Pages base path.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';
export const asset = (path) => `${BASE_PATH}${path}`;
