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
      isSourcingLocation: true,
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
      isDomesticTrading: true,
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
                    {item.isSourcingLocation ? (
                      <div className="sourcing-location-container">
                        <img
                          src="/sourcing-location-image.png"
                          alt="Sourcing Locations"
                          className="sourcing-location-image"
                        />
                      </div>
                    ) : item.isIndiaMap ? (
                      <div className="india-map">
                        <img
                          src="/global-supplier-relations-icon-line-illustration-vector.jpg"
                          alt="India Map"
                          className="india-map-image"
                        />
                      </div>
                    ) : item.hasCategories ? (
                      <div className="multi-category-box">
                        <img
                          src="/image%20copy.png"
                          alt="Multi-Category Trade"
                          className="multi-category-image"
                        />
                      </div>
                    ) : item.isDomesticTrading ? (
                      <div className="dual-icons">
                        <img
                          src="/demo.png"
                          alt="Global Supplier Relations"
                          className="supplier-relations-image"
                        />
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
