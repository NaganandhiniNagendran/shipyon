import { useState, useRef } from 'react';
import { ShoppingCart, Package, Apple, Factory, Truck, X, Play, Pause } from 'lucide-react';
import TestimonialSlider from '../components/TestimonialSlider';
import '../styles/TestimonialSlider.css';
import '../styles/OrderButton.css';
import '../styles/FeatureImages.css';

export default function Products({ header, onNavigate }) {
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [videoStates, setVideoStates] = useState({
    export: { isPlaying: true },
    bulkOrder: { isPlaying: true }
  });

  const exportVideoRef = useRef(null);
  const bulkOrderVideoRef = useRef(null);

  const toggleVideo = (videoName) => {
    const videoRef = videoName === 'export' ? exportVideoRef : bulkOrderVideoRef;
    const video = videoRef.current;

    if (video) {
      if (video.paused) {
        video.play();
        setVideoStates(prev => ({
          ...prev,
          [videoName]: { isPlaying: true }
        }));
      } else {
        video.pause();
        setVideoStates(prev => ({
          ...prev,
          [videoName]: { isPlaying: false }
        }));
      }
    }
  };

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

      {/* Feature Videos Section */}
      <section className="feature-videos-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="feature-videos-grid">
            <div className="feature-video-container">
              <div className="relative">
                <video
                  ref={exportVideoRef}
                  src="/export.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="feature-video"
                />
                <button 
                  onClick={() => toggleVideo('export')}
                  className="video-play-button"
                >
                  {videoStates.export.isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
              </div>
              <h3 className="feature-video-title">Export Grade</h3>
            </div>
            <div className="feature-video-container">
              <div className="relative">
                <video
                  ref={bulkOrderVideoRef}
                  src="/bulk order.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="feature-video"
                />
                <button 
                  onClick={() => toggleVideo('bulkOrder')}
                  className="video-play-button"
                >
                  {videoStates.bulkOrder.isPlaying ? (
                    <Pause className="w-6 h-6" />
                  ) : (
                    <Play className="w-6 h-6" />
                  )}
                </button>
              </div>
              <h3 className="feature-video-title">Bulk Order</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-6">Product Categories</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            We source based on your exact requirement across categories.
          </p>
          <div className="inline-block">
            <button 
              onClick={() => setShowCategoryPopup(true)}
              className="order-button"
            >
              <span className="order-button-content">
                <svg className="order-button-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Start Your Order</span>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Category Popup Modal */}
      {showCategoryPopup && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowCategoryPopup(false)}
        >
          <div 
            className="bg-white rounded-xl max-w-4xl w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => {
              e.stopPropagation();
              // Prevent closing when clicking inside the popup container
            }}
          >
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6">
              <h3 className="text-2xl font-bold text-gray-800">Select Product Category</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map((product, index) => (
                  <div
                    key={index}
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
                      setShowCategoryPopup(false);
                    }}
                    className="bg-gray-50 rounded-lg p-4 cursor-pointer hover:bg-green-50 hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-green-300"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800">{product.name}</h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}