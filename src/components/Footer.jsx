import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-white/70 border-t border-white/5 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Top Gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-secondary via-primary to-tertiary opacity-70" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2 pr-0 lg:pr-12">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo2.png"
                alt="Nexus Solutions Logo"
                className="h-10"
              />
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Pioneering advanced plastic pipe infrastructure with precision
              engineering. We specialize in supply of DWC pipes, HDPE lines, and
              customized pipe accessories.
            </p>
            <div className="flex gap-4">
              {/* 
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-white transition-colors bg-white/5 hover:bg-primary">
                <FaLinkedinIn />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-white transition-colors bg-white/5 hover:bg-primary">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-white transition-colors bg-white/5 hover:bg-primary">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-white transition-colors bg-white/5 hover:bg-primary">
                <FaInstagram />
              </a>
              */}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#home"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6">
              Our Products
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors text-sm"
                >
                  DWC Pipes
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors text-sm"
                >
                  HDPE Pipelines
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Pipe Couplers
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:text-primary transition-colors text-sm"
                >
                  Custom Spacers
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-widest text-white/40">
            &copy; {new Date().getFullYear()} Nexus Solutions. All Rights
            Reserved.
          </p>
          <div className="flex gap-6 text-xs uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
