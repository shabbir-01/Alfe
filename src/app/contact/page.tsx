'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!formData.email || !formData.email.includes('@')) {
      alert('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', comment: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <div 
        style={{ 
          backgroundColor: '#FFFFFF',
          paddingTop: '60px',
          paddingBottom: '60px',
          marginTop: '80px' // Account for fixed navbar
        }}
      >
        <div 
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '0 20px'
          }}
        >
          {/* Title */}
          <h1 
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '32px',
              fontWeight: '600',
              color: '#000000',
              textAlign: 'center',
              marginBottom: '40px'
            }}
          >
            Contact
          </h1>

          {/* Contact Form */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <form 
              onSubmit={handleSubmit}
              style={{
                width: '100%',
                maxWidth: '700px'
              }}
            >
              {/* First Row - Name and Email */}
              <div style={{ 
                display: 'flex', 
                gap: '2%',
                marginBottom: '20px',
                flexWrap: 'wrap'
              }}>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={{
                    width: '48%',
                    height: '50px',
                    border: '1px solid #cccccc',
                    borderRadius: '2px',
                    fontSize: '16px',
                    padding: '12px',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#000000'}
                  onBlur={(e) => e.target.style.borderColor = '#cccccc'}
                />
                
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  style={{
                    width: '48%',
                    height: '50px',
                    border: '1px solid #cccccc',
                    borderRadius: '2px',
                    fontSize: '16px',
                    padding: '12px',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#000000'}
                  onBlur={(e) => e.target.style.borderColor = '#cccccc'}
                />
              </div>

              {/* Second Row - Phone */}
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    height: '50px',
                    border: '1px solid #cccccc',
                    borderRadius: '2px',
                    fontSize: '16px',
                    padding: '12px',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#000000'}
                  onBlur={(e) => e.target.style.borderColor = '#cccccc'}
                />
              </div>

              {/* Third Row - Comment */}
              <div style={{ marginBottom: '30px' }}>
                <textarea
                  name="comment"
                  placeholder="Comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={6}
                  style={{
                    width: '100%',
                    height: '150px',
                    border: '1px solid #cccccc',
                    borderRadius: '2px',
                    fontSize: '16px',
                    padding: '12px',
                    fontFamily: 'var(--font-sans)',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#000000'}
                  onBlur={(e) => e.target.style.borderColor = '#cccccc'}
                />
              </div>

              {/* Submit Button */}
              <div style={{ textAlign: 'left' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '120px',
                    height: '50px',
                    backgroundColor: isSubmitting ? '#333333' : '#000000',
                    color: '#FFFFFF',
                    fontSize: '16px',
                    fontWeight: '500',
                    border: 'none',
                    borderRadius: '0px',
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                    fontFamily: 'var(--font-sans)',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#333333';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = '#000000';
                    }
                  }}
                >
                  {isSubmitting ? 'Sending...' : 'Send'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />

      {/* Mobile Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          form > div:first-child {
            flex-direction: column !important;
            gap: 0 !important;
          }
          
          form > div:first-child > input {
            width: 100% !important;
            margin-bottom: 20px;
          }
          
          form > div:first-child > input:last-child {
            margin-left: 0 !important;
          }
        }
        
        @media (max-width: 480px) {
          h1 {
            font-size: 28px !important;
          }
          
          .form-container {
            padding: 0 15px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;