import './Category.css';

export default function Category({ header, onNavigate, spicesOnly = false }) {
  const products = [
    {
      name: 'Onions',
      image: '/onion.png',
      description: 'Premium quality onions with perfect flavor and long shelf life. Ideal for culinary applications worldwide.',
      source: 'Sourced from Nashik, Maharashtra'
    },
    {
      name: 'Small Onions',
      image: '/small onion.png',
      description: 'Premium small onions with concentrated flavor and excellent storage quality. Perfect for traditional dishes.',
      source: 'Sourced from Tamil Nadu'
    },
    {
      name: 'Potatoes',
      image: '/potato.png',
      description: 'High-quality potatoes with consistent size and texture. Excellent for frying, baking, and boiling.',
      source: 'Sourced from Uttar Pradesh'
    }
  ];

  const additionalProducts = [
    {
      name: 'Yam',
      image: '/yan.png',
      description: 'Nutrient-rich yams with excellent texture and flavor. Perfect for both traditional and modern culinary applications.',
      source: 'Sourced from Kerala'
    },
    {
      name: 'Ginger',
      image: '/ginder.png',
      description: 'Aromatic ginger with strong flavor profile and high essential oil content. Ideal for culinary and medicinal uses.',
      source: 'Sourced from Karnataka'
    },
    {
      name: 'Garlic',
      image: '/garlic.png',
      description: 'Premium garlic bulbs with intense flavor and long shelf life. Essential ingredient for global cuisines.',
      source: 'Sourced from Rajasthan'
    },
    {
      name: 'Drumstick',
      image: '/drum.png',
      description: 'Fresh drumsticks with tender pods and high nutritional value. Popular in traditional South Indian cuisine.',
      source: 'Sourced from Tamil Nadu'
    }
  ];

  const coconutProducts = [
    {
      name: 'Coconut',
      image: '/coconut.png',
      description: 'Premium quality coconuts with rich water content and thick kernel. Ideal for culinary and industrial applications.',
      source: 'Sourced from Kerala'
    },
    {
      name: 'Coco',
      image: '/coco.png',
      description: 'Fresh tender coconuts with sweet water and soft meat. Perfect for refreshment and traditional uses.',
      source: 'Sourced from Tamil Nadu'
    },
    {
      name: 'Thunder Coconut',
      image: '/thunder coconut.png',
      description: 'Special variety coconuts with exceptional size and high yield. Preferred for commercial processing.',
      source: 'Sourced from Karnataka'
    }
  ];

  const spicesProducts = [
    {
      name: 'Red Chilly',
      image: '/red chilly.png',
      description: 'Premium quality red chillies with perfect heat level and vibrant color. Essential for culinary applications worldwide.',
      source: 'Sourced from Andhra Pradesh'
    },
    {
      name: 'Green Chilli',
      image: '/green chlli.png',
      description: 'Fresh green chillies with crisp texture and moderate heat. Perfect for everyday cooking and traditional dishes.',
      source: 'Sourced from Tamil Nadu'
    },
    {
      name: 'Black Pepper',
      image: '/black papper.png',
      description: 'Aromatic black pepper with bold flavor profile and high essential oil content. The king of spices for global cuisines.',
      source: 'Sourced from Kerala'
    },
    {
      name: 'Turmeric',
      image: '/turmic.png',
      description: 'Pure golden turmeric with high curcumin content and vibrant color. Essential for culinary and medicinal applications.',
      source: 'Sourced from Maharashtra'
    },
    {
      name: 'Cardamom',
      image: '/card.png',
      description: 'Premium cardamom pods with intense aroma and complex flavor. The queen of spices for gourmet cuisines.',
      source: 'Sourced from Karnataka'
    }
  ];

  const fruitsProducts = [
    {
      name: 'Grapes',
      image: '/graps.png',
      description: 'Premium quality grapes with perfect sweetness and juicy texture. Ideal for fresh consumption and wine production.',
      source: 'Sourced from Maharashtra'
    },
    {
      name: 'Apple',
      image: '/apple.png',
      description: 'Crisp and flavorful apples with excellent texture and taste. Perfect for fresh consumption and culinary uses.',
      source: 'Sourced from Himachal Pradesh'
    },
    {
      name: 'Banana',
      image: '/banana.png',
      description: 'Sweet and creamy bananas with rich nutritional value. Ideal for both fresh consumption and processing.',
      source: 'Sourced from Tamil Nadu'
    },
    {
      name: 'Pomegranate',
      image: '/Pomegranate.png',
      description: 'Premium pomegranates with juicy arils and rich antioxidant content. Perfect for health-conscious consumers.',
      source: 'Sourced from Maharashtra'
    },
    {
      name: 'Orange',
      image: '/orange.png',
      description: 'Fresh oranges with perfect balance of sweetness and tanginess. Rich in vitamin C and essential nutrients.',
      source: 'Sourced from Nagpur, Maharashtra'
    }
  ];

  const plantationProducts = [
    {
      name: 'Coffee',
      image: '/coffe.png',
      description: 'Premium quality coffee beans with rich aroma and exceptional flavor. Sourced from high-altitude plantations for the perfect brew.',
      source: 'Sourced from Coorg, Karnataka'
    },
    {
      name: 'Tea',
      image: '/tea.png',
      description: 'Finest tea leaves with delicate flavor and refreshing aroma. Carefully processed to preserve natural characteristics and health benefits.',
      source: 'Sourced from Assam & Darjeeling'
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
           {spicesOnly ? 'Premium' : 'Fresh'}<span className="highlight">{spicesOnly ? 'Spices' : 'Products'}</span>
          </div>
          <p className="hero-description">
      {spicesOnly 
        ? 'We source premium spices and plantation products from Indiaâ€™s top growing regions. Every item is carefully inspected, processed, and packed to ensure superior quality for both domestic and international buyers.'
        : 'Shipyon sources fresh produce directly from trusted farmers and regional suppliers across South India. We ensure quality checks, proper grading, and export-ready packaging to meet both domestic and international standards.'
      }
          </p>
        </div>
      </section>

      {spicesOnly ? (
        <>
          {/* Spices Products Section */}
          <section className="produce-section">
            <div className="produce-container">
              <div className="section-header">
                <h2 className="section-title">Chillies & Spices</h2>
                <p className="section-subtitle">Premium quality spices from the finest growing regions</p>
              </div>
              <div className="produce-grid">
                {spicesProducts.map((product, index) => (
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

          {/* Plantation Products Section */}
          <section className="additional-produce-section">
            <div className="produce-container">
              <div className="section-header">
                <h2 className="section-title">Tea & Plantation Crops</h2>
                <p className="section-subtitle">Premium coffee and tea from India's finest plantations</p>
              </div>
              <div className="produce-grid">
                {plantationProducts.map((product, index) => (
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
        </>
      ) : (
        <>
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

          {/* Additional Products Section */}
          <section className="additional-produce-section">
            <div className="produce-container">
              <div className="section-header">
                <h2 className="section-title">Roots & Vegetables</h2>
                <p className="section-subtitle">Explore our wider range of fresh vegetables</p>
              </div>
              <div className="produce-grid">
                {additionalProducts.map((product, index) => (
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

          {/* Coconut Products Section */}
          <section className="coconut-produce-section">
            <div className="produce-container">
              <div className="section-header">
                <h2 className="section-title">Coconut & Coconut Products</h2>
                <p className="section-subtitle">Premium quality coconuts from tropical regions</p>
              </div>
              <div className="produce-grid">
                {coconutProducts.map((product, index) => (
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

          {/* Fruits Products Section */}
          <section className="fruits-produce-section">
            <div className="produce-container">
              <div className="section-header">
                <h2 className="section-title">Fresh Fruits</h2>
                <p className="section-subtitle">Premium quality fruits from the best orchards across India</p>
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
