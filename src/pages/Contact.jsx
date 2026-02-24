import React, { useState } from 'react';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
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
      <div className="contact-top-section">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">
          Any questions or remarks? Just write us a message!
        </p>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter a valid email address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
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
          </div>

          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </form>
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