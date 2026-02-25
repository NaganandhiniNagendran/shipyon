import React, { useState, useEffect, useRef } from 'react';
import '../styles/Services.css';
import '../styles/Milestone.css';
import '../styles/HowWeWork.css';

export default function Services({ header, onNavigate }) {

  const [isScrolling, setIsScrolling] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);

  const scrollPositionRef = useRef(0);

  useEffect(() => {
    if (isScrolling && !isPaused && scrollContainerRef.current) {
      const animate = () => {
        if (scrollContainerRef.current && !isPaused) {
          scrollPositionRef.current -= 1; // Adjust speed as needed
          
          // Reset position when scrolled halfway
          const containerWidth = scrollContainerRef.current.scrollWidth / 2;
          if (Math.abs(scrollPositionRef.current) >= containerWidth) {
            scrollPositionRef.current = 0;
          }
          
          scrollContainerRef.current.style.transform = `translateX(${scrollPositionRef.current}px)`;
          animationRef.current = requestAnimationFrame(animate);
        }
      };
      animationRef.current = requestAnimationFrame(animate);
    } else {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isScrolling, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    setIsPaused(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setIsPaused(!isPaused);
  };

  return (
    <div className="min-h-screen services-container">
      {/* Hero */}
      <section className="relative text-white py-16 hero-section overflow-hidden">
        {header}
        <video
          className="absolute inset-0 w-full h-full object-cover hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/Services.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hero-overlay"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm-px-6 lg-px-8 text-center hero-content">
          <h1 className="text-4xl md-text-5xl font-bold mb-4 hero-title">
            What We<span className="text-secondary-gold"> Do</span>
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto hero-subtitle">
           End-to-End Sourcing, Trade & Market Expansion Solutions.
          </p>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our core services</h2>
          </div>
          <div 
            className="overflow-hidden cursor-pointer relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 shadow-2xl border border-gray-200"
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              ref={scrollContainerRef}
              className="flex gap-6"
              style={{ 
                width: 'max-content'
              }}
            >
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agricultural Product Sourcing</h3>
                <p className="text-gray-600">Directly sourcing high-quality products from trusted South Indian producers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Domestic & International Trade</h3>
                <p className="text-gray-600">Ensuring seamless product movement across Indian and global markets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Product Procurement</h3>
                <p className="text-gray-600">Identifying, verifying, and sourcing specific products needed from India.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing & Sales Support</h3>
                <p className="text-gray-600">Identifying, verifying, and sourcing any specific product needed from India.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Import & Market Development</h3>
                <p className="text-gray-600">Introducing high-potential international products into the Indian market.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing & Sales Support</h3>
                <p className="text-gray-600">Strategic branding and sales execution for local and global expansion.</p>
              </div>
              {/* Duplicate set for seamless scrolling */}
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Agricultural Product Sourcing</h3>
                <p className="text-gray-600">Directly sourcing high-quality products from trusted South Indian producers.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Domestic & International Trade</h3>
                <p className="text-gray-600">Ensuring seamless product movement across Indian and global markets.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Product Procurement</h3>
                <p className="text-gray-600">Identifying, verifying, and sourcing specific products needed from India.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Marketing & Sales Support</h3>
                <p className="text-gray-600">Identifying, verifying, and sourcing any specific product needed from India.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border-2 border-gray-800 flex-shrink-0 transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-green-600 cursor-pointer" 
                 style={{ 
                   width: '300px', 
                   border: '2px solid #4B5563',
                   transition: 'all 0.3s ease'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'scale(1.05)';
                   e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)';
                   e.currentTarget.style.borderColor = '#16a34a';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'scale(1)';
                   e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)';
                   e.currentTarget.style.borderColor = '#4B5563';
                 }}>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Import & Market Development</h3>
                <p className="text-gray-600">Introducing high-potential international products into Indian market.</p>
              </div>
            </div>
          </div>
          {/* Request a Quote Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-green-600 hover:bg-green-700 text-black font-semibold py-3 px-8 rounded-lg transition-colors border-2 border-green-500 shadow-lg hover:shadow-xl"
            >
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="how-we-work-header">
            <h2 className="how-we-work-title">How We Work</h2>
            <p className="how-we-work-subtitle">
              Our streamlined four-step process ensures efficient and reliable service delivery
            </p>
          </div>
          
          <div className="how-we-work-grid">
            {/* Step 1 */}
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-icon-container">
                <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="step-title">Identify Requirement</h3>
              <p className="step-description">Understand your specific needs and product requirements</p>
            </div>

            {/* Step 2 */}
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-icon-container">
                <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="step-title">Source & Verify Suppliers</h3>
              <p className="step-description">Find and validate trusted suppliers for your needs</p>
            </div>

            {/* Step 3 */}
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-icon-container">
                <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="step-title">Quality & Logistics Management</h3>
              <p className="step-description">Ensure quality standards and handle logistics</p>
            </div>

            {/* Step 4 */}
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-icon-container">
                <svg className="step-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="step-title">Delivery & Market Support</h3>
              <p className="step-description">Timely delivery and ongoing market assistance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Network Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Global Network</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Connecting businesses across continents with trusted suppliers and reliable logistics
            </p>
          </div>
          <div className="mb-12">
            <img 
              src="/Gemini_Generated_Image_yhv2ziyhv2ziyhv2.png" 
              alt="Global Network Map showing Shipyon's worldwide presence and connections"
              className="w-full max-w-5xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="mt-16 mb-12 milestone-section">
            <div className="milestone-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4 underline decoration-4 underline-offset-4">Why Shipyon?</h2>
              </div>
              <div className="milestone-timeline">
                {/* Milestone 1 - Domestic + International Reach */}
                <div className="milestone-card blue">
                  <div className="milestone-icon blue">
                    <img 
                      src="/Gemini_Generated_Image_dj4bjgdj4bjgdj4b (1).png" 
                      alt="Milestone 1"
                    />
                  </div>
                  <div className="milestone-year">Domestic+International Reach</div>
                  <div className="milestone-description">Company Founded</div>
                </div>
                
                {/* Connecting Line */}
                <div className="connecting-line"></div>
                
                {/* Milestone 2 - Trusted Partnerships */}
                <div className="milestone-card green">
                  <div className="milestone-icon green">
                    <img 
                      src="/Gemini_Generated_Image_dj4bjgdj4bjgdj4b.png" 
                      alt="Milestone 2"
                    />
                  </div>
                  <div className="milestone-year">Trusted Partnerships</div>
                  <div className="milestone-description">Global Expansion</div>
                </div>
                
                {/* Connecting Line */}
                <div className="connecting-line"></div>
                
                {/* Milestone 3 - Scalable Supply */}
                <div className="milestone-card purple">
                  <div className="milestone-icon purple">
                    <img 
                      src="/icon_2.png" 
                      alt="Milestone 3"
                    />
                  </div>
                  <div className="milestone-year">Scalable Supply</div>
                  <div className="milestone-description">Quality Certification</div>
                </div>
                
                {/* Connecting Line */}
                <div className="connecting-line"></div>
                
                {/* Milestone 4 - Quality Assurance */}
                <div className="milestone-card orange">
                  <div className="milestone-icon orange">
                    <img 
                      src="/icon_3.png" 
                      alt="Milestone 4"
                    />
                  </div>
                  <div className="milestone-year">Quality Accuranc</div>
                  <div className="milestone-description">Market Leadership</div>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal Line below Milestone Section */}
          <div className="max-w-5xl mx-auto mt-8">
            <hr className="border-gray-300" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive agricultural export solutions to help your business thrive
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 border border-gray-200 rounded-lg bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Sourcing</h3>
              <p className="text-gray-600">Direct sourcing of high-quality agricultural products from trusted South Indian producers</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Export Logistics</h3>
              <p className="text-gray-600">Complete logistics solutions for seamless international shipping and delivery</p>
            </div>
            <div className="text-center p-6 border border-gray-200 rounded-lg bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h3>
              <p className="text-gray-600">Rigorous testing and certification to ensure premium quality standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Streamlined approach to ensure quality and efficiency in every export
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}