import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatCard = ({ id, value, label, delay }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center justify-center p-6 border border-white/5 bg-[#111111]/80 backdrop-blur-sm shadow-xl rounded-2xl hover:bg-black hover:shadow-2xl hover:border-primary/50 transition-all cursor-default group"
    >
      <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-secondary to-primary mb-2 group-hover:drop-shadow-[0_0_15px_rgba(255,106,0,0.6)]">
        {value}
      </div>
      <div className="text-sm text-white/50 uppercase tracking-widest font-medium text-center">
        {label}
      </div>
    </motion.div>
  );
};

const AboutUs = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-24 md:py-32 bg-dark-bg relative overflow-hidden text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-b from-primary/5 to-transparent skew-x-12 transform origin-top-right mix-blend-screen pointer-events-none" />
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className="text-primary tracking-[0.2em] uppercase text-sm font-bold mb-4 drop-shadow-[0_0_5px_rgba(255,106,0,0.5)]">
              Nexus Solutions Sangli
            </h4>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Supplying Smart <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary via-white to-tertiary pt-2 block border-y border-white/10 py-2">
                Infrastructure
              </span>
            </h2>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
              With over 15+ years of experience, Nexus Solutions specializes in supplying a comprehensive range of Double Wall Corrugated (DWC) Pipes, from standard non-perforated pipes to perforated pipes with geotextile. We also provide custom pipe accessories engineered for underground drainage, sewerage, and cable protection networks.
            </p>
            <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 border-l-2 border-primary pl-4">
              Our commitment to quality assurance and continuous engineering innovation ensures that every product we deliver meets the highest global standards for rigidity, flexibility, and longevity.
            </p>

            <div className="grid grid-cols-2 gap-6 w-full lg:w-4/5 pt-4">
               <StatCard value="15+" label="Years Experience" delay={0.2} />
               <StatCard value="100%" label="Quality Assured" delay={0.4} />
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
            animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : { opacity: 0, scale: 0.9, rotateY: 15 }}
            transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
            className="relative h-[500px] md:h-[650px] w-full group perspective-1000"
          >
            <div className="absolute inset-0 bg-primary rounded-3xl transform translate-x-4 -translate-y-4 -z-10 group-hover:translate-x-6 group-hover:-translate-y-6 transition-transform duration-500 ease-out shadow-[0_0_40px_rgba(255,106,0,0.3)]" />
            
            <div className="w-full h-full relative rounded-3xl overflow-hidden glass shadow-2xl shadow-primary/20">
              <img 
                src="/images/factory_about.png" 
                alt="Nexus Solutions Modern Assembly Line for DWC and HDPE Pipe Manufacturing, Sangli Maharashtra" 
                loading="lazy"
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-linear-to-t from-[#050505]/90 via-[#050505]/40 to-transparent" />
              
              <div className="absolute bottom-10 left-10 p-6 glass-card rounded-2xl max-w-[80%] border-l-4 border-l-secondary shadow-xl shadow-black/80">
                <h3 className="text-xl font-bold mb-2 text-white">Modern Assembly Line</h3>
                <p className="text-sm text-white/70">Equipped with robotic precision and robust structural capabilities.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
