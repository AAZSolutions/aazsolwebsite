import React from 'react';
import { Trash2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function DataDeletion() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4">
            <Trash2 className="h-8 w-8" />
            <h1 className="text-4xl font-bold">{t('legal.data_deletion.title')}</h1>
          </div>
          <p className="mt-4 text-secondary/80 max-w-3xl">
            Learn how to request the deletion of your personal data from our systems.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-gray-600">{t('legal.last_updated')}: {new Date().toLocaleDateString()}</div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.data_deletion.request_title')}</h2>
                <p className="text-gray-600 leading-relaxed pl-4">{t('legal.data_deletion.request_desc')}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.data_deletion.process_title')}</h2>
                <ol className="space-y-3 text-gray-600 pl-8 list-decimal">
                  <li>{t('legal.data_deletion.process.step1')}</li>
                  <li>{t('legal.data_deletion.process.step2')}</li>
                  <li>{t('legal.data_deletion.process.step3')}</li>
                  <li>{t('legal.data_deletion.process.step4')}</li>
                </ol>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.data_deletion.timeframe_title')}</h2>
                <p className="text-gray-600 leading-relaxed pl-4">{t('legal.data_deletion.timeframe_desc')}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.data_deletion.retention_title')}</h2>
                <p className="text-gray-600 leading-relaxed pl-4">{t('legal.data_deletion.retention_desc')}</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.contact_title')}</h2>
                <p className="text-gray-600 leading-relaxed pl-4">
                  {t('legal.contact_desc')}:
                  <br />
                  <strong>{t('legal.contact.email')}:</strong> info@aazsol.com
                  <br />
                  <strong>{t('legal.contact.phone')}:</strong> +201019831970
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}