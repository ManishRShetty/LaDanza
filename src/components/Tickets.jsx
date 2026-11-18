import { useState } from 'react'
import RevealUp from './RevealUp'
import '../styles/tickets.css'

const ticketTiers = [
  {
    id: 'silver',
    name: 'Silver Arena',
    badge: null,
    tierType: 'ENTRY PASS',
    price: 20000,
    priceFormatted: '₹20,000',
    description: 'General admission floor access with full stage audio-visual immersion.',
    perks: [
      'Standing Floor & Lower Bowl GA Access',
      'Full 360° Stage Sound & Visual Spectacle',
      'Access to Official Festival Village & Merch',
      'Commemorative Digital RFID Wristband',
    ],
  },
  {
    id: 'gold',
    name: 'Golden Circle VIP',
    badge: 'MOST POPULAR',
    tierType: 'VIP IMMERSION',
    price: 38000,
    priceFormatted: '₹38,000',
    description: 'Front-stage priority enclosure with fast-track entry and VIP amenities.',
    perks: [
      'Priority Front-Stage Golden Circle Enclosure',
      'Fast-Track VIP Dedicated Express Entry Gate',
      'Exclusive VIP Gold Lounge & Craft Bar Access',
      'LaDanza 2026 Luxury Tour Merch Pack',
      'Collectible Metallic Gold Laminate Pass',
    ],
  },
  {
    id: 'diamond',
    name: 'Diamond All-Access',
    badge: 'ULTRA-LUXURY',
    tierType: 'ALL-ACCESS SUITE',
    price: 75000,
    priceFormatted: '₹75,000',
    description: 'The pinnacle of luxury with backstage access, gourmet catering, and private hospitality.',
    perks: [
      'Elevated Diamond Suite or Front-Row Pit',
      'Private Backstage Tour & Artist Lounge Access',
      'Complimentary Gourmet Dining & Open Bar',
      'Dedicated Personal Concierge & Valet Parking',
      'Official Limited Tour Vinyl & Signed Program',
    ],
  },
]

export default function Tickets() {
  const [selectedTierId, setSelectedTierId] = useState('gold') // default to popular tier
  const [quantity, setQuantity] = useState(1)
  const [booked, setBooked] = useState(false)

  const selectedTier = ticketTiers.find(t => t.id === selectedTierId) || ticketTiers[0]
  const totalPrice = selectedTier.price * quantity

  const handleQuantityChange = delta => {
    setQuantity(prev => Math.min(Math.max(prev + delta, 1), 6))
  }

  const handleCheckout = e => {
    e.preventDefault()
    setBooked(true)
    setTimeout(() => setBooked(false), 3500)
  }

  return (
    <section className="tickets" id="tickets">
      {/* Subtle Ambient Radial Glow */}
      <div className="tickets__ambient" aria-hidden="true" />

      <div className="tickets__container">
        
        {/* ── Section Header ── */}
        <RevealUp delay={0.1}>
          <div className="tickets__header">
            <div className="tickets__eyebrow-wrap">
              <span className="tickets__line" />
              <p className="tickets__kicker">ADMISSION &amp; PASSES</p>
              <span className="tickets__line" />
            </div>

            <h2 className="tickets__title gold-gradient-text">
              Select Your Pass
            </h2>

            {/* Starting from ₹20,000 highlighted badge */}
            <div className="tickets__pricing-badge">
              <span className="tickets__badge-dot" />
              <span>STARTING FROM ₹20,000 &bull; LIMITED ALLOCATIONS</span>
            </div>

            <p className="tickets__subtitle">
              Choose your tier to experience The Weeknd, Linkin Park, Kendrick Lamar, Tame Impala, and Eminem live at Sir Manish Shetty Stadium, Mangalore.
            </p>
          </div>
        </RevealUp>

        {/* ── 3 Ticket Tier Cards ── */}
        <div className="tickets__grid" role="radiogroup" aria-label="Ticket Tier Selection">
          {ticketTiers.map((tier, idx) => {
            const isSelected = selectedTierId === tier.id
            const isPopular = tier.badge === 'MOST POPULAR'

            return (
              <RevealUp key={tier.id} delay={0.2 + idx * 0.12}>
                <div
                  className={`ticket-card${isSelected ? ' is-selected' : ''}${isPopular ? ' is-popular' : ''}`}
                  onClick={() => setSelectedTierId(tier.id)}
                  role="radio"
                  aria-checked={isSelected}
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setSelectedTierId(tier.id)
                    }
                  }}
                >
                  {/* Popular / Ultra-Luxury Badge */}
                  {tier.badge && (
                    <div className="ticket-card__badge">
                      <span>{tier.badge}</span>
                    </div>
                  )}

                  {/* Header: Name & Type */}
                  <div className="ticket-card__header">
                    <span className="ticket-card__type">{tier.tierType}</span>
                    <h3 className="ticket-card__name">{tier.name}</h3>
                    <p className="ticket-card__desc">{tier.description}</p>
                  </div>

                  {/* Pricing Display */}
                  <div className="ticket-card__price-wrap">
                    <span className="ticket-card__currency">₹</span>
                    <span className="ticket-card__amount">
                      {(tier.price / 1000).toLocaleString('en-IN')},000
                    </span>
                    <span className="ticket-card__freq">/ pass</span>
                  </div>

                  {/* Perks List */}
                  <ul className="ticket-card__perks">
                    {tier.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="ticket-card__perk-item">
                        <svg
                          className="ticket-card__check"
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                        >
                          <circle cx="10" cy="10" r="9" stroke="url(#checkGrad)" strokeWidth="1.2" />
                          <path
                            d="M6 10.2 L8.8 13 L14 7.5"
                            stroke="#e5b364"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <defs>
                            <linearGradient id="checkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f5d696" />
                              <stop offset="100%" stopColor="#ca9846" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Card Select Indicator Button */}
                  <button
                    type="button"
                    className={`ticket-card__btn${isSelected ? ' is-selected-btn' : ''}`}
                    onClick={e => {
                      e.stopPropagation()
                      setSelectedTierId(tier.id)
                    }}
                  >
                    {isSelected ? '✓ SELECTED TIER' : 'SELECT TIER'}
                  </button>
                </div>
              </RevealUp>
            )
          })}
        </div>

        {/* ── Interactive Checkout & Quantity Summary Bar ── */}
        <RevealUp delay={0.45}>
          <div className="tickets__checkout-bar">
            <div className="tickets__summary-col">
              <span className="tickets__summary-label">CHOSEN PASS</span>
              <h4 className="tickets__summary-tier gold-gradient-text">
                {selectedTier.name}
              </h4>
              <p className="tickets__summary-sub">
                {selectedTier.priceFormatted} × {quantity} {quantity === 1 ? 'ticket' : 'tickets'}
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="tickets__qty-wrapper">
              <span className="tickets__qty-label">QUANTITY</span>
              <div className="tickets__qty-control">
                <button
                  type="button"
                  className="tickets__qty-btn"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  &minus;
                </button>
                <span className="tickets__qty-number">{quantity}</span>
                <button
                  type="button"
                  className="tickets__qty-btn"
                  onClick={() => handleQuantityChange(1)}
                  disabled={quantity >= 6}
                  aria-label="Increase quantity"
                >
                  &#43;
                </button>
              </div>
            </div>

            {/* Total Price & CTA Button */}
            <div className="tickets__action-col">
              <div className="tickets__total-wrap">
                <span className="tickets__total-label">TOTAL AMOUNT</span>
                <span className="tickets__total-amount gold-gradient-text">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="hero__btn-wrapper tickets__pass-btn-wrap">
                <button
                  type="button"
                  className={`hero__btn-pass tickets__btn-checkout${booked ? ' is-booked' : ''}`}
                  onClick={handleCheckout}
                >
                  <span className="hero__btn-label">
                    {booked ? 'PASS RESERVED! ✓' : 'RESERVE PASS >'}
                  </span>
                  <span className="hero__btn-flare" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <p className="tickets__security-note">
            🔒 256-Bit Encrypted Checkout &bull; Instant Digital Pass Delivery &bull; Official Ticket Guarantee
          </p>
        </RevealUp>

      </div>
    </section>
  )
}
