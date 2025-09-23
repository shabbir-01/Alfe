'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, User, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'New Arrivals', href: '/new-arrivals' },
    {
      label: 'Shop by',
      href: '#',
      dropdown: [
        'Fairy frills',
        'Dresses', 
        'Skirts & Bottoms',
        'Tops and Fairy Kurti',
        'Accessories'
      ],
    },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const getDropdownLink = (dropdownItem: string) => {
    switch (dropdownItem) {
      case 'Fairy frills':
        return '/fairy-frills';
      case 'Dresses':
        return '/dresses';
      case 'Skirts & Bottoms':
        return '/skirts-bottoms';
      case 'Tops and Fairy Kurti':
        return '/tops-fairy-kurti';
      case 'Accessories':
        return '/accessories';
      default:
        return '#';
    }
  };

  const NavLink = ({ item, isMobile = false }: { item: { label: string; href: string; dropdown?: string[] }; isMobile?: boolean }) => {
    if (item.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className={`${isMobile ? 'text-left w-full' : ''} hover:underline transition-all duration-200 ease-in-out`}>
            {item.label}
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {item.dropdown.map((dropdownItem: string, index: number) => (
              <DropdownMenuItem key={index} className="cursor-pointer">
                <a href={getDropdownLink(dropdownItem)} className="w-full block">
                  {dropdownItem}
                </a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <a 
        href={item.href} 
        className="hover:underline transition-all duration-200 ease-in-out"
        onClick={() => isMobile && setIsOpen(false)}
      >
        {item.label}
      </a>
    );
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex-shrink-0"
          >
            <h1 className="text-2xl font-bold font-serif text-black">
              Alfè
            </h1>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex items-center space-x-8 font-sans"
          >
            {navItems.map((item, index) => (
              <div key={index} className="relative">
                <NavLink item={item} />
              </div>
            ))}
          </motion.div>

          {/* Right side icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="md:hidden"
                  onClick={() => setIsOpen(true)}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left font-serif text-xl">Alfè</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8">
                  {navItems.map((item, index) => (
                    <div key={index}>
                      <NavLink item={item} isMobile />
                    </div>
                  ))}
                  <div className="flex items-center space-x-4 pt-4 border-t">
                    <Button variant="ghost" size="icon">
                      <Search className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <User className="h-5 w-5" />
                    </Button>
                    <span className="text-sm text-gray-500">Search & Account</span>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;