import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import StructuredData from './components/StructuredData';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Products from './components/Products';
import Gallery from './components/Gallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Always start at the top on every page load / refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  
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
        {/* SEO Meta Tags */}
        <Helmet>
          {/* Primary */}
          <title>Nexus Solutions | DWC &amp; HDPE Pipe Manufacturer in Sangli, Maharashtra</title>
          <meta name="description" content="Nexus Solutions, Sangli — Manufacturer &amp; supplier of DWC Pipes, HDPE Pipelines, Couplers, Spacer Products &amp; STP MBBR Media. 15+ years of infrastructure excellence. Call +91 92845 93597." />
          <meta name="keywords" content="DWC Pipe Manufacturer Sangli, HDPE Pipe Supplier Maharashtra, Double Wall Corrugated Pipe, Coupler Fittings Manufacturer, Spacer Products, STP MBBR Media, Underground Drainage Pipe India, Cable Protection Pipe, Nexus Solutions Sangli" />
          <meta name="robots" content="index, follow" />
          <meta name="author" content="Nexus Solutions" />
          <link rel="canonical" href="https://nexus-solutions.co.in/" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://nexus-solutions.co.in/" />
          <meta property="og:site_name" content="Nexus Solutions" />
          <meta property="og:locale" content="en_IN" />
          <meta property="og:title" content="Nexus Solutions | DWC &amp; HDPE Pipe Manufacturer in Sangli" />
          <meta property="og:description" content="Manufacturer &amp; supplier of DWC Pipes, HDPE Pipelines, Couplers, Spacer Products &amp; STP MBBR Media in Sangli, Maharashtra. 15+ years of excellence." />
          <meta property="og:image" content="https://nexus-solutions.co.in/images/factory_about.png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="Nexus Solutions Manufacturing Facility, Sangli" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Nexus Solutions | DWC &amp; HDPE Pipe Manufacturer in Sangli" />
          <meta name="twitter:description" content="Manufacturer &amp; supplier of DWC Pipes, HDPE Pipelines, Couplers &amp; more. Based in Sangli, Maharashtra." />
          <meta name="twitter:image" content="https://nexus-solutions.co.in/images/factory_about.png" />

          {/* Geo / Local SEO */}
          <meta name="geo.region" content="IN-MH" />
          <meta name="geo.placename" content="Sangli, Maharashtra, India" />
          <meta name="geo.position" content="16.8524;74.5815" />
          <meta name="ICBM" content="16.8524, 74.5815" />
          <meta name="contact" content="nexussangli24@gmail.com" />
        </Helmet>

        {/* Structured Data (JSON-LD for Google) */}
        <StructuredData />

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
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
}

export default App;
