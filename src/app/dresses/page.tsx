'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  soldOut: boolean;
}

export default function Dresses() {
  const [sortBy, setSortBy] = useState('Alphabetically, A-Z');
  const [showAvailabilityFilter, setShowAvailabilityFilter] = useState(false);
  const [showPriceFilter, setShowPriceFilter] = useState(false);
  const [showSortFilter, setShowSortFilter] = useState(false);

  // 6 Dress products - chic, trendy, and versatile outfits
  const products: Product[] = [
    {
      id: 1,
      name: "Elegant Midi Dress",
      price: "$289",
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=533&fit=crop",
      soldOut: false
    },
    {
      id: 2,
      name: "Floral Maxi Dress",
      price: "$249",
      image: "https://images.unsplash.com/photo-1566479179817-a5a1d8d1eb8c?w=400&h=533&fit=crop",
      soldOut: false
    },
    {
      id: 3,
      name: "Classic Black Dress",
      price: "$199",
      image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=533&fit=crop",
      soldOut: true
    },
    {
      id: 4,
      name: "Summer Sundress",
      price: "$179",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=533&fit=crop",
      soldOut: false
    },
    {
      id: 5,
      name: "Cocktail Party Dress",
      price: "$349",
      image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=533&fit=crop",
      soldOut: false
    },
    {
      id: 6,
      name: "Bohemian Wrap Dress",
      price: "$219",
      image: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?w=400&h=533&fit=crop",
      soldOut: false
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-6 py-20">
        {/* Filters Bar */}
        <div className="mb-12">
          {/* Page Title */}
          <h1 
            className="text-black mb-8"
            style={{
              fontFamily: 'serif',
              fontSize: '36px',
              fontWeight: '600',
              letterSpacing: '-0.5px'
            }}
          >
            Dresses
          </h1>
          
          {/* Filters Row */}
          <div className="flex flex-wrap items-center justify-between gap-6 p-4 bg-gray-50 rounded-lg">
            {/* Left Side - Filters */}
            <div className="flex flex-wrap items-center gap-4 text-base">
              <span className="font-sans font-medium text-black">Filter:</span>
              
              {/* Availability Filter */}
              <div className="relative">
                <button
                  onClick={() => setShowAvailabilityFilter(!showAvailabilityFilter)}
                  className="flex items-center gap-2 px-3 py-2 font-sans font-normal text-black hover:text-gray-600 hover:bg-white rounded-md transition-all duration-200"
                >
                  Availability
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showAvailabilityFilter && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[140px] z-10">
                    <div className="py-2 px-2 text-sm hover:bg-gray-50 rounded cursor-pointer">In Stock</div>
                    <div className="py-2 px-2 text-sm hover:bg-gray-50 rounded cursor-pointer">Sold Out</div>
                  </div>
                )}
              </div>
              
              {/* Price Filter */}
              <div className="relative">
                <button
                  onClick={() => setShowPriceFilter(!showPriceFilter)}
                  className="flex items-center gap-2 px-3 py-2 font-sans font-normal text-black hover:text-gray-600 hover:bg-white rounded-md transition-all duration-200"
                >
                  Price
                  <ChevronDown className="w-4 h-4" />
                </button>
                {showPriceFilter && (
                  <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[160px] z-10">
                    <div className="py-2 px-2 text-sm hover:bg-gray-50 rounded cursor-pointer">Under $100</div>
                    <div className="py-2 px-2 text-sm hover:bg-gray-50 rounded cursor-pointer">$100 - $200</div>
                    <div className="py-2 px-2 text-sm hover:bg-gray-50 rounded cursor-pointer">Over $200</div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Side - Sort and Count */}
            <div className="flex items-center gap-6">
              <span className="font-sans font-medium text-[#666666] text-sm bg-white px-3 py-2 rounded-md">{products.length} products</span>
              
              <div className="flex items-center gap-3">
                <span className="font-sans font-medium text-black">Sort by:</span>
                <div className="relative">
                  <button
                    onClick={() => setShowSortFilter(!showSortFilter)}
                    className="flex items-center gap-2 px-3 py-2 font-sans font-normal text-black hover:text-gray-600 hover:bg-white rounded-md transition-all duration-200 min-w-[160px] justify-between"
                  >
                    <span className="truncate">{sortBy}</span>
                    <ChevronDown className="w-4 h-4 flex-shrink-0" />
                  </button>
                  {showSortFilter && (
                    <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-3 min-w-[200px] z-10">
                      <div 
                        className="py-2 px-2 text-sm cursor-pointer hover:bg-gray-50 rounded transition-colors"
                        onClick={() => { setSortBy('Alphabetically, A-Z'); setShowSortFilter(false); }}
                      >
                        Alphabetically, A-Z
                      </div>
                      <div 
                        className="py-2 px-2 text-sm cursor-pointer hover:bg-gray-50 rounded transition-colors"
                        onClick={() => { setSortBy('Price, low to high'); setShowSortFilter(false); }}
                      >
                        Price, low to high
                      </div>
                      <div 
                        className="py-2 px-2 text-sm cursor-pointer hover:bg-gray-50 rounded transition-colors"
                        onClick={() => { setSortBy('Price, high to low'); setShowSortFilter(false); }}
                      >
                        Price, high to low
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] overflow-hidden hover:-translate-y-2 transition-all duration-300 ease-out cursor-pointer group"
            >
              {/* Product Image with Badge */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ease-out"
                  loading="lazy"
                />
                
                {/* Sold Out Badge */}
                {product.soldOut && (
                  <div 
                    className="absolute bottom-3 left-3 z-10 text-white bg-black px-3 py-1.5 rounded-full backdrop-blur-sm"
                    style={{
                      fontSize: '11px',
                      fontWeight: '500',
                      letterSpacing: '0.5px'
                    }}
                  >
                    SOLD OUT
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                {/* Product Name */}
                <h3 
                  className="text-black mb-3 leading-snug"
                  style={{
                    fontSize: '17px',
                    fontWeight: '500',
                    letterSpacing: '-0.2px'
                  }}
                >
                  {product.name}
                </h3>

                {/* Product Price */}
                <p 
                  className="text-[#666666] font-medium"
                  style={{
                    fontSize: '15px',
                    fontWeight: '500'
                  }}
                >
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}