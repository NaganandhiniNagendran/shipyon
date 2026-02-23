import { Users, Award, Globe, Leaf, CheckCircle, ArrowRight } from 'lucide-react';

export default function About() {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '50+', label: 'Countries Served' },
    { value: '1000+', label: 'Global Partners' },
    { value: '99.8%', label: 'On-time Delivery' },
  ];

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
        <div
          className="absolute inset-0 hero-image-bg"
          style={{ backgroundImage: 'url("/ship-hero.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 py-24 hero-content">
          <div className="text-center hero-text">
            <h1 className="text-4xl md-text-5xl font-bold mb-6 hero-title">
              About <span className="text-secondary-gold">AgriExport</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 hero-subtitle">
              Connecting the world with premium agricultural products through sustainable practices and global partnerships
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white story-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 lg-grid-cols-2 gap-12 items-center story-content">
            <div className="story-text">
              <h2 className="text-3xl font-bold text-text-dark mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2009, AgriExport began with a simple vision: to bridge the gap between quality agricultural producers and global markets. What started as a small operation connecting local farmers to regional buyers has grown into a comprehensive export network spanning over 50 countries.
              </p>
              <p className="text-gray-700 mb-4">
                Today, we work with over 2,000 certified farms across Asia, Africa, and South America, ensuring that premium produce reaches international markets while maintaining the highest standards of quality and sustainability.
              </p>
              <div className="flex flex-wrap gap-4 mt-8 story-features">
                <div className="flex items-center text-primary-dark-green">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Certified Organic Suppliers</span>
                </div>
                <div className="flex items-center text-primary-dark-green">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Global Quality Standards</span>
                </div>
                <div className="flex items-center text-primary-dark-green">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Sustainable Practices</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 story-images">
              <img
                src="https://images.pexels.com/photos/6182115/pexels-photo-6182115.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farm"
                className="rounded-lg object-cover h-64"
              />
              <img
                src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Harvest"
                className="rounded-lg object-cover h-64 mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50 stats-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-2 md-grid-cols-4 gap-8 stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="text-center stat-item">
                <div className="text-3xl md-text-4xl font-bold text-primary-dark-green mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white values-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Principles that guide everything we do in connecting farmers with global markets
            </p>
          </div>
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8 values-grid">
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

      {/* Team */}
      <section className="py-16 bg-gray-50 team-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to agricultural excellence and global trade
            </p>
          </div>
          <div className="grid grid-cols-1 sm-grid-cols-2 lg-grid-cols-4 gap-8 team-grid">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center team-member">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover team-photo"
                />
                <h3 className="font-semibold text-lg text-text-dark mb-1">{member.name}</h3>
                <p className="text-primary-dark-green">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-dark-green text-white cta-section">
        <div className="max-w-4xl mx-auto text-center px-4 cta-content">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join our network of premium agricultural suppliers and global buyers
          </p>
          <button className="bg-secondary-gold hover-bg-gold-dark text-text-dark font-semibold py-3 px-8 rounded-lg transition-colors cta-button">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}