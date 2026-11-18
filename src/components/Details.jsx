import RevealUp from './RevealUp'
import '../styles/details.css'

const details = [
  { icon: '📅', title: 'Date', text: '18 — 19 December 2026\nGates open at 4:00 PM' },
  { icon: '📍', title: 'Venue', text: 'Phoenix Arena\nWhitefield, Bangalore' },
  { icon: '🎫', title: 'Tickets', text: 'General — ₹1,999\nVIP Pit — ₹4,999\nBackstage Pass — ₹9,999' },
  { icon: '🅿️', title: 'Parking', text: 'Limited on-site parking.\nWe recommend public transit or ride-share.' },
]

export default function Details() {
  return (
    <section className="section details" id="details">
      <div className="section__inner">
        <RevealUp className="section__kicker">THE DETAILS</RevealUp>
        <RevealUp as="h2" className="section__title">
          Everything You Need to Know
        </RevealUp>

        <div className="details-grid">
          {details.map((d, i) => (
            <RevealUp key={i} delay={i * 0.06}>
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
