import LegalPage from '../../components/LegalPage';
import { SITE } from '../../lib/site';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" subtitle={`Last updated ${SITE.lastUpdated}`}>
      <p>
        VerseShare is an iMessage app for finding Bible verses and adding them to your messages. This policy
        explains what the app does with your information. The short version: there are no accounts, no ads,
        no analytics, and no tracking.
      </p>

      <h2>Information we collect</h2>
      <p>
        We do not collect, store, or sell any personal information. VerseShare has no user accounts and no
        servers of its own.
      </p>

      <h2>Information stored on your device</h2>
      <p>
        VerseShare saves your list of recent verses on your device so it is still there the next time you
        open the app. This list never leaves your device and is not synced or sent to us. You can remove
        a single verse by swiping it left (or using the Delete option in its menu), and deleting the
        app removes everything it saved.
      </p>

      <h2>Information sent over the internet</h2>
      <p>
        To fetch verse text, VerseShare sends the reference you searched for (for example &ldquo;John
        3:16&rdquo;) and the translation you selected to a third-party Bible text service,{' '}
        <a href="https://bible-api.com" target="_blank" rel="noopener noreferrer">bible-api.com</a>. Random
        verse requests are sent to the same service. Like any internet request, this makes your IP address
        visible to that service. We do not control that service and do not receive a copy of these
        requests. Please see their own policies for how they handle requests.
      </p>

      <h2>Your messages</h2>
      <p>
        VerseShare adds the verse you choose to the message field in iMessage. It cannot read your
        conversations, your contacts, or the message you are writing. Sending a message is done by you
        through Messages and is covered by Apple&rsquo;s policies.
      </p>

      <h2>Tracking and third parties</h2>
      <p>
        VerseShare contains no advertising, no analytics, and no tracking of any kind. The only third-party
        service it contacts is the Bible text service described above.
      </p>

      <h2>Children&rsquo;s privacy</h2>
      <p>
        Because VerseShare collects no personal information, it collects none from children either.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the updated version will be posted on this page with a new date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}
