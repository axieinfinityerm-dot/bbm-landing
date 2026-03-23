import React, { useState, useEffect } from 'react';
import { ArrowRight, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../mock/data';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images Slider */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
          </div>
        ))}
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-full hover:bg-white/20 transition-all duration-300"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Slider Indicators */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide 
                ? 'w-12 h-2' 
                : 'w-2 h-2 hover:w-4'
            }`}
            style={{ 
              backgroundColor: index === currentSlide ? '#00bc60' : 'rgba(255, 255, 255, 0.3)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-8 animate-fade-in" style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)', borderColor: 'rgba(0, 188, 96, 0.2)' }}>
            <Award className="w-4 h-4" style={{ color: '#00bc60' }} />
            <span className="text-sm font-medium" style={{ color: '#00bc60' }}>200+ İmza Atılan Kamu Projesi</span>
          </div>

          {/* Main Heading - Changes with slides */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {heroSlides[currentSlide].title.split(' ').map((word, i) => (
              <span key={i}>
                {word === 'Deneyim' || word === 'Yönetimi' || word === 'Mühendislik' ? (
                  <span style={{ color: '#00bc60' }}>{word}</span>
                ) : (
                  word
                )}{' '}
              </span>
            ))}
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            {heroSlides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animation-delay-400">
            <button 
              onClick={() => scrollToSection('services')}
              className="group text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center gap-2 w-full sm:w-auto justify-center"
              style={{ backgroundColor: '#00bc60' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#00a855'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#00bc60'}
            >
              Hizmetlerimiz
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 w-full sm:w-auto"
            >
              Projelerimiz
            </button>
          </div>
        </div>

        {/* Scroll Indicator - Moved to Right */}
        <div className="absolute bottom-8 right-8 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'rgba(0, 188, 96, 0.5)' }}>
            <div className="w-1.5 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#00bc60' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
