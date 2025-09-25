import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const PricingSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  const pricingPlans = [
    {
      title: 'Essential',
      price: '€1,200',
      subtitle: 'Perfect for intimate ceremonies',
      features: [
        '4-6 hours of coverage',
        '2-3 minute highlight reel',
        'Full ceremony footage',
        'Professional editing',
        'Digital delivery',
        '1 revision included'
      ],
      popular: false
    },
    {
      title: 'Premium',
      price: '€2,500',
      subtitle: 'Our most popular package',
      features: [
        '8-10 hours of coverage',
        '5-7 minute cinematic film',
        'Full ceremony & reception',
        'Drone footage included',
        'Same-day highlights',
        'Professional color grading',
        'Digital + USB delivery',
        '3 revisions included'
      ],
      popular: true
    },
    {
      title: 'Luxury',
      price: '€4,200',
      subtitle: 'Complete wedding documentation',
      features: [
        'Full day coverage (12+ hours)',
        '10-15 minute feature film',
        'Multiple camera angles',
        'Drone & gimbal footage',
        'Same-day highlights',
        'Raw footage access',
        'Custom music licensing',
        'Premium packaging',
        'Unlimited revisions'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" ref={sectionRef} className='min-h-screen section-dark text-white relative depth-3 section-transition parallax-container'>
      <div className="cinematic-overlay-animated"></div>
      <div className='container mx-auto section-padding'>
        <div className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
          <h2 className='fade-up font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow-strong'>
            Pricing
          </h2>
          <div className='glass-luxury max-width-content fade-up hover-lift'>
            <p className='font-[font1] text-responsive leading-relaxed text-layer-2'>
              Choisissez le forfait qui correspond parfaitement à votre vision et à votre budget.
            </p>
          </div>
        </div>

        <div className='responsive-grid-3 max-width-wide grid-stagger'>
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`group glass-luxury gpu-accelerated relative hover-lift ${
                plan.popular ? 'pricing-popular' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full text-fluid-sm font-[font2] uppercase tracking-wide glow-luxury-strong font-bold'>
                  Most Popular
                </div>
              )}
              
              {/* Plan Header */}
              <div className='text-center mb-6 sm:mb-8'>
                <h3 className='font-[font2] heading-responsive-md uppercase text-layer-2 mb-2 sm:mb-3 font-bold'>
                  {plan.title}
                </h3>
                <div className='mb-3 sm:mb-4'>
                  <span className='font-[font2] text-fluid-5xl text-[#D3FD50] glow-luxury text-glow-strong font-bold'>
                    {plan.price}
                  </span>
                </div>
                <p className='font-[font1] text-fluid-base text-layer-1 italic'>
                  {plan.subtitle}
                </p>
              </div>

              {/* Features List */}
              <ul className='space-y-3 sm:space-y-4 mb-8 sm:mb-10 flex-1'>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-start space-x-3 sm:space-x-4'>
                    <span className='w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] rounded-full flex-shrink-0 mt-2 sm:mt-2.5 glow-luxury'></span>
                    <span className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className='text-center'>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className={`w-full btn-pill h-12 sm:h-14 font-[font2] text-fluid-base hover-lift ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'btn-secondary'
                  }`}
                >
                  Get Started
                </button>
              </div>

              {/* Hover accent line */}
              <div className="divider-luxury mt-6 sm:mt-8"></div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className='text-center component-margin'>
          <div className='glass-luxury max-width-content fade-up hover-lift'>
            <p className='font-[font1] text-responsive text-layer-1 mb-4 sm:mb-6'>
              Tous les forfaits incluent une consultation gratuite et un devis personnalisé.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-6 lg:space-x-8'>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <span className='text-fluid-xl glow-luxury glow-pulse'>💎</span>
                <span className='font-[font1] text-sm sm:text-base text-layer-1'>Premium Quality</span>
              </div>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <span className='text-fluid-xl glow-luxury glow-pulse'>⚡</span>
                <span className='font-[font1] text-sm sm:text-base text-layer-1'>Fast Delivery</span>
              </div>
              <div className='flex items-center space-x-2 sm:space-x-3'>
                <span className='text-fluid-xl glow-luxury glow-pulse'>🎯</span>
                <span className='font-[font1] text-sm sm:text-base text-layer-1'>100% Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection