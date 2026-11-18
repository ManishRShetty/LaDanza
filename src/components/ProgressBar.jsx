import useScrollProgress from '../hooks/useScrollProgress'
import '../styles/progress.css'

export default function ProgressBar() {
  const { progress } = useScrollProgress()

  return (
    <div className="progress-bar" style={{ width: `${progress}%` }} />
  )
}
