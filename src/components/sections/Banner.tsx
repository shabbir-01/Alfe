'use client';

import React from 'react';

const Banner = () => {
  return (
    <div className="relative w-full h-[350px] flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=350&fit=crop')"
        }}
      />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-20" />

      {/* Content Overlay Box */}
      <div className="relative z-10 w-[70%] max-w-[600px] bg-white px-[30px] py-5 text-center">
        {/* Heading */}
        <h2 className="font-serif italic text-[28px] font-semibold text-black mb-3">
          Bomzan Closet
        </h2>
        
        {/* Description */}
        <p 
          className="font-sans italic text-[12px] font-normal text-gray-600 leading-relaxed"
          style={{ letterSpacing: '1px' }}
        >
          APPRECIATE YOU STOPPING BY OUR PAGE AND BRINGING US JOY, WE HOPE YOU FALL IN LOVE WITH YOUR SHOPPING EXPERIENCE. MAKE SURE TO TAG US!
        </p>
      </div>
    </div>
  );
};

export default Banner;