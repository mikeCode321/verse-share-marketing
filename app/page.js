import Hero from '../components/Hero';
import StorySteps from '../components/StorySteps';
import Features from '../components/Features';
import Screenshots from '../components/Screenshots';
import Privacy from '../components/PrivacyBand';
import Cta from '../components/Cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      <StorySteps />
      <Features />
      <Screenshots />
      <Privacy />
      <Cta />
    </>
  );
}
