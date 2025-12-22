import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focusedField, setFocusedField] = useState(null);

  const contacts = [
    {
      name: 'Ujjwal',
      phone: '88825-41097',
      icon: '👤',
    },
    {
      name: 'Riya',
      phone: '88607-59499',
      icon: '👤',
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Contact from ${formData.name} - Protoforze`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:ecell@nith.ac.in?subject=${subject}&body=${body}`;
    
    setFormData({ name: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
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

  const inputVariants = {
    focused: { scale: 1.02, borderColor: 'rgba(255,255,255,0.3)' },
    unfocused: { scale: 1, borderColor: 'rgba(255,255,255,0.1)' },
  };

  return (
    <section id="contact" className="section-padding bg-proto-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20"></div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute top-1/3 left-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl"
        animate={{ x: [-20, 20, -20], y: [-10, 10, -10] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        animate={{ x: [20, -20, 20], y: [10, -10, 10] }}
        transition={{ duration: 15, repeat: Infinity }}
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
            📧 Reach Out
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold gradient-text"
          >
            CONTACT US
          </motion.h2>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.h3
              variants={itemVariants}
              className="font-heading text-2xl font-bold text-proto-text mb-6 flex items-center gap-3"
            >
              <span className="text-2xl">👥</span> Event Coordinators
            </motion.h3>

            {contacts.map((contact, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-gradient-to-br from-proto-card to-proto-card/50 border border-proto-border rounded-2xl p-6 hover:border-proto-subtle/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-14 h-14 rounded-full bg-gradient-to-br from-proto-surface to-proto-card border border-proto-border flex items-center justify-center text-2xl group-hover:border-proto-subtle/50 transition-colors"
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-heading text-xl font-bold text-proto-text group-hover:text-white transition-colors">
                      {contact.name}
                    </h4>
                    <motion.a
                      href={`tel:${contact.phone.replace('-', '')}`}
                      whileHover={{ x: 3 }}
                      className="text-proto-muted font-body hover:text-proto-text transition-colors flex items-center gap-2"
                    >
                      <span>📞</span>
                      {contact.phone}
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Additional Info */}
            <motion.div
              variants={itemVariants}
              whileHover={{ x: 8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="group bg-gradient-to-br from-proto-card to-proto-card/50 border border-proto-border rounded-2xl p-6 hover:border-proto-subtle/50 transition-all duration-300"
            >
              <h4 className="font-heading text-lg font-bold text-proto-text mb-3 flex items-center gap-2">
                <span>📧</span> Email Us
              </h4>
              <motion.a
                href="mailto:ecell@nith.ac.in"
                whileHover={{ x: 3 }}
                className="text-proto-muted font-body hover:text-proto-text transition-colors inline-flex items-center gap-2"
              >
                ecell@nith.ac.in
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-heading text-2xl font-bold text-proto-text mb-6 flex items-center gap-3">
              <span>💬</span> Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                animate={focusedField === 'name' ? 'focused' : 'unfocused'}
                variants={inputVariants}
              >
                <label
                  htmlFor="name"
                  className="block text-proto-muted font-body text-sm mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-proto-card border border-proto-border rounded-xl px-5 py-4 text-proto-text font-body focus:outline-none focus:border-proto-subtle transition-all duration-300 placeholder:text-proto-muted/50"
                  placeholder="Enter your name"
                />
              </motion.div>

              <motion.div
                animate={focusedField === 'email' ? 'focused' : 'unfocused'}
                variants={inputVariants}
              >
                <label
                  htmlFor="email"
                  className="block text-proto-muted font-body text-sm mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full bg-proto-card border border-proto-border rounded-xl px-5 py-4 text-proto-text font-body focus:outline-none focus:border-proto-subtle transition-all duration-300 placeholder:text-proto-muted/50"
                  placeholder="Enter your email"
                />
              </motion.div>

              <motion.div
                animate={focusedField === 'message' ? 'focused' : 'unfocused'}
                variants={inputVariants}
              >
                <label
                  htmlFor="message"
                  className="block text-proto-muted font-body text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="5"
                  className="w-full bg-proto-card border border-proto-border rounded-xl px-5 py-4 text-proto-text font-body focus:outline-none focus:border-proto-subtle transition-all duration-300 resize-none placeholder:text-proto-muted/50"
                  placeholder="Your message..."
                ></textarea>
              </motion.div>

              <motion.button 
                type="submit" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-8 py-4 bg-white text-proto-black font-heading font-bold uppercase tracking-wider rounded-xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>✉️</span> Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
