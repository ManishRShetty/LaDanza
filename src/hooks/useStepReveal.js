import { useEffect, useRef, useState } from 'react'

/**
 * Activates/deactivates a step element based on scroll position.
 * Re-triggers when scrolling back up.
 */
export default function useStepReveal(options = {}) {
  const ref = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setActive(entry.isIntersecting)
      },
      { threshold: 0.4, rootMargin: '-10% 0px -10% 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, active]
}
