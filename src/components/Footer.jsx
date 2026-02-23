import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark-green text-white mt-20 footer-container">
      <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 py-12 footer-content">
        <div className="grid grid-cols-1 md-grid-cols-4 gap-8 footer-grid">
          <div className="footer-column">
            <div className="flex items-center mb-4 brand-section">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center footer-logo">
                <span className="text-primary-dark-green font-bold text-lg footer-logo-text">SY</span>
              </div>
              <span className="ml-2 text-xl font-bold footer-brand-name">Shipyon</span>
            </div>
            <p className="text-sm text-gray-200 mb-4 footer-description">
              South India’s Premier Trade & Sourcing Company. Seamless supply for domestic and international markets.
            </p>
            <div className="flex space-x-3 social-links">
              <a href="#" className="w-8 h-8 bg-white-10 hover-bg-white-20 rounded-lg flex items-center justify-center transition-colors social-link">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white-10 hover-bg-white-20 rounded-lg flex items-center justify-center transition-colors social-link">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white-10 hover-bg-white-20 rounded-lg flex items-center justify-center transition-colors social-link">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white-10 hover-bg-white-20 rounded-lg flex items-center justify-center transition-colors social-link">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-lg mb-4 footer-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200 footer-links">
              <li><a href="#" className="hover-text-secondary-gold transition-colors">About Us</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Our Services</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Products</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-lg mb-4 footer-heading">Products</h3>
            <ul className="space-y-2 text-sm text-gray-200 footer-links">
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Fresh Fruits</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Organic Vegetables</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Premium Spices</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Grains & Pulses</a></li>
              <li><a href="#" className="hover-text-secondary-gold transition-colors">Bulk Orders</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-lg mb-4 footer-heading">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-200 contact-info">
              <li className="flex items-start contact-item">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 contact-icon" />
                <span>123 Export Plaza, Agricultural District, New Delhi, India</span>
              </li>
              <li className="flex items-center contact-item">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 contact-icon" />
                <span>+91 123 456 7890</span>
              </li>
              <li className="flex items-center contact-item">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 contact-icon" />
                <span>export@agriexport.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white-20 mt-8 pt-8 text-center text-sm text-gray-200 footer-bottom">
          <p className="footer-copyright">&copy; 2024 Shipyon. All rights reserved. | Premier Trade & Sourcing Co.</p>
        </div>
      </div>
    </footer>
  );
}