'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, User, ShoppingBag, ChevronDown } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Custom Header */}
      <header 
        className="w-full flex justify-between items-center border-b"
        style={{
          height: '80px',
          backgroundColor: '#FFFFFF',
          borderBottomColor: '#EAEAEA',
          paddingLeft: '40px',
          paddingRight: '40px'
        }}
      >
        {/* Logo */}
        <div>
          <h1 
            style={{
              fontFamily: 'Cursive, serif',
              fontSize: '28px',
              color: '#000000'
            }}
          >
            Bomzan Closet
          </h1>
        </div>

        {/* Navigation */}
        <nav 
          className="hidden md:flex items-center"
          style={{
            fontFamily: 'Arial, sans-serif',
            fontSize: '16px',
            color: '#000000'
          }}
        >
          <div className="flex items-center space-x-[30px]">
            <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
            <Link href="/new-arrivals" className="hover:opacity-70 transition-opacity">New Arrivals</Link>
            <div className="relative">
              <button className="flex items-center gap-1 hover:opacity-70 transition-opacity">
                Shop by
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link href="/about" className="hover:opacity-70 transition-opacity">About Us</Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
          </div>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center space-x-5">
          {/* Country Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
              className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            >
              <span>🇮🇳</span>
              <span>India | INR ₹</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {showCountryDropdown && (
              <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-2 min-w-[160px] z-10">
                <div className="py-2 px-3 text-sm hover:bg-gray-50 rounded cursor-pointer flex items-center gap-2">
                  <span>🇮🇳</span>
                  <span>India | INR ₹</span>
                </div>
                <div className="py-2 px-3 text-sm hover:bg-gray-50 rounded cursor-pointer flex items-center gap-2">
                  <span>🇺🇸</span>
                  <span>USA | USD $</span>
                </div>
                <div className="py-2 px-3 text-sm hover:bg-gray-50 rounded cursor-pointer flex items-center gap-2">
                  <span>🇪🇺</span>
                  <span>EU | EUR €</span>
                </div>
              </div>
            )}
          </div>

          {/* Search Icon */}
          <button className="hover:opacity-70 transition-opacity">
            <Search className="w-5 h-5 text-black" />
          </button>

          {/* User Icon */}
          <button className="hover:opacity-70 transition-opacity">
            <User className="w-5 h-5 text-black" />
          </button>

          {/* Bag Icon */}
          <button className="hover:opacity-70 transition-opacity">
            <ShoppingBag className="w-5 h-5 text-black" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div 
          className="mx-auto text-center"
          style={{
            maxWidth: '450px',
            margin: '120px auto 80px auto'
          }}
        >
          {/* Heading */}
          <h1 
            className="mb-10"
            style={{
              fontFamily: 'Cursive, serif',
              fontSize: '36px',
              fontWeight: '700',
              color: '#000000'
            }}
          >
            Login
          </h1>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="w-full">
            {/* Email Field */}
            <div className="mb-5">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                style={{
                  height: '50px',
                  paddingLeft: '12px',
                  fontSize: '16px'
                }}
              />
            </div>

            {/* Password Field */}
            <div className="mb-2.5">
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full border border-black focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
                style={{
                  height: '50px',
                  paddingLeft: '12px',
                  fontSize: '16px'
                }}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-left mb-[30px]">
              <Link 
                href="/forgot-password" 
                className="hover:opacity-70 transition-opacity"
                style={{
                  fontSize: '14px',
                  color: '#000000'
                }}
              >
                Forgot your password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full text-white hover:bg-gray-800 transition-colors duration-200 mt-5"
              style={{
                backgroundColor: '#000000',
                height: '50px',
                fontSize: '16px',
                fontWeight: '700',
                borderRadius: '0px'
              }}
            >
              Sign in
            </button>
          </form>

          {/* Create Account Link */}
          <div className="text-center mt-5">
            <Link 
              href="/register" 
              className="hover:opacity-70 transition-opacity"
              style={{
                fontSize: '14px',
                color: '#000000'
              }}
            >
              Create account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}