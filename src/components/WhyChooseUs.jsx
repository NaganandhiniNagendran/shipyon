import { Globe, MapPin, Box, Truck, Ship, Leaf, Settings, Bolt } from 'lucide-react';
import '../styles/WhyChooseUs.css';

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      number: '50+',
      title: 'Sourcing Locations',
      icon: Globe,
      secondaryIcon: MapPin,
      color: '#14b8a6'
    },
    {
      id: 2,
      title: 'Pan-India Supplier Network',
      icon: MapPin,
      isIndiaMap: true,
      color: 'transparent',
      bgColor: 'transparent'
    },
    {
      id: 3,
      title: 'Multi-Category Trade',
      icon: Box,
      hasCategories: true,
      color: '#14b8a6'
    },
    {
      id: 4,
      title: 'Domestic & International Distribution',
      icon: Truck,
      secondaryIcon: Ship,
      color: '#1e40af'
    }
  ];

  return (
    <section className="why-choose-us-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            We are your trusted partner for agricultural trade with comprehensive solutions
          </p>
        </div>

        <div className="why-choose-grid">
          {features.map((item) => {
            const Icon = item.icon;
            const SecondaryIcon = item.secondaryIcon;
            return (
              <div key={item.id} className="why-choose-card" style={{ '--feature-color': item.color }}>
                <div className="feature-circle">
                  <div className="feature-icon-container">
                    {item.isIndiaMap ? (
                      <div className="india-map">
                        <img 
                          src="/global-supplier-relations-icon-line-illustration-vector.jpg" 
                          alt="India Map" 
                          className="india-map-image"
                        />
                      </div>
                    ) : item.hasCategories ? (
                      <div className="multi-category-box">
                        <Icon className="box-icon" />
                        <div className="category-icons">
                          <Leaf className="category-icon" />
                          <Settings className="gear-icon" />
                          <Bolt className="bolt-icon" />
                        </div>
                      </div>
                    ) : item.secondaryIcon ? (
                      <div className="dual-icons">
                        <Icon className="primary-icon" />
                        <SecondaryIcon className="secondary-icon" />
                        <div className="distribution-arrows">
                          <span className="arrow-text">DOMESTIC</span>
                          <span className="arrow-text">INTERNATIONAL</span>
                        </div>
                      </div>
                    ) : (
                      <div className="globe-with-pin">
                        <Icon className="globe-icon" />
                        <SecondaryIcon className="pin-icon" />
                      </div>
                    )}
                  </div>
                  {item.number && (
                    <div className="feature-number">{item.number}</div>
                  )}
                </div>
                <h3 className="feature-title">{item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
