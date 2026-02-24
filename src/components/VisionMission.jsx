import React from 'react';
import { Eye, Target } from 'lucide-react';
import '../styles/VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
      <div className="vision-mission-container">
        <div className="vision-mission-header">
          <h2 className="vision-mission-title">Mission and Vision</h2>
          <p className="vision-mission-subtitle">
            Our guiding principles that drive us towards excellence in agricultural exports
          </p>
        </div>
        
        <div className="vision-mission-grid">
          <div className="vision-card">
            <div className="vision-icon">
              <Eye size={48} />
            </div>
            <h3 className="vision-title">Vision</h3>
            <p className="vision-content">
              To redefine agricultural and product sourcing in South India by building a seamless bridge between local producers and global markets, positioning Indian products as high-value global brands.
            </p>
          </div>
          
          <div className="mission-card">
            <div className="mission-icon">
              <Target size={48} />
            </div>
            <h3 className="mission-title">Mission</h3>
            <p className="mission-content">
             To efficiently source quality products from India, elevate Indian offerings in domestic and global markets, introduce high-potential international products into India, and build a trusted, scalable supply chain that empowers businesses to grow beyond borders.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
