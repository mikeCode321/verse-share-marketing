import ChatDemo from './ChatDemo';
import AppStoreButton from './AppStoreButton';
import { SITE } from '../lib/site';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow rise" style={{ animationDelay: '0ms' }}>An iMessage app</p>
          <h1 className="rise" style={{ animationDelay: '100ms' }}>
            The right verse, <em>right when</em> they need it.
          </h1>
          <p className="lead rise" style={{ animationDelay: '220ms' }}>
            {SITE.name} puts the Bible inside Messages. Type a reference, tap a favorite, or let it surprise
            you, and the verse lands in your message ready to send.
          </p>
          <div className="rise" style={{ animationDelay: '340ms' }}>
            <AppStoreButton />
          </div>
        </div>
        <div className="hero__demo rise" style={{ animationDelay: '300ms' }}>
          <ChatDemo />
        </div>
      </div>
    </section>
  );
}
