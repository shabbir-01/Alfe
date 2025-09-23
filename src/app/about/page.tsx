import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="max-w-[1200px] mx-auto px-8 py-20">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Subtitle */}
          <p 
            className="text-[#666666] text-center mb-6"
            style={{
              fontFamily: 'sans-serif',
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '3px',
              textTransform: 'uppercase'
            }}
          >
            ABOUT US
          </p>

          {/* Title */}
          <h1 
            className="text-[#222222] text-center leading-tight"
            style={{
              fontFamily: 'serif',
              fontSize: '48px',
              fontWeight: '600',
              letterSpacing: '-1px'
            }}
          >
            From Pinterest, to you.
          </h1>
        </div>

        {/* Content Section */}
        <div 
          className="bg-[#FFF8F3] px-12 py-20 rounded-2xl shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Column */}
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="w-full max-w-[500px]">
                {/* Placeholder for logo - replace with actual image */}
                <div 
                  className="w-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center border border-gray-200 shadow-inner transition-all duration-300 hover:shadow-lg"
                  style={{
                    aspectRatio: '1.2/1',
                    minHeight: '350px'
                  }}
                >
                  <div className="text-center text-gray-500">
                    <div className="text-6xl mb-4 opacity-60">🏪</div>
                    <p className="text-base font-medium mb-2">Bomzan Closet Logo</p>
                    <p className="text-sm opacity-60">Replace with about-us-logo.png</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Column */}
            <div className="max-w-[600px] order-1 lg:order-2">
              {/* Content Title */}
              <h2 
                className="text-black text-left mb-6 leading-tight"
                style={{
                  fontFamily: 'serif',
                  fontSize: '32px',
                  fontWeight: '600',
                  letterSpacing: '-0.5px'
                }}
              >
                Bomzan closet
              </h2>

              {/* Content Paragraph */}
              <div className="prose prose-lg max-w-none">
                <p 
                  className="text-[#444444] text-left leading-relaxed"
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '1.8',
                    letterSpacing: '0.2px'
                  }}
                >
                  Welcome to Bomzan Closet* – where confidence meets comfort in every stitch. We believe that everyone deserves to feel amazing in their own skin, and our styles are here to make that happen.
                </p>
                
                <p 
                  className="text-[#444444] text-left leading-relaxed mt-6"
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '17px',
                    fontWeight: '400',
                    lineHeight: '1.8',
                    letterSpacing: '0.2px'
                  }}
                >
                  At Bomzan Closet, you&apos;ll find clothing that&apos;s trendy, comfortable, and budget-friendly, making fashion accessible without compromising on quality or style. Our diverse range is designed to celebrate all body types, so no matter your size, you&apos;re invited to explore a world of fashion that feels as good as it looks.
                </p>
                
                <p 
                  className="text-[#444444] text-left leading-relaxed mt-6 font-medium"
                  style={{
                    fontFamily: 'sans-serif',
                    fontSize: '17px',
                    fontWeight: '500',
                    lineHeight: '1.8',
                    letterSpacing: '0.2px'
                  }}
                >
                  Embrace your unique style with us – because confidence is always in style!
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Our Story Section */}
        <section 
          className="w-full"
          style={{
            backgroundColor: '#FDF7F2',
            padding: '80px 60px',
            marginTop: '40px'
          }}
        >
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-[60px] items-start">
              {/* Text Column - 40% */}
              <div className="lg:col-span-5">
                {/* Heading */}
                <h2 
                  className="mb-5"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '32px',
                    fontWeight: '700',
                    color: '#333333'
                  }}
                >
                  Our Story
                </h2>

                {/* Paragraph */}
                <p 
                  className="mb-10"
                  style={{
                    fontFamily: 'Arial, sans-serif',
                    fontSize: '18px',
                    lineHeight: '1.6',
                    color: '#333333'
                  }}
                >
                  At Bomzan Closet, we bring you Pinterest-inspired fashion with a focus on the latest trends and statement pieces. Our collection is carefully curated for those who love staying ahead in style, offering a blend of trendy, chic, and stylish outfits for every occasion. We believe fashion should be expressive, effortless, and unique, which is why we aim to deliver high-quality, on-trend clothing that reflects your personality. Explore Bomzan Closet and discover fashion that speaks to you.
                </p>

                {/* Currency Dropdown */}
                <div className="relative">
                  <select 
                    className="w-[80px] h-[35px] px-2 pr-6 text-sm border border-gray-300 rounded-md bg-white appearance-none cursor-pointer hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                    style={{
                      borderRadius: '6px'
                    }}
                  >
                    <option value="INR">🇮🇳 INR</option>
                    <option value="USD">🇺🇸 USD</option>
                    <option value="EUR">🇪🇺 EUR</option>
                    <option value="GBP">🇬🇧 GBP</option>
                  </select>
                  <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <svg className="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Images Column - 60% */}
              <div className="lg:col-span-7">
                <div className="flex justify-between gap-2">
                  {/* Image 1 */}
                  <div className="w-[33%] aspect-[2/3]">
                    <img
                      src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop"
                      alt="Fashion Model 1"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Image 2 with Overlay Text */}
                  <div className="w-[33%] aspect-[2/3] relative">
                    <img
                      src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop"
                      alt="Fashion Model 2"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {/* Overlay Text */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20">
                      <h3 
                        className="text-white text-center"
                        style={{
                          fontFamily: 'Cursive, serif',
                          fontSize: '32px',
                          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                        }}
                      >
                        Bomzan Closet
                      </h3>
                    </div>
                  </div>

                  {/* Image 3 */}
                  <div className="w-[33%] aspect-[2/3]">
                    <img
                      src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop"
                      alt="Fashion Model 3"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
