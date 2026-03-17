import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedAlbum from './components/FeaturedAlbum';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { PlantDivider, FloatingLeaves } from './components/PlantDecorations';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-cream">
      {/* Subtle dots pattern overlay */}
      <div className="fixed inset-0 z-0 comic-dots opacity-40 pointer-events-none" />
      
      {/* Floating leaves in background */}
      <FloatingLeaves />
      
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <PlantDivider />
        <FeaturedAlbum />
        <PlantDivider />
        <About />
        <PlantDivider />
        <Services />
        <PlantDivider />
        <Portfolio />
        <PlantDivider />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
