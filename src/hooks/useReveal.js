import { useEffect, useRef, useState } from 'react'

/**
 * Triggers `is-visible` class when the element enters the viewport.
 * Once visible, it stays visible (no re-trigger).
 */
export default function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...options }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible]
}
