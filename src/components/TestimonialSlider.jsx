import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

export default function TestimonialSlider({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const getVisibleTestimonials = () => {
    const visible = [];
    const total = testimonials.length;
    
    for (let i = -1; i <= 1; i++) {
      const index = (currentIndex + i + total) % total;
      visible.push({ ...testimonials[index], position: i });
    }
    
    return visible;
  };

  return (
    <div className="testimonial-slider-container">
      <div className="testimonial-slider">
        <div className="testimonial-track">
          {getVisibleTestimonials().map((testimonial, index) => (
            <div
              key={`${currentIndex}-${index}`}
              className={`testimonial-slide ${testimonial.position === 0 ? 'active' : testimonial.position === -1 ? 'prev' : 'next'}`}
            >
              <div className="testimonial-card">
                <div className="testimonial-image-container">
                  <img 
                    src={`https://picsum.photos/seed/${testimonial.name}/100/100.jpg`}
                    alt={testimonial.name}
                    className="testimonial-image"
                  />
                  <div className="testimonial-quote-icon">
                    <Quote className="w-6 h-6" />
                  </div>
                </div>
                
                <div className="testimonial-content">
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-title">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="slider-nav-btn prev-btn"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          className="slider-nav-btn next-btn"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
