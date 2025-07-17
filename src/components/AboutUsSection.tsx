"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Settings, Building, BarChart2, Play } from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white">
      {/* Decorative Leaf */}
      <Image
        src="/images/about-2-shape-2.png"
        alt="Decorative Leaf"
        width={200}
        height={260}
        className="absolute left-0 top-[-60px] z-10 opacity-90 hidden lg:block animate-pulse"
      />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-full aspect-[3/4] md:aspect-[3/2] rounded-xl overflow-hidden">
              <Image
                src="/images/about-2-1.jpg"
                alt="Organic Agriculture"
                fill
                priority
                className="object-cover object-center"
              />
              {/* Floating image */}
              <div className="absolute top-14 right-0 max-w-[210px] border-[7px] border-white animate-bounce z-10">
                <Image
                  src="/images/about-2-2.jpg"
                  alt="Orange Farm"
                  width={210}
                  height={140}
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:pl-12">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              OUR ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              This Organic of Agriculture About Food Market.
            </h2>
            <p className="text-gray-600 text-lg">
              Organic address a range of simply application and infrastructure this
              of passages of available, but the majority have suffered poor
              alteration in some form.
            </p>

            {/* Stats Box */}
            <div className="flex flex-col sm:flex-row items-center justify-between bg-white shadow-md border border-gray-200 rounded-lg overflow-x-auto divide-y sm:divide-y-0 sm:divide-x">
              {[{ icon: Settings, value: "99M+" }, { icon: Building, value: "68K+" }, { icon: BarChart2, value: "789+" }].map(
                ({ icon: Icon, value }, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-6 flex-1 min-w-[150px]">
                    <div className="w-14 h-14 bg-gray-900 text-white rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{value}</h3>
                  </div>
                )
              )}
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-6 pt-8">
            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                      <Button
                        size="lg"
                        className="alefox-btn bg-transparent text-[#528C4B] px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#528C4B] hover:text-white"
                      >
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="relative z-10">ABOUT MORE</span>
                      </Button>
                    </div>
              <div className="w-full md:max-w-[213px] border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative group">
                  <Image
                    src="/images/about-3-video.png"
                    alt="Video thumbnail"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <button className="ripple-button relative w-16 h-16 rounded-full border border-white text-white backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 z-10" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 👇 Custom keyframe animation via styled-jsx */}
      <style jsx>{`
        .ripple-button::before,
        .ripple-button::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.3);
          animation: ripple 1.6s ease-out infinite;
        }

        .ripple-button::after {
          animation-delay: 0.8s;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.6);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.8);
            opacity: 0;
          }
          100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutUsSection;
