import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiShieldCheck, HiDocumentText } from 'react-icons/hi';

// ─── Helper: render a content item (string, or array = bullet list) ───────────
const ContentBlock = ({ item }) => {
  if (Array.isArray(item)) {
    return (
      <ul className="space-y-2 mt-2 mb-3 pl-2">
        {item.map((bullet, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <p className="text-sm text-white/60 leading-relaxed mb-3">{item}</p>
  );
};

// ─── Main Modal ────────────────────────────────────────────────────────────────
const LegalModal = ({ doc, onClose }) => {
  const [activeSection, setActiveSection] = useState(doc?.sections?.[0]?.id ?? '');
  const [tocOpen, setTocOpen] = useState(false);
  const scrollRef = useRef(null);
  const sectionRefs = useRef({});

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  // Escape key closes modal
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // IntersectionObserver — highlight active TOC item as user scrolls
  useEffect(() => {
    if (!doc) return;
    const observers = [];
    doc.sections.forEach(({ id }) => {
      const el = sectionRefs.current[id];
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { root: scrollRef.current, rootMargin: '-20% 0px -60% 0px', threshold: 0 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [doc]);

  const scrollToSection = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setActiveSection(id);
    setTocOpen(false);
  };

  if (!doc) return null;

  const isPrivacy = doc.title === 'Privacy Policy';
  const Icon = isPrivacy ? HiShieldCheck : HiDocumentText;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-3 sm:p-6">
      {/* ── Backdrop ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
      />

      {/* ── Modal Shell ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 24 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="relative w-full max-w-5xl max-h-[92vh] flex flex-col bg-[#0d0d0d] border border-white/10 rounded-2xl shadow-[0_0_60px_rgba(255,106,0,0.12)] overflow-hidden z-10"
      >
        {/* ── Header ── */}
        <div className="flex-shrink-0 px-5 sm:px-8 py-5 border-b border-white/8 bg-black/50 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center flex-shrink-0">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">
                Nexus Solutions · Legal
              </p>
              <h2 className="text-base sm:text-xl font-black uppercase text-white tracking-wide truncate">
                {doc.title}
              </h2>
            </div>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <span className="hidden sm:block text-[10px] text-white/30 uppercase tracking-wider">
              Updated: {doc.lastUpdated}
            </span>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Close"
            >
              <HiX className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="flex flex-1 overflow-hidden">

          {/* ── TOC Sidebar (Desktop) ── */}
          <aside className="hidden lg:flex flex-col w-60 flex-shrink-0 border-r border-white/5 bg-black/30 overflow-y-auto">
            <div className="p-4 pt-5">
              <p className="text-[9px] uppercase tracking-widest text-white/30 font-semibold mb-3 px-1">
                Contents
              </p>
              <nav className="space-y-0.5">
                {doc.sections.map(({ id, heading }) => {
                  const label = heading.replace(/^\d+\.\s*/, '');
                  const isActive = activeSection === id;
                  return (
                    <button
                      key={id}
                      onClick={() => scrollToSection(id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all duration-200 leading-snug ${
                        isActive
                          ? 'bg-primary/15 text-primary font-semibold border border-primary/20'
                          : 'text-white/40 hover:text-white/70 hover:bg-white/5'
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ── Main Scroll Area ── */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto"
            data-lenis-prevent
          >
            {/* Mobile TOC Toggle */}
            <div className="lg:hidden px-5 pt-4">
              <button
                onClick={() => setTocOpen((p) => !p)}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/60 hover:text-white hover:bg-white/8 transition-colors"
              >
                <span className="font-semibold uppercase tracking-wider">Table of Contents</span>
                <span className={`text-white/40 transition-transform duration-200 ${tocOpen ? 'rotate-180' : ''}`}>▼</span>
              </button>
              <AnimatePresence>
                {tocOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <nav className="mt-2 p-3 bg-black/40 rounded-xl border border-white/8 space-y-1">
                      {doc.sections.map(({ id, heading }) => {
                        const label = heading.replace(/^\d+\.\s*/, '');
                        return (
                          <button
                            key={id}
                            onClick={() => scrollToSection(id)}
                            className="w-full text-left px-3 py-2 rounded-lg text-xs text-white/50 hover:text-white hover:bg-white/5 transition-colors"
                          >
                            {label}
                          </button>
                        );
                      })}
                    </nav>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Intro */}
            <div className="px-5 sm:px-8 pt-6 pb-2">
              <div className="p-4 sm:p-5 rounded-xl bg-primary/5 border border-primary/15 mb-2">
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">{doc.intro}</p>
              </div>
              <p className="text-[10px] text-white/25 uppercase tracking-wider mt-3">
                Effective Date: {doc.effectiveDate}
              </p>
            </div>

            {/* Sections */}
            <div className="px-5 sm:px-8 pb-8 pt-4 space-y-8">
              {doc.sections.map(({ id, heading, content }) => (
                <div
                  key={id}
                  ref={(el) => { sectionRefs.current[id] = el; }}
                  className="scroll-mt-4"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-px flex-1 bg-white/5" />
                    <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-primary flex-shrink-0">
                      {heading}
                    </h3>
                    <div className="h-px flex-1 bg-white/5" />
                  </div>
                  <div>
                    {content.map((item, idx) => (
                      <ContentBlock key={idx} item={item} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Footer Bar ── */}
        <div className="flex-shrink-0 px-6 py-3 bg-black/50 border-t border-white/5 flex items-center justify-between gap-4">
          <p className="text-[10px] text-white/25 uppercase tracking-widest">
            © {new Date().getFullYear()} Nexus Solutions · All Rights Reserved
          </p>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-full bg-white/5 hover:bg-primary/20 border border-white/10 hover:border-primary/40 text-xs text-white/50 hover:text-primary transition-all duration-200 uppercase tracking-wider font-semibold"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LegalModal;
