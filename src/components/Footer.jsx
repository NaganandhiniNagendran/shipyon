import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

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
              <a href="#" className="w-8 h-8 bg-white-10 hover:bg-white-20 hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300 social-link">
                <Facebook className="w-4 h-4 hover:text-blue-400 transition-colors" />
              </a>
              <a href="#" className="w-8 h-8 bg-white-10 hover:bg-white-20 hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300 social-link">
                <Twitter className="w-4 h-4 hover:text-blue-300 transition-colors" />
              </a>
              <a href="#" className="w-8 h-8 bg-white-10 hover:bg-white-20 hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300 social-link">
                <Instagram className="w-4 h-4 hover:text-pink-400 transition-colors" />
              </a>
              <a href="#" className="w-8 h-8 bg-white-10 hover:bg-white-20 hover:scale-110 rounded-lg flex items-center justify-center transition-all duration-300 social-link">
                <Linkedin className="w-4 h-4 hover:text-blue-600 transition-colors" />
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-lg mb-4 footer-heading">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200 footer-links">
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1">About Us</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1">Our Services</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1">Products</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1">Sustainability</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-lg mb-4 footer-heading">Products</h3>
            <ul className="space-y-2 text-sm text-gray-200 footer-links">
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">Fresh Fruits</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">Organic Vegetables</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">Premium Spices</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">Grains & Pulses</a></li>
              <li><a href="#" className="hover:text-secondary-gold transition-all duration-300 hover:translate-x-1 hover:text-yellow-300">Bulk Orders</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="font-semibold text-lg mb-4 footer-heading">Contact Info</h3>
            <ul className="space-y-3 text-sm text-gray-200 contact-info">
              <li className="flex items-start contact-item hover:text-yellow-200 transition-colors duration-300">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0 contact-icon hover:text-yellow-300 transition-colors" />
                <span className="hover:text-white transition-colors duration-300">123 Export Plaza, Agricultural District, New Delhi, India</span>
              </li>
              <li className="flex items-center contact-item hover:text-yellow-200 transition-colors duration-300">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0 contact-icon hover:text-yellow-300 transition-colors" />
                <span className="hover:text-white transition-colors duration-300">+91 123 456 7890</span>
              </li>
              <li className="flex items-center contact-item hover:text-yellow-200 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0 contact-icon hover:text-yellow-300 transition-colors" />
                <span className="hover:text-white transition-colors duration-300">export@agriexport.com</span>
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