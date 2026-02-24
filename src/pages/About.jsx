import { Users, Award, Globe, Leaf, CheckCircle, ArrowRight } from 'lucide-react';
import VisionMission from '../components/VisionMission';
import LeadershipTeam from '../components/LeadershipTeam';

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
        <video
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/about-hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 hero-content">
          <div className="text-center hero-text">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-title">
              About <span className="text-secondary-gold">AgriExport</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 hero-subtitle">
              Connecting the world with premium agricultural products through sustainable practices and global partnerships
            </p>
          </div>
        </div>
      </section>





      {/* New Image Section Above Vision and Mission */}
      <section className="py-8 bg-gray-50 image-above-vision-section">
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0">
          <div className="flex justify-start">
            <div className="image-wrapper-container w-2/3 md:w-1/2">
              <div className="image-container bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-gray-300" style={{ maxWidth: '100%', maxHeight: '400px', display: 'inline-block' }}>
                <img
                  src="" // Using an existing image from public folder
                  alt="About our company"
                  className="w-full h-auto rounded-3xl"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <div className="mb-12">
        <VisionMission />
      </div>

      {/* Stats */}
      <section className="py-16 bg-gray-50 stats-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="text-center stat-item">
                <div className="text-3xl md:text-4xl font-bold text-primary-dark-green mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white values-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 section-header">
            <h2 className="text-3xl font-bold text-text-dark mb-4">Our Core Values</h2>
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
