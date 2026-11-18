import { useState } from 'react'
import useScrollProgress from '../hooks/useScrollProgress'
import '../styles/nav.css'

export default function Nav({ ready = true }) {
  const [open, setOpen] = useState(false)
  const { scrolled } = useScrollProgress(60)

  const handleLinkClick = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' is-scrolled' : ''}${ready ? ' nav--ready' : ''}`}>
      <a href="#hero" className="nav__logo">
        <span className="nav__logo-text gold-gradient-text">LaDanza</span>
        <span className="nav__logo-star" aria-hidden="true">✦</span>
      </a>

      <button
        className={`nav__toggle${open ? ' is-open' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Toggle navigation menu"
      >
        <span /><span /><span />
      </button>

      <ul className={`nav__links${open ? ' is-open' : ''}`}>
        <li><a href="#artists" onClick={handleLinkClick}>Artists</a></li>
        <li><a href="#rules" onClick={handleLinkClick}>Rules</a></li>
        <li><a href="#details" onClick={handleLinkClick}>Details</a></li>
        <li><a href="#tickets" className="btn btn--sm" onClick={handleLinkClick}>Get Tickets</a></li>
      </ul>
    </nav>
  )
}
