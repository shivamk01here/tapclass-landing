// src/pages/Home.jsx
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonial from '../components/Testimonial';
import Integrations from '../components/Integrations';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <Testimonial />
      <Integrations />
      <CTA />
    </div>
  );
}
