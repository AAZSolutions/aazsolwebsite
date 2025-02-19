import React from 'react';
import { CheckCircle2, Trophy, Users, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function About() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">{t('about.hero.title')}</h1>
          <p className="text-xl max-w-3xl">
            {t('about.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "4+", label: t('about.stats.experience'), icon: <Clock className="h-8 w-8 text-primary" /> },
              { number: "100+", label: t('about.stats.clients'), icon: <Users className="h-8 w-8 text-primary" /> },
              { number: "200+", label: t('about.stats.projects'), icon: <CheckCircle2 className="h-8 w-8 text-primary" /> },
              { number: "10+", label: t('about.stats.awards'), icon: <Trophy className="h-8 w-8 text-primary" /> }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">{t('about.mission.title')}</h2>
            <p className="text-gray-600 text-lg mb-8">
              {t('about.mission.description')}
            </p>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
              alt="Team meeting"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t('about.team.title')}</h2>
          <div className="max-w-md mx-auto text-center">
            <div className="mb-8">
              <img 
                src="https://aazsol.nyc3.cdn.digitaloceanspaces.com/website/ceo.webp"
                alt="CEO"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold mb-2">Abdelrahman Ahmed Zeyada</h3>
              <p className="text-gray-600">{t('about.team.ceo')}</p>
            </div>
            <p className="text-gray-600">
              {t('about.team.bio')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}