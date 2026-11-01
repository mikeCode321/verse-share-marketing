import { SITE } from '../lib/site';

// Shows "Coming soon" until you paste your App Store URL into lib/site.js.
export default function AppStoreButton({ light = false }) {
  const live = Boolean(SITE.appStoreUrl);
  const className = `btn ${light ? 'btn--light' : 'btn--primary'}`;
  if (!live) {
    return (
      <span className={`${className} btn--disabled`} aria-disabled="true">
        Coming soon to the App Store
      </span>
    );
  }
  return (
    <a className={className} href={SITE.appStoreUrl}>
      Download on the App Store
    </a>
  );
}
