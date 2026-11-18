import { useState } from 'react'
import RevealUp from './RevealUp'
import '../styles/artists.css'

// ── LaDanza Headlining Superstars ──
const lineupInfo = {
  eyebrow: 'A FICTIONAL MEGA-CONCERT EXPERIENCE',
  title: 'THE HEADLINERS',
  tagline: '5 GLOBAL ICONS • ONE UNFORGETTABLE ARENA NIGHT',
}

const artistsData = [
  {
    id: 1,
    name: 'The Weeknd',
    role: 'Global Pop & Synthwave Visionary',
    genre: 'Synthwave • Dark R&B • Pop',
    bio: 'Four-time Grammy-winning icon behind After Hours and Dawn FM, headlining with cinematic falsettos, thunderous retro synth basslines, and stadium-shaking anthems like "Blinding Lights" and "Starboy".',
    img: '/images/artists/the-weeknd.jpg',
    number: '01',
  },
  {
    id: 2,
    name: 'Linkin Park',
    role: 'Alternative Rock Pioneers',
    genre: 'Nu-Metal • Hybrid Rock • Symphonic',
    bio: 'The multi-platinum arena legends behind Hybrid Theory and Meteora, unleashing electrifying new energy with colossal guitar riffs, soaring dual vocals, and timeless anthems like "In the End" and "Numb".',
    img: '/images/artists/linkin-park.jpg',
    number: '02',
  },
  {
    id: 3,
    name: 'Kendrick Lamar',
    role: 'Hip-Hop Luminary & Cultural Titan',
    genre: 'Conscious Rap • Jazz-Fusion • Live Brass',
    bio: 'Pulitzer Prize and 17-time Grammy-winning heavyweight, commanding the stage with razor-sharp lyrical mastery, cinematic stagecraft, and groundbreaking classics from DAMN. and good kid, m.A.A.d city.',
    img: '/images/artists/kendrick-lamar.jpg',
    number: '03',
  },
  {
    id: 4,
    name: 'Tame Impala',
    role: 'Psychedelic Sound Architect',
    genre: 'Psychedelic Rock • Synth Pop • Dreamscape',
    bio: 'Kevin Parker’s visionary project weaving kaleidoscopic analog synths, hypnotic disco-rock drums, and lush reverb into an ethereal sensory journey with hits like "The Less I Know The Better".',
    img: '/images/artists/tame-impala.jpg',
    number: '04',
  },
  {
    id: 5,
    name: 'Don Toliver',
    role: 'Melodic Rap & Psychedelic Trap Phenom',
    genre: 'Psychedelic Trap • Melodic Hip-Hop • R&B',
    bio: 'Chart-topping Houston innovator revered for intoxicating vocal melodies, futuristic soundscapes, and hypnotic late-night anthems from HARDSTONE PSYCHO and Heaven Or Hell.',
    img: '/images/artists/don-toliver.jpg',
    number: '05',
  },
]

export default function Artists() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0) // Default to The Weeknd
  const activeMember = artistsData[activeMemberIndex]

  return (
    <section className="artists" id="artists">
      {/* Ambient background glow */}
      <div className="artists__ambient" aria-hidden="true" />

      <div className="artists__container">
        
        {/* ── 1. HEADLINER BANNER & CREST ── */}
        <RevealUp delay={0.1}>
          <div className="artists__header">
            <div className="artists__eyebrow-wrap">
              <span className="artists__line" />
              <p className="artists__kicker">{lineupInfo.eyebrow}</p>
              <span className="artists__line" />
            </div>

            {/* Radiant Golden Crest */}
            <div className="artists__emblem" aria-hidden="true">
              <svg viewBox="0 0 100 100" fill="none" className="artists__crest-svg">
                <circle cx="50" cy="50" r="46" stroke="url(#crestGrad)" strokeWidth="1.5" strokeDasharray="3 3" />
                <circle cx="50" cy="50" r="38" stroke="url(#crestGrad)" strokeWidth="1.2" />
                <path d="M 50 16 L 64 42 L 50 49 L 36 42 Z" fill="url(#crestGrad)" opacity="0.85" />
                <path d="M 50 84 L 64 58 L 50 51 L 36 58 Z" fill="url(#crestGrad)" opacity="0.85" />
                <circle cx="50" cy="50" r="4.5" fill="#ffffff" />
                <defs>
                  <linearGradient id="crestGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="50%" stopColor="#e5b364" />
                    <stop offset="100%" stopColor="#9e6c27" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Lineup Title Typography */}
            <h2 className="artists__band-name gold-gradient-text">
              {lineupInfo.title}
            </h2>

            <p className="artists__band-tagline">
              {lineupInfo.tagline}
            </p>
          </div>
        </RevealUp>

        {/* ── 2. 5 HEADLINING ACTS ROW ── */}
        <RevealUp delay={0.25}>
          <div className="artists__lineup-badge-wrap">
            <div className="artists__lineup-badge">
              <span className="artists__lineup-dot" />
              <span>STELLAR LINEUP &bull; 5 HEADLINING ACTS</span>
            </div>
          </div>

          <div className="artists__members-row" role="list" aria-label="Headlining Artists">
            {artistsData.map((member, idx) => {
              const isSelected = activeMemberIndex === idx
              return (
                <div
                  key={member.id}
                  className={`artist-card${isSelected ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveMemberIndex(idx)}
                  onClick={() => setActiveMemberIndex(idx)}
                  role="listitem"
                  tabIndex={0}
                  onFocus={() => setActiveMemberIndex(idx)}
                  aria-label={`${member.name} - ${member.role}`}
                >
                  {/* Silhouette Figure */}
                  <div className="artist-card__figure">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="artist-card__img"
                      loading="lazy"
                    />
                    <div className="artist-card__aura" aria-hidden="true" />
                  </div>

                  {/* Member Name Pill */}
                  <div className="artist-card__tag">
                    <span className="artist-card__num">{member.number}</span>
                    <span className="artist-card__name">{member.name}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </RevealUp>

        {/* ── 3. ACTIVE HEADLINER SPOTLIGHT ── */}
        <RevealUp delay={0.4}>
          <div className="artist-spotlight" key={activeMember.id}>
            <div className="artist-spotlight__bar" />
            <h3 className="artist-spotlight__name gold-gradient-text">
              {activeMember.name}
            </h3>
            <p className="artist-spotlight__role">
              {activeMember.role} &bull; {activeMember.genre}
            </p>
            <p className="artist-spotlight__bio">
              {activeMember.bio}
            </p>
          </div>
        </RevealUp>

      </div>
    </section>
  )
}
