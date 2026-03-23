import React, { useState, useEffect, useRef } from 'react';
import { stats } from '../mock/data';

const StatCard = ({ stat, inView }) => {
  const [count, setCount] = useState(0);
  const targetValue = parseInt(stat.value);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, targetValue]);

  return (
    <div className="text-center group">
      <div className="mb-4">
        <div 
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white transition-colors duration-300"
          onMouseEnter={(e) => e.currentTarget.style.color = '#00bc60'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          {count}
          <span 
            className="transition-colors duration-300"
            style={{ color: '#00bc60' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'white'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#00bc60'}
          >
            {stat.suffix}
          </span>
        </div>
      </div>
      <div className="text-gray-400 text-lg font-medium">
        {stat.label}
      </div>
      {/* Decorative line */}
      <div 
        className="mt-4 mx-auto w-16 h-1 transition-all duration-300"
        style={{ backgroundColor: 'rgba(0, 188, 96, 0.2)' }}
        onMouseEnter={(e) => {
          e.currentTarget.style.width = '6rem';
          e.currentTarget.style.backgroundColor = '#00bc60';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.width = '4rem';
          e.currentTarget.style.backgroundColor = 'rgba(0, 188, 96, 0.2)';
        }}
      ></div>
    </div>
  );
};

const Stats = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(to right, #404040 1px, transparent 1px), linear-gradient(to bottom, #404040 1px, transparent 1px)',
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Rakamlarla <span style={{ color: '#00bc60' }}>BBM Grup Proje</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Yılların deneyimi ve binlerce projenin başarısıyla sektörde güvenilir lideriz
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
