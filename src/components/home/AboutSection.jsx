import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const AboutSection = () => {
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    // Enhanced parallax zoom effect for image
    gsap.to(imageRef.current, {
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    })
  })

  return (
    <section id="about" ref={sectionRef} className='min-h-screen section-dark-alt text-white relative depth-3 section-transition parallax-container'>
      <div className="cinematic-overlay-animated"></div>
      <div className='container mx-auto section-padding'>
        <div className='text-center component-margin space-y-4 sm:space-y-6 lg:space-y-8'>
          <h2 className='fade-up font-[font2] heading-responsive-xl uppercase mb-4 sm:mb-6 lg:mb-8 leading-tight text-layer-3 text-glow-strong'>
            About Us
          </h2>
        </div>

        <div className='max-width-wide'>
          <div className='glass-luxury mb-12 sm:mb-16 hover-lift'>
            <div className='split-scroll items-center'>
            {/* Story Content */}
              <div className='split-scroll-text space-y-6 sm:space-y-8 order-2 lg:order-1'>
                <h3 className='font-[font2] heading-responsive-lg uppercase text-[#D3FD50] mb-4 sm:mb-6 text-layer-2 text-glow-strong'>
                Our Story
                </h3>
                <p className='font-[font1] text-responsive leading-relaxed text-layer-1 fade-up'>
                For 7 years, we’ve dedicated ourselves to transforming weddings into cinematic stories. With equal parts craft and heart, we create films that feel as real as the moments themselve, memories designed to last a lifetime.
                </p>
                <div className='floating-quote fade-up'>
                  <p className='font-[font1] text-responsive leading-relaxed text-layer-2 italic'>
              "Our approach is simple,  to be present, to listen, and to see your day as you live it. With equal parts skill and sensitivity, we create films that feel real, timeless, and true to you."
                  </p>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className='split-scroll-image order-1 lg:order-2'>
                <div className='aspect-square rounded-2xl sm:rounded-3xl overflow-hidden glass-luxury gpu-accelerated hover-lift'>
                <img 
                  ref={imageRef}
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop"
                  alt="Our Team in Action"
                    className='w-full h-full object-cover transition-transform duration-1000 lazy-image will-change-transform'
                    loading="lazy"
                    onLoad={(e) => e.target.classList.add('loaded')}
                />
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className='responsive-grid-3 grid-stagger'>
            <div className='text-center space-y-4'>
              <div className='glass-luxury service-card space-y-4 sm:space-y-6'>
                <div className='text-fluid-5xl mb-3 sm:mb-4 glow-luxury glow-pulse'>🎯</div>
                <h4 className='font-[font2] text-fluid-xl uppercase text-layer-2 font-bold'>
                Vision
                </h4>
                <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
              We want every wedding film to feel like a piece of your story.  real, timeless, and full of love.
                </p>
                <div className="divider-luxury"></div>
              </div>
            </div>

            <div className='text-center space-y-4'>
              <div className='glass-luxury service-card space-y-4 sm:space-y-6'>
                <div className='text-fluid-5xl mb-3 sm:mb-4 glow-luxury glow-pulse'>💎</div>
                <h4 className='font-[font2] text-fluid-xl uppercase text-layer-2 font-bold'>
                Mission
                </h4>
                <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
              Our goal is simple: to give you memories that feel alive, not staged. Films that make you feel the day all over again.
                </p>
                <div className="divider-luxury"></div>
              </div>
            </div>

            <div className='text-center space-y-4'>
              <div className='glass-luxury service-card space-y-4 sm:space-y-6'>
                <div className='text-fluid-5xl mb-3 sm:mb-4 glow-luxury glow-pulse'>⚡</div>
                <h4 className='font-[font2] text-fluid-xl uppercase text-layer-2 font-bold'>
                Values
                </h4>
                <p className='font-[font1] text-responsive leading-relaxed text-layer-1'>
              We stay true to what’s real. We create with heart and imagination. And we give our very best, every single time.
                </p>
                <div className="divider-luxury"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection