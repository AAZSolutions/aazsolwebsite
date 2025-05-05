import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix Leaflet default marker icon
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

export function Contact() {
  const { t } = useLanguage();
  const position: [number, number] = [31.036880, 31.394303];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-primary text-secondary py-20">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold mb-6">{t('contact.title')}</h1>
          <p className="text-xl max-w-3xl">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">{t('contact.info.title')}</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{t('contact.info.email')}</h3>
                      <a href="mailto:info@aazsol.com" className="text-primary hover:underline">info@aazsol.com</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{t('contact.info.phone')}</h3>
                      <a href="tel:+201557019709" className="text-primary hover:underline">+20 15 57019709</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{t('contact.info.address')}</h3>
                      <p className="text-gray-600">
                        Mansoura<br />
                        Mansoura Qism 2<br />
                        El Mansoura, Dakahlia Governorate
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="font-semibold">{t('contact.info.hours')}</h3>
                      <p className="text-gray-600">
                        {t('contact.info.workdays')}<br />
                        {t('contact.info.weekend')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold mb-6">{t('contact.info.location')}</h2>
              <div className="bg-white p-2 rounded-lg shadow-lg">
                <div className="h-[400px] rounded-lg overflow-hidden">
                  <MapContainer 
                    center={position} 
                    zoom={15} 
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={position} icon={icon}>
                      <Popup>
                        AAZ Solutions<br />
                        Mansoura, Egypt
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}