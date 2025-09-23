'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  title: string;
  price: string;
  image: string;
}

const NewLaunch = () => {
  // Sample product data - replace with your actual product data
  const products: Product[] = [
    {
      id: 1,
      title: "Elegant Evening Dress",
      price: "$299",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Classic White Shirt",
      price: "$89",
      image: "https://images.unsplash.com/photo-1581338834647-b0fb3704b8ac?w=400&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Luxury Handbag",
      price: "$459",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=600&fit=crop"
    },
    {
      id: 4,
      title: "Designer Sunglasses",
      price: "$199",
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=600&fit=crop"
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
    <section className="max-w-7xl mx-auto flex flex-col items-center bg-white pt-16 pb-12 px-6 sm:px-8 lg:px-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col items-center space-y-6 w-full"
      >
        {/* Heading */}
        <motion.h2 
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-serif font-semibold text-center text-gray-900 tracking-tight"
        >
          New launch 0.2
        </motion.h2>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="max-w-2xl text-center text-base sm:text-lg text-gray-600 leading-relaxed"
        >
          Discover our best seller collection, curated for quality and popularity. Find the perfect products that customers love.
        </motion.p>

        {/* Product Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 w-full"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="flex flex-col items-start space-y-2"
            >
              {/* Product Image */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl shadow-sm">
                <img
                  src={product.image}
                  alt={product.title}
                  className="aspect-[3/4] w-full object-cover hover:scale-105 transform transition duration-300 ease-in-out cursor-pointer"
                />
              </div>
              
              {/* Product Title */}
              <h3 className="font-serif italic text-sm sm:text-base text-gray-900 mt-2">
                {product.title}
              </h3>
              
              {/* Product Price */}
              <p className="text-sm sm:text-base text-gray-700 font-light">
                {product.price}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default NewLaunch;