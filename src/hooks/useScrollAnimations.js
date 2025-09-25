import { useEffect, useRef } from 'react'

export const useScrollAnimations = () => {
  const observerRef = useRef(null)

  useEffect(() => {
    // Create intersection observer for scroll animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            
            // Add animate class to trigger CSS animations
            target.classList.add('animate')
            
            // Handle specific animation types
            if (target.classList.contains('fade-up-stagger')) {
              // Stagger animation for child elements
              const children = target.children
              Array.from(children).forEach((child, index) => {
                setTimeout(() => {
                  child.classList.add('animate')
                }, index * 100)
              })
            }
            
            if (target.classList.contains('grid-stagger')) {
              // Grid stagger animation
              target.classList.add('animate')
            }
            
            if (target.classList.contains('count-up')) {
              // Trigger count-up animation
              target.classList.add('animate')
            }
            
            // Unobserve after animation triggers (one-time animation)
            observerRef.current?.unobserve(target)
          }
        })
      },
      {
        threshold: 0.2, // Trigger when 20% of element is visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before element comes into view
      }
    )

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
      '.fade-up, .fade-up-stagger, .scale-in, .slide-in-left, .slide-in-right, .grid-stagger, .count-up'
    )
    
    animatedElements.forEach((el) => {
      observerRef.current?.observe(el)
    })

    return () => {
      observerRef.current?.disconnect()
    }
  }, [])

  return observerRef
}

export const useParallax = () => {
  useEffect(() => {
    let ticking = false

    const updateParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      
      parallaxElements.forEach((element) => {
        const speed = parseFloat(element.dataset.parallax) || 0.5
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
      
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax)
        ticking = true
      }
    }

    // Only enable parallax on non-touch devices for better performance
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (!isTouch) {
      window.addEventListener('scroll', handleScroll, { passive: true })
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
}

export const useCountUp = (target, duration = 2000) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const startValue = 0
            const endValue = target
            const startTime = performance.now()

            const updateCount = (currentTime) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / duration, 1)
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutQuart)
              
              element.textContent = currentValue.toLocaleString()
              
              if (progress < 1) {
                requestAnimationFrame(updateCount)
              } else {
                element.textContent = endValue.toLocaleString()
                element.classList.add('animate')
              }
            }

            requestAnimationFrame(updateCount)
            observer.unobserve(element)
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [target, duration])

  return elementRef
}