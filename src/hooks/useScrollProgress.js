import { useEffect, useState } from 'react'

/**
 * Returns scroll progress (0-100) and whether user has scrolled past threshold.
 */
export default function useScrollProgress(threshold = 60) {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY
          const docHeight = document.documentElement.scrollHeight - window.innerHeight
          setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0)
          setScrolled(scrollTop > threshold)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return { progress, scrolled }
}
