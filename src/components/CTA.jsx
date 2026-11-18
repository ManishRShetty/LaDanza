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
        <a href="#" className="btn btn--lg">Buy Tickets Now</a>
      </RevealUp>
    </section>
  )
}
