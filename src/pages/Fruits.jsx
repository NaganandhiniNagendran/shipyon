import './Category.css';

export default function Fruits({ header, onNavigate }) {
  const fruitsProducts = [
    {
      name: 'Grapes',
      image: '/graps.png',
      description: 'Premium quality grapes with perfect sweetness and juicy texture. Ideal for fresh consumption and wine production.',
      source: ' Nashik (MH)'
    },
    {
      name: 'Apple',
      image: '/apple.png',
      description: 'Crisp and flavorful apples with excellent texture and taste. Perfect for fresh consumption and culinary uses.',
      source: ' Himachal Pradesh, Kashmir'
    },
    {
      name: 'Banana',
      image: '/banana.png',
      description: 'Sweet and creamy bananas with rich nutritional value. Ideal for both fresh consumption and processing.',
      source: ' Trichy, Theni (TN)'
    },
    {
      name: 'Pomegranate',
      image: '/Pomegranate.png',
      description: 'Premium pomegranates with juicy arils and rich antioxidant content. Perfect for health-conscious consumers.',
      source: 'Solapur, Nashik'
    },
    {
      name: 'Orange',
      image: '/orange.png',
      description: 'Fresh oranges with perfect balance of sweetness and tanginess. Rich in vitamin C and essential nutrients.',
      source: ' Nagpur (MH)'
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
            Fresh<span className="highlight">Fruits</span>
          </div>
          <p className="hero-description">
          Shipyon selects high-quality fruits from verified orchards and farms. Our grading, packaging, and quality control processes ensure freshness and export-ready standards for markets in India and abroad.
          </p>
        </div>
      </section>

      {/* Fruits Products Section */}
      <section className="produce-section">
        <div className="produce-container">
          <div className="section-header">
            <h2 className="section-title">Premium Fresh Fruits</h2>
            <p className="section-subtitle">Carefully selected fruits from the best orchards across India</p>
          </div>
          <div className="produce-grid">
            {fruitsProducts.map((product, index) => (
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
