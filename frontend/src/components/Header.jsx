import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://customer-assets.emergentagent.com/job_bbm-landing/artifacts/4y9x0fbw_bbm-logo-t-300x82.png"
              alt="BBM Grup Proje"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-300 transition-colors duration-200 font-medium"
              onMouseEnter={(e) => e.target.style.color = '#00bc60'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Ana Sayfa
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-gray-300 transition-colors duration-200 font-medium"
              onMouseEnter={(e) => e.target.style.color = '#00bc60'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Hizmetlerimiz
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-gray-300 transition-colors duration-200 font-medium"
              onMouseEnter={(e) => e.target.style.color = '#00bc60'}
              onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
            >
              Projeler
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-black px-6 py-2.5 rounded-md font-semibold transition-all duration-200 hover:scale-105"
              style={{ backgroundColor: '#00bc60' }}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#00a855'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#00bc60'}
            >
              İletişim
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 bg-black/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-300 transition-colors duration-200 font-medium text-left"
                onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Ana Sayfa
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-gray-300 transition-colors duration-200 font-medium text-left"
                onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Hizmetlerimiz
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-gray-300 transition-colors duration-200 font-medium text-left"
                onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}
              >
                Projeler
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black px-6 py-2.5 rounded-md font-semibold transition-colors duration-200 text-left"
                style={{ backgroundColor: '#00bc60' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#00a855'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#00bc60'}
              >
                İletişim
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
