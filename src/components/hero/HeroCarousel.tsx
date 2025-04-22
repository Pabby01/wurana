'use client';

import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

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
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateCarousel = async () => {
      await controls.start({
        x: '-100%',
        transition: {
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        },
      });
    };

    animateCarousel();
  }, [controls]);

  return (
    <div className="w-full h-[500px] overflow-hidden relative bg-gradient-to-b from-purple-900 to-black">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          ref={containerRef}
          className="flex gap-4 absolute"
          animate={controls}
          style={{ x: '0%' }}
        >
          {[...artisanImages, ...artisanImages].map((image, index) => (
            <motion.div
              key={index}
              className="relative w-64 h-64 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform"
              style={{
                perspective: '1000px',
                transform: `rotateY(${index * 5}deg) translateZ(${Math.abs(Math.sin(index * 0.5)) * 50}px)`,
              }}
              whileHover={{ y: -10 }}
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