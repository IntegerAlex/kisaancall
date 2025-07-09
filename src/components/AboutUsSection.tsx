"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Settings,
  Building,
  BarChart2,
  CheckCircle,
  Play,
} from "lucide-react";

const AboutUsSection = () => {
  return (
    <section className="relative py-16 md:py-24 bg-white overflow-hidden">
      {/* Decorative leaf images */}
      <Image
        src="/images/about-2-shape-2.png"
        alt="Decorative Leaf Left"
        width={150}
        height={200}
        className="absolute left-0 top-1/2 transform -translate-x-full -translate-y-1/2 rotate-90 z-10 opacity-80 hidden lg:block"
      />
      <Image
        src="/images/about-2-shape-2.png"
        alt="Decorative Leaf Right"
        width={150}
        height={200}
        className="absolute right-0 top-1/2 transform translate-x-full -translate-y-1/2 -rotate-90 z-10 opacity-80 hidden lg:block"
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2 flex-shrink-0">
            <div className="relative w-full h-[400px] md:h-[550px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/about-2-1.jpg"
                alt="Organic Agriculture"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </div>

          {/* Right Section - Text and Stats */}
          <div className="w-full lg:w-1/2 space-y-6 lg:pl-16">
            <span className="text-green-600 font-semibold text-sm uppercase tracking-wider">
              OUR ABOUT US
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
              This Organic of Agriculture About Food Market.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Organic address a range of simply application and infrastructure this
              of passages of available, but the majority have suffered poor
              alteration in some form.
            </p>

            {/* Features */}
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Atiam rhoncus sit amet adip ipsum.</span>
              </div>
              <div className="flex items-center text-gray-700">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                <span>Food rhoncus sit amet natural.</span>
              </div>
            </div>

            {/* Stats and Call-to-Action */}
            <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
              <Button
                size="lg"
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                ABOUT MORE
              </Button>

              {/* Video thumbnail */}
              <div className="relative w-full max-w-[250px] md:max-w-[300px] h-auto rounded-xl overflow-hidden shadow-lg group">
                <Image
                  src="/images/about-3-video.png"
                  alt="Video thumbnail"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                  <Button
                    variant="outline"
                    size="icon"
                    className="relative w-16 h-16 rounded-full border-white text-white hover:bg-white/20 backdrop-blur-sm overflow-hidden"
                  >
                    <Play className="w-6 h-6 text-white z-10 relative" />
                    <span
                      className="absolute inset-0 block rounded-full bg-white/20 animate-ripple origin-center"
                      style={{
                        animationDuration: "1.5s",
                        animationTimingFunction: "ease-out",
                        animationIterationCount: "infinite",
                      }}
                    ></span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overlay */}
        <div className="absolute bottom-0 left-0 w-full lg:w-1/2 p-6 bg-white rounded-lg shadow-lg grid grid-cols-3 gap-6 mt-8 lg:mt-0">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-2">
              <Settings className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">99M+</h3>
            <p className="text-sm text-gray-500">Healthy Food</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-2">
              <Building className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">68K+</h3>
            <p className="text-sm text-gray-500">Expert Team</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-2">
              <BarChart2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-800">789+</h3>
            <p className="text-sm text-gray-500">Food Now</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;