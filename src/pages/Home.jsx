import { ShoppingCart, Star, CheckCircle, Truck, Award, Globe, ArrowRight } from 'lucide-react';
import TradeCategories from '../components/TradeCategories';
import WhyChooseUs from '../components/WhyChooseUs';
import SourcingNetwork from '../components/SourcingNetwork';
import HowWeWork from '../components/HowWeWork';

export default function Home({ header, onNavigate }) {
  const categories = [
    { name: 'Fresh Fruits', image: 'https://images.pexels.com/photos/1128678/pexels-photo-1128678.jpeg?auto=compress&cs=tinysrgb&w=800', count: '120+ Products' },
    { name: 'Organic Vegetables', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800', count: '85+ Products' },
    { name: 'Premium Spices', image: 'https://images.pexels.com/photos/4198876/pexels-photo-4198876.jpeg?auto=compress&cs=tinysrgb&w=800', count: '50+ Products' },
    { name: 'Grains & Pulses', image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=800', count: '65+ Products' },
  ];

  const features = [
    { icon: CheckCircle, title: 'Quality Assured', desc: 'Certified organic produce from trusted farms' },
    { icon: Truck, title: 'Farm Direct', desc: 'Direct sourcing ensures freshness' },
    { icon: Award, title: 'Fast Logistics', desc: 'Temperature-controlled shipping' },
    { icon: Globe, title: 'Global Delivery', desc: 'Export to 50+ countries worldwide' },
  ];

  const products = [
    { name: 'Premium Red Apples', image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$45.00', rating: 4.8, unit: '/25kg box' },
    { name: 'Organic Tomatoes', image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$32.00', rating: 4.9, unit: '/20kg crate' },
    { name: 'Fresh Garlic Bulbs', image: 'https://images.pexels.com/photos/8844141/pexels-photo-8844141.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$28.00', rating: 4.7, unit: '/15kg bag' },
    { name: 'Golden Onions', image: 'https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$22.00', rating: 4.6, unit: '/30kg sack' },
  ];

  const stats = [
    { value: '50+', label: 'Countries Served' },
    { value: '1000+', label: 'Partners Worldwide' },
    { value: '99.8%', label: 'On-time Delivery' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen home-container">
      {/* Hero Section */}
      <section className="relative text-white hero-section overflow-hidden">
        {header}
        <div
          className="absolute inset-0 hero-image-bg"
          style={{ backgroundImage: 'url("/ship-hero.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 py-24 hero-content">
          <div className="text-center hero-text">
            <h1 className="hero-title">
              South India’s Premier Trade & Sourcing Company
              <span className="block text-secondary-gold">Export Solutions</span>
            </h1>
            <p className="text-xl md-text-2xl mb-8 max-w-3xl mx-auto text-gray-100 hero-subtitle">
              Seamless Supply for Domestic and International Markets
            </p>
            <div className="flex flex-col sm-flex-row gap-4 justify-center hero-buttons">
              <button
                onClick={() => onNavigate('products')}
                className="bg-secondary-gold hover-bg-gold-dark text-text-dark font-semibold py-3 px-8 rounded-lg transition-colors flex items-center justify-center primary-button"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="bg-white-10 hover-bg-white-20 text-white font-semibold py-3 px-8 rounded-lg transition-colors border border-white-20 secondary-button"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Strong Sourcing Network Across India */}
      <SourcingNetwork />

      {/* Core Trade Categories */}
      <TradeCategories onNavigate={onNavigate} />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Stats */}
      <section className="py-16 bg-primary-dark-green text-white stats-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-2 md-grid-cols-4 gap-8 stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="text-center stat-item">
                <div className="text-3xl md-text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <HowWeWork />

      {/* Features */}
      <section className="py-16 bg-gray-50 features-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8 features-grid">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center feature-card">
                  <div className="w-16 h-16 bg-primary-dark-green rounded-full flex items-center justify-center mx-auto mb-4 feature-icon-container">
                    <Icon className="w-8 h-8 text-white feature-icon" />
                  </div>
                  <h3 className="font-semibold text-lg text-text-dark mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}