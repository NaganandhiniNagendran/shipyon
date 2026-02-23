import { Mail, Phone, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Office',
      content: '123 Export Plaza, Agricultural District, New Delhi, India'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      content: '+91 123 456 7890'
    },
    {
      icon: Mail,
      title: 'Email Address',
      content: 'export@agriexport.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM'
    }
  ];

  return (
    <div className="min-h-screen contact-container">
      {/* Hero */}
      <section className="relative text-white hero-section overflow-hidden">
        <div
          className="absolute inset-0 hero-image-bg"
          style={{ backgroundImage: 'url("/ship-hero.png")' }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 py-24 hero-content">
          <div className="text-center hero-text">
            <h1 className="text-4xl md-text-5xl font-bold mb-6 hero-title">
              Contact <span className="text-secondary-gold">Us</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 hero-subtitle">
              Ready to start your agricultural export journey? Get in touch with our expert team
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-white contact-info-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-4 gap-8 contact-info-grid">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="text-center contact-info-item">
                  <div className="w-16 h-16 bg-primary-dark-green rounded-full flex items-center justify-center mx-auto mb-4 icon-container">
                    <Icon className="w-8 h-8 text-white contact-icon" />
                  </div>
                  <h3 className="font-semibold text-lg text-text-dark mb-2">{info.title}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50 contact-form-section">
        <div className="max-w-7xl mx-auto px-4 sm-px-6 lg-px-8">
          <div className="grid grid-cols-1 lg-grid-cols-2 gap-12 form-content">
            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-sm form-container">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6 contact-form">
                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 user-icon" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus-ring-green-500 focus-border-transparent name-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 email-icon" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus-ring-green-500 focus-border-transparent email-input"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus-ring-green-500 focus-border-transparent subject-input"
                    placeholder="Enter subject"
                  />
                </div>

                <div className="form-group">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5 message-icon" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus-ring-2 focus-ring-green-500 focus-border-transparent message-input"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-dark-green hover-bg-primary-green text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center submit-button"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>

            {/* Map */}
            <div className="map-container">
              <h2 className="text-2xl font-bold text-text-dark mb-6">Our Location</h2>
              <div className="bg-gray-200 rounded-xl h-96 flex items-center justify-center mb-6 map-placeholder">
                <MapPin className="w-12 h-12 text-gray-400" />
              </div>
              <div className="bg-white p-6 rounded-xl why-choose-us">
                <h3 className="font-semibold text-lg text-text-dark mb-4">Why Choose AgriExport?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 benefit-bullet"></div>
                    <span className="text-gray-700">15+ years of export experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 benefit-bullet"></div>
                    <span className="text-gray-700">Certified quality assurance</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 benefit-bullet"></div>
                    <span className="text-gray-700">Global logistics network</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 benefit-bullet"></div>
                    <span className="text-gray-700">24/7 customer support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}