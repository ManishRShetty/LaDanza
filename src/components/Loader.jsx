import '../styles/loader.css'

export default function Loader({ hidden }) {
  return (
    <aside
      className={`loader${hidden ? ' is-hidden' : ''}`}
      aria-hidden={hidden ? 'true' : 'false'}
      role="status"
      aria-label="Loading concert experience"
    >
      {/* Ambient background bloom */}
      <div className="loader__bloom" aria-hidden="true" />

      <div className="loader__content">
        <div className="loader__brand">
          <span className="loader__title gold-gradient-text">Novera</span>
          <span className="loader__star" aria-hidden="true">✦</span>
        </div>

        {/* Elegant hairline progress line */}
        <div className="loader__line-wrap" aria-hidden="true">
          <div className="loader__line-bar" />
        </div>

        <p className="loader__tagline">A LIVE CONCERT EXPERIENCE</p>
      </div>
    </aside>
  )
}
