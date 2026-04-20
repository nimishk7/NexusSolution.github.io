import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Button from "./Button";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-dark-bg"
    >
      {/* Background Parallax Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 z-0 object-cover w-full h-full scale-[1.1]"
      >
        <img
          src="/images/hero_bg.png"
          alt="Nexus Solutions Manufacturing Facility"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for DWC Theme */}
        <div className="absolute inset-0 bg-black/70 bg-linear-to-t from-dark-bg via-dark-bg/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
      </motion.div>

      {/* Hero Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 text-center container mx-auto px-6 max-w-5xl mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-6 flex justify-center"
        >
          <span className="px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary border border-primary/30 rounded-full bg-black/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,106,0,0.3)]">
            Next Generation Infrastructure
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-2xl font-sans"
        >
          Engineering Durable <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-secondary to-tertiary relative flex flex-col items-center filter drop-shadow-[0_0_15px_rgba(255,106,0,0.5)]">
            Pipe Infrastructure
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
              className="mt-2 block w-[150px] h-1 bg-linear-to-r from-transparent via-tertiary to-transparent shadow-[0_0_10px_rgba(14,165,233,0.8)]"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto mb-10"
        >
          Pioneering smart underground drainage, cable protection, and
          customized plastic piping solutions with over 15 years of industry
          excellence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-30"
        >
          <a href="#products">
            <Button variant="primary">Explore Products</Button>
          </a>
          <a href="#about">
            <Button variant="outline" className="text-white hover:text-black">
              About Us
            </Button>
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest text-gray-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-linear-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
