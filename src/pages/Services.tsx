import React from 'react';
import { Globe2, Rocket, Users, Shield, Code, Database, Cloud, Cpu, LineChart, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Services() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">{t('services.title')}</h1>
          <p className="text-xl max-w-3xl">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe2 className="h-12 w-12 text-primary" />,
                title: t('services.digital'),
                description: t('services.digital.desc'),
                features: [
                  t('services.features.automation'),
                  t('services.features.legacy'),
                  t('services.features.workflow')
                ]
              },
              {
                icon: <Rocket className="h-12 w-12 text-primary" />,
                title: t('services.innovation'),
                description: t('services.innovation.desc'),
                features: [
                  t('services.features.strategy'),
                  t('services.features.workshops'),
                  t('services.features.planning')
                ]
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: t('services.enterprise'),
                description: t('services.enterprise.desc'),
                features: [
                  t('services.features.architecture'),
                  t('services.features.integration'),
                  t('services.features.optimization')
                ]
              },
              {
                icon: <Cloud className="h-12 w-12 text-primary" />,
                title: t('services.cloud'),
                description: t('services.cloud.desc'),
                features: [
                  t('services.features.migration'),
                  t('services.features.cloud_arch'),
                  t('services.features.managed')
                ]
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: t('services.security'),
                description: t('services.security.desc'),
                features: [
                  t('services.features.security'),
                  t('services.features.threat'),
                  t('services.features.compliance')
                ]
              },
              {
                icon: <Code className="h-12 w-12 text-primary" />,
                title: t('services.development'),
                description: t('services.development.desc'),
                features: [
                  t('services.features.web'),
                  t('services.features.mobile'),
                  t('services.features.api')
                ]
              },
              {
                icon: <Database className="h-12 w-12 text-primary" />,
                title: t('services.data'),
                description: t('services.data.desc'),
                features: [
                  t('services.features.analytics'),
                  t('services.features.bi'),
                  t('services.features.data_mgmt')
                ]
              },
              {
                icon: <Cpu className="h-12 w-12 text-primary" />,
                title: t('services.ai'),
                description: t('services.ai.desc'),
                features: [
                  t('services.features.ai_impl'),
                  t('services.features.predictive'),
                  t('services.features.process')
                ]
              },
              {
                icon: <LineChart className="h-12 w-12 text-primary" />,
                title: t('services.analytics'),
                description: t('services.analytics.desc'),
                features: [
                  t('services.features.monitoring'),
                  t('services.features.behavior'),
                  t('services.features.conversion')
                ]
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center text-gray-600">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}