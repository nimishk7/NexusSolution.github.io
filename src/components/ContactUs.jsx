import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiChatAlt2,
} from "react-icons/hi";
import Button from "./Button";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919284593597?text=Hi%20Nexus%20Solutions,%20I%20am%20interested%20in%20your%20products.`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg text-white relative">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 blur-[80px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 uppercase tracking-wider text-white">
            Get In <span className="text-primary text-glow">Touch</span>
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Partner with us for reliable, heavy-duty smart infrastructure
            solutions tailored to your site requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <h3 className="text-2xl font-bold mb-8 uppercase tracking-wide">
              Send a Enquiry 
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="peer w-full bg-transparent border-b-2 border-white/20 text-white placeholder-transparent focus:outline-none focus:border-secondary pt-6 pb-2 transition-colors"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label
                  htmlFor="name"
                  className="absolute left-0 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-secondary peer-focus:text-xs uppercase tracking-wider font-medium"
                >
                  Full Name Let's connect
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative group">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="peer w-full bg-transparent border-b-2 border-white/20 text-white placeholder-transparent focus:outline-none focus:border-secondary pt-6 pb-2 transition-colors"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="phone"
                    className="absolute left-0 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-secondary peer-focus:text-xs uppercase tracking-wider font-medium"
                  >
                    Phone Number
                  </label>
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="peer w-full bg-transparent border-b-2 border-white/20 text-white placeholder-transparent focus:outline-none focus:border-secondary pt-6 pb-2 transition-colors"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-secondary peer-focus:text-xs uppercase tracking-wider font-medium"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="peer w-full bg-transparent border-b-2 border-white/20 text-white placeholder-transparent focus:outline-none focus:border-secondary pt-6 pb-2 transition-colors resize-none"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-0 top-0 text-white/50 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-0 peer-focus:text-secondary peer-focus:text-xs uppercase tracking-wider font-medium"
                >
                  Your Message
                </label>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </Button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 hover:bg-[#25D366]/20 rounded-full font-medium transition-colors"
                >
                  <HiChatAlt2 size={24} /> WhatsApp
                </button>
              </div>
            </form>
          </motion.div>

          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8 flex flex-col"
          >
            <div className="glass-card p-8 rounded-3xl flex-1 border-l-4 border-l-primary flex flex-col justify-center gap-6">
              <div>
                <h4 className="text-sm uppercase tracking-widest text-primary font-bold mb-1">
                  Contact Details
                </h4>
                <p className="text-2xl font-bold text-white">Mahesh Khadilkar</p>
              </div>

              <ul className="space-y-6">
                <li className="flex items-start gap-4 hover:text-primary transition-colors cursor-pointer group text-white">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50 shadow-sm shadow-black">
                    <HiOutlinePhone size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50">Phone</span>
                    <a
                      href="tel:+919284593597"
                      className="text-lg font-medium tracking-wider"
                    >
                      +91 92845 93597 <br /> +91 93071 40649
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4 hover:text-primary transition-colors cursor-pointer group text-white">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50 shadow-sm shadow-black">
                    <HiOutlineMail size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50">Email</span>
                    <a
                      href="mailto:nexussangli24@gmail.com"
                      className="text-lg font-medium"
                    >
                      nexussangli24@gmail.com
                      <br />
                      enquiry@nexus-solutions.co.in
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-4 hover:text-primary transition-colors cursor-pointer group text-white">
                  <div className="p-3 bg-white/5 rounded-full group-hover:bg-primary/20 transition-colors border border-white/10 group-hover:border-primary/50 shadow-sm shadow-black">
                    <HiOutlineLocationMarker size={24} />
                  </div>
                  <div>
                    <span className="block text-sm text-white/50">
                      Office Address
                    </span>
                    <address className="not-italic text-lg text-white">
                      Flat No 103, Khadilkar Sankul, <br />
                      Khadilkar Galli, Gaonbhag, <br />
                      Sangli - 416416, Maharashtra
                    </address>
                  </div>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
