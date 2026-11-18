import '../styles/loader.css'

export default function Loader({ hidden }) {
  return (
    <div className={`loader${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <div className="loader__inner">
        {'Novera'.split('').map((letter, i) => (
          <span
            key={i}
            className="loader__letter"
            style={{ animationDelay: `${0.1 + i * 0.08}s` }}
          >
            {letter}
          </span>
        ))}
      </div>
    </div>
  )
}
