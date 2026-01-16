import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: 'ENERGY' },
    { title: 'DIGITAL' },
    { title: 'TRANSPORTATION' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/236705/pexels-photo-236705.jpeg?auto=compress&cs=tinysrgb&w=1920')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-800/60 to-gray-900/80"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center px-6 pt-24">
        <div className="max-w-7xl mx-auto w-full">
          <div className="mb-8 animate-slideInUp">
            <p className="text-white/90 text-sm md:text-base mb-2 font-light tracking-wide">
              Blue Ocean Holdings LLC is a
            </p>
            <p className="text-white/90 text-sm md:text-base font-light tracking-wide">
              leading infrastructure investor
            </p>
          </div>

          <div className="space-y-4 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white tracking-tight animate-slideInUp animation-delay-200">
              INVESTING IN INFRASTRUCTURE
            </h1>

            <div className="relative h-20 md:h-24 overflow-hidden">
              {slides.map((slide, index) => (
                <div
                  key={slide.title}
                  className={`absolute inset-0 transition-all duration-700 ${
                    index === currentSlide
                      ? 'translate-y-0 opacity-100'
                      : index < currentSlide
                      ? '-translate-y-full opacity-0'
                      : 'translate-y-full opacity-0'
                  }`}
                >
                  <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white">
                    {slide.title}
                  </h2>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-2 mb-12 animate-slideInUp animation-delay-400">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === currentSlide ? 'w-12 bg-white' : 'w-6 bg-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
