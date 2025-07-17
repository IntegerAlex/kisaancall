"use client";

import React from 'react';
import Image from 'next/image';
  //import { Play } from 'lucide-react';
import { Button } from './ui/button';

const ContactFormSection: React.FC = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-in {
          animation: slideInFromLeft 1s ease-out forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
        
        {/* Left Section with animated farmer image */}
        <div className="relative w-full lg:w-1/2 min-h-[500px] lg:min-h-[700px] animate-slide-in">
          <Image
            src="/images/contact-1-1.jpg"
            alt="Farmer with vegetables"
            fill
            className="object-cover"
            priority
          />
          
          {/* Contact Card */}
          <div className="absolute bottom-12 left-10 bg-white p-6 md:p-8 rounded-xl shadow-xl max-w-xs">
            <div className="flex flex-col items-start gap-4">
              <div className="text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-12 h-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5h12M9 3v2m-6 4h18m-6 0v12m0 0H9m3 0V9"
                  />
                </svg>
              </div>
              <div className="text-sm text-gray-600 uppercase font-bold">Call Now</div>
              <div className="text-lg font-semibold text-gray-800">
                Get This Free For Contact Now
              </div>
              <div className="text-md font-bold text-[#528C4B]">+72 (555) 000 22</div>
            </div>
          </div>
        </div>

        {/* Right Section with form */}
        <div className="w-full lg:w-1/2 bg-black p-6 md:p-12 lg:p-20 flex items-center justify-center relative">
          <div className="absolute right-0 bottom-0 w-32 h-32 lg:w-48 lg:h-48 z-0 translate-x-1/3 translate-y-1/3">
            <Image
              src="/images/broccoli.png"
              alt="Broccoli"
              fill
              className="object-contain"
            />
          </div>
          <div className="relative z-10 w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wide flex items-center gap-2 mb-2">
              <span>🌿</span> Contact Us
            </p>
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-[#528C4B] focus:border-[#528C4B] outline-none"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-[#528C4B] focus:border-[#528C4B] outline-none"
                required
              />
              <input
                type="text"
                placeholder="Address"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-[#528C4B] focus:border-[#528C4B] outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-[#528C4B] focus:border-[#528C4B] outline-none"
              />
              <select
                className="w-full px-4 py-3 rounded border border-gray-300 focus:ring-[#528C4B] focus:border-[#528C4B] outline-none text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Choose Service
                </option>
                <option value="consulting">Agricultural Consulting</option>
                <option value="delivery">Fresh Produce Delivery</option>
              </select>
              <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                      <Button
                        size="lg"
                        className="alefox-btn bg-transparent text-[#528C4B] px-4 py-3 w-full rounded-lg transition-all duration-300 hover:bg-[#528C4B] hover:text-white"
                      >
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="relative z-10">SEND REQUEST</span>
                      </Button>
                    </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;