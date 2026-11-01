import LegalPage from '../../components/LegalPage';
import { SITE } from '../../lib/site';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" subtitle={`Last updated ${SITE.lastUpdated}`}>
      <p>
        VerseShare is an iMessage app for finding Bible verses and adding them to your messages. This page
        explains what the app stores, what it sends over the internet, and who can see it.
      </p>

      <div className="glance">
        <h2>At a glance</h2>
        <ul>
          <li>No accounts, ads, analytics, or tracking.</li>
          <li>Your recent verses are saved on your device only.</li>
          <li>Searches are sent to a third-party Bible text service to fetch verses.</li>
          <li>The app cannot read your messages or contacts.</li>
        </ul>
      </div>

      <h2>What stays on your device</h2>
      <p>
        VerseShare remembers up to 25 of your most recent verses (the reference, text, and translation) so
        you can reuse them. This list is stored in the app&rsquo;s private storage on your phone. We never
        receive it. It may be included in your device backups, which are controlled by your Apple account
        settings.
      </p>

      <h2>What is sent over the internet</h2>
      <p>
        When you search, VerseShare sends the reference you typed (for example &ldquo;John 3:16&rdquo;) and
        your chosen translation to <a href="https://bible-api.com" target="_blank" rel="noopener noreferrer">bible-api.com</a>,
        a third-party service that provides Bible text. &ldquo;Feeling Holy&rdquo; sends a request for a
        random verse in your chosen translation to the same service.
      </p>
      <p>
        Like any internet request, these requests reveal your IP address to that service. It is run by
        someone else, so we do not control how it handles requests and we do not receive a copy of them.
        Nothing else is sent: no account details, no device identifiers, and none of your messages.
      </p>

      <h2>Your messages</h2>
      <p>
        VerseShare adds the verse you choose to the message field in Messages. It cannot read your
        conversations, your contacts, or the text you have already typed. You decide whether to send the
        message, and sending is handled by Apple&rsquo;s Messages app.
      </p>

      <h2>Tracking and third parties</h2>
      <p>
        VerseShare contains no advertising, analytics, or tracking tools and shares no data with
        advertisers or data brokers. The only third-party service it contacts is the Bible text service
        described above.
      </p>

      <h2>This website</h2>
      <p>
        This website has no accounts, cookies, or analytics of its own. It is hosted on GitHub Pages, and
        GitHub may log basic visit information, such as IP addresses, under its own privacy policy.
      </p>

      <h2>If you contact support</h2>
      <p>
        If you email us, we receive your email address and whatever you include in the message. We use it
        only to reply and to fix problems, and we don&rsquo;t share it.
      </p>

      <h2>Deleting your data</h2>
      <p>
        Swipe a verse in your Recent list to the left and tap Delete, or press and hold it and choose
        Delete. Deleting the app removes everything it saved on your device. We hold no other copy.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes, the new version will be posted here with an updated date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about privacy? Email <a href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
      </p>
    </LegalPage>
  );
}