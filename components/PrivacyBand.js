import Link from 'next/link';
import Reveal from './Reveal';

export default function PrivacyBand() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="band">
          <h2>Private by design</h2>
          <p>
            No accounts. No ads. No tracking. Your recent verses stay on your phone, and the app can&rsquo;t
            read your conversations.
          </p>
          <Link href="/privacy/" className="link">Read the privacy policy &rarr;</Link>
        </Reveal>
      </div>
    </section>
  );
}
