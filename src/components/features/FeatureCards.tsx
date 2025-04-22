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
    <div className="py-20 bg-gradient-to-b from-purple-50 via-purple-100 to-white dark:from-gray-900 dark:via-gray-800 dark:to-black overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15), transparent 70%)'
          }}
        />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400"
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
              className="relative p-8 rounded-3xl backdrop-blur-xl bg-white/10 dark:bg-gray-800/10
                        border border-white/30 dark:border-gray-700/30 shadow-2xl
                        hover:shadow-purple-500/30 hover:border-purple-500/50 transition-all duration-500"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(12px)',
                transform: `perspective(1000px) rotateX(${index % 2 ? 5 : -5}deg) rotateY(${index % 2 ? -5 : 5}deg)`,
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