import React, { useState } from 'react';
import { ayyildizProject } from '../mock/data';
import { Award, Heart, Flag, ChevronLeft, ChevronRight } from 'lucide-react';

const AyyildizProject = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % ayyildizProject.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + ayyildizProject.images.length) % ayyildizProject.images.length);
  };

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
          {/* Left: Image Gallery Slider */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              {/* Main Image */}
              <div className="relative h-[600px]">
                {ayyildizProject.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image}
                    alt={`Malatya Ayyıldız Projesi ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                      index === currentImage ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm border border-white/20 p-3 rounded-full hover:bg-black/80 transition-all duration-300 z-10"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 backdrop-blur-sm border border-white/20 p-3 rounded-full hover:bg-black/80 transition-all duration-300 z-10"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                  {ayyildizProject.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`transition-all duration-300 rounded-full ${
                        index === currentImage ? 'w-8 h-2' : 'w-2 h-2 hover:w-4'
                      }`}
                      style={{ 
                        backgroundColor: index === currentImage ? '#00bc60' : 'rgba(255, 255, 255, 0.5)'
                      }}
                    />
                  ))}
                </div>
              
                {/* Overlay Badge */}
                <div className="absolute bottom-8 left-8 right-8 z-10">
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

              {/* Thumbnail Gallery */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-4">
                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                  {ayyildizProject.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        index === currentImage ? 'scale-110' : 'opacity-50 hover:opacity-100'
                      }`}
                      style={{ 
                        borderColor: index === currentImage ? '#00bc60' : 'transparent'
                      }}
                    >
                      <img 
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
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
