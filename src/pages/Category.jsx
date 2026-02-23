import { ShoppingCart, Star, Filter } from 'lucide-react';
import { useState } from 'react';

export default function Category() {
  const [sortBy, setSortBy] = useState('featured');

  const products = [
    {
      name: 'Premium Red Apples',
      image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$45.00',
      rating: 4.8,
      description: 'Crisp, sweet apples from certified organic orchards',
      unit: '25kg box'
    },
    {
      name: 'Fresh Golden Onions',
      image: 'https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$22.00',
      rating: 4.6,
      description: 'High-quality onions with excellent storage life',
      unit: '30kg sack'
    },
    {
      name: 'Organic Tomatoes',
      image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$32.00',
      rating: 4.9,
      description: 'Vine-ripened organic tomatoes perfect for export',
      unit: '20kg crate'
    },
    {
      name: 'Fresh Garlic Bulbs',
      image: 'https://images.pexels.com/photos/8844141/pexels-photo-8844141.jpeg?auto=compress&cs=tinysrgb&w=600',
      price: '$28.00',
      rating: 4.7,
      description: 'Premium quality garlic bulbs with strong flavor',
      unit: '15kg bag'
    }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Top Rated' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 category-container">
      {/* Hero */}
      <section className="relative text-white py-16 hero-section overflow-hidden">
        <div
          className="absolute inset-0 hero-image-bg"
          style={{ backgroundImage: 'url("/ship-hero.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="flex flex-col md-flex items-center justify-between hero-content">
            <div className="mb-6 md-mb-0 hero-text">
              <h1 className="text-4xl md-text-5xl font-bold mb-4 hero-title">
                Fresh <span className="text-secondary-gold">Fruits</span>
              </h1>
              <p className="text-xl text-gray-100 max-w-2xl hero-subtitle">
                Premium quality fruits sourced from the best orchards worldwide
              </p>
            </div>
            <div className="bg-white-10 backdrop-blur-sm rounded-xl p-6 hero-stats">
              <div className="text-center">
                <div className="text-3xl font-bold">120+</div>
                <div className="text-gray-200">Products Available</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-6 bg-white border-b filters-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="flex flex-col md-flex justify-between items-center gap-4 filters-content">
            <div className="flex items-center gap-2 filter-group">
              <Filter className="w-5 h-5 text-gray-600 filter-icon" />
              <span className="text-gray-700">Filter by:</span>
              <select className="border border-gray-300 rounded-lg px-3 py-2 focus-ring-2 focus-ring-green-500 filter-select">
                <option>All Regions</option>
                <option>Organic Only</option>
                <option>Conventional</option>
              </select>
            </div>
            <div className="flex items-center gap-2 sort-group">
              <span className="text-gray-700">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus-ring-2 focus-ring-green-500 sort-select"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 products-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8 products-grid">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover-shadow-lg transition-shadow product-card">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover product-image"
                  />
                  <button className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover-bg-gray-50 transition-colors cart-button">
                    <ShoppingCart className="w-6 h-6 text-text-dark" />
                  </button>
                </div>
                <div className="p-6 product-info">
                  <h3 className="text-xl font-bold text-text-dark mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center mb-4 rating-container">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''} product-rating-star`} />
                      ))}
                    </div>
                    <span className="text-gray-600 ml-2">{product.rating}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 price-info">
                    <div>
                      <span className="text-2xl font-bold text-primary-dark-green">{product.price}</span>
                      <span className="text-gray-500 ml-2">{product.unit}</span>
                    </div>
                  </div>
                  <button className="w-full bg-primary-dark-green hover-bg-primary-green text-white py-3 rounded-lg transition-colors font-semibold add-to-cart-button">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}