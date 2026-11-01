import Link from 'next/link';
import { SITE } from '../lib/site';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>&copy; {new Date().getFullYear()} {SITE.name}</p>
        <nav className="nav" aria-label="Footer">
          <Link href="/support/">Support</Link>
          <Link href="/privacy/">Privacy</Link>
          <a href={`mailto:${SITE.supportEmail}`}>Contact</a>
        </nav>
      </div>
    </footer>
  );
}
