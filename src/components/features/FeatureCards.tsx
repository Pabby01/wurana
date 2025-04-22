'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  title: string;
  description: string;
  icon: string;
}

const features: Feature[] = [
  {
    title: 'Global Marketplace',
    description: 'Connect with artisans worldwide and discover unique handcrafted items',
    icon: '🌍',
  },
  {
    title: 'Secure Transactions',
    description: 'Safe and transparent payments powered by Solana blockchain',
    icon: '🔒',
  },
  {
    title: 'Artisan Verification',
    description: 'Verified artisan profiles ensuring authentic craftsmanship',
    icon: '✓',
  },
  {
    title: 'Custom Orders',
    description: 'Request personalized items tailored to your preferences',
    icon: '✨',
  },
];

const FeatureCards = () => {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.children;
    if (!cards) return;

    gsap.fromTo(
      cards,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current,
          start: 'top center+=100',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div className="py-20 bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white"
        >
          Why Choose Wurana?
        </motion.h2>
        
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-gray-800/30
                        border border-white/20 dark:border-gray-700/20 shadow-xl
                        hover:shadow-purple-500/20 transition-all duration-300"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.1) 100%)',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/10 to-transparent"
                   style={{ mixBlendMode: 'overlay' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;