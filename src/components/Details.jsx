import RevealUp from './RevealUp'
import '../styles/details.css'

const detailsCards = [
  {
    id: 'date',
    title: 'Date',
    theme: 'gold',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="detail-badge-svg" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="3" stroke="#f5d696" strokeWidth="1.8" />
        <line x1="3" y1="9" x2="21" y2="9" stroke="#f5d696" strokeWidth="1.8" />
        <line x1="8" y1="2" x2="8" y2="5" stroke="#f5d696" strokeWidth="2" strokeLinecap="round" />
        <line x1="16" y1="2" x2="16" y2="5" stroke="#f5d696" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="13" r="1.2" fill="#f5d696" />
        <circle cx="12" cy="13" r="1.2" fill="#f5d696" />
        <circle cx="16" cy="13" r="1.2" fill="#f5d696" />
        <circle cx="8" cy="17" r="1.2" fill="#f5d696" />
        <circle cx="12" cy="17" r="1.2" fill="#f5d696" />
        <circle cx="16" cy="17" r="1.2" fill="#f5d696" />
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 120 120" fill="none" className="detail-watermark-svg" aria-hidden="true">
        <rect x="15" y="20" width="90" height="90" rx="16" stroke="rgba(245, 214, 150, 0.18)" strokeWidth="3" />
        <line x1="15" y1="46" x2="105" y2="46" stroke="rgba(245, 214, 150, 0.18)" strokeWidth="3" />
        <line x1="40" y1="10" x2="40" y2="26" stroke="rgba(245, 214, 150, 0.25)" strokeWidth="4" strokeLinecap="round" />
        <line x1="80" y1="10" x2="80" y2="26" stroke="rgba(245, 214, 150, 0.25)" strokeWidth="4" strokeLinecap="round" />
        <rect x="32" y="60" width="14" height="14" rx="3" fill="rgba(245, 214, 150, 0.14)" />
        <rect x="53" y="60" width="14" height="14" rx="3" fill="rgba(245, 214, 150, 0.14)" />
        <rect x="74" y="60" width="14" height="14" rx="3" fill="rgba(245, 214, 150, 0.14)" />
        <rect x="32" y="81" width="14" height="14" rx="3" fill="rgba(245, 214, 150, 0.14)" />
        <rect x="53" y="81" width="14" height="14" rx="3" fill="rgba(245, 214, 150, 0.14)" />
        <rect x="74" y="81" width="14" height="14" rx="3" fill="rgba(245, 214, 150, 0.14)" />
      </svg>
    ),
    items: [
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <rect x="2.5" y="3.5" width="15" height="14" rx="2.5" stroke="#e5b364" strokeWidth="1.5" />
            <line x1="2.5" y1="7.5" x2="17.5" y2="7.5" stroke="#e5b364" strokeWidth="1.5" />
            <line x1="6.5" y1="2" x2="6.5" y2="4.5" stroke="#e5b364" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="13.5" y1="2" x2="13.5" y2="4.5" stroke="#e5b364" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        text: '18 — 19 December 2026',
      },
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <circle cx="10" cy="10" r="7.5" stroke="#e5b364" strokeWidth="1.5" />
            <polyline points="10 5.5 10 10 13.5 11.8" stroke="#e5b364" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        ),
        text: 'Gates open at 4:00 PM',
      },
    ],
  },
  {
    id: 'venue',
    title: 'Venue',
    theme: 'purple',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="detail-badge-svg" aria-hidden="true">
        <path
          d="M12 21 C12 21 19 14.5 19 9.5 C19 5.36 15.86 2 12 2 C8.14 2 5 5.36 5 9.5 C5 14.5 12 21 12 21 Z"
          fill="#c084fc"
          stroke="#e9d5ff"
          strokeWidth="1.2"
        />
        <circle cx="12" cy="9.5" r="3.2" fill="#2e1065" stroke="#ffffff" strokeWidth="1.2" />
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 140 100" fill="none" className="detail-watermark-svg" aria-hidden="true">
        {/* Stadium Architectural Rings Watermark */}
        <ellipse cx="70" cy="50" rx="60" ry="32" stroke="rgba(192, 132, 252, 0.22)" strokeWidth="2.5" />
        <ellipse cx="70" cy="50" rx="46" ry="22" stroke="rgba(192, 132, 252, 0.18)" strokeWidth="1.8" strokeDasharray="3 3" />
        <ellipse cx="70" cy="50" rx="30" ry="12" stroke="rgba(192, 132, 252, 0.22)" strokeWidth="1.5" />
        <path d="M 12 50 L 30 75 M 128 50 L 110 75 M 70 82 L 70 95" stroke="rgba(192, 132, 252, 0.2)" strokeWidth="1.5" />
      </svg>
    ),
    items: [
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <path
              d="M10 18 C10 18 16 12.5 16 8 C16 4.7 13.3 2 10 2 C6.7 2 4 4.7 4 8 C4 12.5 10 18 10 18 Z"
              stroke="#c084fc"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="8" r="2.4" fill="#c084fc" />
          </svg>
        ),
        text: 'Sir Manish Shetty Stadium',
      },
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <circle cx="10" cy="10" r="7.5" stroke="#c084fc" strokeWidth="1.4" strokeDasharray="2 2" />
            <polygon points="10 4 12.5 8.5 10 16 7.5 8.5" fill="#c084fc" opacity="0.85" />
          </svg>
        ),
        text: 'Mangalore, Karnataka',
      },
    ],
  },
  {
    id: 'tickets',
    title: 'Tickets',
    theme: 'amber',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="detail-badge-svg" aria-hidden="true">
        <path
          d="M 3 8 C 3 6.9 3.9 6 5 6 L 19 6 C 20.1 6 21 6.9 21 8 C 19.5 8 19.5 10 19.5 10 C 19.5 10 19.5 12 21 12 C 21 13.1 20.1 14 19 14 L 5 14 C 3.9 14 3 13.1 3 12 C 4.5 12 4.5 10 4.5 10 C 4.5 10 4.5 8 3 8 Z"
          fill="#e5b364"
          transform="rotate(-20 12 10)"
        />
        <path
          d="M 12 7 L 12.8 8.6 L 14.5 8.9 L 13.2 10.1 L 13.5 11.8 L 12 11 L 10.5 11.8 L 10.8 10.1 L 9.5 8.9 L 11.2 8.6 Z"
          fill="#1c0f06"
        />
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 130 90" fill="none" className="detail-watermark-svg" aria-hidden="true">
        <g transform="rotate(-15 65 45)">
          <rect x="15" y="15" width="100" height="60" rx="8" stroke="rgba(245, 214, 150, 0.22)" strokeWidth="2.5" />
          <path d="M 15 35 C 22 35 22 45 15 45" stroke="rgba(245, 214, 150, 0.25)" strokeWidth="2.5" />
          <path d="M 115 35 C 108 35 108 45 115 45" stroke="rgba(245, 214, 150, 0.25)" strokeWidth="2.5" />
          <polygon points="65 30 68 39 77 40 70 47 72 56 65 51 58 56 60 47 53 40 62 39" fill="rgba(245, 214, 150, 0.18)" />
        </g>
      </svg>
    ),
    items: [
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <rect x="3" y="6" width="14" height="8" rx="2" stroke="#e5b364" strokeWidth="1.5" />
            <circle cx="3" cy="10" r="1.5" fill="#080503" />
            <circle cx="17" cy="10" r="1.5" fill="#080503" />
          </svg>
        ),
        text: 'Starter from ₹20,000',
      },
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <polygon points="10 3 12 7 17 8 13.5 12 14.5 17 10 14.5 5.5 17 6.5 12 3 8 8 7" fill="#e5b364" />
          </svg>
        ),
        text: 'VIP Circle — ₹38,000',
      },
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <polygon points="10 2 16 7 10 18 4 7" stroke="#e5b364" strokeWidth="1.4" fill="rgba(229, 179, 100, 0.2)" />
            <line x1="4" y1="7" x2="16" y2="7" stroke="#e5b364" strokeWidth="1.2" />
          </svg>
        ),
        text: 'Diamond Pass — ₹75,000',
      },
    ],
  },
  {
    id: 'parking',
    title: 'Parking',
    theme: 'cyan',
    badgeIcon: (
      <svg viewBox="0 0 24 24" fill="none" className="detail-badge-svg" aria-hidden="true">
        <text
          x="12"
          y="18"
          textAnchor="middle"
          fill="#38bdf8"
          fontSize="18"
          fontFamily="sans-serif"
          fontWeight="900"
        >
          P
        </text>
      </svg>
    ),
    watermark: (
      <svg viewBox="0 0 140 90" fill="none" className="detail-watermark-svg" aria-hidden="true">
        {/* Car Silhouette Watermark */}
        <path
          d="M 20 58 L 32 45 C 36 40 45 36 55 35 L 85 35 C 95 36 102 42 108 48 L 122 58 C 127 60 128 65 128 70 L 12 70 C 12 65 14 60 20 58 Z"
          stroke="rgba(56, 189, 248, 0.22)"
          strokeWidth="2.5"
          fill="rgba(56, 189, 248, 0.04)"
        />
        <circle cx="38" cy="70" r="10" stroke="rgba(56, 189, 248, 0.26)" strokeWidth="2.5" />
        <circle cx="102" cy="70" r="10" stroke="rgba(56, 189, 248, 0.26)" strokeWidth="2.5" />
      </svg>
    ),
    items: [
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <path
              d="M4 11 L6 6.5 C6.5 5.5 7.5 5 8.5 5 L11.5 5 C12.5 5 13.5 5.5 14 6.5 L16 11 L16.5 14 C16.5 14.5 16 15 15.5 15 L14.5 15 C14 15 13.5 14.5 13.5 14 L13.5 13.5 L6.5 13.5 L6.5 14 C6.5 14.5 6 15 5.5 15 L4.5 15 C4 15 3.5 14.5 3.5 14 Z"
              stroke="#38bdf8"
              strokeWidth="1.4"
            />
            <circle cx="6.5" cy="11.5" r="1.2" fill="#38bdf8" />
            <circle cx="13.5" cy="11.5" r="1.2" fill="#38bdf8" />
          </svg>
        ),
        text: 'Limited on-site parking.',
      },
      {
        icon: (
          <svg viewBox="0 0 20 20" fill="none" className="item-icon-svg" aria-hidden="true">
            <path d="M5 15 L15 5 M15 5 L10 5 M15 5 L15 10" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M15 15 L5 5" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
          </svg>
        ),
        text: 'We recommend public transit or ride-share.',
      },
    ],
  },
]

export default function Details() {
  return (
    <section className="details-section" id="details">
      {/* Background Ambience & Lighting */}
      <div className="details-section__ambient" aria-hidden="true" />

      <div className="details-section__container">
        
        {/* ── Section Header matching Reference ── */}
        <RevealUp delay={0.1}>
          <div className="details-section__header">
            <div className="details-section__eyebrow-wrap">
              <span className="details-section__kicker">THE DETAILS</span>
              <span className="details-section__line" />
            </div>

            <h2 className="details-section__title">
              Everything You Need to <span className="details-section__title-script">Know</span>
            </h2>

            <p className="details-section__sub">
              Plan ahead. Be ready. Experience more.
            </p>
          </div>
        </RevealUp>

        {/* ── 4 Glowing Neon Glass Cards Grid ── */}
        <div className="details-cards-grid">
          {detailsCards.map((card, i) => (
            <RevealUp key={card.id} delay={0.18 + i * 0.1}>
              <div className={`neon-detail-card neon-detail-card--${card.theme}`}>
                {/* Background Watermark Illustration */}
                <div className="neon-detail-card__watermark-wrap">
                  {card.watermark}
                </div>

                {/* Top-Left Glowing Square Badge */}
                <div className="neon-detail-card__badge-box">
                  {card.badgeIcon}
                </div>

                {/* Card Title */}
                <h3 className="neon-detail-card__heading">{card.title}</h3>

                {/* Detailed Key-Value Items */}
                <ul className="neon-detail-card__list">
                  {card.items.map((item, idx) => (
                    <li key={idx} className="neon-detail-card__item">
                      <span className="neon-detail-card__item-icon" aria-hidden="true">
                        {item.icon}
                      </span>
                      <span className="neon-detail-card__item-text">
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Neon Accent Highlight */}
                <div className="neon-detail-card__bottom-glow" aria-hidden="true" />
              </div>
            </RevealUp>
          ))}
        </div>

        {/* ── Center Sparkle Star Divider Line ── */}
        <div className="details-section__divider-wrap" aria-hidden="true">
          <span className="details-section__divider-line" />
          <span className="details-section__divider-star">✦</span>
          <span className="details-section__divider-line" />
        </div>

      </div>
    </section>
  )
}
