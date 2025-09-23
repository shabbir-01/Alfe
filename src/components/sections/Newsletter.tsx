'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Newsletter subscription:', email);
    // Reset form
    setEmail('');
    // You can add success message or API call here
  };

  return (
    <div className="w-full bg-white pt-[50px] pb-[50px] flex flex-col items-center">
      {/* Heading */}
      <h2 className="font-serif italic text-[24px] font-semibold text-black text-center mb-4">
        Subscribe to our emails
      </h2>
      
      {/* Subheading */}
      <p className="font-sans text-sm font-normal text-gray-600 text-center mb-5">
        Be the first to know about new collections and exclusive offers.
      </p>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-[300px] h-[45px] px-3 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
        />
        <button
          type="submit"
          className="h-[45px] px-4 bg-transparent border-none cursor-pointer hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center"
        >
          <ArrowRight className="w-4 h-4 text-gray-700" />
        </button>
      </form>
    </div>
  );
};

export default Newsletter;