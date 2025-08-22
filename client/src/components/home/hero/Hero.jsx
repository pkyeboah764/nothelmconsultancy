import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const heroSlides = [
  {
    id: 1,
    title: "Nothelm Consultancy",
    subtitle: "Strategic Advisory Across Africa",
    subTitle: "Business Advisory and Support",
    description: "Helping investors navigate opportunities and challenges across Africa, with a specific focus on Ghana. From market entry, stakeholder engagements and operations, we provide strategic advisory and support to our clients at every step.",
    image: "/images/home/hero-1.jpg",
    cta: "Our Services",
    link: "/services"
  },
  {
    id: 2,
    title: "Nothelm Properties",
    subtitle: "Navigate Ghana's Real Estate Market",
    subTitle: "Real Estate Advisory",
    description: "Helping investors navigate opportunities and challenges across the real estate market in Ghana. We provide advisory services designed to offer comprehensive, seamless support for clients navigating Ghana's real estate market.",
    image: "/images/home/hero-2.jpg",
    cta: "Real Estate Services",
    link: "https://nothelmproperties.com/"
  },
  {
    id: 3,
    title: "Nothelm Engineering",
    subtitle: "Project Investment Solutions",
    subTitle: "Project Advisory",
    description: "Helping investors navigate opportunities and challenges associated with projects in Ghana. We provide advisory services in project consultancy, project financing, stakeholder engagements, regulatory compliance and transactional advisory.",
    image: "/images/home/hero-3.jpg",
    cta: "Project Advisory",
    link: "https://www.nothelmholdings.com/"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Preload all hero images for faster switching
  useEffect(() => {
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gray-900">
      {/* Background Images Layer */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
            {index !== 0 && <div className="absolute inset-0 bg-black/20" />}
          </motion.div>
        ))}
      </div>

      {/* Content Layer */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0"
        >
          
          <div className="relative z-10 flex items-center h-full pt-20 md:pt-24 lg:pt-28">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl text-white">
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3 text-white/80 font-medium"
                >
                  {heroSlides[currentSlide].subtitle}
                </motion.p>
                
                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-1 sm:mb-2 leading-tight"
                >
                  {heroSlides[currentSlide].title}
                </motion.h1>
                
                {/* Sub-title for all slides */}
                {heroSlides[currentSlide].subTitle && (
                  <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-3 sm:mb-4 text-white/90"
                  >
                    {heroSlides[currentSlide].subTitle}
                  </motion.p>
                )}
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 leading-relaxed text-white/90 max-w-3xl"
                >
                  {heroSlides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  {currentSlide === 0 ? (
                    // First slide with three CTA buttons
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
                      <a
                        href="#services"
                        className="inline-block bg-[#202962] hover:bg-[#1a2252] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-center text-sm sm:text-base"
                      >
                        Our Services
                      </a>
                      <a
                        href="#insights"
                        className="inline-block bg-white hover:bg-gray-100 text-[#202962] font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-[#202962] text-center text-sm sm:text-base"
                      >
                        Read Insights
                      </a>
                      <a
                        href="#contact"
                        className="inline-block bg-transparent hover:bg-[#202962] text-white hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg border-2 border-white text-center text-sm sm:text-base"
                      >
                        Work with us
                      </a>
                    </div>
                  ) : (
                    // Other slides with single CTA button
                    <a
                      href={heroSlides[currentSlide].link}
                      className="inline-block bg-[#202962] hover:bg-[#1a2252] text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
                    >
                      {heroSlides[currentSlide].cta}
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#202962]/80 hover:bg-[#202962] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hidden sm:block"
      >
        <ChevronLeftIcon className="w-6 h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        onMouseLeave={() => setIsAutoPlaying(true)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#202962]/80 hover:bg-[#202962] text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hidden sm:block"
      >
        <ChevronRightIcon className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2 sm:space-x-3">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2 ${
              index === currentSlide
                ? 'bg-[#202962] border-[#202962] scale-125 shadow-lg'
                : 'bg-white/30 border-white/50 hover:bg-white/50 hover:border-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 z-20 text-white hidden sm:block"
      >
        <div className="flex flex-col items-center">
          <span className="text-xs sm:text-sm mb-2">Scroll</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-px h-6 sm:h-8 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}