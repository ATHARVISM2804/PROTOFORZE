import React from 'react';
import { motion } from 'framer-motion';
import termsPdf from '../assets/Protoforze.pdf';

const Footer = () => {
  const socialLinks = [
    { 
      name: 'Instagram', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ), 
      url: 'https://instagram.com/ecell_nith',
      color: 'hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500'
    },
    { 
      name: 'LinkedIn', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ), 
      url: 'https://www.linkedin.com/company/entrepreneurshipcellnith/posts/?feedView=all',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'Email', 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ), 
      url: 'mailto:ecell@nith.ac.in',
      color: 'hover:bg-red-500'
    },
    
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Instructions', href: '#instructions' },
    { name: 'Apply Now', href: '#apply' },
    { name: 'T&C', href: termsPdf },
  ];

  const contactInfo = [
    { icon: '📧', label: 'Email', value: 'ecell@nith.ac.in', href: 'mailto:ecell@nith.ac.in' },
    { icon: '📍', label: 'Location', value: 'NIT Hamirpur, HP - 177005', href: null },
    { icon: '🌐', label: 'Website', value: 'ecell.nith.ac.in', href: 'https://ecell.nith.ac.in' },
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
    <footer className="bg-gradient-to-b from-proto-black to-black border-t border-proto-border/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <motion.img
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1766387608/ecell_xgdpga_zvla1y.webp"
                alt="E-Cell NIT Hamirpur"
                className="h-12 w-auto object-contain"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div>
                <h3 className="font-heading text-lg font-bold text-proto-text leading-tight">
                  E-CELL
                </h3>
                <span className="text-proto-subtle text-xs">NIT Hamirpur</span>
              </div>
            </div>
            <p className="text-proto-muted font-body text-sm leading-relaxed mb-6">
              Fostering entrepreneurship and innovation at NIT Hamirpur. Building tomorrow's leaders, today.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-10 h-10 bg-proto-card/50 border border-proto-border/50 rounded-lg flex items-center justify-center text-proto-muted hover:text-white hover:border-transparent transition-all duration-300 ${social.color}`}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-sm font-bold text-proto-text mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-purple-500 to-transparent"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-proto-muted font-body text-sm hover:text-proto-text transition-colors inline-flex items-center gap-2 group"
                    target={link.href && !String(link.href).startsWith('#') ? '_blank' : undefined}
                    rel={link.href && !String(link.href).startsWith('#') ? 'noopener noreferrer' : undefined}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-proto-border group-hover:bg-purple-500 transition-colors"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-sm font-bold text-proto-text mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-blue-500 to-transparent"></span>
              Contact Us
            </h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3"
                >
                  <span className="text-lg">{info.icon}</span>
                  <div>
                    <span className="text-proto-subtle text-xs uppercase tracking-wider block mb-0.5">{info.label}</span>
                    {info.href ? (
                      <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-proto-muted text-sm hover:text-proto-text transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-proto-muted text-sm">{info.value}</span>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Event Highlight */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-sm font-bold text-proto-text mb-6 uppercase tracking-widest flex items-center gap-2">
              <span className="w-8 h-px bg-gradient-to-r from-amber-500 to-transparent"></span>
              Event Details
            </h4>
            <div className="bg-gradient-to-br from-proto-card/80 to-proto-card/40 border border-proto-border/50 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚀</span>
                <span className="font-heading text-lg font-bold gradient-text">PROTOFORZE</span>
              </div>
              <div className="space-y-2 text-sm">
                
                <p className="flex items-center gap-2 text-proto-muted">
                  <span className="text-proto-subtle">📍</span> Mini Auditorium
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-proto-border/30">
                <span className="text-proto-subtle text-xs uppercase tracking-wider">Funding Upto</span>
                <p className="font-heading text-xl font-bold text-amber-400 mt-1">₹ 25,000</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider with gradient */}
        <motion.div 
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 mb-8"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-proto-border to-transparent"></div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-2 text-center"
        >
          <p className="text-proto-subtle font-body text-sm">
            © {new Date().getFullYear()} E-Cell NIT Hamirpur. All rights reserved.
          </p>

          <p className="text-proto-subtle font-body text-sm flex items-center gap-2 justify-center">
            Crafted with 
            <motion.span 
              animate={{ scale: [1, 1.3, 1] }} 
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-red-500"
            >
              ❤️
            </motion.span> 
            by E-Cell Team
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
