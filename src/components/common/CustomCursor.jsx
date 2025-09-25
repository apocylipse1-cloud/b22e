import React, { useEffect, useRef } from 'react'

const CustomCursor = () => {
  const cursorRef = useRef(null)
  const isTouch = useRef(false)

  useEffect(() => {
    // Check if device supports touch
    isTouch.current = 'ontouchstart' in window || navigator.maxTouchPoints > 0

    // Don't show custom cursor on touch devices
    if (isTouch.current) return

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0

    const updateCursor = () => {
      // Smooth cursor following with slight lag
      cursorX += (mouseX - cursorX) * 0.15
      cursorY += (mouseY - cursorY) * 0.15
      
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      requestAnimationFrame(updateCursor)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const handleMouseEnter = (e) => {
      const target = e.target
      const isInteractive = target.matches('a, button, input, textarea, select, [role="button"], .interactive, .btn-pill, .glass-hover, .hover-lift')
      
      if (isInteractive) {
        cursor.classList.add('hover')
      }
    }

    const handleMouseLeave = (e) => {
      const target = e.target
      const isInteractive = target.matches('a, button, input, textarea, select, [role="button"], .interactive, .btn-pill, .glass-hover, .hover-lift')
      
      if (isInteractive) {
        cursor.classList.remove('hover')
      }
    }

    // Initialize cursor position
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter, true)
    document.addEventListener('mouseleave', handleMouseLeave, true)
    
    // Start animation loop
    updateCursor()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter, true)
      document.removeEventListener('mouseleave', handleMouseLeave, true)
    }
  }, [])

  // Don't render on touch devices
  if (isTouch.current) return null

  return <div ref={cursorRef} className="custom-cursor" />
}

export default CustomCursor