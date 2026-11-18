import { useState, useEffect, useRef } from 'react'
import '../styles/artists.css'

const artists = [
  {
    id: 1,
    name: 'Arjun Kanungo',
    role: 'Headliner — Pop / Electronic',
    bio: 'Chart-topping vocalist known for electrifying live sets that blur the line between pop and electronic music, with over 500 million streams worldwide.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
    number: '01'
  },
  {
    id: 2,
    name: 'Priya Ragu',
    role: 'Featured — R&B / Soul',
    bio: 'Boundary-breaking artist fusing Tamil heritage with contemporary R&B, crowned one of the year’s best by Rolling Stone and BBC Radio.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80',
    number: '02'
  },
  {
    id: 3,
    name: 'Rajakumari',
    role: 'Featured — Hip-Hop / Rap',
    bio: 'Grammy-nominated rapper and songwriter with fierce lyricism, chart-topping anthems, and high-octane stage presence.',
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900&q=80',
    number: '03'
  },
  {
    id: 4,
    name: 'Dhruv Visvanath',
    role: 'Featured — Acoustic / Singer-Songwriter',
    bio: 'Award-winning multi-instrumentalist whose percussive guitar style captivates audiences across four continents.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80',
    number: '04'
  },
]

export default function Artists() {
  const containerRef = useRef(null)
  const [activeArtistIndex, setActiveArtistIndex] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const totalDist = el.offsetHeight - window.innerHeight
      if (totalDist <= 0) return
      const currentScroll = -rect.top
      const progress = Math.min(Math.max(currentScroll / totalDist, 0), 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Transition threshold: progress < 0.32 is Phase 1 (Logo center), >= 0.32 is Phase 2 (Artists showcase)
  const isArtistsPhase = scrollProgress >= 0.32
  const activeArtist = artists[activeArtistIndex]

  return (
    <section className="artists-scroller" id="artists" ref={containerRef}>
      <div className="artists-sticky-stage">
        
        {/* ── PHASE 1: Centered Brand Logo (Transitions down on scroll) ── */}
        <div className={`artist-brand-anchor${isArtistsPhase ? ' is-placed-below' : ' is-centered'}`}>
          <div className="artist-brand-anchor__eyebrow-wrap">
            <span className="artist-brand-anchor__line" />
            <p className="artist-brand-anchor__kicker">THE LINEUP</p>
            <span className="artist-brand-anchor__line" />
          </div>

          <div className="artist-brand-anchor__logo-wrap">
            <h2 className="artist-brand-anchor__title gold-gradient-text">Novera</h2>
            
            {/* Golden Orbit with Star Sparkle */}
            <svg
              className="artist-brand-anchor__orbit-svg"
              viewBox="0 0 520 260"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="orbitGradArtist" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#ca9846" stopOpacity="0.2" />
                  <stop offset="30%" stopColor="#e5b364" stopOpacity="0.85" />
                  <stop offset="65%" stopColor="#fff5db" stopOpacity="1" />
                  <stop offset="100%" stopColor="#e5b364" stopOpacity="0.75" />
                </linearGradient>
                <filter id="starGlowArtist" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d="M 50 190 C 15 130, 70 85, 175 165 C 295 255, 455 200, 480 110 C 495 55, 430 75, 370 95"
                stroke="url(#orbitGradArtist)"
                strokeWidth="2.4"
                strokeLinecap="round"
              />

              <g transform="translate(476, 92) scale(1.15)" filter="url(#starGlowArtist)">
                <path
                  d="M 0,-18 Q 1.5,-3 16,0 Q 1.5,3 0,18 Q -1.5,3 -16,0 Q -1.5,-3 0,-18 Z"
                  fill="#ffffff"
                />
                <circle cx="0" cy="0" r="3.2" fill="#ffe7a8" />
              </g>
            </svg>
          </div>

          <p className="artist-brand-anchor__subtitle">FOUR ARTISTS &bull; ONE STAGE</p>
        </div>

        {/* ── PHASE 2: 4 Black & White Artists with Hover-to-Color & Spotlight ── */}
        <div className={`artists-content${isArtistsPhase ? ' is-visible' : ' is-hidden'}`}>
          <div className="artists-header-pill">
            <span className="artists-header-pill__dot" />
            <span>FEATURED ARTISTS</span>
          </div>

          {/* 4 Black and White Artist Photo Cards */}
          <div className="artists-photos-row" role="list" aria-label="Artists Lineup">
            {artists.map((artist, idx) => {
              const isSelected = activeArtistIndex === idx
              return (
                <div
                  key={artist.id}
                  className={`artist-photo-card${isSelected ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveArtistIndex(idx)}
                  onClick={() => setActiveArtistIndex(idx)}
                  role="listitem"
                  tabIndex={0}
                  onFocus={() => setActiveArtistIndex(idx)}
                  aria-label={artist.name}
                >
                  <div className="artist-photo-card__frame">
                    <img
                      src={artist.img}
                      alt={artist.name}
                      className="artist-photo-card__img"
                      loading="lazy"
                    />
                    <div className="artist-photo-card__overlay" />
                    <span className="artist-photo-card__badge">{artist.number}</span>
                  </div>

                  {/* Card Bottom Tag */}
                  <div className="artist-photo-card__name-tag">
                    <span>{artist.name}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Artist Spotlight Information Below */}
          <div className="artist-spotlight" key={activeArtist.id}>
            <div className="artist-spotlight__bar" />
            <h3 className="artist-spotlight__name gold-gradient-text">
              {activeArtist.name}
            </h3>
            <p className="artist-spotlight__role">
              {activeArtist.role}
            </p>
            <p className="artist-spotlight__bio">
              {activeArtist.bio}
            </p>
          </div>
        </div>

        {/* Subtle Phase Indicator Dots */}
        <div className="artists-phase-indicators" aria-hidden="true">
          <span className={`phase-dot${!isArtistsPhase ? ' phase-dot--active' : ''}`} />
          <span className={`phase-dot${isArtistsPhase ? ' phase-dot--active' : ''}`} />
        </div>

      </div>
    </section>
  )
}
