import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import AutomationExamples from './components/AutomationExamples';
import MarketImpact from './components/MarketImpact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <AutomationExamples />
      <MarketImpact />
      <ContactForm />
      <Footer />
    </main>
  );
}
