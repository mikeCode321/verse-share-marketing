'use client';
import { useEffect, useState } from 'react';

const REF = 'John 3:16';
const VERSE =
  'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life. — John 3:16 (WEB)';

// A looping mock of the app: friend asks -> you search -> verse drops in -> you send.
export default function ChatDemo() {
  const [typed, setTyped] = useState('');
  const [stage, setStage] = useState('typing'); // typing | inserted | sent

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setTyped(REF);
      setStage('sent');
      return;
    }
    let cancelled = false;
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

    (async () => {
      while (!cancelled) {
        setStage('typing');
        setTyped('');
        await sleep(1200);
        for (let i = 1; i <= REF.length; i++) {
          if (cancelled) return;
          setTyped(REF.slice(0, i));
          await sleep(110);
        }
        await sleep(600);
        if (cancelled) return;
        setStage('inserted');
        await sleep(2400);
        if (cancelled) return;
        setStage('sent');
        await sleep(4000);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  const sent = stage === 'sent';

  return (
    <div className="phone" aria-label="Animated demo of VerseShare in iMessage" role="img">
      <div className="phone__notch" />
      <div className="phone__screen">
        <div className="chat">
          <div className="chat__header">Sarah</div>
          <div className="chat__thread">
            <div className="bubble bubble--in">Rough week. Got anything encouraging? 🙏</div>
            {sent && <div className="bubble bubble--out bubble--pop">{VERSE}</div>}
          </div>
          <div className="chat__input">
            <span className={stage === 'inserted' ? 'chat__input-text' : 'chat__input-placeholder'}>
              {stage === 'inserted' ? VERSE : 'iMessage'}
            </span>
            <span className={`chat__send ${stage === 'inserted' ? 'is-ready' : ''}`}>↑</span>
          </div>
        </div>

        <div className="drawer">
          <div className="drawer__row">
            <div className="drawer__field">
              {typed || <span className="chat__input-placeholder">e.g. John 3:16</span>}
              {stage === 'typing' && <span className="caret" />}
            </div>
            <div className="drawer__button">Search</div>
          </div>
          <div className="drawer__item">
            <div className="drawer__item-top">
              <strong>Psalm 23:1</strong>
              <span className="pill">WEB</span>
            </div>
            <span className="muted drawer__snippet">The Lord is my shepherd; I shall not want.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
