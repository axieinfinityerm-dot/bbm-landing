import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { contactFormSubmit } from '../mock/data';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await contactFormSubmit(formData);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
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
            <span className="font-semibold text-sm tracking-wider uppercase" style={{ color: '#00bc60' }}>İletişim</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Projeniz İçin <span style={{ color: '#00bc60' }}>Bizimle İletişime Geçin</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Size en kısa sürede geri dönüş yapacağız
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div 
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-colors duration-300"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(39, 39, 42)'}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)' }}>
                <Phone className="w-6 h-6" style={{ color: '#00bc60' }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Telefon</h3>
              <p className="text-gray-400">+90 (XXX) XXX XX XX</p>
            </div>

            <div 
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-colors duration-300"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(39, 39, 42)'}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)' }}>
                <Mail className="w-6 h-6" style={{ color: '#00bc60' }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">E-posta</h3>
              <p className="text-gray-400">info@bbmgrupproje.com</p>
            </div>

            <div 
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-colors duration-300"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 188, 96, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgb(39, 39, 42)'}
            >
              <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(0, 188, 96, 0.1)' }}>
                <MapPin className="w-6 h-6" style={{ color: '#00bc60' }} />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Adres</h3>
              <p className="text-gray-400">Türkiye</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
              {isSuccess && (
                <div className="mb-6 border rounded-lg p-4 flex items-center gap-3" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', borderColor: 'rgba(34, 197, 94, 0.2)' }}>
                  <CheckCircle2 className="w-5 h-5 text-green-400" />
                  <p className="text-green-400 font-medium">Mesajınız başarıyla gönderildi!</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-white font-medium mb-2">
                    Ad Soyad *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white transition-colors duration-200"
                    style={{ outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#00bc60'}
                    onBlur={(e) => e.target.style.borderColor = 'rgb(63, 63, 70)'}
                    placeholder="Adınız ve soyadınız"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-medium mb-2">
                    E-posta *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white transition-colors duration-200"
                    style={{ outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#00bc60'}
                    onBlur={(e) => e.target.style.borderColor = 'rgb(63, 63, 70)'}
                    placeholder="ornek@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-white font-medium mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white transition-colors duration-200"
                    style={{ outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#00bc60'}
                    onBlur={(e) => e.target.style.borderColor = 'rgb(63, 63, 70)'}
                    placeholder="+90 (XXX) XXX XX XX"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Konu *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white transition-colors duration-200"
                    style={{ outline: 'none' }}
                    onFocus={(e) => e.target.style.borderColor = '#00bc60'}
                    onBlur={(e) => e.target.style.borderColor = 'rgb(63, 63, 70)'}
                    placeholder="Konu başlığı"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Mesaj *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors duration-200 resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-black px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#00bc60' }}
                onMouseEnter={(e) => !isSubmitting && (e.target.style.backgroundColor = '#00a855')}
                onMouseLeave={(e) => !isSubmitting && (e.target.style.backgroundColor = '#00bc60')}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Gönderiliyor...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Mesaj Gönder
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
