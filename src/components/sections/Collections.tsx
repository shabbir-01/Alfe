'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Collection {
  id: number;
  caption: string;
  image: string;
}

const Collections = () => {
  // Sample collection data - replace with your actual collection data
  const collections: Collection[] = [
    {
      id: 1,
      caption: "Summer Essentials",
      image: "https://images.unsplash.com/photo-1523359346063-d879354c0ea5?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      caption: "Formal Wear",
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      caption: "Casual Collection",
      image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center bg-white pt-20 pb-16 px-6 sm:px-8 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col items-center space-y-10 w-full"
      >
        {/* Heading */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-serif italic font-semibold text-center text-gray-900 tracking-tight"
        >
          Collections
        </motion.h2>

        {/* Collections Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-10"
        >
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              variants={itemVariants}
              className="flex flex-col items-start space-y-3 cursor-pointer group"
            >
              {/* Collection Image */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl shadow-md">
                <img
                  src={collection.image}
                  alt={collection.caption}
                  className="aspect-[3/4] w-full object-cover hover:scale-105 transform transition duration-300 ease-in-out group-hover:shadow-lg"
                />
              </div>
              
              {/* Collection Caption */}
              <h3 className="font-serif italic text-base sm:text-lg text-gray-900 group-hover:underline decoration-2 underline-offset-4 transition-all duration-150">
                {collection.caption}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Collections;