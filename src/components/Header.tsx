"use client"

import * as React from "react"
import Link from "next/link"
import { Search, ShoppingCart, ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { motion } from "framer-motion";

const Header = () => {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = React.useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = React.useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = React.useState(false);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = React.useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 py-8 px-6 md:px-12 flex items-center justify-between border-b border-white border-opacity-20">
      {/* Logo */}
      <div className="flex items-center">
        <div className="bg-white rounded-lg pl-4 pr-5 py-2 shadow-md flex items-center justify-center space-x-2">
          <div className="w-10 h-10 bg-[#528C4B] rounded-full flex items-center justify-center flex-shrink-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0001 0.833313C5.64253 0.833313 2.08337 4.39248 2.08337 8.75001C2.08337 13.1075 5.64253 16.6666 10.0001 16.6666C14.3576 16.6666 17.9167 13.1075 17.9167 8.75001C17.9167 4.39248 14.3576 0.833313 12.0001 0.833313ZM12.0001 1.66665C13.8824 1.66665 17.0834 4.86766 17.0834 8.75001C17.0834 12.6323 13.8824 15.8333 12.0001 15.8333C6.11776 15.8333 2.91671 12.6323 2.91671 8.75001C2.91671 4.86766 6.11776 1.66665 12.0001 1.66665Z" fill="white"/>
              <path d="M12.0001 4.58331C9.81014 4.58331 8.04171 6.35174 8.04171 8.54165C8.04171 10.7316 9.81014 12.5 12.0001 12.5C14.19 12.5 15.9584 10.7316 15.9584 8.54165C15.9584 6.35174 14.19 4.58331 12.0001 4.58331ZM12.0001 5.41665C13.7226 5.41665 15.1251 6.81912 15.1251 8.54165C15.1251 10.2642 13.7226 11.6666 12.0001 11.6666C10.2776 11.6666 8.87504 10.2642 8.87504 8.54165C8.87504 6.81912 10.2776 5.41665 12.0001 5.41665Z" fill="white"/>
              <path d="M12.0001 7.29169C11.1714 7.29169 10.5000 7.9631 10.5000 8.79177C10.5000 9.62035 11.1714 10.2918 12.0001 10.2918C12.8286 10.2918 13.5001 9.62035 13.5001 8.79177C13.5001 7.9631 12.8286 7.29169 12.0001 7.29169Z" fill="white"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold text-gray-800 tracking-tighter">
            Alefox
          </h1>
        </div>
      </div>

      {/* Navigation Links (Desktop) */}
      <nav className="hidden lg:flex items-center space-x-8 text-white text-base font-normal flex-grow justify-center">
        <Link href="#" className="hover:text-green-400 transition-colors">Demos</Link>
        <Link href="#" className="hover:text-green-400 transition-colors">About</Link>
        <div
          className="relative group"
          onMouseEnter={() => setIsPagesDropdownOpen(true)}
          onMouseLeave={() => setIsPagesDropdownOpen(false)}
        >
          <Link href="#" className="flex items-center hover:text-green-400 transition-colors">
            Pages <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          </Link>
          {isPagesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2"
            >
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Page 1</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Page 2</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Page 3</Link>
            </motion.div>
          )}
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setIsServicesDropdownOpen(true)}
          onMouseLeave={() => setIsServicesDropdownOpen(false)}
        >
          <Link href="#" className="flex items-center hover:text-green-400 transition-colors">
            Services <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          </Link>
          {isServicesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2"
            >
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Service A</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Service B</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Service C</Link>
            </motion.div>
          )}
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setIsShopDropdownOpen(true)}
          onMouseLeave={() => setIsShopDropdownOpen(false)}
        >
          <Link href="#" className="flex items-center hover:text-green-400 transition-colors">
            Shop <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          </Link>
          {isShopDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2"
            >
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Shop Item 1</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">Shop Item 2</Link>
            </motion.div>
          )}
        </div>
        <div
          className="relative group"
          onMouseEnter={() => setIsNewsDropdownOpen(true)}
          onMouseLeave={() => setIsNewsDropdownOpen(false)}
        >
          <Link href="#" className="flex items-center hover:text-green-400 transition-colors">
            News <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
          </Link>
          {isNewsDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-2"
            >
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">News Article 1</Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">News Article 2</Link>
            </motion.div>
          )}
        </div>
        <Link href="#" className="hover:text-green-400 transition-colors">Contact</Link>
      </nav>

      {/* Right Section - Icons and Buttons */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
          <Search className="h-6 w-6" />
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 relative">
          <ShoppingCart className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">02</span>
        </Button>
        <Button 
          className="hidden md:inline-flex bg-transparent border border-[#528C4B] text-[#528C4B] px-8 py-3 rounded-full transition-all duration-300 hover:bg-[#528C4B] hover:text-white text-base font-medium"
        >
          DISCOVER MORE
        </Button>
    
      </div>      
    </header>
  )
}

export default Header 