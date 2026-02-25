import './Category.css';

export default function Category({ header, onNavigate }) {
  const products = [
    {
      name: 'Onions',
      image: '/onion.png',
      description: 'Premium quality onions with perfect flavor and long shelf life. Ideal for culinary applications worldwide.',
      source: 'Sourced from Nashik, Maharashtra'
    },
    {
      name: 'Tomatoes',
      image: '/tomato.png',
      description: 'Fresh, ripe tomatoes with rich flavor and excellent nutritional value. Perfect for sauces and fresh consumption.',
      source: 'Sourced from Karnataka'
    },
    {
      name: 'Potatoes',
      image: '/potato.png',
      description: 'High-quality potatoes with consistent size and texture. Excellent for frying, baking, and boiling.',
      source: 'Sourced from Uttar Pradesh'
    },
    {
      name: 'Garlic',
      image: '/garlic.png',
      description: 'Aromatic garlic bulbs with strong flavor profile. Essential ingredient for global cuisines.',
      source: 'Sourced from Rajasthan'
    }
  ];

  return (
    <div className="category-page">
      {/* Hero Section */}
      <section className="hero-section">
        {header}
        <div
          className="hero-background"
          style={{ backgroundImage: 'url("/category bg.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-title">
           Fresh<span className="highlight">Products</span>
          </div>
          <p className="hero-description">
      Fresh produce sourced directly from trusted farmers, delivered with excellence.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="produce-section">
        <div className="produce-container">
          <div className="produce-grid">
            {products.map((product, index) => (
              <div key={index} className="produce-card">
                <div className="produce-card-container">
                  <div className="produce-image-wrapper">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="produce-image"
                    />
                  </div>
                  <div className="produce-card-content">
                    <h3 className="produce-card-title">{product.name}</h3>
                    <p className="produce-card-description">{product.description}</p>
                    <div className="produce-source-info">
                      <svg className="location-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="source-text">{product.source}</span>
                    </div>
                    <button className="enquire-button" onClick={() => onNavigate('contact')}>
                      Enquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}