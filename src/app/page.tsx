'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import Image from 'next/image';
import Link from 'next/link';
import HeroCarousel from '@/components/hero/HeroCarousel';
import FeatureCards from '@/components/features/FeatureCards';
import Scene from '@/components/3d/Scene';

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize scene variables
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer;
    
    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true
    });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      // Your animation logic here
      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.8, window.innerHeight * 0.6);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      // Optional: Dispose of Three.js resources
      renderer.dispose();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#2E1A47] to-[#1a0f2e]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#2E1A47]/80 backdrop-blur-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <span className="text-[#FFC107]">Wurana</span>
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <Link href="/marketplace" className="text-gray-300 hover:text-white transition-colors">Browse Jobs</Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2 text-[#FFC107] border border-[#FFC107] rounded-lg hover:bg-[#FFC107] hover:text-white transition-colors">
              Post a Job
            </button>
            <button className="px-4 py-2 bg-[#FFC107] text-white rounded-lg hover:bg-[#e6ac00] transition-colors flex items-center">
              <span>Connect Wallet</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Empower Artisans on <span className="text-[#FFC107]">Solana</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            A decentralized marketplace where skilled craftsmen connect with clients—secure, trustless, and low-fee.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <button className="px-8 py-4 bg-[#FFC107] text-white rounded-lg hover:bg-[#e6ac00] transition-colors text-lg font-semibold">
              Connect Wallet
            </button>
            <button className="px-8 py-4 border-2 border-[#9945FF] text-[#9945FF] rounded-lg hover:bg-[#9945FF] hover:text-white transition-colors text-lg font-semibold">
              Browse Jobs
            </button>
          </div>
          <div className="relative h-[60vh] mb-8">
            <canvas ref={canvasRef} className="absolute inset-0 mx-auto" />
          </div>
          <p className="text-gray-400 text-lg">
            Join 1,200+ artisans and clients transacting $50K+ in escrow
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'On-Chain Escrow',
                description: 'Lock SOL/USDC in smart-contract until job completion—no non-payment risk.',
                icon: '🔒'
              },
              {
                title: 'Reputation NFTs',
                description: 'Immutable badges minted on-chain for every 5-star review—build your digital resume.',
                icon: '🏆'
              },
              {
                title: 'Sub-Cent Fees',
                description: 'Enjoy Solana\'s < $0.01 transactions, compared to 10–20% marketplace cuts.',
                icon: '💰'
              },
              {
                title: 'Global Reach',
                description: 'List services and find clients across borders with instant settlement.',
                icon: '🌍'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
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
              <div key={index} className="relative p-6 rounded-xl bg-white/10 backdrop-blur-lg">
                <div className="text-[#FFC107] text-6xl font-bold absolute -top-8 -left-4 opacity-20">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-white/5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">What Our Users Say</h2>
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
              <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
                <div className="text-[#FFC107] text-4xl mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="text-white font-semibold">{testimonial.author}</p>
                <p className="text-gray-400">{testimonial.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="p-12 rounded-2xl bg-gradient-to-r from-[#9945FF] to-[#FFC107]">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-xl text-white/90 mb-8">Whether you're hiring or offering services, join Wurana today.</p>
            <div className="flex justify-center space-x-4">
              <button className="px-8 py-4 bg-white text-[#9945FF] rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold">
                Connect Wallet
              </button>
              <button className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors text-lg font-semibold">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E1A47] py-16 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">About</h3>
            <p className="text-gray-300 mb-4">
              Harnessing the Power of Solana to Empower Artisans
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link href="/marketplace" className="text-gray-300 hover:text-white">Browse Jobs</Link></li>
              <li><Link href="/how-it-works" className="text-gray-300 hover:text-white">How It Works</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/docs" className="text-gray-300 hover:text-white">Docs</Link></li>
              <li><Link href="/api" className="text-gray-300 hover:text-white">Developer API</Link></li>
              <li><Link href="/support" className="text-gray-300 hover:text-white">Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFC107]"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#FFC107] text-white rounded-lg hover:bg-[#e6ac00] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}
