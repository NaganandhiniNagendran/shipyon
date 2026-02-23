import { ShoppingCart, Star, CheckCircle, Truck, Award, Globe, ArrowRight } from 'lucide-react';

export default function Home({ onNavigate }) {
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

  const testimonials = [
    { name: 'David Chen', company: 'Global Foods Ltd.', text: 'Outstanding quality and reliability. Best agricultural export partner we have worked with.', rating: 5 },
    { name: 'Sarah Johnson', company: 'Fresh Market Inc.', text: 'Their cold chain logistics ensure produce arrives in perfect condition every time.', rating: 5 },
    { name: 'Ahmed Hassan', company: 'Middle East Imports', text: 'Professional service from order to delivery. Highly recommended for bulk exports.', rating: 4 },
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

      {/* Categories */}
      <section className="py-16 bg-white categories-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of premium agricultural products sourced from the best farms globally
            </p>
          </div>
          <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-6 categories-grid">
            {categories.map((category, index) => (
              <div
                key={index}
                className="group cursor-pointer category-card"
                onClick={() => onNavigate('category')}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-square mb-4 category-image-container">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform group-hover-scale-110 category-image"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black-60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white category-overlay">
                    <h3 className="font-semibold text-lg">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.count}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Featured Products */}
      <section className="py-16 bg-white products-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="flex justify-between items-center mb-12 section-header">
            <div>
              <h2 className="text-3xl font-bold text-text-dark mb-2">Featured Products</h2>
              <p className="text-gray-600">Handpicked premium quality produce</p>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="text-primary-dark-green hover-text-primary-green font-semibold flex items-center view-all-button"
            >
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-6 products-grid">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover-shadow-lg transition-shadow product-card">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover product-image"
                  />
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover-bg-gray-50 transition-colors cart-button">
                    <ShoppingCart className="w-5 h-5 text-text-dark" />
                  </button>
                </div>
                <div className="p-4 product-info">
                  <h3 className="font-semibold text-text-dark mb-2">{product.name}</h3>
                  <div className="flex items-center mb-2 rating-container">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''} product-rating-star`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-primary-dark-green">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.unit}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* Testimonials */}
      <section className="py-16 bg-white testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by importers and distributors across the globe
            </p>
          </div>
          <div className="grid grid-cols-1 md-grid-cols-3 gap-8 testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl testimonial-card">
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current testimonial-star" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-text-dark">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}