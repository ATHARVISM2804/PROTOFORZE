import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineSteps = [
    {
      step: '01',
      title: 'Registrations Open',
      description: 'Submit your team details and initial idea through the registration portal.',
      icon: '📝',
    },
    {
      step: '02',
      title: 'Pitching Round',
      description: 'Selected teams present their ideas to the jury in a live pitching session.',
      icon: '🎤',
    },
    {
      step: '03',
      title: 'Final Evaluation',
      description: 'Top pitches are evaluated based on execution plan, scalability, and impact.',
      icon: '📊',
    },
    {
      step: '04',
      title: 'Hardware Allocation',
      description: 'Participating teams are provided with necessary hardware resources to develop their prototypes.',
      icon: '💡',
    },
    {
      step: '05',
      title: 'Project Showcase',
      description: 'Teams present their developed prototypes to a panel of judges and attendees.',
      icon: '💻',
    },
    {
      step: '06',
      title: 'Results Announcement',
      description: 'Final results are announced and prize pool is distributed to winning teams.',
      icon: '🏆',
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
    hidden: { opacity: 0, x: -60, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  const lineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="timeline" className="section-padding bg-proto-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
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
            ⏱️ The Journey
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
          >
            EVENT TIMELINE
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto"
        >
          {timelineSteps.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex gap-6 md:gap-10 pb-12 last:pb-0 group"
            >
              {/* Vertical Line */}
              {index !== timelineSteps.length - 1 && (
                <motion.div 
                  variants={lineVariants}
                  className="absolute left-6 md:left-8 top-16 w-0.5 h-full bg-gradient-to-b from-proto-subtle/50 via-proto-border to-transparent origin-top"
                ></motion.div>
              )}

              {/* Step Number */}
              <motion.div 
                variants={iconVariants}
                whileHover={{ scale: 1.1, rotate: 10 }}
                className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-proto-card to-proto-surface border border-proto-border flex items-center justify-center relative z-10 group-hover:border-proto-subtle transition-all duration-300"
              >
                <span className="text-2xl">{item.icon}</span>
              </motion.div>

              {/* Content */}
              <motion.div 
                whileHover={{ x: 5, scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="flex-1 bg-gradient-to-br from-proto-card to-proto-card/50 border border-proto-border rounded-xl p-6 hover:border-proto-subtle/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-black/20"
              >
                <div className="flex items-center gap-4 mb-3">
                  <span className="font-heading text-proto-subtle text-sm tracking-wider px-3 py-1 rounded-full bg-proto-surface/50 border border-proto-border/50">
                    STEP {item.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-proto-text mb-2 group-hover:text-white transition-colors">
                  {item.title}
                </h3>
                <p className="text-proto-muted font-body leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
