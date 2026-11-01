import Reveal from './Reveal';
import AppStoreButton from './AppStoreButton';

export default function Cta() {
  return (
    <section className="cta">
      <div className="container">
        <Reveal>
          <h2>Share the word, one message at a time.</h2>
          <AppStoreButton light />
        </Reveal>
      </div>
    </section>
  );
}
