import { useEffect, useRef } from 'react'
import RevealUp from './RevealUp'
import '../styles/hero.css'

export default function Hero() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (el) {
      // trigger the Ken Burns zoom-out after mount
      requestAnimationFrame(() => el.classList.add('is-visible'))
    }
  }, [])

  const letters = 'Novera'.split('')

  return (
    <section className="hero" id="hero" ref={sectionRef}>
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&q=80"
          alt=""
          className="hero__img"
        />
        <div className="hero__overlay" />
      </div>

      <div className="hero__content">
        <RevealUp delay={0}>
          <p className="hero__eyebrow">A Live Concert Experience</p>
        </RevealUp>

        <h1 className="hero__title">
          {letters.map((l, i) => (
            <RevealUp key={i} delay={0.1 + i * 0.08} as="span">
              {l}
            </RevealUp>
          ))}
        </h1>

        <RevealUp delay={0.65}>
          <div className="hero__meta">
            <span>18 &mdash; 19 DEC 2026</span>
            <span className="hero__dot" />
            <span>BANGALORE, INDIA</span>
          </div>
        </RevealUp>

        <RevealUp delay={0.8}>
          <a href="#artists" className="btn btn--hero">Explore Lineup</a>
        </RevealUp>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span>Scroll</span>
        <div className="scroll-cue__line" />
      </div>
    </section>
  )
}
