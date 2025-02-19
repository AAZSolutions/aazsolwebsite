import React from 'react';
import { ArrowRight, Globe2, Rocket, Users, CheckCircle2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export function Home() {
  const { t } = useLanguage();
  
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-primary text-secondary">
        <div className="container mx-auto px-6 pt-32 pb-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{t('home.hero.title')}</h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">{t('home.hero.subtitle')}</p>
            <Link to="/contact" className="inline-flex items-center bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-secondary-hover transition-colors gap-2">
              {t('home.hero.cta')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 md:mb-16">{t('services.title')}</h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                icon: <Globe2 className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
                title: t('services.digital'),
                description: t('services.digital.desc')
              },
              {
                icon: <Rocket className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
                title: t('services.innovation'),
                description: t('services.innovation.desc')
              },
              {
                icon: <Users className="h-10 w-10 md:h-12 md:w-12 text-primary" />,
                title: t('services.enterprise'),
                description: t('services.enterprise.desc')
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                {service.icon}
                <h3 className="text-lg md:text-xl font-semibold mt-4 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="rounded-lg shadow-lg w-full h-[300px] md:h-[400px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('home.about.title')}</h2>
              <p className="text-gray-600 mb-6">
                {t('home.about.description')}
              </p>
              <Link to="/about" className="inline-flex items-center text-primary font-semibold hover:text-primary-hover gap-2">
                {t('home.about.link')}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{t('home.cta.title')}</h2>
            <p className="text-gray-600 mb-8">
              {t('home.cta.subtitle')}
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center bg-primary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors gap-2"
            >
              {t('home.cta.button')}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}