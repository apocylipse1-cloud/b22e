import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { Link } from 'react-router-dom'

const Footer = () => {
  const footerRef = useRef(null)
  const logoRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Logo shimmer animation
    gsap.to(logoRef.current, {
      backgroundPosition: '200% center',
      duration: 3,
      ease: 'none',
      repeat: -1
    })
  })

  const quickLinks = [
    { name: 'Contact', href: '#contact' },
    { name: 'Privacy Policy', href: '#privacy' },
    { name: 'Terms & Conditions', href: '#terms' },
    { name: 'Affiliates', href: '#affiliates' }
  ]

  return (
    <footer ref={footerRef} className='section-dark text-white relative depth-3 parallax-container'>
      <div className="cinematic-overlay-animated"></div>
      <div className='container mx-auto section-padding'>
        {/* Main CTA Section */}
        <div className='text-center component-margin fade-up'>
          <div className='glass-luxury space-y-6 sm:space-y-8 hover-lift'>
            <h2 className='font-[font2] text-fluid-7xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow-strong font-bold'>
            Let's Talk About Your Project
            </h2>
            <div className='flex justify-center'>
              <Link 
                to="/contact"
                className='btn-pill btn-primary h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-12 group hover-lift inline-flex items-center justify-center'
              >
                <span className='font-[font2] text-fluid-lg'>
                Inquire Now
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Information Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 mb-12 sm:mb-16 grid-stagger'>
          {/* Quick Links */}
          <div className='glass-luxury space-y-4 sm:space-y-6 hover-lift'>
            <h3 className='font-[font2] text-fluid-xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow-strong font-bold'>
              Quick Links
            </h3>
            <ul className='space-y-3 sm:space-y-4'>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('portfolio')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className='font-[font1] text-fluid-base text-layer-1 interactive-hover text-left w-full text-left'
                >
                  Our Portfolio
                </button>
              </li>
              <li>
                <Link 
                  to="/contact"
                  className='font-[font1] text-fluid-base text-layer-1 interactive-hover block'
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                  className='font-[font1] text-fluid-base text-layer-1 interactive-hover block'
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service"
                  className='font-[font1] text-fluid-base text-layer-1 interactive-hover block'
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link 
                  to="/affiliate-program"
                  className='font-[font1] text-fluid-base text-layer-1 interactive-hover block'
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Address */}
          <div className='glass-luxury space-y-4 sm:space-y-6 hover-lift'>
            <h3 className='font-[font2] text-fluid-xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow-strong font-bold'>
              Address
            </h3>
            <div className='font-[font1] text-fluid-base text-layer-1 leading-relaxed space-y-1 sm:space-y-2'>
              <p>22 ruelle du Clerc</p>
              <p>59126, Linselles</p>
              <p>(France)</p>
            </div>
          </div>

          {/* Hours of Operation */}
          <div className='glass-luxury space-y-4 sm:space-y-6 hover-lift'>
            <h3 className='font-[font2] text-fluid-xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow-strong font-bold'>
              Hours
            </h3>
            <div className='font-[font1] text-fluid-base text-layer-1 space-y-2 sm:space-y-3'>
              <p>M–F: 9am – 7pm (UTC+1)</p>
              <p>Saturday & Sunday: Closed</p>
            </div>
          </div>

          {/* Contact Information */}
          <div className='glass-luxury space-y-4 sm:space-y-6 hover-lift'>
            <h3 className='font-[font2] text-fluid-xl uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow-strong font-bold'>
              Contact
            </h3>
            <div className='font-[font1] text-fluid-base text-layer-1'>
              <a 
                href="mailto:contact@amouraworks.com"
                target="_blank"
                rel="noopener noreferrer"
                className='interactive-hover break-all sm:break-normal'
              >
                contact@amouraworks.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border Line */}
        <div className='glass-luxury text-center hover-lift fade-up'>
          <div className='text-center flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0'>
            {/* Logo with shimmer effect */}
            <div className='flex items-center space-x-3'>
              <div 
                ref={logoRef}
                className='w-8 h-8 bg-gradient-to-r from-[#D3FD50] via-white to-[#D3FD50] rounded-full flex items-center justify-center text-shimmer'
                style={{
                  backgroundSize: '200% 100%',
                  backgroundPosition: '0% center'
                }}
              >
                <span className='font-[font2] text-black text-sm font-bold'>A</span>
              </div>
              <span className='font-[font2] text-fluid-base text-layer-2 uppercase tracking-wide'>
                Amoura Works
              </span>
            </div>
            
            <p className='font-[font1] text-fluid-sm text-layer-1'>
              ©️ 2025 Amoura Works. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
