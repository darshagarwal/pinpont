import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Venues from './components/Venues';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Team from './components/Team';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Venues />
      <Team />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;