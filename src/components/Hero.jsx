import { useEffect, useRef } from 'react'
import RevealUp from './RevealUp'
import '../styles/hero.css'

export default function Hero({ ready = true }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (el) {
      requestAnimationFrame(() => el.classList.add('is-visible'))
    }
  }, [])

  return (
    <section
      className={`hero${ready ? ' hero--ready' : ''}`}
      id="hero"
      ref={sectionRef}
    >
      {/* Background Concert Crowd & Overlays */}
      <div className="hero__bg">
        <img
          src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1400&q=80"
          alt="Concert stage and crowd"
          className="hero__img"
        />
        <div className="hero__overlay" />

        {/* Overhead Spotlights */}
        <div className="hero__spotlights" aria-hidden="true">
          <div className="hero__spotlight hero__spotlight--left" />
          <div className="hero__spotlight hero__spotlight--center" />
          <div className="hero__spotlight hero__spotlight--right" />
        </div>
      </div>

      {/* Golden Wave Lines — Top Left */}
      <svg
        className="hero__waves hero__waves--top"
        viewBox="0 0 320 320"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d696" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ca9846" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7a4f15" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M -40 220 C 40 180, 140 110, 160 -40" stroke="url(#waveGradTop)" strokeWidth="1.2" />
        <path d="M -30 235 C 55 190, 155 120, 175 -30" stroke="url(#waveGradTop)" strokeWidth="1" />
        <path d="M -20 250 C 70 200, 170 130, 190 -20" stroke="url(#waveGradTop)" strokeWidth="0.9" />
        <path d="M -10 265 C 85 210, 185 140, 205 -10" stroke="url(#waveGradTop)" strokeWidth="0.8" />
        <path d="M 0 280 C 100 220, 200 150, 220 0" stroke="url(#waveGradTop)" strokeWidth="0.7" />
        <path d="M 15 295 C 115 230, 215 160, 235 15" stroke="url(#waveGradTop)" strokeWidth="0.6" />
        <path d="M 30 310 C 130 240, 230 170, 250 30" stroke="url(#waveGradTop)" strokeWidth="0.5" />
      </svg>

      {/* Golden Wave Lines — Bottom Right */}
      <svg
        className="hero__waves hero__waves--bottom"
        viewBox="0 0 320 320"
        fill="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="waveGradBottom" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f5d696" stopOpacity="0.75" />
            <stop offset="50%" stopColor="#ca9846" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#7a4f15" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 360 100 C 280 140, 180 210, 160 360" stroke="url(#waveGradBottom)" strokeWidth="1.2" />
        <path d="M 350 85 C 265 130, 165 200, 145 350" stroke="url(#waveGradBottom)" strokeWidth="1" />
        <path d="M 340 70 C 250 120, 150 190, 130 340" stroke="url(#waveGradBottom)" strokeWidth="0.9" />
        <path d="M 330 55 C 235 110, 135 180, 115 330" stroke="url(#waveGradBottom)" strokeWidth="0.8" />
        <path d="M 320 40 C 220 100, 120 170, 100 320" stroke="url(#waveGradBottom)" strokeWidth="0.7" />
        <path d="M 305 25 C 205 90, 105 160, 85 305" stroke="url(#waveGradBottom)" strokeWidth="0.6" />
        <path d="M 290 10 C 190 80, 90 150, 70 290" stroke="url(#waveGradBottom)" strokeWidth="0.5" />
      </svg>

      <div className="hero__content">
        {/* Eyebrow with gold horizontal framing lines */}
        <div className="hero__eyebrow-container hero__blur-stage hero__blur-stage--1">
          <span className="hero__eyebrow-line" />
          <p className="hero__eyebrow">A LIVE STUDENT EXPERIENCE</p>
          <span className="hero__eyebrow-line" />
        </div>

        {/* Center Title with Golden Swoosh Orbit & Sparkle Stars */}
        <div className="hero__title-container hero__blur-stage hero__blur-stage--2">
          <h1 className="hero__title gold-gradient-text">Novera</h1>

          {/* Ambient Radial Golden Bloom */}
          <div className="hero__ambient-glow" aria-hidden="true" />

          {/* Sweeping Golden Orbit with 4-Point Star Sparkle */}
          <svg
            className="hero__orbit-svg"
            viewBox="0 0 520 260"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="orbitGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ca9846" stopOpacity="0.2" />
                <stop offset="30%" stopColor="#e5b364" stopOpacity="0.85" />
                <stop offset="65%" stopColor="#fff5db" stopOpacity="1" />
                <stop offset="100%" stopColor="#e5b364" stopOpacity="0.75" />
              </linearGradient>

              <filter id="starGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Main swoosh loop framing Novera */}
            <path
              className="hero__orbit-path"
              d="M 50 190 C 15 130, 70 85, 175 165 C 295 255, 455 200, 480 110 C 495 55, 430 75, 370 95"
              stroke="url(#orbitGrad)"
              strokeWidth="2.4"
              strokeLinecap="round"
            />

            {/* Radiant 4-point star on the top-right orbit peak */}
            <g className="hero__star-burst hero__star-burst--primary" transform="translate(476, 92)" filter="url(#starGlow)">
              <path
                d="M 0,-18 Q 1.5,-3 16,0 Q 1.5,3 0,18 Q -1.5,3 -16,0 Q -1.5,-3 0,-18 Z"
                fill="#ffffff"
              />
              <circle cx="0" cy="0" r="3.2" fill="#ffe7a8" />
            </g>

            {/* Secondary delicate sparkle on bottom left */}
            <g className="hero__star-burst hero__star-burst--secondary" transform="translate(62, 175)" filter="url(#starGlow)">
              <path
                d="M 0,-14 Q 1,-2 12,0 Q 1,2 0,14 Q -1,2 -12,0 Q -1,-2 0,-14 Z"
                fill="#ffe6a8"
              />
            </g>
          </svg>
        </div>

        {/* Subtitle Pillars: DREAM • CONNECT • CELEBRATE */}
        <p className="hero__pillars hero__blur-stage hero__blur-stage--3">
          DREAM <span className="hero__pillar-dot">&bull;</span> CONNECT{' '}
          <span className="hero__pillar-dot">&bull;</span> CELEBRATE
        </p>

        {/* Luminous Glowing Capsule Button: GET YOUR PASS > */}
        <div className="hero__btn-wrapper hero__blur-stage hero__blur-stage--4">
          <a href="#tickets" className="hero__btn-pass">
            <span className="hero__btn-label">GET YOUR PASS</span>
            <svg
              className="hero__btn-chevron"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
            {/* Bottom Lens Flare Point */}
            <span className="hero__btn-flare" aria-hidden="true" />
          </a>
        </div>
      </div>

      {/* Bottom Scroll Cue with Slender Down Arrow */}
      <div className="hero__scroll-cue hero__blur-stage hero__blur-stage--5" aria-hidden="true">
        <span>SCROLL</span>
        <svg
          className="hero__scroll-arrow"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="7 10 12 15 17 10" />
        </svg>
      </div>
    </section>
  )
}
