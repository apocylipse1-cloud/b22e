import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const ServicesSection = () => {
  const sectionRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  const services = [
    {
      icon: '🎬',
      title: 'Wedding Cinematography',
      description: 'Cinematic storytelling that captures every precious moment of your special day with artistic flair.',
      features: ['4K Ultra HD', 'Drone Footage', 'Multiple Angles', 'Same-Day Highlights']
    },
    {
      icon: '📸',
      title: 'Photography',
      description: 'Professional wedding photography that preserves memories with stunning visual artistry.',
      features: ['High Resolution', 'RAW Processing', 'Quick Turnaround', 'Online Gallery']
    },
    {
      icon: '✂️',
      title: 'Post-Production',
      description: 'Expert editing and color grading to transform raw footage into cinematic masterpieces.',
      features: ['Color Grading', 'Audio Enhancement', 'Motion Graphics', 'Custom Music']
    },
    {
      icon: '🎵',
      title: 'Live Streaming',
      description: 'Share your special moments with loved ones who cannot attend in person.',
      features: ['HD Quality', 'Multiple Cameras', 'Real-time Streaming', 'Recording Included']
    }
  ]

  return (
    <section id="services" ref={sectionRef} className='min-h-screen section-dark-alt text-white relative depth-3 section-transition parallax-container'>
      <div className="cinematic-overlay-animated"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-luxury opacity-30"></div>
      
      <div className='container mx-auto section-padding'>
        <div className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
          <h2 className='fade-up font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow-strong'>
            Services
          </h2>
          <div className='glass-luxury max-width-content fade-up hover-lift'>
            <p className='font-[font1] text-responsive leading-relaxed text-layer-2'>
            Everything you need to relive your wedding. beautifully filmed, thoughtfully crafted, and made just for you.
            </p>
          </div>
        </div>

        <div className='responsive-grid-2 max-width-wide grid-stagger'>
          {services.map((service, index) => (
            <div 
              key={index}
              className='service-card group glass-luxury gpu-accelerated hover-lift'
            >
              <div className='text-fluid-6xl mb-6 sm:mb-8 glow-luxury glow-pulse'>
                {service.icon}
              </div>
              
              <div className='space-y-4 sm:space-y-6 mb-6 sm:mb-8'>
                <h3 className='font-[font2] heading-responsive-md uppercase text-layer-2 font-bold'>
                  {service.title}
                </h3>
                <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                  {service.description}
                </p>
              </div>

              <ul className='space-y-2 sm:space-y-3 mb-6 sm:mb-8'>
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className='flex items-center font-[font1] text-sm sm:text-base text-layer-1'>
                    <span className='w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-[#D3FD50] to-[#b8e03e] rounded-full mr-3 sm:mr-4 glow-luxury flex-shrink-0'></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="divider-luxury"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection