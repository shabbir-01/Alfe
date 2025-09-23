'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Hero = () => {
  const router = useRouter();

  const handleShopNowClick = () => {
    router.push('/new-arrivals');
  };

  return (
    <section className="w-full h-screen overflow-hidden relative flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '300%',
            objectFit: 'cover',
            position: 'absolute',
            top: '-95%',
            left: '0'
          }}
        >
          <source src="/hero-bg.mov" type="video/quicktime" />
          <source src="/hero-bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1.2, 
            ease: 'easeOut',
            delay: 0.8
          }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif italic text-white mb-8 leading-tight"
          style={{
            textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
          }}
        >
          Your clothes,{' '}
          <br className="hidden sm:block" />
          your closet.
        </motion.h1>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 1, 
            ease: 'easeOut',
            delay: 1.2 
          }}
        >
          <Button
            onClick={handleShopNowClick}
            className="
              bg-white text-black font-semibold text-lg 
              px-12 py-4 rounded-xl 
              hover:bg-gray-100 hover:scale-105
              transition-all duration-300 ease-in-out
              shadow-lg hover:shadow-xl
              border-2 border-transparent hover:border-white
            "
            size="lg"
          >
            SHOP NOW
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
