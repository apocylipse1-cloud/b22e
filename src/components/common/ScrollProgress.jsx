import React, { useEffect, useRef } from 'react'

const ScrollProgress = () => {
  const progressRef = useRef(null)

  useEffect(() => {
    const progress = progressRef.current
    if (!progress) return

    const updateProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / scrollHeight) * 100
      
      progress.style.width = `${Math.min(scrollPercent, 100)}%`
    }

    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Initial update
    updateProgress()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return <div ref={progressRef} className="scroll-progress" />
}

export default ScrollProgress