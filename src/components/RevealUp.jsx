import useReveal from '../hooks/useReveal'

/**
 * Generic reveal-on-scroll wrapper.
 * Wraps children in a div (or custom `as` element) that fades + slides up.
 */
export default function RevealUp({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={`reveal-up${visible ? ' is-visible' : ''} ${className}`.trim()}
      style={{ '--d': `${delay}s` }}
    >
      {children}
    </Tag>
  )
}
