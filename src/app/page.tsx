'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/hero/HeroCarousel';
import FeatureCards from '@/components/features/FeatureCards';
import Scene from '@/components/3d/Scene';
import WaitlistForm from '@/components/waitlist/WaitlistForm';

export default function Home() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start']
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  return (
    <div ref={ref} className="min-h-screen bg-[#2E1A47]">
      {/* Header - Neutra Style */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E1A47]/90 backdrop-blur-xl border-b border-white/10">
        <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white flex items-center">
            <motion.span 
              className="text-[#FFC107] tracking-tight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Wurana
            </motion.span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest">About</Link>
            <Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest">Browse Jobs</Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm uppercase tracking-widest">Contact</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 text-[#FFC107] border border-[#FFC107] rounded-full hover:bg-[#FFC107] hover:text-white transition-colors text-sm uppercase tracking-widest"
            >
              Post a Job
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2.5 bg-[#FFC107] text-white rounded-full hover:bg-[#e6ac00] transition-colors flex items-center text-sm uppercase tracking-widest"
            >
              <span>Connect Wallet</span>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Hero Section - Neutra Style */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 overflow-hidden">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0 -z-10"
        >
          <div className="absolute inset-0 bg-gradient-radial from-[#9945FF]/20 via-transparent to-transparent opacity-70" />
          <div className="absolute inset-0 bg-[url('/textures/grid.svg')] bg-repeat opacity-10" />
        </motion.div>
        
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold text-white leading-tight"
                >
                  Empower <span className="text-[#FFC107]">Artisans</span> on Solana
                </motion.h1>
                
                <motion.p 
                  className="text-xl text-gray-300 max-w-xl"
                >
                  A decentralized marketplace where skilled craftsmen connect with clients—secure, trustless, and low-fee.
                </motion.p>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-[#FFC107] text-white rounded-full text-sm uppercase tracking-widest font-medium"
                  >
                    Explore Marketplace
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 border border-white/30 text-white rounded-full text-sm uppercase tracking-widest font-medium hover:bg-white/10 transition-colors"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden bg-[#1a0f2e] border border-white/10 shadow-2xl"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Join Our Waitlist</h3>
                <WaitlistForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section - Neutra Style */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#2E1A47] to-[#1a0f2e]">
        <FeatureCards />
      </section>

      {/* 3D Earth Section - Neutra Style */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[#1a0f2e]" />
        <div className="absolute inset-0 -z-10 bg-[url('/textures/grid.svg')] bg-repeat opacity-5" />
        
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            Global <span className="text-[#FFC107]">Artisan</span> Network
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <Scene />
          </motion.div>
        </div>
      </section>

      {/* How It Works - Neutra Style */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#1a0f2e] to-[#2E1A47]">
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            How It <span className="text-[#FFC107]">Works</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sign Up & Connect',
                description: 'Create your profile with email & wallet—verify your skillset.'
              },
              {
                title: 'Post or Bid',
                description: 'Clients post detailed job requests; artisans submit bids or set fixed prices.'
              },
              {
                title: 'Complete & Review',
                description: 'Finish the work, approve delivery, release escrow, and earn reputation NFTs.'
              }
            ].map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
              >
                <motion.div 
                  className="text-[#FFC107] text-7xl font-bold absolute -top-10 -left-5 opacity-20"
                  animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  {index + 1}
                </motion.div>
                <h3 className="text-2xl font-semibold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300 text-lg">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Neutra Style */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#2E1A47] to-[#1a0f2e]" />
        <div className="absolute inset-0 -z-10 bg-[url('/textures/grid.svg')] bg-repeat opacity-5" />
        
        <div className="container mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white text-center mb-16"
          >
            What Our <span className="text-[#FFC107]">Users</span> Say
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: 'Wurana transformed how I find reliable plumbers—secure payments and real reviews!',
                author: 'Yemi A.',
                location: 'Lagos'
              },
              {
                quote: 'As a carpenter, I\'ve tripled my client base across Nigeria. The escrow system gives me peace of mind.',
                author: 'Funke O.',
                location: 'Ibadan'
              },
              {
                quote: 'Best low-fee platform I\'ve used—got paid in minutes, and my NFT badges look great!',
                author: 'Ahmed S.',
                location: 'Abuja'
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl"
              >
                <motion.div 
                  className="text-[#FFC107] text-4xl mb-6"
                  animate={{ 
                    y: [0, 5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                >
                  ★★★★★
                </motion.div>
                <p className="text-gray-300 mb-6 text-lg italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#FFC107]/20 flex items-center justify-center mr-3">
                    <span className="text-[#FFC107] font-bold">{testimonial.author.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Neutra Style */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-16 rounded-3xl bg-gradient-to-r from-[#9945FF] to-[#FFC107] relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/textures/grid.svg')] bg-repeat opacity-10" />
            
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold text-white mb-6"
                animate={{ 
                  textShadow: ['0 0 5px rgba(255,255,255,0)', '0 0 20px rgba(255,255,255,0.5)', '0 0 5px rgba(255,255,255,0)']
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity
                }}
              >
                Ready to get started?
              </motion.h2>
              
              <p className="text-xl text-white/90 mb-10">Whether you're hiring or offering services, join Wurana today.</p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-[#9945FF] rounded-full hover:bg-gray-100 transition-colors text-sm uppercase tracking-widest font-medium"
                >
                  Connect Wallet
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-colors text-sm uppercase tracking-widest font-medium"
                >
                  Join Waitlist
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer - Neutra Style */}
      <footer className="bg-[#1a0f2e] py-24 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8 md:mb-0"
            >
              <Link href="/" className="text-3xl font-bold text-[#FFC107] mb-4 block">
                Wurana
              </Link>
              <p className="text-gray-400 max-w-xs">
                Harnessing the Power of Solana to Empower Artisans
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Explore</h3>
                  <ul className="space-y-3">
                    <li><Link href="/marketplace" className="text-gray-400 hover:text-[#FFC107] transition-colors">Browse Jobs</Link></li>
                    <li><Link href="/how-it-works" className="text-gray-400 hover:text-[#FFC107] transition-colors">How It Works</Link></li>
                    <li><Link href="/pricing" className="text-gray-400 hover:text-[#FFC107] transition-colors">Pricing</Link></li>
                    <li><Link href="/blog" className="text-gray-400 hover:text-[#FFC107] transition-colors">Blog</Link></li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Resources</h3>
                  <ul className="space-y-3">
                    <li><Link href="/docs" className="text-gray-400 hover:text-[#FFC107] transition-colors">Docs</Link></li>
                    <li><Link href="/api" className="text-gray-400 hover:text-[#FFC107] transition-colors">Developer API</Link></li>
                    <li><Link href="/support" className="text-gray-400 hover:text-[#FFC107] transition-colors">Support</Link></li>
                  </ul>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-semibold text-white mb-4 uppercase tracking-wider">Join Waitlist</h3>
                  <div className="space-y-4">
                    <p className="text-gray-400">Be the first to know when we launch</p>
                    <WaitlistForm />
                  </div>
                </motion.div>
              </div>
           </div>
           
           <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
             <p className="text-gray-500 text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Wurana. All rights reserved.</p>
             
             <div className="flex space-x-6">
               <Link href="/privacy" className="text-gray-500 hover:text-[#FFC107] text-sm">Privacy Policy</Link>
               <Link href="/terms" className="text-gray-500 hover:text-[#FFC107] text-sm">Terms of Service</Link>
             </div>
           </div>
         </div>
       </footer>
     </div>
    );
}
