import { useState } from 'react'
import RevealUp from './RevealUp'
import { useAudio } from '../context/AudioContext'
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
    songTitle: 'Starboy (feat. Daft Punk)',
  },
  {
    id: 2,
    name: 'Linkin Park',
    role: 'Alternative Rock Pioneers',
    genre: 'Nu-Metal • Hybrid Rock • Symphonic',
    bio: 'The multi-platinum arena legends behind Hybrid Theory and Meteora, unleashing electrifying new energy with colossal guitar riffs, soaring dual vocals, and timeless anthems like "In the End" and "Numb".',
    img: '/images/artists/linkin-park.jpg',
    number: '02',
    songTitle: 'In the End',
  },
  {
    id: 3,
    name: 'Kendrick Lamar',
    role: 'Hip-Hop Luminary & Cultural Titan',
    genre: 'Conscious Rap • Jazz-Fusion • Live Brass',
    bio: 'Pulitzer Prize and 17-time Grammy-winning heavyweight, commanding the stage with razor-sharp lyrical mastery, cinematic stagecraft, and groundbreaking classics from DAMN. and good kid, m.A.A.d city.',
    img: '/images/artists/kendrick-lamar.jpg',
    number: '03',
    songTitle: 'HUMBLE.',
  },
  {
    id: 4,
    name: 'Tame Impala',
    role: 'Psychedelic Sound Architect',
    genre: 'Psychedelic Rock • Synth Pop • Dreamscape',
    bio: 'Kevin Parker’s visionary project weaving kaleidoscopic analog synths, hypnotic disco-rock drums, and lush reverb into an ethereal sensory journey with hits like "The Less I Know The Better".',
    img: '/images/artists/tame-impala.jpg',
    number: '04',
    songTitle: 'New Person, Same Old Mistakes',
  },
  {
    id: 5,
    name: 'Eminem',
    role: 'Rap God & Global Hip-Hop Legend',
    genre: 'Hip-Hop • Rap • Hardcore Lyricism',
    bio: 'The best-selling rap artist in history and 15-time Grammy icon, headlining with blistering technical flows, ferocious stage presence, and immortal stadium anthems like "Lose Yourself", "Without Me", and "Houdini".',
    img: '/images/artists/eminem.jpg',
    number: '05',
    songTitle: 'Without Me',
  },
]

export default function Artists() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(0) // Default to The Weeknd
  const activeMember = artistsData[activeMemberIndex]
  const {
    isPlaying,
    activeArtistId,
    pinnedArtistId,
    previewArtistOnHover,
    leaveArtistPreview,
    clickArtistTrack,
  } = useAudio()

  const handleCardHover = (idx, memberId) => {
    setActiveMemberIndex(idx)
    previewArtistOnHover(memberId)
  }

  const handleCardLeave = () => {
    leaveArtistPreview()
  }

  const handleCardClick = (idx, memberId) => {
    setActiveMemberIndex(idx)
    clickArtistTrack(memberId)
  }

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
              <span>HOVER OVER AN ARTIST TO PLAY SONG &bull; CLICK TO LOCK</span>
            </div>
          </div>

          <div
            className="artists__members-row"
            role="list"
            aria-label="Headlining Artists"
            onMouseLeave={handleCardLeave}
          >
            {artistsData.map((member, idx) => {
              const isSelected = activeMemberIndex === idx
              const isTrackPlaying = activeArtistId === member.id && isPlaying
              const isLocked = pinnedArtistId === member.id

              return (
                <div
                  key={member.id}
                  className={`artist-card${isSelected ? ' is-active' : ''}${isTrackPlaying ? ' is-audio-playing' : ''}${isLocked ? ' is-locked' : ''}`}
                  onMouseEnter={() => handleCardHover(idx, member.id)}
                  onMouseLeave={handleCardLeave}
                  onClick={() => handleCardClick(idx, member.id)}
                  role="listitem"
                  tabIndex={0}
                  onFocus={() => handleCardHover(idx, member.id)}
                  onBlur={handleCardLeave}
                  aria-label={`${member.name} - ${member.role}. Hover or click to play ${member.songTitle}.`}
                  title={`Hover or click to play "${member.songTitle}" by ${member.name}`}
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

                    {/* Playing Audio Badge Indicator */}
                    {isTrackPlaying && (
                      <div className="artist-card__playing-badge" aria-hidden="true">
                        <span className="artist-card__eq-bar" />
                        <span className="artist-card__eq-bar" />
                        <span className="artist-card__eq-bar" />
                        <span>{isLocked ? 'LOCKED' : 'PLAYING'}</span>
                      </div>
                    )}
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

            {/* Audio Preview Trigger Button with Smooth Cross-Fade */}
            <div className="artist-spotlight__audio-bar">
              <button
                type="button"
                className={`artist-spotlight__audio-btn${activeArtistId === activeMember.id && isPlaying ? ' is-playing' : ''}`}
                onClick={() => clickArtistTrack(activeMember.id)}
                aria-label={`Play preview for ${activeMember.name}`}
              >
                <span className="artist-spotlight__audio-icon">
                  {activeArtistId === activeMember.id && isPlaying ? '⏸' : '▶'}
                </span>
                <span className="artist-spotlight__audio-text">
                  {activeArtistId === activeMember.id && isPlaying
                    ? `Playing "${activeMember.songTitle}" (Click to Return to Tomorrowland Vibe)`
                    : `Play "${activeMember.songTitle}" — ${activeMember.name}`}
                </span>
                <span className="artist-spotlight__fade-tag">Smooth Fading</span>
              </button>
            </div>
          </div>
        </RevealUp>

      </div>
    </section>
  )
}
