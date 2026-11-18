import { useState } from 'react'
import RevealUp from './RevealUp'
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
    instrument: 'Vocals',
    bio: 'Commanding frontman known for an expansive 4-octave vocal range, raw emotional stage storytelling, and soaring arena rock anthems.',
    img: 'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800&auto=format&fit=crop&q=80',
    number: '01',
  },
  {
    id: 2,
    name: 'Aarav Mehta',
    role: 'Lead Guitar & Backing Vocals',
    instrument: 'Lead Guitar',
    bio: 'Virtuoso guitarist crafting atmospheric soundscapes and explosive solos, seamlessly fusing progressive rock riffs with intricate acoustic melodies.',
    img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=800&auto=format&fit=crop&q=80',
    number: '02',
  },
  {
    id: 3,
    name: 'Rhea Kapoor',
    role: 'Bass Guitar & Synthesizers',
    instrument: 'Bass & Synth',
    bio: 'The sonic architect of the band, driving visceral low-end grooves and hypnotic modular synth textures that define their massive wall of sound.',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
    number: '03',
  },
  {
    id: 4,
    name: 'Dev Malhotra',
    role: 'Drums & Percussion',
    instrument: 'Drums',
    bio: 'Dynamic percussionist delivering stadium-shaking drum patterns, blending thunderous rock drive with subtle polyrhythmic swing.',
    img: 'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800&auto=format&fit=crop&q=80',
    number: '04',
  },
]

export default function Artists() {
  const [activeMemberIndex, setActiveMemberIndex] = useState(1) // Aarav Mehta default
  const activeMember = bandMembers[activeMemberIndex]

  return (
    <section className="artists" id="artists">
      {/* Ambient background glow */}
      <div className="artists__ambient" aria-hidden="true" />

      <div className="artists__container">
        
        {/* ── 1. BAND HEADER (Identity & Crest) ── */}
        <RevealUp delay={0.1}>
          <div className="artists__header">
            <div className="artists__eyebrow-wrap">
              <span className="artists__line" />
              <p className="artists__kicker">LIVE PERFORMANCE BY</p>
              <span className="artists__line" />
            </div>

            {/* Band Emblem Crest */}
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

            {/* Band Name Typography */}
            <h2 className="artists__band-name gold-gradient-text">
              {bandInfo.name}
            </h2>

            <p className="artists__band-tagline">
              {bandInfo.tagline} &bull; {bandInfo.genre}
            </p>
          </div>
        </RevealUp>

        {/* ── 2. BAND MEMBERS LINEUP ── */}
        <RevealUp delay={0.25}>
          <div className="artists__lineup-badge-wrap">
            <div className="artists__lineup-badge">
              <span className="artists__lineup-dot" />
              <span>BAND LINEUP &bull; 4 ARTISTS</span>
            </div>
          </div>

          <div className="artists__members-row" role="list" aria-label="Band Members">
            {bandMembers.map((member, idx) => {
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

        {/* ── 3. ACTIVE MEMBER SPOTLIGHT ── */}
        <RevealUp delay={0.4}>
          <div className="artist-spotlight" key={activeMember.id}>
            <div className="artist-spotlight__bar" />
            <h3 className="artist-spotlight__name gold-gradient-text">
              {activeMember.name}
            </h3>
            <p className="artist-spotlight__role">
              {activeMember.role} &bull; {activeMember.instrument}
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
