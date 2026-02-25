import React from 'react';
import '../styles/Services.css';

export default function Services() {
  const process = [
    { step: '01', title: 'Consultation', desc: 'Understand your requirements and market needs' },
    { step: '02', title: 'Sourcing', desc: 'Identify and qualify premium suppliers' },
    { step: '03', title: 'Quality Check', desc: 'Rigorous testing and certification' },
    { step: '04', title: 'Logistics', desc: 'Efficient transportation and delivery' },
    { step: '05', title: 'Delivery', desc: 'Timely delivery to your doorstep' },
    { step: '06', title: 'Support', desc: 'Ongoing customer service and support' }
  ];

  return (
    <div className="min-h-screen services-container">
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
              Our <span className="text-secondary-gold">Services</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto text-gray-100 hero-subtitle">
              Comprehensive agricultural export solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our core services</h2>
          </div>
          <div className="overflow-x-auto">
            <div className="flex gap-8 animate-scroll" style={{ width: 'max-content' }}>
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
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-16 bg-gray-50 w-full">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-600 mb-4">How We Work</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined four-step process ensures efficient and reliable service delivery
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-8">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center max-w-xs bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 hover:bg-blue-200 transition-all duration-300">
                <svg className="w-10 h-10 text-blue-600 hover:text-blue-700 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2v0a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-all duration-300">Identify Requirement</h3>
              <p className="text-sm text-gray-600">Understanding your specific needs and product requirements</p>
            </div>
            
            {/* Arrow 1 */}
            <div className="text-blue-500 hover:text-blue-600 transition-all duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Step 2 */}
            <div className="flex flex-col items-center text-center max-w-xs bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 hover:bg-blue-200 transition-all duration-300">
                <svg className="w-10 h-10 text-blue-600 hover:text-blue-700 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-3L12 11v4H8l-2.644 4A3 3 0 002 20h15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-all duration-300">Source & Verify Suppliers</h3>
              <p className="text-sm text-gray-600">Finding and vetting reliable suppliers and manufacturers</p>
            </div>
            
            {/* Arrow 2 */}
            <div className="text-blue-500 hover:text-blue-600 transition-all duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Step 3 */}
            <div className="flex flex-col items-center text-center max-w-xs bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 hover:bg-blue-200 transition-all duration-300">
                <svg className="w-10 h-10 text-blue-600 hover:text-blue-700 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-all duration-300">Quality & Logistics Management</h3>
              <p className="text-sm text-gray-600">Ensuring quality standards and managing logistics efficiently</p>
            </div>
            
            {/* Arrow 3 */}
            <div className="text-blue-500 hover:text-blue-600 transition-all duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
            
            {/* Step 4 */}
            <div className="flex flex-col items-center text-center max-w-xs bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-xl hover:scale-105 cursor-pointer transition-all duration-300">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4 hover:bg-blue-200 transition-all duration-300">
                <svg className="w-10 h-10 text-blue-600 hover:text-blue-700 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 transition-all duration-300">Delivery & Market Support</h3>
              <p className="text-sm text-gray-600">Timely delivery and ongoing market assistance</p>
            </div>
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
          <div className="grid grid-cols-1 md-grid-cols-2 lg-grid-cols-6 gap-6">
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