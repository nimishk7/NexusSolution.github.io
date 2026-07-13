import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Button from './Button';
import ProductModal from './ProductModal';

const products = [
  {
    id: 1,
    title: 'DWC Pipes',
    desc: 'Double Wall Corrugated Pipes ideal for robust underground drainage & cable protection networking.',
    images: [
      '/images/dwc_pipe.png',
      '/images/dwc_pipe_1_1774633638025.png',
      '/images/dwc_pipe_2_1774633674688.png'
    ],
    features: ['Leakproof joints', 'High flexibility', 'Chemical resistant']
  },
  {
    id: 2,
    title: 'HDPE Pipes',
    desc: 'Strong high-density polyethylene pipelines suitable for road, stormwater, and sewerage networks.',
    images: [
      '/images/hdpe_pipe.png',
      '/images/hdpe_pipe_1774629154510.png',
      '/images/hdpe_pipe_2_1774633711898.png'
    ],
    features: ['Better soil grip', 'Rodent repellent (optional)', 'SN 4 & SN 8 Rating']
  },
  {
    id: 3,
    title: 'Couplers & Fittings',
    desc: 'Economical and reliable molded bends, tees, and cross fittings for 40mm OD to 300mm ID.',
    images: [
      '/images/couplers&fittings.png',
      '/images/couplers&fittings1.png',
      '/images/couplers&fittings3.png'
    ],
    features: ['Flexible grip', 'Non-flame propagation', 'Available in distinct colors']
  },
  {
    id: 4,
    title: 'Spacer Products',
    desc: 'Tailor-made spacing solutions for organized conduit management and underground wiring.',
    images: [
      '/images/spacer_product3.png',
      '/images/spacer_product.png',
      '/images/spacer_product2.png'
    ],
    features: ['Multi-conduit support', 'High rigid strength', 'Custom site dimensions']
  },
  {
    id: 5,
    title: 'STP MBBR Media',
    desc: 'High-performance bio-carriers designed to maximize active surface area and biological growth in wastewater treatment.',
    images: [
      '/images/mbbr_media.png',
      '/images/mbbr_media_1.png',
      '/images/mbbr_media_2.png'
    ],
    features: ['High specific surface area', 'Virgin HDPE material', 'Self-cleaning design']
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// Sub-component for individual product card with auto-sliding images
const ProductCard = ({ product, onSelect }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    if (!product.images || product.images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % product.images.length);
    }, 2500); // changes every 3.5 seconds
    return () => clearInterval(interval);
  }, [product.images]);

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -8 }}
      className="w-full sm:w-[380px] flex-shrink-0 snap-center group glass-card overflow-hidden relative transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(255,106,0,0.4)] perspective-1000"
    >
      <div className="h-64 md:h-80 w-full relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay group-hover:bg-primary/0 transition-all duration-500" />
        
        {/* Sliding Images with cross-fade animation */}
        <div className="w-full h-full relative">
          <AnimatePresence mode="wait">
            <motion.img 
              key={currentImgIndex}
              src={product.images[currentImgIndex]} 
              alt={`${product.title} view ${currentImgIndex + 1}`} 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>

        {/* Indicator dots inside the card image */}
        {product.images.length > 1 && (
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/40 px-2.5 py-1 rounded-full backdrop-blur-xs">
            {product.images.map((_, idx) => (
              <span 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-350 ${idx === currentImgIndex ? 'bg-primary w-3' : 'bg-white/50'}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="p-6 md:p-8 relative z-20 bg-linear-to-t from-[#050505] via-[#111]/95 to-[#111]/80 -mt-10 backdrop-blur-xl border-t border-white/5">
        <h3 className="text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-primary transition-colors text-white">
          {product.title}
        </h3>
        <p className="text-white/70 mb-6 text-sm md:text-base leading-relaxed h-12 overflow-hidden line-clamp-2">
          {product.desc}
        </p>
        
        <ul className="mb-8 space-y-2">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-3 text-sm text-gray-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>

        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onSelect(product)}
        >
          Learn Details
        </Button>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedProduct, setSelectedProduct] = useState(null);
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      const oneThird = scrollWidth / 3;

      // Handle seamless wrap-around at extreme edges
      if (scrollLeft < 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = scrollLeft + oneThird;
        container.style.scrollBehavior = 'smooth';
      } else if (scrollLeft > scrollWidth - clientWidth - 10) {
        container.style.scrollBehavior = 'auto';
        container.scrollLeft = scrollLeft - oneThird;
        container.style.scrollBehavior = 'smooth';
      }

      // Calculate progress based on relative position within a single set
      const relativeScrollLeft = scrollLeft % oneThird;
      const maxRelativeScroll = oneThird - clientWidth;
      const progress = maxRelativeScroll > 0 ? (relativeScrollLeft / maxRelativeScroll) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    }
  };

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 412; // Matches card width (380px) + gap (32px)
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const handleInitialPosition = () => {
        const oneThird = container.scrollWidth / 3;
        container.scrollLeft = oneThird;
        handleScroll();
      };
      const timer = setTimeout(handleInitialPosition, 100);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (isHovered || !inView) return;

    let intervalId = null;

    // Start auto-scroll after 3.5 seconds
    const delayTimeout = setTimeout(() => {
      intervalId = setInterval(() => {
        if (scrollContainerRef.current) {
          const container = scrollContainerRef.current;
          container.scrollBy({
            left: 412, // Approximate card width + gap
            behavior: 'smooth'
          });
        }
      }, 3500);
    }, 3500);

    return () => {
      clearTimeout(delayTimeout);
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isHovered, inView]);

  return (
    <section id="products" className="py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-secondary/10 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[60%] h-[60%] bg-tertiary/10 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/10 blur-[150px] mix-blend-screen pointer-events-none rounded-full" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-wider text-white">
            Manufacturing Excellence
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-secondary via-primary to-transparent mx-auto mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg border-x border-white/10 px-6 py-2">
            Engineered precision from heavy-duty DWC pipelines to specialized spacer products. Build the foundation of tomorrow.
          </p>
        </motion.div>

        {/* Carousel Container Wrapper */}
        <div 
          ref={ref} 
          className="relative group/scroll px-2 md:px-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Buttons (Desktop only) */}
          <button 
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/75 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover/scroll:opacity-100 hover:scale-110 hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] hidden md:flex items-center justify-center`}
            aria-label="Scroll products left"
          >
            <HiChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-30 p-3.5 rounded-full bg-black/75 border border-white/10 text-white backdrop-blur-md opacity-0 group-hover/scroll:opacity-100 hover:scale-110 hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.5)] hidden md:flex items-center justify-center`}
            aria-label="Scroll products right"
          >
            <HiChevronRight className="w-6 h-6" />
          </button>

          {/* Horizontal Flex Cards Row */}
          <motion.div 
            ref={scrollContainerRef}
            id="products-container"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-8 pb-10 snap-x snap-mandatory scroll-smooth"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch' 
            }}
          >
            {/* Custom Webkit scrollbar hiding rule */}
            <style>{`
              #products-container::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            
            {[...products, ...products, ...products].map((product, index) => (
              <ProductCard 
                key={`${product.id}-${index}`}
                product={product}
                onSelect={setSelectedProduct}
              />
            ))}
          </motion.div>

          {/* Bottom Scroll Indicator Progress Bar */}
          <div className="w-full max-w-[200px] mx-auto bg-white/10 h-[3px] rounded-full overflow-hidden mt-6 relative">
            <div 
              className="bg-linear-to-r from-secondary to-primary h-full transition-all duration-150 ease-out rounded-full"
              style={{ width: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Product Details Modal Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Products;
