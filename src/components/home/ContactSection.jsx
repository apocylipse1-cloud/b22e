import React, { useRef } from 'react';
import { useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const ContactSection = () => {
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  gsap.registerPlugin(ScrollTrigger);

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/s111khar', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/amouraworks', icon: '📘' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/amouraworks', icon: '💼' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('https://formspree.io/f/mandlzyw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen section-dark text-white relative depth-3 section-transition parallax-container"
    >
      <div className="cinematic-overlay-animated"></div>
      <div className="container mx-auto section-padding">
        <div className="text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8">
          <h2 className="fade-up font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow-strong">
            Get In Touch
          </h2>
          <div className="glass-luxury max-width-content fade-up hover-lift">
            <p className="font-[font1] text-responsive leading-relaxed text-layer-2">
            The first step to your perfect film is a simple hello. Reach out to us today :)
            </p>
          </div>
        </div>

        <div className="responsive-grid-2 max-width-wide">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 slide-in-left">
            <div className="glass-luxury space-y-4 sm:space-y-6 hover-lift">
              <h3 className="font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-layer-2 text-glow-strong font-bold">
                Contact Details
              </h3>
              <div className="space-y-3 sm:space-y-4 font-[font1] text-responsive text-layer-1">
                <p className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <span className="glow-luxury glow-pulse">📧</span>
                  <span className="break-all sm:break-normal">contact@amouraworks.com</span>
                </p>
                <p className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <span className="glow-luxury glow-pulse">📍</span>
                  <span>22 ruelle du Clerc, 59126, Linselles (France)</span>
                </p>
                <p className="flex items-start sm:items-center space-x-3 sm:space-x-4">
                  <span className="glow-luxury glow-pulse">🕒</span>
                  <span>M–F: 9am – 7pm (UTC+1)</span>
                </p>
              </div>
            </div>

            <div className="glass-luxury space-y-4 sm:space-y-6 hover-lift">
              <h3 className="font-[font2] heading-responsive-md uppercase text-[#D3FD50] text-layer-2 text-glow-strong font-bold">
                Follow Us
              </h3>
              <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 glass-luxury rounded-full flex items-center justify-center group hover-lift"
                  >
                    <span className="text-fluid-xl glow-luxury glow-pulse">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-luxury hover-lift">
              <h4 className="font-[font2] text-fluid-xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow-strong font-bold">
                  Quick Response Guarantee
              </h4>
              <p className="font-[font1] text-responsive text-layer-1 leading-relaxed">
                  We respond to all inquiries within 24 hours. Your project deserves our immediate attention.
              </p>
              <div className="divider-luxury mt-4 sm:mt-6"></div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="glass-luxury hover-lift slide-in-right">
            <h3 className="font-[font2] heading-responsive-md uppercase text-[#D3FD50] mb-6 sm:mb-8 lg:mb-10 text-layer-2 text-glow-strong font-bold">
                Quick Inquiry
            </h3>

            {submitStatus === 'success' && (
              <div className='success-state mb-6 sm:mb-8'>
                <p className='font-[font2] text-base sm:text-lg'>
                  Thank you for your inquiry! We will get back to you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className='error-state mb-6 sm:mb-8'>
                <p className='font-[font2] text-base sm:text-lg'>
                  Sorry, there was an error sending your message. Please try again or contact us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 scale-in">
              <div className="form-grid form-grid-2 gap-4 sm:gap-6">
                <div className="input-floating">
                  <input
                    type="text"
                    name="firstName"
                    placeholder=" "
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  <label>First Name *</label>
                </div>
                <div className="input-floating">
                  <input
                    type="text"
                    name="lastName"
                    placeholder=" "
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                  <label>Last Name *</label>
                </div>
              </div>

              <div className="input-floating">
                <input
                  type="email"
                  name="email"
                  placeholder=" "
                  value={formData.email}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
                <label>Email Address *</label>
              </div>

              <div className="input-floating">
                <textarea
                  name="message"
                  placeholder=" "
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  className="w-full input-inset text-white resize-none"
                ></textarea>
                <label>Tell us about your wedding vision... *</label>
              </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-pill btn-primary h-12 sm:h-14 font-[font2] text-fluid-base hover-lift disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
