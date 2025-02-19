import React from 'react';
import { Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="pt-20">
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-4">
            <Shield className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="mt-4 text-secondary/80 max-w-3xl">
            Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you interact with our WhatsApp ordering bot.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="text-gray-600">Last Updated: 18/2/2025</div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4 pl-4">We may collect the following types of information:</p>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• Personal Information: Your name, phone number, delivery address, and any details you provide while placing an order.</li>
                  <li>• Order Details: Items ordered, quantity, price, and special requests.</li>
                  <li>• Usage Data: Interaction logs and technical information for service improvement.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-600 mb-4 pl-4">We use your information to:</p>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• Process and fulfill orders.</li>
                  <li>• Communicate with you regarding your order.</li>
                  <li>• Improve our services and customer experience.</li>
                  <li>• Comply with legal requirements.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">3. Data Sharing and Security</h2>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• We do not sell or share your personal information with third parties, except for service providers who help fulfill your order (e.g., delivery services).</li>
                  <li>• We implement security measures to protect your data.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">4. Your Rights</h2>
                <ul className="space-y-2 text-gray-600 pl-8">
                  <li>• You can request access, correction, or deletion of your data by contacting us at info@aazsol.com.</li>
                  <li>• You can opt out of marketing messages at any time.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">5. Updates to This Policy</h2>
                <p className="text-gray-600 leading-relaxed pl-4">
                  We may update this policy from time to time. Changes will be posted on our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed pl-4">
                  If you have any questions about this Privacy Policy, please contact us at:
                  <br />
                  <strong>Email:</strong> info@aazsol.com
                  <br />
                  <strong>Phone:</strong> +201019831970
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}