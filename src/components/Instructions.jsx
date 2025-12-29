import React from 'react';
import { motion } from 'framer-motion';


const Instructions = () => {
  const instructionCards = [
    {
      title: 'Eligibility Criteria',
      icon: '✅',
      color: 'from-green-500/10 to-emerald-500/5',
      items: [
        'Open to all students of NIT Hamirpur',
        'Individuals and teams (max 6 members) can participate',
        'Ideas from any domain are welcome',
        'Previous startup experience is not mandatory',
        'Must have a valid college ID',
        'Idea should not be already funded or commercialized',
      ],
    },
    {
      title: 'Team Size Rules',
      icon: '👥',
      color: 'from-blue-500/10 to-cyan-500/5',
      items: [
        'Minimum 3 and maximum 6 members (minimum 1 female member mandatory)',
        'Cross-department teams are encouraged',
        'Each member must register individually',
        'Team leader must be clearly designated',
        'One person can be part of only one team',
        'Team composition cannot be changed after registration',
      ],
    },
    {
      title: 'Pitch Format',
      icon: '📊',
      color: 'from-purple-500/10 to-pink-500/5',
      items: [
        'Maximum 10 minutes for presentation',
        '5 minutes Q&A with judges',
        'Use of slides/prototypes encouraged',
        'Focus on problem, solution, and business model',
        'Total funding required with clear breakup',
        'Budget allocation: product dev, tech, marketing, operations',
        'Expected outcomes/milestones from the funding',
      ],
    },
    {
      title: 'Judging Parameters',
      icon: '⚖️',
      color: 'from-amber-500/10 to-orange-500/5',
      items: [
        'Innovation and uniqueness of the idea',
        'Market potential and scalability',
        'Feasibility of execution',
        'Team capability and presentation skills',
        'Social impact and sustainability',
        'Revenue model and financial viability',
      ],
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
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

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };

  return (
    <section id="instructions" className="section-padding bg-proto-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Decorative gradient orbs */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
        animate={{ x: [-20, 20, -20], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
        animate={{ x: [20, -20, 20], opacity: [0.4, 0.6, 0.4] }}
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
            📋 Guidelines
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
          >
            INSTRUCTIONS
          </motion.h2>
        </motion.div>

        {/* Instruction Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
        >
          {instructionCards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`group relative bg-gradient-to-br ${card.color} backdrop-blur-sm border border-proto-border rounded-2xl p-6 md:p-8 hover:border-proto-subtle/50 transition-all duration-300`}
            >
              {/* Inner card */}
              <div className="relative z-10">
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.span 
                    className="text-4xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {card.icon}
                  </motion.span>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-proto-text group-hover:text-white transition-colors">
                    {card.title}
                  </h3>
                </div>

                {/* Card Items */}
                <ul className="space-y-3">
                  {card.items.map((item, itemIndex) => (
                    <motion.li
                      key={itemIndex}
                      custom={itemIndex}
                      variants={listItemVariants}
                      className="flex items-start gap-3 text-proto-muted font-body group-hover:text-proto-text/80 transition-colors"
                    >
                      <motion.span 
                        className="text-proto-subtle mt-1 text-sm"
                        whileHover={{ scale: 1.3, x: 3 }}
                      >
                        ▸
                      </motion.span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      

      </div>
    </section>
  );
};

export default Instructions;
