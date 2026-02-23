import { Filter, Search, ShoppingCart, Star } from 'lucide-react';
import { useState } from 'react';

export default function Products() {
  const [priceRange, setPriceRange] = useState('all');
  const [category, setCategory] = useState('all');

  const products = [
    { name: 'Premium Red Apples', image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$45.00', rating: 4.8, category: 'fruits', country: 'India', organic: true },
    { name: 'Organic Tomatoes', image: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$32.00', rating: 4.9, category: 'vegetables', country: 'India', organic: true },
    { name: 'Fresh Garlic Bulbs', image: 'https://images.pexels.com/photos/8844141/pexels-photo-8844141.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$28.00', rating: 4.7, category: 'vegetables', country: 'China', organic: true },
    { name: 'Golden Onions', image: 'https://images.pexels.com/photos/3650438/pexels-photo-3650438.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$22.00', rating: 4.6, category: 'vegetables', country: 'India', organic: true },
    { name: 'Basmati Rice', image: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$35.00', rating: 4.9, category: 'grains', country: 'India', organic: true },
    { name: 'Fresh Bananas', image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$18.00', rating: 4.5, category: 'fruits', country: 'Ecuador', organic: true },
    { name: 'Green Chili', image: 'https://images.pexels.com/photos/6028284/pexels-photo-6028284.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$25.00', rating: 4.7, category: 'spices', country: 'India', organic: true },
    { name: 'Black Pepper', image: 'https://images.pexels.com/photos/5859570/pexels-photo-5859570.jpeg?auto=compress&cs=tinysrgb&w=600', price: '$42.00', rating: 4.8, category: 'spices', country: 'Vietnam', organic: true }
  ];

  const categories = ['All', 'Fruits', 'Vegetables', 'Grains', 'Spices'];
  const priceRanges = ['All', '$10-25', '$25-50', '$50+'];

  const filteredProducts = products.filter(product => {
    if (category !== 'all' && product.category !== category) return false;
    if (priceRange !== 'all') {
      const price = parseFloat(product.price.replace('$', ''));
      if (priceRange === '$10-25' && (price < 10 || price > 25)) return false;
      if (priceRange === '$25-50' && (price < 25 || price > 50)) return false;
      if (priceRange === '$50+' && price < 50) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 products-container">
      {/* Hero */}
      <section className="relative text-white py-16 hero-section overflow-hidden">
        <div
          className="absolute inset-0 hero-image-bg"
          style={{ backgroundImage: 'url("/ship-hero.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 text-center hero-content">
          <h1 className="text-4xl md-text-5xl font-bold mb-4 hero-title">
            Premium <span className="text-secondary-gold">Products</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto hero-subtitle">
            Discover our carefully curated selection of premium agricultural products
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b filters-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="flex flex-col md-flex gap-4 filters-content">
            <div className="flex-1 search-container">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 search-icon" />
                <input
                  type="text"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus-ring-green-500 focus-border-transparent search-input"
                />
              </div>
            </div>
            <div className="flex gap-4 filter-controls">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus-ring-green-500 focus-border-transparent category-filter"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat.toLowerCase()}>{cat}</option>
                ))}
              </select>
              <select
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus-ring-green-500 focus-border-transparent price-filter"
              >
                {priceRanges.map(range => (
                  <option key={range} value={range.toLowerCase()}>{range}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 products-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-6 products-grid">
            {filteredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover-shadow-md transition-shadow product-card">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover product-image"
                  />
                  {product.organic && (
                    <div className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full organic-badge">
                      Organic
                    </div>
                  )}
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
                  <div className="flex justify-between items-center mb-3 price-info">
                    <span className="text-xl font-bold text-primary-dark-green">{product.price}</span>
                    <span className="text-sm text-gray-500">{product.country}</span>
                  </div>
                  <button className="w-full bg-primary-dark-green hover-bg-primary-green text-white py-2 rounded-lg transition-colors view-details-button">
                    View Details
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