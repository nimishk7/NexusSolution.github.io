import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiX, HiChevronLeft, HiChevronRight, HiZoomIn } from "react-icons/hi";

const images = [
  "/images/dwc_pipe.png",
  "/images/dwc_pipe_1_1774633638025.png",
  "/images/hdpe_pipe.png",
  "/images/couplers&fittings.png",
  "/images/spacer_product.png",
  "/images/mbbr_media.png",
  "/images/perforated_pipe_with_geotextile1.png",
  "/images/plb_pipe_1774629220092.png",
  "/images/rubber_rings_1.png",
  "/images/Img1.jfif",
  "/images/dwc_pipe_2_1774633674688.png",
  "/images/hdpe_pipe_1774629154510.png",
  "/images/couplers&fittings1.png",
  "/images/spacer_product1.png",
  "/images/mbbr_media_1.png",
  "/images/perforated_pipe_with_geotextile2.png",
  "/images/plb_pipe_2_1774633745071.png",
  "/images/rubber_rings_1774629435204.png",
  "/images/Img2.jfif",
  "/images/hdpe_pipe_2_1774633711898.png",
  "/images/couplers&fittings2.png",
  "/images/perforated_pipe_with_geotextile3.png",
  "/images/spacer_product2.png",
  "/images/mbbr_media_2.png",
  "/images/o_pvc_pipe_1774629591757.png",
  "/images/perforated_pvc_pipe_1774629504936.png",
  "/images/rubber_rings_2_1774633849074.png",
  "/images/Img3.jfif",
  "/images/couplers&fittings3.png",
  "/images/spacer_product3.png",
  "/images/perforated_pvc_pipe_2_1774633881443.png",
  "/images/moulded_fittings_1774629682092.png",
  "/images/Img4.jfif",
  "/images/Img5.jfif",
];

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showAllModal, setShowAllModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    if (!showAllModal) {
      document.body.style.overflow = "auto";
    }
  };

  const openAllModal = () => {
    setShowAllModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeAllModal = () => {
    setShowAllModal(false);
    if (!modalOpen) {
      document.body.style.overflow = "auto";
    }
  };

  const nextSlide = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback((e) => {
    e?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (modalOpen) {
        if (e.key === "ArrowRight") nextSlide();
        if (e.key === "ArrowLeft") prevSlide();
        if (e.key === "Escape") closeModal();
      } else if (showAllModal) {
        if (e.key === "Escape") closeAllModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, showAllModal, nextSlide, prevSlide]);

  return (
    <section
      id="gallery"
      className="py-24 bg-dark-bg text-white relative border-y border-white/5 overflow-hidden"
    >
      <div className="container mx-auto px-6 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 uppercase tracking-[0.2em] text-white">
            Project <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary filter drop-shadow-[0_0_10px_rgba(255,106,0,0.5)]">Showcase</span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-secondary via-primary to-transparent mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Explore our cutting-edge manufacturing facilities and premium
            product range.
          </p>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {images.slice(0, 10).map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full aspect-square relative group cursor-pointer overflow-hidden rounded-2xl bg-[#111111] border border-white/10 hover:border-primary/50 transition-colors shadow-xl hover:shadow-2xl hover:shadow-primary/20"
              onClick={() => openModal(index)}
            >
              <div className="w-full h-full relative">
                <img
                  src={src}
                  alt={`Project Showcase ${index + 1}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-primary/90 rounded-full text-white shadow-lg backdrop-blur-md"
                  >
                    <HiZoomIn size={32} />
                  </motion.div>
                  <span className="mt-4 font-semibold tracking-wide text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {images.length > 10 && (
          <div className="mt-12 text-center">
            <button
              onClick={openAllModal}
              className="text-white hover:text-primary underline underline-offset-8 decoration-2 hover:decoration-primary transition-colors text-lg font-medium tracking-wide"
            >
              View More
            </button>
          </div>
        )}
      </div>

      {/* All Images Grid Modal */}
      <AnimatePresence>
        {showAllModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex flex-col overflow-y-auto"
            data-lenis-prevent
          >
            <div className="sticky top-0 right-0 p-4 md:p-6 flex justify-end z-[10005]">
              <button
                className="text-white/70 hover:text-primary hover:rotate-90 transition-all duration-300 bg-black/50 p-3 rounded-full border border-white/10 hover:border-primary/50"
                onClick={closeAllModal}
              >
                <HiX size={32} />
              </button>
            </div>
            
            <div className="container mx-auto px-4 md:px-6 pb-20">
              <h3 className="text-3xl md:text-4xl font-black mb-12 text-center uppercase tracking-widest text-white">
                All <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary filter drop-shadow-[0_0_10px_rgba(255,106,0,0.5)]">Images</span>
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
                {images.map((src, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: (index % 10) * 0.05 }}
                    className="w-full aspect-square relative group cursor-pointer overflow-hidden rounded-2xl bg-[#111111] border border-white/10 hover:border-primary/50 transition-colors shadow-xl"
                    onClick={() => openModal(index)}
                  >
                    <div className="w-full h-full relative">
                      <img
                        src={src}
                        alt={`All Project Showcase ${index + 1}`}
                        className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <HiZoomIn size={32} className="text-white" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modal */}
      <AnimatePresence mode="wait">
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[20000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            data-lenis-prevent
            onClick={closeModal}
          >
            {/* Top Bar / Close */}
            <div className="absolute top-0 left-0 right-0 p-4 md:p-6 flex justify-end z-[20005] pointer-events-none">
              <button
                className="text-white/70 hover:text-primary hover:rotate-90 transition-all duration-300 bg-black/50 p-3 rounded-full border border-white/10 hover:border-primary/50 pointer-events-auto"
                onClick={closeModal}
              >
                <HiX size={32} />
              </button>
            </div>

            {/* Prev */}
            <button
              className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary p-3 md:p-4 bg-black/50 border border-white/10 hover:border-primary/50 rounded-full transition-all z-[20005] hover:scale-110 shadow-xl backdrop-blur-sm"
              onClick={prevSlide}
            >
              <HiChevronLeft size={32} />
            </button>

            {/* Next */}
            <button
              className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-primary p-3 md:p-4 bg-black/50 border border-white/10 hover:border-primary/50 rounded-full transition-all z-[20005] hover:scale-110 shadow-xl backdrop-blur-sm"
              onClick={nextSlide}
            >
              <HiChevronRight size={32} />
            </button>

            {/* Image Container */}
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative max-w-6xl w-full max-h-[85vh] h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[currentIndex]}
                alt={`Expanded Project ${currentIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-xl shadow-[0_0_50px_rgba(255,106,0,0.15)] border border-white/5"
              />

              {/* Image Counter */}
              <div className="absolute -bottom-12 md:-bottom-16 left-1/2 -translate-x-1/2 text-white/60 font-medium tracking-widest text-sm bg-black/40 px-5 py-2 rounded-full backdrop-blur-md border border-white/10 flex items-center gap-2">
                <span>{currentIndex + 1}</span>
                <span className="opacity-50">/</span>
                <span>{images.length}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
