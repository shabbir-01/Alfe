'use client';

import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { text: "Home", url: "/" },
    { text: "Shop", url: "/shop" },
    { text: "About", url: "/about" },
    { text: "Contact", url: "/contact" }
  ];

  const socialMediaLinks = [
    { platform: "Instagram", url: "https://instagram.com", icon: Instagram },
    { platform: "Facebook", url: "https://facebook.com", icon: Facebook },
    { 
      platform: "Pinterest", 
      url: "https://pinterest.com", 
      icon: () => (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.690 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.357-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.001 24c6.624 0 11.99-5.373 11.99-12C24 5.372 18.627.001 12.001.001z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-white">
      <div className="max-w-[1440px] mx-auto px-5 py-10 text-center">
        <div className="flex flex-col items-center space-y-5">
          
          {/* Brand Name */}
          <h2 
            className="text-[#111111] mb-[10px]"
            style={{
              fontFamily: "'Helvetica Neue', Arial, sans-serif",
              fontSize: '20px',
              fontWeight: '600',
              letterSpacing: '1px'
            }}
          >
            Alfè
          </h2>

          {/* Navigation Links */}
          <nav className="flex flex-row items-center space-x-6 md:space-x-4 sm:flex-col sm:space-x-0 sm:space-y-3">
            {navigationLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-[#555555] hover:text-black transition-colors duration-200"
                style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  textDecoration: 'none'
                }}
              >
                {link.text}
              </a>
            ))}
          </nav>

          {/* Social Media Icons */}
          <div className="flex items-center space-x-5">
            {socialMediaLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#555555] hover:text-black transition-colors duration-200"
                  aria-label={social.platform}
                >
                  <IconComponent />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <p 
            className="text-[#999999] mt-5"
            style={{
              fontSize: '12px',
              fontWeight: '300'
            }}
          >
            © 2025 Alfè. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;