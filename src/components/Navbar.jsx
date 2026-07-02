import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About Us', href: '#about' },
  { name: 'Products', href: '#products' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact Us', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      
      // Better active section detection
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the element is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      
      // If at absolute bottom, set to last section
      if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
        current = sections[sections.length - 1];
      }
      
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      const topPos = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topPos,
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 relative z-10 group">
          <img src="/images/logo.png" alt="Nexus Solutions" className="h-8 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`relative text-xs font-semibold tracking-wider uppercase transition-colors hover:text-secondary ${
                activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-300'
              }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-primary rounded-full shadow-[0_0_10px_rgba(255,106,0,0.8)]"
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden relative z-10 text-white hover:text-primary transition-colors p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg font-medium tracking-wider uppercase ${
                  activeSection === link.href.substring(1) ? 'text-primary' : 'text-gray-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
