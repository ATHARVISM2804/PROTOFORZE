import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Instructions', href: '#instructions' },
    { name: 'Apply', href: '#apply' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.05,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-proto-black/90 backdrop-blur-xl border-b border-proto-border/50 shadow-lg shadow-black/10'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <img 
                src="https://res.cloudinary.com/dmhabztbf/image/upload/v1766387608/ecell_xgdpga_zvla1y.webp" 
                alt="E-Cell NIT Hamirpur" 
                className="h-10 md:h-12 w-auto object-contain"
              />
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  custom={index}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`relative px-4 py-2 text-sm uppercase tracking-wider transition-all duration-300 rounded-lg group ${
                    activeSection === link.href.substring(1)
                      ? 'text-proto-text'
                      : 'text-proto-muted hover:text-proto-text'
                  }`}
                >
                  <span className="relative z-10 font-body">{link.name}</span>
                  {activeSection === link.href.substring(1) && (
                    <motion.span 
                      layoutId="activeNav"
                      className="absolute inset-0 bg-proto-card/50 rounded-lg border border-proto-border/30"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute inset-0 bg-proto-card/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
              ))}
              <motion.a
                custom={navLinks.length}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                href="#apply"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#apply');
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="ml-4 px-6 py-2.5 bg-white text-proto-black font-heading font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Register
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-proto-card/50 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 6 : 0,
                  width: isMobileMenuOpen ? 24 : 24,
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-proto-text block origin-center"
              ></motion.span>
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                  scaleX: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.2 }}
                className="w-6 h-0.5 bg-proto-text block"
              ></motion.span>
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -6 : 0,
                  width: isMobileMenuOpen ? 24 : 24,
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-proto-text block origin-center"
              ></motion.span>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at top right)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at top right)' }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 bg-proto-black/98 backdrop-blur-xl pt-20 md:hidden"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
                    className={`text-2xl font-heading uppercase tracking-wider py-2 px-4 rounded-xl transition-all duration-300 ${
                      activeSection === link.href.substring(1)
                        ? 'text-proto-text bg-proto-card/50 border border-proto-border/30'
                        : 'text-proto-muted hover:text-proto-text hover:bg-proto-card/30'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-current opacity-50" />
                      {link.name}
                    </span>
                  </motion.a>
                ))}
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScF__FnO172vG27L3qatagzZcw1pereyR57aKHFRAxG_6rAgA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-6 px-8 py-4 bg-white text-proto-black font-heading font-bold text-xl uppercase tracking-wider text-center rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                >
                  <span>🚀</span> Register Now
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
