import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  
  // Lock/unlock scroll during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isLoading]);

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="bg-dark-bg min-h-screen text-white font-sans selection:bg-primary selection:text-white">
        <Toaster position="top-right" reverseOrder={false} />
        {/* SEO Setup */}
        <Helmet>
          <title>Nexus Solutions | Industrial Plastic Pipe Infrastructure</title>
          <meta name="description" content="Premium DWC, HDPE pipes, Couplers, and Spacer Manufacturers. Supplying durable underground drainage and cable protection infrastructure." />
          <meta name="keywords" content="HDPE Pipe Manufacturer, DWC Pipe Manufacturer, Plastic Pipe Supplier, Coupler Manufacturer, Spacer Manufacturer, Infrastructure Pipe Solutions India" />
          <meta property="og:title" content="Nexus Solutions | Advanced Pipe Manufacturing" />
          <meta property="og:description" content="High-tech engineering and supply of Double Wall Corrugated and HDPE piping systems." />
          <meta property="og:image" content="/images/factory_about.png" />
          <meta property="og:type" content="website" />
          <html lang="en" />
        </Helmet>

        {/* Layout */}
        <Navbar />
        <main>
          <Hero />
          <AboutUs />
          <Products />
          <Gallery />
          <ContactUs />
        </main>
        <Footer />
        
      </div>
    </HelmetProvider>
  );
}

export default App;
