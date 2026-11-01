import Link from 'next/link';
import { SITE, asset } from '../lib/site';

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="brand">
          <img src={asset('/icon.png')} alt="" width="32" height="32" className="brand__icon" />
          <span>{SITE.name}</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/support/">Support</Link>
          <Link href="/privacy/">Privacy</Link>
        </nav>
      </div>
    </header>
  );
}
