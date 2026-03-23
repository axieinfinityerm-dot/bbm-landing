import React from 'react';
import { Building2, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="w-8 h-8" style={{ color: '#00bc60' }} />
              <h3 className="text-2xl font-bold text-white">
                BBM GRUP <span style={{ color: '#00bc60' }}>PROJE</span>
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Mühendislik ve mimarlık alanında güvenilir çözümler sunarak, projelerinizi hayata geçiriyoruz.
            </p>
            <div className="flex items-center gap-2" style={{ color: '#00bc60' }}>
              <span className="text-3xl font-bold">200+</span>
              <span className="text-sm text-gray-400">Kamu Projesi</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToTop()}
                  className="text-gray-400 transition-colors duration-200"
                  onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                  onMouseLeave={(e) => e.target.style.color = 'rgb(156, 163, 175)'}
                >
                  Ana Sayfa
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 transition-colors duration-200"
                  onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                  onMouseLeave={(e) => e.target.style.color = 'rgb(156, 163, 175)'}
                >
                  Hizmetlerimiz
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-400 transition-colors duration-200"
                  onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                  onMouseLeave={(e) => e.target.style.color = 'rgb(156, 163, 175)'}
                >
                  Projeler
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 transition-colors duration-200"
                  onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                  onMouseLeave={(e) => e.target.style.color = 'rgb(156, 163, 175)'}
                >
                  İletişim
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Altyapı Projeleri</li>
              <li className="text-gray-400">Elektrik Projeleri</li>
              <li className="text-gray-400">Mimari Projeler</li>
              <li className="text-gray-400">Statik Projeler</li>
              <li className="text-gray-400">Peyzaj Projeleri</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#00bc60' }} />
                <span className="text-gray-400">+90 (XXX) XXX XX XX</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#00bc60' }} />
                <span className="text-gray-400">info@bbmgrupproje.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#00bc60' }} />
                <span className="text-gray-400">Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center sm:text-left">
              © {new Date().getFullYear()} BBM Grup Proje A.Ş. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <button 
                className="text-gray-400 transition-colors duration-200 text-sm"
                onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(156, 163, 175)'}
              >
                Gizlilik Politikası
              </button>
              <button 
                className="text-gray-400 transition-colors duration-200 text-sm"
                onMouseEnter={(e) => e.target.style.color = '#00bc60'}
                onMouseLeave={(e) => e.target.style.color = 'rgb(156, 163, 175)'}
              >
                Kullanım Koşulları
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
