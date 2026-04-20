import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = "relative inline-flex items-center justify-center px-8 py-3 font-medium tracking-wide transition-all duration-300 rounded-full overflow-hidden group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-dark-bg";
  
  const variants = {
    primary: "text-white bg-primary hover:bg-secondary shadow-[0_0_20px_rgba(255,106,0,0.4)] hover:shadow-[0_0_30px_rgba(255,106,0,0.6)]",
    outline: "text-white bg-transparent border border-white/20 hover:border-primary hover:bg-primary/20 hover:shadow-[0_0_15px_rgba(255,106,0,0.3)]",
    glass: "text-white bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
      )}
    </motion.button>
  );
};

export default Button;
