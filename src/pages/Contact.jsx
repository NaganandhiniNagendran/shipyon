import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact({ header }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    websiteType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="relative text-white py-16 hero-section overflow-hidden">
        {header}
        <div
          className="absolute inset-0 hero-image-bg"
          style={{ backgroundImage: 'url("/contact us.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 text-center hero-content">
          <h1 className="text-4xl md-text-5xl font-bold mb-4 hero-title">
            Get in Touch with <span className="text-secondary-gold">Shipyon</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto hero-subtitle">
            For inquiries, orders, or partnership opportunities — we're here to help.
          </p>
        </div>
      </section>

      {/* Ready to Source or Ship Products Section */}
      <div className="ready-to-ship-section">
        <div className="ready-to-ship-container">
          <div className="ready-to-ship-content">
            <h2 className="ready-to-ship-title">Ready to Source or Ship Products?</h2>
            <p className="ready-to-ship-subtitle">Submit your inquiry or order — we'll take care of the rest.</p>
            <button className="ready-to-ship-btn">Contact Shipyon</button>
          </div>
          
          <div className="ready-to-ship-form">
            <h3 className="form-section-title">Get in Touch</h3>
            <form onSubmit={handleSubmit} className="simple-contact-form">
              <div className="simple-form-group">
                <label>Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="simple-form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="simple-form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="simple-form-group">
                <label>Company / Organization Name</label>
                <input
                  type="text"
                  name="company"
                  placeholder="Enter your Company / Organization Name"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
              
              <div className="simple-form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Enter your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="simple-submit-btn">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="contact-bottom-section">
        <div className="bg-split">
          <div className="bg-white-half"></div>
          <div className="bg-cyan-half"></div>
        </div>

        <div className="info-banner-wrapper">
          <div className="info-banner">
            <div className="info-item">
              <div className="floating-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7z" />
                </svg>
              </div>
              <h3>ABOUT CLUB</h3>
              <p>Running Guide</p>
              <p>Workouts</p>
            </div>

            <div className="info-item">
              <div className="floating-icon">
                <svg width="34" height="34" viewBox="0 0 24 24" fill="white">
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </div>
              <h3>PHONE (LANDLINE)</h3>
              <p>+ 912 3 567 8987</p>
              <p>+ 912 5 252 3336</p>
            </div>

            <div className="info-item">
              <div className="floating-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <h3>OUR OFFICE LOCATION</h3>
              <p>The Interior Design Studio Company</p>
              <p>The Courtyard, Al Quoz 1, Colorado, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}