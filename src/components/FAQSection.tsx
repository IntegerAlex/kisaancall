'use client';

import React, { useState } from 'react';
import Image from "next/image";

const faqData = [
  {
    id: "01",
    question: "Agriculture Food Why is it important ?",
    answer: "Organic address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
    isOpen: false
  },
  {
    id: "02", 
    question: "Bennings Appetite This Disposed ?",
    answer: "Organic address a range of simply application infrastructure of of available, but the majority have suffered.",
    isOpen: true
  },
  {
    id: "03",
    question: "Reprehenderit in voluptate ?",
    answer: "Organic address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
    isOpen: false
  },
  {
    id: "04",
    question: "Refreshing to get such a touch ?",
    answer: "Organic address a range of simply application and infrastructure this of passages of available, but the majority have suffered poor alteration in some form.",
    isOpen: false
  }
];

const FAQSection = () => {
  const [faqs, setFaqs] = useState(faqData);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => 
      i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
    ));
  };

  return (
    <section className="py-[120px] bg-white relative overflow-hidden">
      {/* Decorative leaf elements */}
      <div className="absolute -bottom-16 -left-16 w-48 h-48 opacity-30 z-0">
        <Image
          src="/images/about-2-shape-2.png"
          alt="Decorative leaf"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* FAQ Content */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[#44a05b] text-xl">🌿</span>
                <p className="text-[#44a05b] text-lg font-bold">FAQ US</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#122f2a] leading-tight">
                We Are Any Question Faq<br />
                Please Organic Food
              </h2>
              <p className="mt-4 text-[#636363] text-lg leading-[1.75]">
                Organic address a range of simply application and infrastructure this
                of passages of available, but the majority have suffered poor
                alteration in some form.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`rounded-lg border transition-all duration-300 ${
                    faq.isOpen 
                      ? 'bg-[#f6f4ec] shadow-md border-[#44a05b]' 
                      : 'bg-[#f6f4ec] border-[#dddddd]'
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-xl font-bold ${
                        faq.isOpen ? 'text-[#44a05b]' : 'text-gray-400'
                      }`}>
                        {faq.id}.
                      </span>
                      <h3 className={`text-lg font-semibold ${
                        faq.isOpen ? 'text-[#122f2a]' : 'text-gray-700'
                      }`}>
                        {faq.question}
                      </h3>
                    </div>
                    <div className={`transform transition-transform duration-300 ${
                      faq.isOpen ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <svg 
                        className={`w-6 h-6 ${faq.isOpen ? 'text-[#44a05b]' : 'text-gray-400'}`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    faq.isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-6 pb-4">
                      <div className="pl-8">
                        <p className="text-[#636363] leading-[1.75]">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center h-full">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full">
              <Image
                src="/images/faq-1-1.jpg"
                alt="Farmer with organic vegetables"
                width={600}
                height={700}
                className="object-cover w-full h-full"
              />
              
              {/* Floating question mark icon */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-[#44a05b] rounded-full flex items-center justify-center shadow-lg z-20">
                <span className="text-white text-4xl font-bold">?</span>
              </div>
              
              {/* FAQ badge */}
              <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-xl p-4 flex items-center gap-3 z-20">
                <div className="w-12 h-12 bg-[#fd7e14] rounded-full flex items-center justify-center text-white font-extrabold text-xl">
                  F
                </div>
                <div>
                  <h4 className="font-bold text-2xl text-gray-800">AQ</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection; 