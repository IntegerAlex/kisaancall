"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Play, Image as ImageIcon } from "lucide-react"
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
  const [imageErrors, setImageErrors] = React.useState<Record<number, boolean>>({})
  const [imageLoaded, setImageLoaded] = React.useState<Record<number, boolean>>({})
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

  const handleImageError = (index: number) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
  }

  const handleImageLoad = (index: number) => {
    setImageLoaded(prev => ({ ...prev, [index]: true }))
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
                {imageErrors[index] ? (
                  <div className="w-full h-full bg-gray-800 flex items-center justify-center">
                    <div className="text-center text-white">
                      <ImageIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-lg">Image failed to load</p>
                      <p className="text-sm opacity-70">{image.alt}</p>
                    </div>
                  </div>
                ) : (
                  <>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className={cn(
                        "object-cover transition-opacity duration-300",
                        imageLoaded[index] ? "opacity-100" : "opacity-0"
                      )}
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      onError={() => handleImageError(index)}
                      onLoad={() => handleImageLoad(index)}
                    />
                    {!imageLoaded[index] && !imageErrors[index] && (
                      <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-4 border-white/20 border-t-white"></div>
                      </div>
                    )}
                  </>
                )}
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
                      <button className="ripple-button relative w-16 h-16 rounded-full border border-white text-white backdrop-blur-sm flex items-center justify-center">
                      <Play className="w-6 h-6 z-10" />
                      </button>
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

  /* Ripple effect for Play button */
  .ripple-button::before,
  .ripple-button::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.3);
    animation: ripple 2.5s linear infinite;
  }

  .ripple-button::after {
    animation-delay: 1.25s;
  }

  @keyframes ripple {
    0% {
      transform: scale(0.6);
      opacity: 0.5;
    }
    70% {
      transform: scale(2);
      opacity: 0;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`}</style>

    </Card>
  )
}
