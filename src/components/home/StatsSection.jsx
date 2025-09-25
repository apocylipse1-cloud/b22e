import React, { useRef, useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useCountUp } from '../../hooks/useScrollAnimations'

const StatsSection = () => {
  const sectionRef = useRef(null)
  
  // Configurable stats data for easy editing
  const statsData = [
    {
      number: 2000,
      suffix: '+',
      label: 'Wedding projects completed',
      icon: '💍'
    },
    {
      number: 150,
      suffix: '+',
      label: 'Happy Videographers',
      icon: '🎥'
    },
    {
      number: 8,
      suffix: '',
      label: 'Editors in our team',
      icon: '✂️'
    },
    {
      number: 7,
      suffix: ' yrs',
      label: 'Post-production experience',
      icon: '🏆'
    }
  ]

  // Create refs for each counter
  const counter1Ref = useCountUp(statsData[0].number, 2500)
  const counter2Ref = useCountUp(statsData[1].number, 2000)
  const counter3Ref = useCountUp(statsData[2].number, 1500)
  const counter4Ref = useCountUp(statsData[3].number, 1800)
  
  const counterRefs = [counter1Ref, counter2Ref, counter3Ref, counter4Ref]

  gsap.registerPlugin(ScrollTrigger)

  return (
    <section id="stats" ref={sectionRef} className='min-h-screen section-dark text-white relative depth-3 section-transition parallax-container'>
      <div className="cinematic-overlay-animated"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-luxury opacity-20"></div>
      
      <div className='container mx-auto section-padding'>
        {/* Section Header */}
        <div className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
          <h2 className='fade-up font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow-strong'>
            A Few Stats About Us
          </h2>
        </div>

        {/* Stats Grid */}
        <div className='responsive-grid-2 max-width-content grid-stagger'>
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className='group glass-luxury text-center gpu-accelerated hover-lift'
            >
              {/* Icon */}
              <div className='text-fluid-6xl mb-6 sm:mb-8 glow-luxury glow-pulse'>
                {stat.icon}
              </div>
              
              {/* Number */}
              <div className='mb-4 sm:mb-6'>
                <span 
                  ref={counterRefs[index]}
                  className='count-up font-[font2] text-fluid-5xl text-layer-2 glow-luxury text-glow-strong font-bold' 
                  style={{background: 'none', backgroundColor: 'transparent'}}
                >
                  {stat.number.toLocaleString()}
                </span>
                <span className='font-[font2] text-fluid-4xl text-layer-2 glow-luxury text-glow-strong font-bold' style={{background: 'none', backgroundColor: 'transparent'}}>
                  {stat.suffix}
                </span>
              </div>
              
              {/* Label */}
              <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
                {stat.label}
              </p>

              {/* Hover accent line */}
              <div className="divider-luxury mt-6 sm:mt-8"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection