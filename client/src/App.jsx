import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductsSection } from './components/ProductsSection';
import { ServicesSection } from './components/ServicesSection';
import { PricingSection } from './components/PricingSection';
import { ClientsSection } from './components/ClientsSection';
import { FAQSection } from './components/FAQSection';
import { BottomCTA } from './components/BottomCTA';
import { Footer } from './components/Footer';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll for navbar transparency effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-[#1E2330] overflow-x-hidden selection:bg-[#D2E823] selection:text-[#1E2330]">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        scrolled={scrolled} 
        scrollTo={scrollTo} 
      />
      <Hero />
      <ProductsSection />
      <ServicesSection />
      <PricingSection />
      <ClientsSection />
      <FAQSection />
      <BottomCTA />
      <Footer />
    </div>
  );
};

export default App;
