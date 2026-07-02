import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiX, HiCheck, HiCheckCircle, HiInformationCircle, HiLightBulb, HiOfficeBuilding } from 'react-icons/hi';
import { productDetails } from '../data/productDetails';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const productData = productDetails[product.id];
  if (!productData) return null;

  // Track active tab if the product has tabs (e.g., DWC Pipes)
  const [activeTabId, setActiveTabId] = useState(
    productData.hasTabs ? productData.tabs[0].id : null
  );

  // Lock background body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Determine current active content
  const details = productData.hasTabs
    ? productData.tabs.find((t) => t.id === activeTabId)
    : productData;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-[#0d0d0d]/95 border border-white/10 rounded-2xl shadow-[0_0_50px_rgba(255,106,0,0.15)] flex flex-col overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 border-b border-white/5 flex items-center justify-between bg-black/40">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                Product Details
              </span>
              <h2 className="text-xl md:text-2xl font-black uppercase text-white tracking-wide mt-1">
                {product.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 text-white/70 hover:text-white hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Close modal"
            >
              <HiX className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content Area */}
          <div
            className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 scrollbar-thin scrollbar-thumb-white/10"
            data-lenis-prevent
          >
            {/* Tab Selector (DWC Pipes Only) */}
            {productData.hasTabs && (
              <div className="flex justify-center mb-6">
                <div className="flex bg-white/5 p-1 rounded-full border border-white/5 relative">
                  {productData.tabs.map((tab) => {
                    const isActive = activeTabId === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTabId(tab.id)}
                        className={`relative z-10 px-5 py-2 md:px-8 md:py-2.5 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                          isActive
                            ? 'text-white bg-primary shadow-[0_4px_15px_rgba(255,106,0,0.4)]'
                            : 'text-white/60 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Intro Header */}
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3 tracking-wide">
                {details.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                {details.description}
              </p>
            </div>

            {/* Key Specifications (Grid Layout) */}
            <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 md:p-6 space-y-4">
              <h4 className="text-sm font-black uppercase text-primary tracking-wider flex items-center gap-2">
                <HiInformationCircle className="w-5 h-5" /> Key Specifications & Dimensions
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-2">
                {details.specs.map((spec, idx) => (
                  <div key={idx} className="border-l-2 border-primary/40 pl-4 py-1">
                    <span className="text-xs uppercase font-semibold text-gray-500 tracking-wider block">
                      {spec.label}
                    </span>
                    <span className="text-sm text-white font-medium block mt-1 leading-relaxed">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Unique & Salient Features */}
            <div className="space-y-4">
              <h4 className="text-sm font-black uppercase text-primary tracking-wider flex items-center gap-2">
                <HiCheckCircle className="w-5 h-5" /> Unique & Salient Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {details.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-primary/20 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <HiCheck className="w-4.5 h-4.5 text-primary group-hover:scale-110 transition-transform" />
                      <h5 className="font-bold text-sm text-white uppercase tracking-wide">
                        {feature.title}
                      </h5>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 leading-relaxed pl-6">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Advantages and Applications (2-Column Grid) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Advantages */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase text-primary tracking-wider flex items-center gap-2">
                  <HiLightBulb className="w-5 h-5" /> Advantages
                </h4>
                <ul className="space-y-3">
                  {details.advantages.map((adv, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span>{adv}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Applications */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase text-primary tracking-wider flex items-center gap-2">
                  <HiOfficeBuilding className="w-5 h-5" /> Applications
                </h4>
                <ul className="space-y-3">
                  {details.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-gray-400 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Footer Shadow/Spacer */}
          <div className="p-4 bg-black/40 border-t border-white/5 text-center">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">
              Nexus Solutions • High-Performance Infrastructure
            </p>
          </div>
        </motion.div>
      </div>
  );
};

export default ProductModal;
