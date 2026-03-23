import React from 'react';
import { features } from '../mock/data';

const Features = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full" style={{ background: 'linear-gradient(to left, rgba(0, 188, 96, 0.05), transparent)' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1574848296471-28f79a036f79"
                alt="Modern Architecture"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-500/10 rounded-2xl -z-10"></div>
          </div>

          {/* Right: Features */}
          <div>
            <div className="mb-4">
              <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#00bc60' }}>Çalışma Sürecimiz</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12">
              Profesyonel <span style={{ color: '#00bc60' }}>Yaklaşım</span>
            </h2>

            <div className="space-y-8">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className="flex gap-6 group cursor-pointer"
                >
                  {/* Number */}
                  <div className="flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-lg border flex items-center justify-center transition-all duration-300"
                      style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)', borderColor: 'rgba(0, 188, 96, 0.2)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#00bc60';
                        e.currentTarget.style.borderColor = '#00bc60';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(0, 188, 96, 0.1)';
                        e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.2)';
                      }}
                    >
                      <span 
                        className="text-2xl font-bold transition-colors duration-300"
                        style={{ color: '#00bc60' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = 'black'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#00bc60'}
                      >
                        {feature.number}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 
                      className="text-2xl font-bold text-white mb-3 transition-colors duration-300"
                      onMouseEnter={(e) => e.currentTarget.style.color = '#00bc60'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
