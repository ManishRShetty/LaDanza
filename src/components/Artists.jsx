import { useState, useEffect, useRef } from 'react'
import '../styles/artists.css'

// ── The Single Performing Band & its Member Artists ──
const bandInfo = {
  name: 'THE VELVET SYNDICATE',
  tagline: 'OFFICIAL HEADLINING BAND',
  genre: 'Alternative Rock • Neo-Fusion • Symphony',
}

const bandMembers = [
  {
    id: 1,
    name: 'Kabir Sen',
    role: 'Lead Vocals & Frontman',
    bio: 'Commanding frontman known for powerful vocal range, raw emotional anthems, and magnetic stage storytelling that connects with every corner of the arena.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    number: '01',
    instrument: 'Vocals',
  },
  {
    id: 2,
    name: 'Aarav Mehta',
    role: 'Lead Guitar & Backing Vocals',
    bio: 'Virtuoso guitarist crafting atmospheric soundscapes and explosive solos, blending melodic rock riffs with intricate acoustic fingerstyle.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    number: '02',
    instrument: 'Lead Guitar',
  },
  {
    id: 3,
    name: 'Rhea Kapoor',
    role: 'Bass Guitar & Synthesizers',
    bio: 'The rhythmic architect of the band, driving deep groove basslines and hypnotic synth textures that give the band its distinctive sonic weight.',
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    number: '03',
    instrument: 'Bass & Synth',
  },
  {
    id: 4,
    name: 'Dev Malhotra',
    role: 'Drums & Percussion',
    bio: 'Dynamic percussionist delivering stadium-shaking drum beats, blending heavy rhythmic drive with subtle polyrhythmic nuances.',
    img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800&q=80',
    number: '04',
    instrument: 'Drums',
  },
]

export default function Artists() {
  const containerRef = useRef(null)
  const [activeMemberIndex, setActiveMemberIndex] = useState(0)
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

  // Progress < 0.32: Phase 1 (Band Logo Center) -> Progress >= 0.32: Phase 2 (Logo anchors below + Member Silhouettes arrive)
  const isMembersPhase = scrollProgress >= 0.32
  const activeMember = bandMembers[activeMemberIndex]

  return (
    <section className="artists-scroller" id="artists" ref={containerRef}>
      <div className="artists-sticky-stage">
        
        {/* ── PHASE 1: Band's Own Logo & Crest (Not the event logo) ── */}
        <div className={`band-logo-anchor${isMembersPhase ? ' is-placed-below' : ' is-centered'}`}>
          <div className="band-logo-anchor__eyebrow-wrap">
            <span className="band-logo-anchor__line" />
            <p className="band-logo-anchor__kicker">LIVE PERFORMANCE BY</p>
            <span className="band-logo-anchor__line" />
          </div>

          <div className="band-logo-anchor__logo-wrap">
            {/* Band Emblem Crest */}
            <div className="band-logo-anchor__emblem" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" className="band-crest-svg">
                <circle cx="50" cy="50" r="46" stroke="url(#crestGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="38" stroke="url(#crestGrad)" strokeWidth="1.2" />
                <path d="M 50 18 L 62 42 L 50 48 L 38 42 Z" fill="url(#crestGrad)" opacity="0.85" />
                <path d="M 50 82 L 62 58 L 50 52 L 38 58 Z" fill="url(#crestGrad)" opacity="0.85" />
                <circle cx="50" cy="50" r="5" fill="#ffffff" />
                <defs>
                  <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#e5b364" />
                    <stop offset="100%" stopColor="#9e6c27" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Band Name Typography */}
            <h2 className="band-logo-anchor__name gold-gradient-text">
              {bandInfo.name}
            </h2>
          </div>

          <p className="band-logo-anchor__tagline">
            {bandInfo.tagline} &bull; {bandInfo.genre}
          </p>
        </div>

        {/* ── PHASE 2: Band Member Paper-Cut Silhouettes (No background, B&W -> Hover Color) ── */}
        <div className={`band-members-content${isMembersPhase ? ' is-visible' : ' is-hidden'}`}>
          <div className="band-members-pill">
            <span className="band-members-pill__dot" />
            <span>BAND LINEUP &bull; 4 PERFORMERS</span>
          </div>

          {/* 4 Member Paper-Cut / Cutout Silhouettes */}
          <div className="band-members-row" role="list" aria-label="Band Members">
            {bandMembers.map((member, idx) => {
              const isSelected = activeMemberIndex === idx
              return (
                <div
                  key={member.id}
                  className={`member-silhouette-item${isSelected ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveMemberIndex(idx)}
                  onClick={() => setActiveMemberIndex(idx)}
                  role="listitem"
                  tabIndex={0}
                  onFocus={() => setActiveMemberIndex(idx)}
                  aria-label={member.name}
                >
                  {/* Silhouette Cutout Figure (No boxy background, paper-cut contour) */}
                  <div className="member-silhouette-figure">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="member-silhouette-img"
                      loading="lazy"
                    />
                    <div className="member-silhouette-aura" />
                  </div>

                  {/* Member Role Pill under silhouette */}
                  <div className="member-silhouette-tag">
                    <span className="member-silhouette-num">{member.number}</span>
                    <span className="member-silhouette-label">{member.name}</span>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Active Member Spotlight Information Displayed Below */}
          <div className="member-spotlight" key={activeMember.id}>
            <div className="member-spotlight__bar" />
            <h3 className="member-spotlight__name gold-gradient-text">
              {activeMember.name}
            </h3>
            <p className="member-spotlight__role">
              {activeMember.role} &bull; {activeMember.instrument}
            </p>
            <p className="member-spotlight__bio">
              {activeMember.bio}
            </p>
          </div>
        </div>

        {/* Subtle Scrollytelling Phase Indicator Dots */}
        <div className="artists-phase-indicators" aria-hidden="true">
          <span className={`phase-dot${!isMembersPhase ? ' phase-dot--active' : ''}`} />
          <span className={`phase-dot${isMembersPhase ? ' phase-dot--active' : ''}`} />
        </div>

      </div>
    </section>
  )
}
