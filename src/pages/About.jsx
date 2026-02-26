import { Users, Award, Globe, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import VisionMission from '../components/VisionMission';
import LeadershipTeam from '../components/LeadershipTeam';
import '../styles/AboutUsSection.css';

export default function About({ header }) {
  
  const values = [
    { icon: Leaf, title: 'Sustainability', desc: 'Committed to eco-friendly farming and packaging practices' },
    { icon: Award, title: 'Quality First', desc: 'Rigorous quality control from farm to delivery' },
    { icon: Globe, title: 'Global Reach', desc: 'Connecting farmers and markets worldwide' },
    { icon: Users, title: 'Partnership', desc: 'Building long-term relationships with all stakeholders' },
  ];

  const team = [
    { name: 'Rajesh Kumar', role: 'CEO & Founder', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200' },
    { name: 'Priya Sharma', role: 'Operations Director', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=200' },
    { name: 'Michael Chen', role: 'Global Logistics', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200' },
    { name: 'Sarah Johnson', role: 'Quality Assurance', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200' },
  ];

  return (
    <div className="min-h-screen about-container">
      {/* Hero Section */}
      <section className="relative text-white hero-section overflow-hidden">
        {header}
        <video
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/about us.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 hero-content">
          <div className="text-center hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-title title-hover">
              Connecting Producers to Markets<span className="text-secondary-gold"> Seamlessly</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 hero-subtitle">
              Shipyon sources, supplies, and delivers premium agricultural and industrial products across domestic and global markets.
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50 about-us-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4 about-image-grid">
              <div className="space-y-4">
                <img 
                  src="/farmers.png" 
                  alt="Farmers working in fields" 
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="/image1.png" 
                  alt="Agricultural products" 
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-4 mt-8">
                <img 
                  src="/image2.webp" 
                  alt="Quality products" 
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
                <img 
                  src="/warehouse.png" 
                  alt="Warehouse storage" 
                  className="w-full h-48 object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="about-content">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 title-hover">
                About <span className="text-secondary-gold">Shipyon</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary-gold to-primary-dark-green mb-6"></div>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
               Shipyon is a modern sourcing and trade company serving both domestic and international markets. We prioritize quality, transparency, and dependable supply chains.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our commitment to excellence ensures that every product meets the highest standards of quality and freshness. From farm to table, we maintain strict quality control measures and work closely with local farming communities to promote sustainable agricultural practices.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center feature-item">
                  <div className="w-12 h-12 bg-primary-dark-green rounded-full flex items-center justify-center mr-3 icon-circle">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Trusted Supplier Network</span>
                </div>

                <div className="flex items-center feature-item">
                  <div className="w-12 h-12 bg-primary-dark-green rounded-full flex items-center justify-center mr-3 icon-circle">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Domestic & Global Trade</span>
                </div>
                <div className="flex items-center feature-item">
                  <div className="w-12 h-12 bg-primary-dark-green rounded-full flex items-center justify-center mr-3 icon-circle">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">Quality-Driven Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <div className="mb-12">
        <VisionMission />
      </div>

      
      {/* Values */}
      <section className="py-8 bg-white values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4 title-hover">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles that guide everything we do in connecting farmers with global markets
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center value-card">
                  <div className="w-16 h-16 bg-primary-dark-green rounded-full flex items-center justify-center mx-auto mb-4 value-icon-container">
                    <Icon className="w-8 h-8 text-white value-icon" />
                  </div>
                  <h3 className="font-semibold text-lg text-text-dark mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <LeadershipTeam />

    </div>
  );
}
