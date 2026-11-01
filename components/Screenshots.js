import Reveal from './Reveal';
import { asset } from '../lib/site';

// Put these files in /public/screenshots/ (see README for how to rename yours).
const SHOTS = [
  { src: '/screenshots/shot-1.png', alt: 'Searching for a verse in VerseShare' },
  { src: '/screenshots/shot-2.png', alt: 'A verse inserted into the iMessage field' },
  { src: '/screenshots/shot-3.png', alt: 'Recent and popular verses list' },
];

export default function Screenshots() {
  return (
    <section className="section section--tint">
      <div className="container">
        <Reveal>
          <h2 className="section__title">See it in Messages</h2>
        </Reveal>
        <div className="shots">
          {SHOTS.map((s, i) => (
            <Reveal key={s.src} delay={i * 140} className="shot">
              <img src={asset(s.src)} alt={s.alt} loading="lazy" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
