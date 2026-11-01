import Reveal from './Reveal';

const STEPS = [
  {
    n: '1',
    title: 'Someone needs a word',
    text: 'A friend is having a hard week. You want to send more than a thumbs-up, but you can’t remember where that verse lives.',
  },
  {
    n: '2',
    title: 'Find it without leaving the chat',
    text: 'Open VerseShare from the Messages app drawer. Type “John 3:16”, even misspelled, and it finds the right passage.',
  },
  {
    n: '3',
    title: 'It lands in your message',
    text: 'The verse drops straight into the iMessage field, reference and translation included. Add your own words or just hit send.',
  },
];

export default function StorySteps() {
  return (
    <section className="section section--tint">
      <div className="container">
        <Reveal>
          <h2 className="section__title">A small moment, made easy</h2>
          <p className="section__lead">From &ldquo;I wish I had the right words&rdquo; to sent, in three taps.</p>
        </Reveal>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 140} className="step">
              <span className="step__num">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
