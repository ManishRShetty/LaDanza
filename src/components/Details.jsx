import RevealUp from './RevealUp'
import '../styles/details.css'

const details = [
  { icon: '📅', title: 'Date', text: '18 — 19 December 2026\nGates open at 4:00 PM' },
  { icon: '📍', title: 'Venue', text: 'Sir Manish Shetty Stadium\nMangalore, Karnataka' },
  { icon: '🎫', title: 'Tickets', text: 'Starting from ₹20,000\nVIP Circle — ₹38,000\nDiamond Pass — ₹75,000' },
  { icon: '🅿️', title: 'Parking', text: 'Limited on-site parking.\nWe recommend public transit or ride-share.' },
]

export default function Details() {
  return (
    <section className="section details" id="details">
      <div className="section__inner">
        <RevealUp className="section__kicker" delay={0.05}>The Details</RevealUp>
        <RevealUp as="h2" className="section__title" delay={0.15}>
          Everything You Need to Know
        </RevealUp>

        <div className="details-grid">
          {details.map((d, i) => (
            <RevealUp key={i} delay={0.15 + i * 0.12}>
              <div className="detail-card">
                <div className="detail-card__icon">{d.icon}</div>
                <h3>{d.title}</h3>
                {d.text.split('\n').map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  )
}
