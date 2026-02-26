import { ShoppingCart, ChevronDown, ChevronUp } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';
import '../styles/TestimonialSlider.css';
import { useState } from 'react';

export default function Products({ header, onNavigate }) {

  const [showCategories, setShowCategories] = useState(false);

  const products = [
    { name: 'Fresh Produce', image: '/veg.png', description: 'Farm-fresh vegetables sourced directly from trusted local growers.' },
    { name: 'Spices & Plantation Crops', image: '/plantation crop.png', description: 'Premium-grade and products for domestic global markets.' },
    { name: 'Fruits', image: '/fresh fruits.png', description: 'Carefully selected fruits with quality grading and ready packaging.' },
    { name: 'Processed & Value-Added', image: '/processed.png', description: 'High-demand products with quality and scalable supply.' },
    { name: 'Industrial & Commercial Products', image: '/commercial .png', description: 'Reliable sourcing of industrial and commercial goods.' },
    { name: 'Industrial & Commercial Products', image: '/tails.png', description: 'Reliable sourcing of industrial and commercial goods.' }
  ];

  const testimonials = [
    { name: 'David Chen', company: 'Global Foods Ltd.', text: 'Outstanding quality and reliability. Best agricultural export partner we have worked with.', rating: 5 },
    { name: 'Sarah Johnson', company: 'Fresh Market Inc.', text: 'Their cold chain logistics ensure produce arrives in perfect condition every time.', rating: 5 },
    { name: 'Ahmed Hassan', company: 'Middle East Imports', text: 'Professional service from order to delivery. Highly recommended for bulk exports.', rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 products-container">
      {/* Hero */}
      <section className="relative text-white py-16 hero-section overflow-hidden">
        {header}
        <video
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Products page.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 text-center hero-content">
          <h1 className="text-4xl md-text-5xl font-bold mb-4 hero-title title-hover">
            Our <span className="text-secondary-gold"> Products</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto hero-subtitle">
           Quality-Sourced. Market-Ready. Globally Competitive.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 products-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-dark mb-4 title-hover">Product Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-6 products-grid">
            {products.map((product, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer product-card ${product.name === 'Fresh Produce' ? 'hover:bg-green-50' : product.name === 'Spices & Plantation Crops' ? 'hover:bg-orange-50' : ''}`}
                onClick={() => {
                  if (product.name === 'Fresh Produce') {
                    onNavigate('category');
                  } else if (product.name === 'Spices & Plantation Crops') {
                    onNavigate('spices');
                  } else if (product.name === 'Fruits') {
                    onNavigate('fruits');
                  } else if (product.name === 'Processed & Value-Added') {
                    onNavigate('processed');
                  } else if (product.name === 'Industrial & Commercial Products') {
                    onNavigate('commercial');
                  }
                }}
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover product-image hover:scale-110 transition-transform duration-300"
                  />
                  <button className="absolute top-3 right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors cart-button">
                    <ShoppingCart className="w-5 h-5 text-text-dark" />
                  </button>
                </div>
                <div className="p-4 product-info">
                  <h3 className="font-semibold text-text-dark mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-green-600 mb-4">Product Categories</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              We source based on your exact requirement across categories.
            </p>
            <button
              onClick={() => setShowCategories(!showCategories)}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mx-auto"
            >
              Start Your Order
              {showCategories ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {showCategories && (
              <div className="mt-8 max-w-3xl mx-auto">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Categories</h3>
                  <div className="space-y-3">
                    {products.map((product, index) => (
                      <div 
                        key={index}
                        className="group flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:border-green-400 hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-pointer"
                        onClick={() => {
                          if (product.name === 'Fresh Produce') {
                            onNavigate('category');
                          } else if (product.name === 'Spices & Plantation Crops') {
                            onNavigate('spices');
                          } else if (product.name === 'Fruits') {
                            onNavigate('fruits');
                          } else if (product.name === 'Processed & Value-Added') {
                            onNavigate('processed');
                          } else if (product.name === 'Industrial & Commercial Products') {
                            onNavigate('commercial');
                          }
                        }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-green-500 group-hover:scale-150 transition-all duration-200"></div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-green-700 transition-colors duration-200">{product.name}</div>
                            <div className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-200">{product.description}</div>
                          </div>
                        </div>
                        <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all duration-200 -rotate-90" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white testimonials-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4 title-hover">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Trusted by importers and distributors across the globe
            </p>
          </div>
          <TestimonialSlider testimonials={testimonials} />
        </div>
      </section>
    </div>
  );
}