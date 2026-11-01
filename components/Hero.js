import ChatDemo from './ChatDemo';
import AppStoreButton from './AppStoreButton';

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 className="rise" style={{ animationDelay: '100ms' }}>
            The right verse, <em>right when</em> they need it.
          </h1>
          <p className="lead rise" style={{ animationDelay: '220ms' }}>
            Look up any verse and add it to your message without leaving iMessage.
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
