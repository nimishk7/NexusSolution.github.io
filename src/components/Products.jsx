import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from './Button';

const products = [
  {
    id: 1,
    title: 'DWC Pipes',
    desc: 'Double Wall Corrugated Pipes ideal for robust underground drainage & cable protection networking.',
    img: '/images/dwc_pipe.png',
    features: ['Leakproof joints', 'High flexibility', 'Chemical resistant']
  },
  {
    id: 2,
    title: 'HDPE Pipes',
    desc: 'Strong high-density polyethylene pipelines suitable for road, stormwater, and sewerage networks.',
    img: '/images/hdpe_pipe.png',
    features: ['Better soil grip', 'Rodent repellent (optional)', 'SN 4 & SN 8 Rating']
  },
  {
    id: 3,
    title: 'Couplers & Fittings',
    desc: 'Economical and reliable molded bends, tees, and cross fittings for 40mm OD to 300mm ID.',
    img: '/images/coupler_product.png',
    features: ['Flexible grip', 'Non-flame propagation', 'Available in distinct colors']
  },
  {
    id: 4,
    title: 'Spacer Products',
    desc: 'Tailor-made spacing solutions for organized conduit management and underground wiring.',
    img: '/images/spacer_product.png',
    features: ['Multi-conduit support', 'High rigid strength', 'Custom site dimensions']
  }
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Products = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

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

        <motion.div 
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group glass-card overflow-hidden relative transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_40px_-15px_rgba(255,106,0,0.4)] perspective-1000"
            >
              <div className="h-64 md:h-80 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 z-10 mix-blend-overlay group-hover:bg-primary/0 transition-all duration-500" />
                <img 
                  src={product.img} 
                  alt={product.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 md:p-8 relative z-20 bg-linear-to-t from-[#050505] via-[#111]/95 to-[#111]/80 -mt-10 backdrop-blur-xl border-t border-white/5">
                <h3 className="text-xl font-bold mb-3 uppercase tracking-wide group-hover:text-primary transition-colors text-white">
                  {product.title}
                </h3>
                <p className="text-white/70 mb-6 text-sm md:text-base leading-relaxed">
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

                <Button variant="outline" className="w-full">
                  Learn Details
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Products;
