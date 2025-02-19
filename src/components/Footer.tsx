import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-primary text-secondary py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-xl font-bold">AAZ Solutions</span>
            </div>
            <p className="text-gray-400">
              {t('home.hero.subtitle')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('nav.services')}</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors block">{t('services.digital')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors block">{t('services.innovation')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-secondary transition-colors block">{t('services.enterprise')}</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('nav.about')}</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-secondary transition-colors block">{t('about.mission.title')}</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors block">{t('nav.contact')}</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.legal')}</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-gray-400 hover:text-secondary transition-colors block">{t('footer.privacy')}</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-secondary transition-colors block">{t('footer.terms')}</Link></li>
              <li><Link to="/data-deletion" className="text-gray-400 hover:text-secondary transition-colors block">{t('footer.data_deletion')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          © {new Date().getFullYear()} AAZ Solutions. {t('footer.rights')}
        </div>
      </div>
    </footer>
  );
}