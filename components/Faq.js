const QUESTIONS = [
  {
    q: 'I can’t find VerseShare in Messages.',
    a: 'Open a conversation, tap the + button, and look for VerseShare in the app drawer. If it isn’t there, swipe to the end of the drawer, tap More, and switch VerseShare on.',
  },
  {
    q: 'It says “Verse not found.”',
    a: 'Use the format “Book chapter:verse”, such as John 3:16 or Psalm 23:1-3. Check that the book name is spelled correctly. VerseShare will suggest a correction if it can.',
  },
  {
    q: 'Do I need an internet connection?',
    a: 'Yes. Verses are fetched online when you search. Verses in your Recents list are saved on your device, but they can only be re-sent when the app is open.',
  },
  {
    q: 'Which translations are available?',
    a: 'World English Bible, King James Version, American Standard Version, and Bible in Basic English. Choose one with the translation button under the search field.',
  },
  {
    q: 'How do I delete my recent verses?',
    a: 'Swipe a verse in the Recent list to the left and tap Delete, or press and hold it and choose Delete. Deleting the app removes everything it saved.',
  },
  {
    q: 'Can I edit the verse before sending?',
    a: 'Yes. The verse is added to the normal iMessage text field, so you can change it or add your own words before you send.',
  },
];

export default function Faq() {
  return (
    <div className="faq">
      {QUESTIONS.map((item) => (
        <details key={item.q} className="faq__item">
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
