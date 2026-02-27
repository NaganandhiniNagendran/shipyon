import React from 'react';
import { Lightbulb, Users, Rocket } from 'lucide-react';
import '../styles/VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      {/* Section Title */}
      <div className="section-header text-center mb-12">
        <h2 className="text-3xl font-bold text-text-dark mb-4 title-hover">Vision & Mission</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our guiding principles and commitment to excellence in agricultural trade
        </p>
      </div>
      
      <div className="vision-mission-container">
        {/* Top Row - Vision and Mission side by side */}
        <div className="top-row">
          {/* Vision Card */}
          <div className="vision-card" tabIndex="0" role="button" aria-label="Our Vision card">
            <div className="card-header">
              <div className="icon-wrapper vision-icon">
                <Lightbulb className="header-icon" />
              </div>
              <h2 className="card-title">Our Vision</h2>
            </div>
            <p className="card-content">
              To redefine agricultural and product sourcing in South India by building a seamless bridge between local producers and global markets, positioning Indian products as high-value global brands.
            </p>
          </div>

          {/* Mission Card */}
          <div className="mission-card" tabIndex="0" role="button" aria-label="Our Mission card">
            <div className="card-header">
              <div className="icon-wrapper mission-icon">
                <Rocket className="header-icon" />
              </div>
              <h2 className="card-title">Our Mission</h2>
            </div>
            <p className="card-content">
             To efficiently source quality products from India, elevate Indian offerings in domestic and global markets, introduce high-potential international products into India, and build a trusted, scalable supply chain that empowers businesses to grow beyond borders.
            </p>
          </div>
        </div>
      </div>
      
      {/* Horizontal Line below Vision and Mission */}
      <div className="max-w-5xl mx-auto mt-8 mb-4">
        <hr className="border-gray-300" />
      </div>
    </section>
  );
};

export default VisionMission;
