import Reveal from './Reveal';

const FEATURES = [
  { icon: '🔎', title: 'Smart search', text: 'Search by reference. Small typos in book names are corrected for you.' },
  { icon: '✨', title: 'Feeling Holy', text: 'One tap for a random verse when you want to be surprised.' },
  { icon: '⭐', title: 'Popular verses', text: 'A handful of favorites are always one tap away.' },
  { icon: '🕘', title: 'Recents', text: 'Verses you’ve used are remembered on your device so you can reuse them.' },
  { icon: '📖', title: 'Four translations', text: 'World English Bible, King James, American Standard, and Bible in Basic English.' },
  { icon: '🌙', title: 'Light and dark', text: 'Warm, readable colors that follow your phone’s appearance.' },
];

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">Everything you need, nothing you don&rsquo;t</h2>
        </Reveal>
        <div className="grid">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100} className="card">
              <span className="card__icon" aria-hidden="true">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
