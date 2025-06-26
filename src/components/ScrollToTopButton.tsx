"use client";

import React from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      className="mt-4 md:mt-0 w-10 h-10 rounded-full bg-[#528C4B] flex items-center justify-center hover:bg-[#457A3C] transition-colors duration-300"
      onClick={handleClick}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
};

export default ScrollToTopButton; 