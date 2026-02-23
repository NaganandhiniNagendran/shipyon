import { Truck, Shield, Leaf, Globe, Warehouse, Award } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Global Export Network',
      desc: 'Comprehensive export solutions to 50+ countries with full compliance',
      features: ['Customs Documentation', 'Export Licensing', 'International Shipping', 'Market Research']
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      desc: 'Rigorous testing and certification for all agricultural products',
      features: ['Lab Testing', 'Organic Certification', 'Quality Standards', 'Traceability']
    },
    {
      icon: Warehouse,
      title: 'Cold Chain Logistics',
      desc: 'Temperature-controlled storage and transportation for perishable goods',
      features: ['Refrigerated Storage', 'Cold Transport', 'Humidity Control', 'Real-time Monitoring']
    },
    {
      icon: Truck,
      title: 'Supply Chain Management',
      desc: 'End-to-end supply chain solutions from farm to delivery',
      features: ['Inventory Management', 'Order Processing', 'Distribution Network', 'Last-mile Delivery']
    },
    {
      icon: Leaf,
      title: 'Sustainable Sourcing',
      desc: 'Ethical and environmentally responsible sourcing practices',
      features: ['Organic Farming', 'Fair Trade', 'Eco-friendly Packaging', 'Carbon Footprint Reduction']
    },
    {
      icon: Award,
      title: 'Consulting Services',
      desc: 'Expert guidance for market entry and business growth',
      features: ['Market Analysis', 'Regulatory Compliance', 'Business Strategy', 'Partnership Development']
    }
  ];

  const process = [
    { step: '01', title: 'Consultation', desc: 'Understand your requirements and market needs' },
    { step: '02', title: 'Sourcing', desc: 'Identify and qualify premium suppliers' },
    { step: '03', title: 'Quality Check', desc: 'Rigorous testing and certification' },
    { step: '04', title: 'Logistics', desc: 'Efficient transportation and delivery' },
    { step: '05', title: 'Delivery', desc: 'Timely delivery to your doorstep' },
    { step: '06', title: 'Support', desc: 'Ongoing customer service and support' }
  ];

  return (
    <div className="min-h-screen services-container">
      {/* Hero */}
      <section className="relative text-white hero-section overflow-hidden">
        <div
          className="absolute inset-0 hero-image-bg"
          style={{ backgroundImage: 'url("/ship-hero.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 py-24 hero-content">
          <div className="text-center hero-text">
            <h1 className="text-4xl md-text-5xl font-bold mb-6 hero-title">
              Our <span className="text-secondary-gold">Services</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 hero-subtitle">
              Comprehensive agricultural export solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white services-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-3 gap-8 services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover-shadow-lg transition-shadow service-card">
                  <div className="w-16 h-16 bg-primary-dark-green rounded-full flex items-center justify-center mb-6 service-icon-container">
                    <Icon className="w-8 h-8 text-white service-icon" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700 feature-item">
                        <div className="w-1_5 h-1_5 bg-green-500 rounded-full mr-2 feature-bullet"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50 process-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined approach to ensure quality and efficiency in every export
            </p>
          </div>
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-6 gap-6 process-grid">
            {process.map((item, index) => (
              <div key={index} className="text-center process-step">
                <div className="w-16 h-16 bg-primary-dark-green text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4 step-number">
                  {item.step}
                </div>
                <h3 className="font-semibold text-text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}