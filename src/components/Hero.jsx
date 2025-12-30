import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Letter animation variants for the title
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.05,
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    }),
  };

  const title = "PROTOFORZE";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-proto-black overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>
        <div className="hero-orb hero-orb-3"></div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>

      {/* Floating background icons with enhanced styling */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 text-6xl floating-icon opacity-20"
          animate={{ y: [-10, 10, -10], rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >💡</motion.div>
        <motion.div 
          className="absolute top-40 right-20 text-5xl floating-icon opacity-20"
          animate={{ y: [10, -10, 10], rotate: [5, -5, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >🚀</motion.div>
        <motion.div 
          className="absolute bottom-40 left-20 text-5xl floating-icon opacity-20"
          animate={{ y: [-15, 15, -15], rotate: [-3, 3, -3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >💰</motion.div>
        <motion.div 
          className="absolute bottom-20 right-10 text-6xl floating-icon opacity-20"
          animate={{ y: [15, -15, 15], rotate: [3, -3, 3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >⚡</motion.div>
        <motion.div 
          className="absolute top-1/2 left-5 text-4xl floating-icon opacity-20"
          animate={{ y: [-8, 8, -8], rotate: [-2, 2, -2] }}
          transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        >📈</motion.div>
        <motion.div 
          className="absolute top-1/3 right-5 text-4xl floating-icon opacity-20"
          animate={{ y: [8, -8, 8], rotate: [2, -2, 2] }}
          transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
        >🎯</motion.div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 w-full h-48 bg-gradient-to-b from-proto-black via-proto-black/80 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-proto-black via-proto-black/80 to-transparent"></div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        {/* Presented by badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <span className="inline-block px-6 py-2 rounded-full border border-proto-border/50 bg-proto-card/30 backdrop-blur-sm text-proto-subtle uppercase tracking-[0.3em] text-xs md:text-sm font-body">
            ✨ E-Cell NIT Hamirpur Presents ✨
          </span>
        </motion.div>

        {/* Main Title with letter animation */}
        <div className="relative mb-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute inset-0 blur-3xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20"
          />
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold tracking-wider relative">
            {title.split('').map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block hero-title-letter"
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #a0a0a0 50%, #606060 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Animated fire divider */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-proto-subtle to-transparent"></div>
          <motion.span 
            className="text-3xl md:text-4xl"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [-5, 5, -5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🔥
          </motion.span>
          <div className="w-16 md:w-24 h-px bg-gradient-to-r from-transparent via-proto-subtle to-transparent"></div>
        </motion.div>

        {/* Tagline with typewriter effect */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-proto-muted text-lg md:text-xl lg:text-2xl mb-8 font-body max-w-2xl mx-auto leading-relaxed"
        >
          Get a chance to <span className="text-proto-text font-semibold">kick start</span> your startup journey
        </motion.p>

        {/* Funding Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mb-12 relative"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-b from-proto-card/80 to-proto-card/40 border border-proto-border/50 backdrop-blur-sm">
            <p className="text-proto-subtle uppercase tracking-[0.2em] text-xs md:text-sm mb-3 flex items-center justify-center gap-2">
              <span>💰</span> Get Funding Upto <span>💰</span>
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-proto-text">INR </span>
              <span className="text-amber-400">25,000</span>
            </h2>
          </div>
        </motion.div>

        {/* Event Details Cards */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12"
        >
          {[
            { icon: '📅', label: 'Date', value: '15.11.25' },
            { icon: '⏰', label: 'Time', value: '09:00 AM' },
            { icon: '📍', label: 'Venue', value: 'Mini Auditorium' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group px-5 py-4 rounded-xl bg-proto-card/40 border border-proto-border/30 backdrop-blur-sm hover:border-proto-subtle/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <div className="text-left">
                  <p className="text-proto-subtle text-xs uppercase tracking-wider">{item.label}</p>
                  <p className="text-proto-text font-body text-lg font-medium">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}

        {/* CTA Buttons with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe1v4rs5AjnTbrsJrRsviqSssBV_ocH9qeOBxCiIfhkXIAsfA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 bg-white text-proto-black font-heading font-bold uppercase tracking-wider rounded-lg overflow-hidden transition-all duration-300 hover:bg-gray-100"
          >
            <span className="flex items-center justify-center gap-2">
              <span>🚀</span> Register Now
            </span>
          </motion.a>
          <motion.button
            onClick={() => scrollToSection('timeline')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="group px-10 py-4 border-2 border-proto-border text-proto-text font-heading font-medium uppercase tracking-wider rounded-lg hover:border-proto-subtle hover:bg-proto-card/50 transition-all duration-300 backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2">
              <span className="group-hover:rotate-12 transition-transform duration-300">📅</span> 
              View Timeline
            </span>
          </motion.button>
        </motion.div>
      </div>

      
    </section>
  );
};

export default Hero;
