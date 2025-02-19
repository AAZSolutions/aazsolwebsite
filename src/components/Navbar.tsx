import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitch } from './LanguageSwitch';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  const { t } = useLanguage();
  const isHome = location.pathname === '/';
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Add background when menu is open or not on home page
  const bgClass = isMenuOpen ? 'bg-primary' : (isHome ? 'bg-transparent md:bg-transparent bg-primary' : 'bg-primary');

  return (
    <nav className={`${bgClass} text-secondary fixed top-0 left-0 right-0 z-50 transition-colors duration-300`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Logo />
            <span className="text-xl font-bold">AAZ Solutions</span>
          </Link>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="hover:text-secondary-hover transition-colors">{t('nav.services')}</Link>
            <Link to="/about" className="hover:text-secondary-hover transition-colors">{t('nav.about')}</Link>
            <Link to="/contact" className="hover:text-secondary-hover transition-colors">{t('nav.contact')}</Link>
            <LanguageSwitch />
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <Link 
                to="/services" 
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.services')}
              </Link>
              <Link 
                to="/about" 
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.about')}
              </Link>
              <Link 
                to="/contact" 
                className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              <div className="px-4">
                <LanguageSwitch />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}