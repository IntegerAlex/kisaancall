import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, MapPin, Phone, Facebook, Twitter, Instagram, Square } from 'lucide-react';
import ScrollToTopButton from './ScrollToTopButton';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C3B24] text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <Image src="/images/slider-2-1.jpg" alt="footer-bg" fill className="object-cover" />
      </div>
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Contact Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-[#528C4B] rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.0001 0.833313C5.64253 0.833313 2.08337 4.39248 2.08337 8.75001C2.08337 13.1075 5.64253 16.6666 10.0001 16.6666C14.3576 16.6666 17.9167 13.1075 17.9167 8.75001C17.9167 4.39248 14.3576 0.833313 12.0001 0.833313ZM12.0001 1.66665C13.8824 1.66665 17.0834 4.86766 17.0834 8.75001C17.0834 12.6323 13.8824 15.8333 12.0001 15.8333C6.11776 15.8333 2.91671 12.6323 2.91671 8.75001C2.91671 4.86766 6.11776 1.66665 12.0001 1.66665Z" fill="white"/>
                  <path d="M12.0001 4.58331C9.81014 4.58331 8.04171 6.35174 8.04171 8.54165C8.04171 10.7316 9.81014 12.5 12.0001 12.5C14.19 12.5 15.9584 10.7316 15.9584 8.54165C15.9584 6.35174 14.19 4.58331 12.0001 4.58331ZM12.0001 5.41665C13.7226 5.41665 15.1251 6.81912 15.1251 8.54165C15.1251 10.2642 13.7226 11.6666 12.0001 11.6666C10.2776 11.6666 8.87504 10.2642 8.87504 8.54165C8.87504 6.81912 10.2776 5.41665 12.0001 5.41665Z" fill="white"/>
                  <path d="M12.0001 7.29169C11.1714 7.29169 10.5000 7.9631 10.5000 8.79177C10.5000 9.62035 11.1714 10.2918 12.0001 10.2918C12.8286 10.2918 13.5001 9.62035 13.5001 8.79177C13.5001 7.9631 12.8286 7.29169 12.0001 7.29169Z" fill="white"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold">Alefox</h2>
            </div>
            <div className="space-y-4 text-gray-300">
              <p className="flex items-center"><Clock className="mr-2 w-5 h-5 text-[#528C4B]" /> Open Hours of Government:</p>
              <p className="pl-7">Mon - Fri: 8.00 am - 6.00 pm.</p>
              <p className="flex items-center"><MapPin className="mr-2 w-5 h-5 text-[#528C4B]" /> 13/A, Miranda Halim City .</p>
              <p className="flex items-center"><Phone className="mr-2 w-5 h-5 text-[#528C4B]" /> 099 695 695 35</p>
            </div>
            <div className="flex space-x-3 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#528C4B] transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#528C4B] transition-colors duration-300">
                <Square className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#528C4B] transition-colors duration-300">
                <Twitter className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#528C4B] transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          {/* Column 2: Service Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Service</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Always Fresh</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Organic Product</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Agriculture Staff</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Growth Providing</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Organic Farming</Link></li>
            </ul>
        </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Links</h3>
            <ul className="space-y-3 text-gray-300 text-lg">
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Shop</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Login</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">About us</Link></li>
              <li><Link href="#" className="hover:text-[#528C4B] transition-colors duration-300">Contact Us</Link></li>
          </ul>
        </div>

          {/* Column 4: Recent Posts */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Recent Posts</h3>
            <div className="space-y-6">
              {/* Post 1 */}
              <div className="flex items-center group">
                <div className="flex-shrink-0 w-24 h-24 relative rounded-md overflow-hidden mr-4">
                  <Image src="/images/service-2-3.jpg" alt="Organic Food" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">23 Jun 2023</p>
                  <Link href="#" className="text-lg font-semibold leading-tight hover:text-[#528C4B] transition-colors duration-300">
                    Organic Food for Healthy life
                  </Link>
                </div>
              </div>
              {/* Post 2 */}
              <div className="flex items-center group">
                <div className="flex-shrink-0 w-24 h-24 relative rounded-md overflow-hidden mr-4">
                  <Image src="/images/project-1-2.jpg" alt="Success of Score" fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">23 Jun 2023</p>
                  <Link href="#" className="text-lg font-semibold leading-tight hover:text-[#528C4B] transition-colors duration-300">
                    Success of Score for Farmer
                  </Link>
                </div>
              </div>
        </div>
          </div>
        </div>

        {/* Copyright and Scroll to Top */}
        <div className="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Alefox. All Rights Reserved.</p>
          <ScrollToTopButton />
      </div>
      </div>
    </footer>
  );
};

export default Footer; 