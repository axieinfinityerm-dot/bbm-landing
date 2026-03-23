import React from 'react';
import { ayyildizProject } from '../mock/data';
import { Award, Heart, Flag } from 'lucide-react';

const AyyildizProject = () => {
  return (
    <section id="projects" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full blur-3xl transform -translate-y-1/2" style={{ backgroundColor: 'rgba(0, 188, 96, 0.05)' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(220, 38, 38, 0.05)' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 border rounded-full px-6 py-2" style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)', borderColor: 'rgba(0, 188, 96, 0.2)' }}>
            <Award className="w-5 h-5" style={{ color: '#00bc60' }} />
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#00bc60' }}>Ödüllü Proje</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img 
                src="https://images.pexels.com/photos/2464417/pexels-photo-2464417.jpeg"
                alt="Malatya Ayyıldız Projesi"
                className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Flag className="w-6 h-6 text-red-500" />
                    <span className="text-white font-bold text-lg">Türk Bayrağı İlhamlı Tasarım</span>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Mekânın formu Türk bayrağının dalgalanışından ilham alıyor
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-xl mb-2 flex items-center gap-2" style={{ color: '#00bc60' }}>
                <Heart className="w-5 h-5" />
                {ayyildizProject.title}
              </h3>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                {ayyildizProject.subtitle}
              </h2>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Büyük Malatya Depremi'nin ardından şehir sustu; sadece molozlar değil, hatıralar da yerle bir olmuştu.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ancak zamanla sessizliğin içinden bir fikir doğdu. Toprağın altına gömülen her şeyin üzerine, umutla bir yapı inşa edilmeliydi.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Ayyıldız Projesi bu düşünceden doğdu; bir rekreasyon alanı değil, hafızası olan bir yer olarak tasarlandı. Mekânın formu, Türk bayrağının dalgalanışından ilham aldı.
              </p>
              <p className="text-lg font-semibold leading-relaxed" style={{ color: '#00bc60' }}>
                Çünkü bu proje sadece toprağa değil, ruhlara da dokunmalıydı.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              <div 
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(39, 39, 42)'}
              >
                <div className="text-3xl font-bold text-white mb-1">2023</div>
                <div className="text-gray-400 text-sm">Tamamlanma Yılı</div>
              </div>
              <div 
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 transition-colors duration-300"
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.5)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(39, 39, 42)'}
              >
                <div className="text-3xl font-bold text-white mb-1">Ödüllü</div>
                <div className="text-gray-400 text-sm">Mimari Başarı</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AyyildizProject;
