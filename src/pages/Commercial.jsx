import './Category.css';

export default function Commercial({ header, onNavigate }) {
  const commercialProducts = [
    {
      name: 'Home Appliances',
      image: '/home appliance.png',
      description: 'Premium quality home appliances with modern technology and energy efficiency. Ideal for residential and commercial use with reliable performance.',
      source: ' Chennai, Noida'
    },
    {
      name: 'Garments',
      image: '/garments.png',
      description: 'High-quality garments with modern designs and comfortable fabrics. Perfect for both casual and formal wear with international quality standards.',
      source: ' Tiruppur, Ludhiana'
    },
    {
      name: 'Industrial Machines',
      image: '/industrical mechine.png',
      description: 'Advanced industrial machinery with high efficiency and durability. Suitable for manufacturing and processing industries with modern technology.',
      source: 'Coimbatore, Pune'
    },
    {
      name: 'Eggs',
      image: '/eggs.png',
      description: 'Fresh and nutritious eggs from healthy poultry farms. High-quality produce with proper grading and packaging for commercial distribution.',
      source: 'Namakkal (TN)'
    },
    {
      name: 'Stone Products',
      image: '/stone.png',
      description: 'Premium quality stone products for construction and decoration. Durable and elegant materials for architectural and landscaping applications.',
      source: 'Krishnagiri, Rajasthan'
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
            Industrial &<span className="highlight">Commercial</span>
          </div>
          <p className="hero-description">

Shipyon sources industrial and commercial goods from verified manufacturers across India. Each product undergoes quality verification and is prepared for safe domestic distribution or international export.
          </p>
        </div>
      </section>

      {/* Commercial Products Section */}
      <section className="produce-section">
        <div className="produce-container">
          <div className="section-header">
            <h2 className="section-title">Industrial & Other Exports</h2>
            <p className="section-subtitle">Reliable sourcing for industrial and commercial needs</p>
          </div>
          <div className="produce-grid">
            {commercialProducts.map((product, index) => (
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
