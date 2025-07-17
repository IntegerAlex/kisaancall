"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
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
    </header>
  )
}

export default Header 