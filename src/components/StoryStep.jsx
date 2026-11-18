import useStepReveal from '../hooks/useStepReveal'

/**
 * A single step inside a storytelling sticky section.
 * Becomes active when in viewport center, deactivates on exit.
 */
export default function StoryStep({ children }) {
  const [ref, active] = useStepReveal()

  return (
    <div ref={ref} className={`story__step${active ? ' is-active' : ''}`}>
      {children}
    </div>
  )
}
