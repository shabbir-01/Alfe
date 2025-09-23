'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Review {
  id: number;
  image: string;
  reviewText: string;
  rating: number;
}

const CustomerReviews = () => {
  const [visibleReviews, setVisibleReviews] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  // Sample review data - 20 reviews as specified
  const allReviews: Review[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=360&h=480&fit=crop",
      reviewText: "Absolutely love this dress! The quality is exceptional and it fits perfectly. Will definitely order more!",
      rating: 5
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=360&h=480&fit=crop",
      reviewText: "Amazing fabric quality and the design is so elegant. Received so many compliments wearing this!",
      rating: 5
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=360&h=480&fit=crop",
      reviewText: "Fast shipping and the product exceeded my expectations. The attention to detail is remarkable.",
      rating: 5
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1506629905607-89d90d62e9ca?w=360&h=480&fit=crop",
      reviewText: "Perfect for special occasions! The fit is true to size and the material feels luxurious.",
      rating: 5
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=360&h=480&fit=crop",
      reviewText: "Such beautiful craftsmanship! This has become my go-to outfit for important events.",
      rating: 5
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=360&h=480&fit=crop",
      reviewText: "Incredible attention to detail. The quality is outstanding and worth every penny!",
      rating: 5
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=360&h=480&fit=crop",
      reviewText: "Love the elegant design and comfortable fit. Highly recommend this brand!",
      rating: 5
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=360&h=480&fit=crop",
      reviewText: "Exceptional quality and beautiful styling. This exceeded all my expectations!",
      rating: 5
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=360&h=480&fit=crop",
      reviewText: "Perfect fit and gorgeous design. The fabric quality is absolutely amazing!",
      rating: 5
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=360&h=480&fit=crop",
      reviewText: "Stunning piece! The craftsmanship is evident in every detail. Love it!",
      rating: 5
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1502323777036-f29e3972d82f?w=360&h=480&fit=crop",
      reviewText: "Beautiful design and excellent quality. This brand never disappoints!",
      rating: 5
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=360&h=480&fit=crop",
      reviewText: "Amazing fit and the fabric feels so luxurious. Absolutely perfect!",
      rating: 5
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1477901492169-d59e6428fc90?w=360&h=480&fit=crop",
      reviewText: "Love everything about this piece! Quality, design, and fit are all perfect.",
      rating: 5
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=360&h=480&fit=crop",
      reviewText: "Exceptional quality and beautiful design. This is definitely my new favorite!",
      rating: 5
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=360&h=480&fit=crop",
      reviewText: "Perfect for any occasion! The quality and design are absolutely outstanding.",
      rating: 5
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=360&h=480&fit=crop",
      reviewText: "Incredible attention to detail and amazing fabric quality. Highly recommended!",
      rating: 5
    },
    {
      id: 17,
      image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=360&h=480&fit=crop",
      reviewText: "Love the elegant style and perfect fit. This brand is simply amazing!",
      rating: 5
    },
    {
      id: 18,
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=360&h=480&fit=crop",
      reviewText: "Beautiful craftsmanship and luxurious feel. Worth every penny!",
      rating: 5
    },
    {
      id: 19,
      image: "https://images.unsplash.com/photo-1533973735018-35d36c442c14?w=360&h=480&fit=crop",
      reviewText: "Stunning design and exceptional quality. This has become my favorite piece!",
      rating: 5
    },
    {
      id: 20,
      image: "https://images.unsplash.com/photo-1520639888713-7851133b1ed0?w=360&h=480&fit=crop",
      reviewText: "Perfect fit and gorgeous styling. The quality exceeded all my expectations!",
      rating: 5
    }
  ];

  // Load more reviews function
  const loadMoreReviews = useCallback(() => {
    if (visibleReviews >= allReviews.length || isLoading) return;
    
    setIsLoading(true);
    // Load 3 more reviews
    const newCount = Math.min(visibleReviews + 3, allReviews.length);
    
    setTimeout(() => {
      setVisibleReviews(newCount);
      setIsLoading(false);
    }, 200);
  }, [visibleReviews, allReviews.length, isLoading]);

  // Infinite scroll implementation
  useEffect(() => {
    const handleScroll = () => {
      if (isLoading || visibleReviews >= allReviews.length) return;
      
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Trigger load when user is 800px from bottom
      if (scrollPosition >= documentHeight - 800) {
        loadMoreReviews();
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreReviews, isLoading, visibleReviews, allReviews.length]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  // Render stars
  const renderStars = () => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className="text-[18px] text-yellow-400"
        style={{ 
          color: '#FFD700',
          marginRight: index < 4 ? '2px' : '0'
        }}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className="w-full bg-white py-[60px]">
      <div className="max-w-[1440px] mx-auto px-10">
        {/* Reviews Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[40px] md:gap-x-5 md:gap-y-[30px] place-items-center"
        >
          <AnimatePresence mode="popLayout">
            {allReviews.slice(0, visibleReviews).map((review) => (
              <motion.div
                key={`review-${review.id}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="w-full max-w-[360px] md:max-w-[320px] lg:max-w-[360px] min-h-[480px] md:min-h-[450px] lg:min-h-[480px] bg-white rounded-xl shadow-[0px_4px_15px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="w-full aspect-[3/4] overflow-hidden rounded-t-xl">
                  <img
                    src={review.image}
                    alt={`Customer review ${review.id}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col items-center justify-start p-[15px_10px] text-center">
                  {/* Stars */}
                  <div className="flex items-center justify-center mt-3 mb-[10px]">
                    {renderStars()}
                  </div>

                  {/* Review Text */}
                  <p 
                    className="text-sm leading-5 text-gray-800 mt-2 max-w-[90%]"
                    style={{
                      fontFamily: "'Helvetica Neue', Arial, sans-serif",
                      fontSize: '14px',
                      fontWeight: '400',
                      lineHeight: '20px',
                      color: '#333333',
                      letterSpacing: '0.2px',
                      WebkitFontSmoothing: 'antialiased'
                    }}
                  >
                    {review.reviewText}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="flex justify-center mt-8">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-400"></div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CustomerReviews;