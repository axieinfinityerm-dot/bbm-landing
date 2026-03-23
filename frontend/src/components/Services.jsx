import React from 'react';
import { 
  Layers, Zap, Map, FileText, Calculator, Settings, 
  Building2, Trees, ClipboardCheck, Box, ShieldCheck, Coins 
} from 'lucide-react';
import { services } from '../mock/data';

const iconMap = {
  layers: Layers,
  zap: Zap,
  map: Map,
  'file-text': FileText,
  calculator: Calculator,
  settings: Settings,
  'building-2': Building2,
  trees: Trees,
  'clipboard-check': ClipboardCheck,
  box: Box,
  'shield-check': ShieldCheck,
  coins: Coins
};

const ServiceCard = ({ service, index }) => {
  const Icon = iconMap[service.icon];

  return (
    <div 
      className="group relative bg-gradient-to-br from-zinc-900 to-black border border-zinc-800 rounded-xl p-6 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
      style={{ animationDelay: `${index * 50}ms` }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.5)';
        e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 188, 96, 0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgb(39, 39, 42)';
        e.currentTarget.style.boxShadow = '';
      }}
    >
      {/* Icon */}
      <div className="mb-4 relative">
        <div 
          className="w-14 h-14 rounded-lg flex items-center justify-center transition-colors duration-300"
          style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)' }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 188, 96, 0.2)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(0, 188, 96, 0.1)'}
        >
          <Icon className="w-7 h-7 group-hover:scale-110 transition-transform duration-300" style={{ color: '#00bc60' }} />
        </div>
        {/* Decorative corner */}
        <div 
          className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 transition-all duration-300 rounded-tr-lg"
          style={{ borderColor: 'transparent' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.5)'}
        ></div>
      </div>

      {/* Title */}
      <h3 
        className="text-xl font-bold text-white mb-3 transition-colors duration-300"
        onMouseEnter={(e) => e.currentTarget.style.color = '#00bc60'}
        onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
      >
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {service.description}
      </p>

      {/* Hover Effect Line */}
      <div 
        className="absolute bottom-0 left-0 w-0 h-1 rounded-b-xl transition-all duration-500 group-hover:w-full"
        style={{ background: 'linear-gradient(to right, #00bc60, #00d670)' }}
      ></div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#00bc60' }}>Uzmanlık Alanlarımız</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ekibimizin Sizin İçin Sunduğu
            <br />
            <span style={{ color: '#00bc60' }}>Profesyonel Hizmetler</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Alanında uzman kadromuzla, her projede en yüksek kalite standartlarını ve güvenilir çözümleri garanti ediyoruz
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-6">
            Projeniz için doğru çözümü birlikte bulalım
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-black px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2"
            style={{ backgroundColor: '#00bc60' }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#00a855'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#00bc60'}
          >
            Bizimle İletişime Geçin
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
