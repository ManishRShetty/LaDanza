import RevealUp from './RevealUp'
import '../styles/cta.css'

export default function CTA() {
  return (
    <section className="cta" id="tickets">
      <div className="cta__bg">
        <img
          src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=1400&q=80"
          alt=""
          className="cta__img"
        />
        <div className="cta__overlay" />
      </div>

      <RevealUp className="cta__content">
        <p className="cta__kicker">Don't Miss Out</p>
        <h2 className="cta__title">Secure Your Spot</h2>
        <p className="cta__sub">Tickets are limited. Once they're gone, they're gone.</p>
        <div className="hero__btn-wrapper">
          <a href="#" className="hero__btn-pass">
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
            <span className="hero__btn-flare" aria-hidden="true" />
          </a>
        </div>
      </RevealUp>
    </section>
  )
}
