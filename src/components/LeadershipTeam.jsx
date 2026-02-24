import React from 'react';
import '../styles/LeadershipTeam.css';

const LeadershipTeam = () => {
  const teamMembers = [
    {
      name: "Naveen",
      role: "CEO",
      description: "Leading Shipyon with a vision to connect India's best products to domestic and international markets. With extensive experience in trade, supply chain, and business development, he drives innovation, quality, and strategic growth for the company.",
      imageLayout: "left"
    },
    {
      name: "Pranesh Kumar Baskaran",
      role: "Legal Advisor",
      description: "ensures all Shipyon operations meet the highest legal and regulatory standards. With expertise in international trade law and corporate compliance, he safeguards the company's integrity and strengthens trust with clients worldwide.",
      imageLayout: "right"
    }
  ];

  return (
    <section className="leadership-team-section">
      <div className="leadership-team-container">
        <div className="leadership-team-header">
          <h2 className="leadership-team-title">Our Leadership Team</h2>
          <p className="leadership-team-subtitle">Driving Trust, Quality & Growth</p>
        </div>
        
        <div className="leadership-team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="leadership-member-card">
              <div className={`leadership-member-content ${member.imageLayout === 'left' ? 'image-left' : 'image-right'}`}>
                <div className="member-image-placeholder">
                  <div className="placeholder-circle"></div>
                </div>
                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeam;
