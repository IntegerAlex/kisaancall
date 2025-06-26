"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Pause, Heart } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { cn } from "@/lib/utils"

interface SliderImage {
  src: string
  alt: string
  title?: string
  description?: string
}

const sliderImages: SliderImage[] = [
  {
    src: "/images/slider-2-1.jpg",
    alt: "Best Organic Firms - Slide 1",
    title: "100% Quality Foods",
    description: "Best Organic Firms Food Of Healthy. Food can only be as strong as our people & because of team have designed game changing products."
  },
  {
    src: "/images/slider-2-2.jpg",
    alt: "Best Organic Firms - Slide 2",
    title: "Fresh & Natural",
    description: "Discover our premium collection of organic products sourced directly from trusted farms worldwide."
  },
  {
    src: "/images/slider-2-3.jpg",
    alt: "Best Organic Firms - Slide 3",
    title: "Sustainable Living",
    description: "Join the movement towards healthier living with our eco-friendly and sustainable food choices."
  }
]

interface ImageSliderProps {
  className?: string
  autoPlay?: boolean
  autoPlayInterval?: number
}

export default function ImageSlider({
  className,
  autoPlay = true,
  autoPlayInterval = 5000
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(autoPlay)
  const intervalRef = React.useRef<NodeJS.Timeout | null>(null)

  const nextSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
    )
  }, [])

  const prevSlide = React.useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderImages.length - 1 : prevIndex - 1
    )
  }, [])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  React.useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(nextSlide, autoPlayInterval)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isPlaying, nextSlide, autoPlayInterval])

  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevSlide()
      } else if (event.key === "ArrowRight") {
        nextSlide()
      } else if (event.key === " ") {
        event.preventDefault()
        togglePlayPause()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [nextSlide, prevSlide])

  return (
    <Card className={cn("relative overflow-hidden group", className)}>
      <CardContent className="p-0">
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sliderImages.map((image, index) => (
              <div key={index} className="relative min-w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full px-6 md:px-12 lg:px-16 pb-[120px] flex items-end justify-start">
                  <div className="max-w-2xl text-white text-left">
                    <div className="mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {image.title}
                      </span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                      Best Organic Firms<br />
                      Food Of <span className="inline-block px-2 py-1 bg-green-500 text-white rounded">Healthy.</span>
                    </h1>
                    <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-xl leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                      {image.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
                      <Button
                        size="lg"
                        className="alefox-btn bg-transparent text-[#528C4B] px-8 py-3 rounded-lg transition-all duration-300 hover:bg-[#528C4B] hover:text-white"
                      >
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="alefox-btn__item"></span>
                        <span className="relative z-10">OUR STORES</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="relative w-20 h-20 rounded-full border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                      >
                        <Play className="w-7 h-7 text-white z-10 relative" />
                        <span className="absolute inset-0 block rounded-full bg-white/40 animate-ripple origin-center" style={{ animationDuration: '2.5s', animationTimingFunction: 'linear', animationIterationCount: 'infinite' }}></span>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Rotating Badge */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[200px] md:left-[calc(50%+100px)] w-[180px] h-[180px] flex items-center justify-center">
                  <div className="w-full h-full relative animate-infiniteRotate">
                    <Image
                      src="/images/slider-2-shape-1.png"
                      alt="100% Natural Organic Badge"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300"
            onClick={togglePlayPause}
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </Button>
        </div>

        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col space-y-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                index === currentIndex
                  ? "bg-[#528C4B] text-white scale-110"
                  : "bg-white text-gray-800 hover:bg-gray-200"
              )}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            >
              0{index + 1}
            </button>
          ))}
        </div>

        <div className="absolute bottom-[100px] left-[70px] flex flex-col items-center">
          <Heart className="w-6 h-6 text-white mb-2" fill="white" />
          <div className="w-0.5 h-20 border-l border-dashed border-white"></div>
        </div>
      </CardContent>

      {/* 🔁 Add animation CSS here */}
      <style jsx>{`
        @keyframes infiniteRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-infiniteRotate {
          animation: infiniteRotate 10s linear infinite;
          transform-origin: center;
        }
      `}</style>
    </Card>
  )
}
