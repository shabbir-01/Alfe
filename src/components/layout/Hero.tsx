'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
          {/* Fallback background image */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
        </video>
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            duration: 0.8, 
            delay: 2,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
        
        {/* Corner decorative elements */}
        <div className="absolute top-4 left-4 w-20 h-20 border-l-2 border-t-2 border-white opacity-30"></div>
        <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-white opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-white opacity-30"></div>
        <div className="absolute bottom-4 right-4 w-20 h-20 border-r-2 border-b-2 border-white opacity-30"></div>
      </div>
    </section>
  );
};

export default Hero;