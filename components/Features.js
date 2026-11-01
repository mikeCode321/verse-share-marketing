import Link from 'next/link';
import { Search, Sparkles, Star, Clock, BookOpen, Moon } from 'lucide-react';
import Reveal from './Reveal';

const FEATURES = [
  { Icon: Search, title: 'Smart search', text: 'Search by reference. Small typos in book names are corrected for you.' },
  { Icon: Sparkles, title: 'Feeling Holy', text: 'One tap for a random verse when you want to be surprised.' },
  { Icon: Star, title: 'Popular verses', text: 'A handful of favorites are always one tap away.' },
  { Icon: Clock, title: 'Recents', text: 'Verses you\u2019ve used are remembered on your device so you can reuse them.' },
  { Icon: BookOpen, title: 'Four translations', text: 'World English Bible, King James, American Standard, and Bible in Basic English.' },
  { Icon: Moon, title: 'Light and dark', text: 'Warm, readable colors that follow your phone\u2019s appearance.' },
];

export default function Features() {
  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <h2 className="section__title">Everything you need, nothing you don&rsquo;t</h2>
        </Reveal>
        <div className="grid">
          {FEATURES.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={(i % 3) * 100} className="card">
              <span className="card__icon" aria-hidden="true">
                <Icon size={22} strokeWidth={2} />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}