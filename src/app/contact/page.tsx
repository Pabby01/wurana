'use client';

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Contact() {
  useEffect(() => {
    gsap.fromTo(
      '.contact-form',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about our marketplace? Want to join as an artisan?
            We'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <form className="contact-form space-y-6 bg-white/30 dark:bg-gray-800/30 backdrop-blur-lg rounded-2xl p-8 border border-white/20 dark:border-gray-700/20 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <textarea
                name="message"
                rows={6}
                placeholder="Your Message"
                className="w-full px-4 py-3 rounded-lg bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none"
              />
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}