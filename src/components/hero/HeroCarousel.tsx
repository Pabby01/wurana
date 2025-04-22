'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import gsap from 'gsap';

interface ArtisanImage {
  src: string;
  alt: string;
}

const artisanImages: ArtisanImage[] = [
  { src: '/images/artisan1.jpg', alt: 'Woodworker crafting furniture' },
  { src: '/images/artisan2.jpg', alt: 'Metalsmith at work' },
  { src: '/images/artisan3.jpg', alt: 'Potter creating ceramics' },
  { src: '/images/artisan4.jpg', alt: 'Weaver at the loom' },
  { src: '/images/artisan5.jpg', alt: 'Glassblower shaping glass' },
];

const HeroCarousel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const images = containerRef.current?.children;
    if (!images) return;

    gsap.to(images, {
      duration: 20,
      xPercent: -100,
      ease: 'none',
      repeat: -1,
    });

    gsap.to(images, {
      duration: 2,
      y: 20,
      stagger: 0.1,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });
  }, []);

  return (
    <motion.div 
      className="w-full h-[600px] overflow-hidden relative bg-gradient-to-b from-purple-900 via-purple-800 to-black"
      style={{ y }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={containerRef}
          className="flex gap-8 absolute"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
          }}
        >
          {[...artisanImages, ...artisanImages].map((image, index) => (
            <motion.div
              key={index}
              className="relative w-72 h-96 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform"
              style={{
                perspective: '1000px',
                transform: `rotateY(${index * 8}deg) translateZ(${Math.abs(Math.sin(index * 0.8)) * 80}px)`,
              }}
              whileHover={{ y: -20, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <p className="text-white text-sm font-medium">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroCarousel;