import React from 'react';
import { ArrowRight, Award } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1519662978799-2f05096d3636"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2 mb-8 animate-fade-in" style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)', borderColor: 'rgba(0, 188, 96, 0.2)' }}>
            <Award className="w-4 h-4" style={{ color: '#00bc60' }} />
            <span className="text-sm font-medium" style={{ color: '#00bc60' }}>200+ İmza Atılan Kamu Projesi</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            Güvenilir <span style={{ color: '#00bc60' }}>Deneyim</span>
          </h1>

          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Sizin ihtiyaçlarınız için kusursuz çözümler sunuyoruz
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

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 rounded-full flex justify-center" style={{ borderColor: 'rgba(0, 188, 96, 0.5)' }}>
            <div className="w-1.5 h-3 rounded-full mt-2 animate-pulse" style={{ backgroundColor: '#00bc60' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
