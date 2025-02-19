import React from 'react';
import { FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Terms() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4">
            <FileText className="h-8 w-8" />
            <h1 className="text-4xl font-bold">{t('footer.terms')}</h1>
          </div>
          <p className="mt-4 text-secondary/80 max-w-3xl">
            Please read these terms carefully before using our services.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-gray-600">{t('legal.last_updated')}: 18/2/2025</div>
            
            <p className="text-lg text-gray-800 pl-4">
              These Terms of Service govern your use of our WhatsApp ordering bot. By using the Service, you agree to these Terms.
            </p>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Use of the Service</h2>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• The Service allows you to place orders via WhatsApp.</li>
                  <li>• You must provide accurate and complete information when placing an order.</li>
                  <li>• We reserve the right to refuse service to anyone for any reason.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. Orders and Payments</h2>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• All orders are subject to availability.</li>
                  <li>• Prices and fees (e.g., delivery) will be communicated before order confirmation.</li>
                  <li>• Payment terms will be specified at the time of order.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Cancellations and Refunds</h2>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• Cancellation policies will depend on the order status.</li>
                  <li>• Refunds, if applicable, will be processed based on our refund policy.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Limitation of Liability</h2>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• We are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.</li>
                  <li>• We are not responsible for delivery delays caused by third-party services.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Changes to These Terms</h2>
                <p className="text-gray-600 leading-relaxed pl-4">
                  We may update these Terms at any time. Continued use of the Service means you accept the changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">{t('legal.contact_title')}</h2>
                <p className="text-gray-600 leading-relaxed pl-4">
                  For any questions, contact us at:
                  <br />
                  <strong>{t('legal.contact.email')}:</strong> info@aazsol.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}