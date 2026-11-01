import Reveal from './Reveal';

// Shared layout for the Support and Privacy pages.
export default function LegalPage({ title, subtitle, children }) {
  return (
    <section className="legal">
      <div className="container container--narrow">
        <Reveal>
          <h1 className="legal__title">{title}</h1>
          {subtitle && <p className="muted legal__subtitle">{subtitle}</p>}
        </Reveal>
        <div className="prose">{children}</div>
      </div>
    </section>
  );
}
