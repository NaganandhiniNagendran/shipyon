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

      {/* Who We Are Section */}
      <section className="py-20 bg-[#f4f7f5] who-we-are-section relative overflow-hidden">
        {/* Subtle background abstract shape/pattern */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/40 to-transparent pointer-events-none"></div>

        <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main White Wrapper Card */}
          <div className="bg-white rounded-[40px] shadow-[0_10px_50px_rgba(0,0,0,0.06)] p-6 sm:p-10 lg:p-16 relative border border-gray-50 flex items-center justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

              {/* Left Side: Images */}
              <div className="who-we-are-images relative z-10 w-full mb-8 lg:mb-0 lg:ml-8 mt-4 lg:mt-0">
                {/* Background Accent Shape */}
                <div
                  className="absolute -bottom-8 -left-8 bg-primary-dark-green -z-10 shadow-lg hidden sm:block"
                  style={{ width: '10rem', height: '10rem', borderRadius: '40px 10px 40px 40px' }}
                ></div>

                <div className="relative w-full sm:w-[90%] md:w-[85%] lg:w-[95%] h-auto flex flex-col justify-center gap-4 mx-auto sm:mx-0">
                  {/* Top Image: Farmers */}
                  <img
                    src="https://images.pexels.com/photos/616404/farmers-field-work-rice-616404.jpeg?auto=compress&cs=tinysrgb&w=800"
                    alt="Farmers"
                    className="w-full object-cover shadow-sm story-top-img"
                    style={{ height: 'min(50vw, 280px)', borderRadius: '30px 60px 60px 15px' }}
                  />

                  {/* Bottom Image: Ship */}
                  <img
                    src="/image1.png"
                    alt="Shipyon Cargo Ship"
                    className="w-full object-cover shadow-sm story-bottom-img"
                    style={{ height: 'min(50vw, 280px)', borderRadius: '60px 60px 40px 40px' }}
                  />
                </div>

                {/* Overlapping Circular Forklift Image */}
                <div
                  className="absolute z-20 bg-white rounded-full overflow-hidden shadow-lg border-white story-forklift-circle"
                >
                  <img
                    src="/image2.webp"
                    alt="Warehouse Forklift"
                    className="w-full h-full object-cover transform transition-transform hover:scale-110 duration-700"
                  />
                </div>
              </div>

              {/* Right Side: Content */}
              <div className="who-we-are-content lg:pl-10 xl:pl-16">
                <div className="inline-block mb-3 border-b-2 border-primary-dark-green pb-1" style={{ borderColor: '#166534', borderBottomWidth: '1.5px' }}>
                  <h2 className="text-xl sm:text-2xl font-bold text-primary-dark-green font-serif tracking-wide">Who We Are?</h2>
                </div>

                <h3 className="text-[2.2rem] sm:text-4xl lg:text-[2.8rem] text-text-dark font-extrabold mb-5 leading-[1.1] tracking-tight">
                  Connecting Producers<br className="hidden sm:block" />
                  <span className="italic font-serif text-primary-dark-green ml-1 sm:ml-0">to Markets.</span>
                </h3>

                <p className="text-gray-600 mb-10 max-w-[500px] text-[1.1rem] leading-relaxed">
                  Shipyon is a modern sourcing and trade company serving both domestic and international markets. We prioritize quality, transparency, and dependable supply chains.
                </p>

                {/* Feature List */}
                <div className="space-y-4 max-w-[460px]">
                  {/* Card 1 */}
                  <div className="flex items-center bg-white p-3 pr-5 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className="w-[52px] h-[52px] bg-primary-dark-green rounded-xl flex items-center justify-center text-white mr-5 shrink-0 group-hover:bg-green-800 transition-colors shadow-inner">
                      <Users className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-gray-800 text-[1.1rem] flex-1">Trusted Supplier Network</span>
                    <div className="flex flex-col items-center justify-center pl-2">
                      <span className="text-secondary-gold text-2xl font-black group-hover:translate-x-1 group-hover:text-primary-dark-green transition-all">»</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="flex items-center bg-[#f4f7f5] p-3 pr-5 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className="w-[52px] h-[52px] bg-[#638475] rounded-xl flex items-center justify-center text-white mr-5 shrink-0 group-hover:bg-[#4a6b5d] transition-colors shadow-inner">
                      <Globe className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-gray-800 text-[1.1rem] flex-1">Domestic & Global Trade</span>
                    <div className="flex flex-col items-center justify-center pl-2">
                      <span className="text-secondary-gold text-2xl font-black group-hover:translate-x-1 group-hover:text-primary-dark-green transition-all">»</span>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="flex items-center bg-white p-3 pr-5 rounded-2xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-gray-100 hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
                    <div className="w-[52px] h-[52px] bg-primary-dark-green rounded-xl flex items-center justify-center text-white mr-5 shrink-0 group-hover:bg-green-800 transition-colors shadow-inner">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                    <span className="font-bold text-gray-800 text-[1.1rem] flex-1">Quality-Driven Operations</span>
                    <div className="flex flex-col items-center justify-center pl-2">
                      <span className="text-secondary-gold text-2xl font-black group-hover:translate-x-1 group-hover:text-primary-dark-green transition-all">»</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white who-we-are-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="who-we-are-content">
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
            <div className="relative h-[450px] w-full mt-8 lg:mt-0 story-images">
              <img
                src="https://images.pexels.com/photos/6182115/pexels-photo-6182115.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Farm"
                className="absolute top-4 right-0 w-4/5 h-80 rounded-2xl object-cover shadow-xl transition-transform hover:scale-[1.02] duration-300"
              />
              <img
                src="https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Harvest"
                className="absolute bottom-4 left-0 w-3/5 h-64 rounded-2xl object-cover shadow-2xl border-8 border-white transition-transform hover:scale-[1.02] duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <VisionMission />

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

      {/* CTA */}
      <section className="py-16 bg-primary-dark-green text-white cta-section">
        <div className="max-w-4xl mx-auto text-center px-4 cta-content">
          <h2 className="text-3xl font-bold mb-4">Ready to Partner With Us?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join our network of premium agricultural suppliers and global buyers
          </p>
          <button className="bg-secondary-gold hover:bg-gold-dark text-text-dark font-semibold py-3 px-8 rounded-lg transition-colors cta-button">
            Get Started Today
          </button>
        </div>
      </section>
    </div>
  );
}
