import './global.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SITE, asset } from '../lib/site';

export const metadata = {
  title: {
    default: `${SITE.name}: Send Bible Verses in iMessage`,
    template: `%s | ${SITE.name}`,
  },
  description:
    'Search any Bible verse, pick a favorite, or get a random one, and drop it straight into your iMessage conversation.',
  icons: { icon: asset('/icon.png'), apple: asset('/icon.png') },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
