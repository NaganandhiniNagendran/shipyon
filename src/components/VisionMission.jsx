import React from 'react';
import { Lightbulb, Users, Rocket } from 'lucide-react';
import '../styles/VisionMission.css';

const VisionMission = () => {
  return (
    <section className="vision-mission-section">
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

        {/* Bottom Row - Who We Are centered */}
        <div className="bottom-row">
          {/* Who We Are Card */}
          <div className="who-we-are-card" style={{ maxWidth: '800px' }} tabIndex="0" role="button" aria-label="Who We Are card">
            <div className="card-header">
              <div className="icon-wrapper who-we-are-icon">
                <Users className="header-icon" />
              </div>
              <h2 className="card-title">Who We Are</h2>
            </div>
            <p className="card-content">
              Praskla Technology is a dynamic and forward-thinking IT solutions company
              committed to delivering cutting-edge software solutions, digital marketing
              services, and IT security expertise. We specialize in helping businesses enhance
              their digital presence and operational efficiency through innovative technology
              and strategic marketing. Our team is dedicated to providing high-quality,
              reliable, and scalable solutions tailored to meet the evolving needs of modern
              enterprises.
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
