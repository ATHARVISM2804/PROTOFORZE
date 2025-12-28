import React from 'react';
import { motion } from 'framer-motion';

const HowToApply = () => {
  const steps = [
    {
      step: '01',
      title: 'Scan QR / Click Register',
      description: 'Use the QR code or click the register button to access the registration form.',
      icon: '📱',
    },
    {
      step: '02',
      title: 'Fill Registration Form',
      description: 'Complete your personal details, team information, and contact information.',
      icon: '📝',
    },
    {
      step: '03',
      title: 'Submit Idea Details',
      description: 'Provide a brief description of your startup idea, problem statement, and solution.',
      icon: '💡',
    },
    {
      step: '04',
      title: 'Await Confirmation',
      description: 'You will receive confirmation via email/SMS within 48 hours of submission.',
      icon: '✉️',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const connectorVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.6,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="apply" className="section-padding bg-proto-surface relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-10 right-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{ y: [-30, 30, -30], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 left-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"
        animate={{ y: [30, -30, 30], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full border border-proto-border/50 bg-proto-card/30 text-proto-subtle uppercase tracking-[0.3em] text-xs font-body mb-4"
          >
            🚀 Get Started
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
          >
            HOW TO APPLY
          </motion.h2>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <motion.div 
                  variants={connectorVariants}
                  className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-proto-subtle/50 via-proto-border to-transparent z-0 origin-left"
                />
              )}

              <motion.div 
                whileHover={{ y: -10, scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-proto-card to-proto-card/50 border border-proto-border rounded-2xl p-6 text-center relative z-10 h-full hover:border-proto-subtle/50 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-black/10"
              >
                {/* Step Number */}
                <motion.div 
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
                  className="absolute -top-3 -right-3 w-10 h-10 bg-gradient-to-br from-white to-gray-200 text-proto-black rounded-full flex items-center justify-center font-heading font-bold text-sm shadow-lg"
                >
                  {step.step}
                </motion.div>

                {/* Icon */}
                <motion.div 
                  className="text-5xl mb-4"
                  whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  {step.icon}
                </motion.div>

                {/* Title */}
                <h3 className="font-heading text-lg font-bold text-proto-text mb-3 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-proto-muted font-body text-sm leading-relaxed group-hover:text-proto-text/70 transition-colors">
                  {step.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLScF__FnO172vG27L3qatagzZcw1pereyR57aKHFRAxG_6rAgA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-10 py-4 bg-white text-proto-black font-heading font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>🚀</span> Register Now
          </motion.a>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-proto-subtle text-sm mt-4 font-body flex items-center justify-center gap-2"
          >
            <span>⏰</span> Registration closes on 10th January, 2026
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToApply;
