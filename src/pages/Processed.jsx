import './Category.css';

export default function Processed({ header, onNavigate }) {
  const processedProducts = [
    {
      name: 'Moringa Powder',
      image: '/Moringa Powder.png',
      description: 'Premium quality moringa powder made from carefully dried and ground moringa leaves. Rich in nutrients and antioxidants, perfect for health supplements and culinary applications.',
      source: 'Madurai, Theni (TN)'
    },
    {
      name: 'Vegetables & Fruits Mix',
      image: '/veg & fruits.png',
      description: 'Carefully processed mix of premium vegetables and fruits. Ready-to-use blend with optimal nutritional balance for various culinary applications.',
      source: 'Coimbatore, Hyderabad, Pune'
    },
    {
      name: 'Spices Mix',
      image: '/spices.png',
      description: 'Premium quality blended spices with perfect flavor balance. Expertly processed and ground to preserve aroma and taste profiles.',
      source: ' Erode, Kochi'
    }
  ];

  const bambooHandcraftProducts = [
    {
      name: 'Bamboo Craft',
      image: '/bamboo craft.png',
      description: 'Handcrafted bamboo products with traditional techniques. Sustainable and eco-friendly items perfect for home decor and utility purposes.',
      source: 'Assam, Tripura, Kerala'
    },
    {
      name: 'Bamboo Salt',
      image: '/bamboo.png',
      description: 'Premium quality bamboo products with modern design and durability. Ideal for both commercial and residential applications with sustainable materials.',
      source: ' Tamil Nadu (crafted), Kerala'
    },
    {
      name: 'Handcraft Items',
      image: '/handcraft.png',
      description: 'Traditional handcrafted items made by skilled artisans. Unique pieces showcasing cultural heritage and craftsmanship with modern appeal.',
      source: 'Rajasthan, Odisha, West Bengal'
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
            Processed &<span className="highlight">Value-Added</span>
          </div>
          <p className="hero-description">
            We procure naturally processed and specialty products from trusted manufacturers and farms. Consistent quality, hygienic processing, and scalable packaging make them ready for bulk trade worldwide.
          </p>
        </div>
      </section>

      {/* Processed Products Section */}
      <section className="produce-section">
        <div className="produce-container">
          <div className="section-header">
            <h2 className="section-title">Powders & Processed Products
</h2>
            <p className="section-subtitle">Carefully processed agricultural products with quality assurance</p>
          </div>
          <div className="produce-grid">
            {processedProducts.map((product, index) => (
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

      {/* Bamboo & Handcraft Products Section */}
      <section className="additional-produce-section">
        <div className="produce-container">
          <div className="section-header">
            <h2 className="section-title">Specialty / Value-added</h2>
            <p className="section-subtitle">Traditional craftsmanship meets sustainable materials</p>
          </div>
          <div className="produce-grid">
            {bambooHandcraftProducts.map((product, index) => (
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
