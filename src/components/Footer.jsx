import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      url: 'https://instagram.com/ecell_nith' 
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      url: 'https://linkedin.com/company/ecell-nith' 
    },
    { 
      name: 'Twitter', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      url: 'https://twitter.com/ecell_nith' 
    },
    { 
      name: 'Facebook', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ), 
      url: 'https://facebook.com/ecellnith' 
    },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Instructions', href: '#instructions' },
    { name: 'Apply', href: '#apply' },
    { name: 'Contact', href: '#contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <footer className="bg-proto-black border-t border-proto-border relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-purple-500/5 to-transparent blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.img
              src="https://res.cloudinary.com/dmhabztbf/image/upload/v1766387608/ecell_xgdpga_zvla1y.webp"
              alt="E-Cell NIT Hamirpur"
              className="h-14 w-auto object-contain mb-4"
              whileHover={{ scale: 1.05 }}
            />
            <motion.h3 
              className="font-heading text-2xl font-bold text-proto-text mb-4"
              whileHover={{ x: 3 }}
            >
              E-CELL NIT HAMIRPUR
            </motion.h3>
            <p className="text-proto-muted font-body text-sm leading-relaxed mb-6">
              Empowering innovation and entrepreneurship at NIT Hamirpur. We foster a culture of
              startup thinking and provide resources to turn ideas into reality.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 bg-proto-card border border-proto-border rounded-xl flex items-center justify-center text-proto-muted hover:text-proto-text hover:bg-proto-surface hover:border-proto-subtle transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={itemVariants}
            className="md:text-center"
          >
            <h4 className="font-heading text-lg font-bold text-proto-text mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-proto-muted font-body hover:text-proto-text transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Event Info */}
          <motion.div
            variants={itemVariants}
            className="md:text-right"
          >
            <h4 className="font-heading text-lg font-bold text-proto-text mb-4 uppercase tracking-wider">
              PROTOFORZE 2025
            </h4>
            <div className="text-proto-muted font-body text-sm space-y-2">
              <motion.p whileHover={{ x: -3 }} className="flex items-center gap-2 md:justify-end">
                <span>📅</span> 15th November, 2025
              </motion.p>
              <motion.p whileHover={{ x: -3 }} className="flex items-center gap-2 md:justify-end">
                <span>⏰</span> 09:00 AM onwards
              </motion.p>
              <motion.p whileHover={{ x: -3 }} className="flex items-center gap-2 md:justify-end">
                <span>📍</span> Mini Auditorium, NIT Hamirpur
              </motion.p>
              <motion.div 
                className="mt-4 pt-4 border-t border-proto-border/50"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-proto-text font-semibold">Funding up to</span>
                <br />
                <span className="font-heading text-2xl text-amber-400 font-bold">INR 2,00,000</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border-t border-proto-border pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-proto-subtle font-body text-sm"
            >
              © 2025 E-Cell NIT Hamirpur. All rights reserved.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-proto-subtle font-body text-sm flex items-center gap-2"
            >
              Made with <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1, repeat: Infinity }}>🔥</motion.span> for innovators
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
