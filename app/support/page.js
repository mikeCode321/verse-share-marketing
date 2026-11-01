import LegalPage from '../../components/LegalPage';
import Faq from '../../components/Faq';
import { SITE } from '../../lib/site';

export const metadata = { title: 'Support' };

export default function SupportPage() {
  return (
    <LegalPage title="Support">
      <div className="support-card">
        <p className="support-card__label">Email</p>
        <a className="support-card__email" href={`mailto:${SITE.supportEmail}?subject=VerseShare%20Support`}>
          {SITE.supportEmail}
        </a>
        <p className="muted">
          Tell me which iPhone and iOS version you use and what happened. A screenshot helps.
        </p>
      </div>

      <h2>Frequently asked questions</h2>
      <Faq />
    </LegalPage>
  );
}
