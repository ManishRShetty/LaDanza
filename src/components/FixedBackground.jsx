import '../styles/fixed-background.css'

export default function FixedBackground() {
  return (
    <div className="fixed-bg" aria-hidden="true">
      <img
        src="/images/bg/concert-bg.jpg"
        alt=""
        className="fixed-bg__img"
      />
      <div className="fixed-bg__overlay" />

      {/* Overhead Golden Spotlights */}
      <div className="fixed-bg__spotlights">
        <div className="fixed-bg__spotlight fixed-bg__spotlight--left" />
        <div className="fixed-bg__spotlight fixed-bg__spotlight--center" />
        <div className="fixed-bg__spotlight fixed-bg__spotlight--right" />
      </div>

      {/* Golden Wave Lines — Top Left */}
      <svg
        className="fixed-bg__waves fixed-bg__waves--top"
        viewBox="0 0 320 320"
        fill="none"
      >
        <defs>
          <linearGradient id="bgWaveGradTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f5d696" stopOpacity="0.65" />
            <stop offset="50%" stopColor="#ca9846" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7a4f15" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M -40 220 C 40 180, 140 110, 160 -40" stroke="url(#bgWaveGradTop)" strokeWidth="1.2" />
        <path d="M -30 235 C 55 190, 155 120, 175 -30" stroke="url(#bgWaveGradTop)" strokeWidth="1" />
        <path d="M -20 250 C 70 200, 170 130, 190 -20" stroke="url(#bgWaveGradTop)" strokeWidth="0.9" />
        <path d="M -10 265 C 85 210, 185 140, 205 -10" stroke="url(#bgWaveGradTop)" strokeWidth="0.8" />
        <path d="M 0 280 C 100 220, 200 150, 220 0" stroke="url(#bgWaveGradTop)" strokeWidth="0.7" />
        <path d="M 15 295 C 115 230, 215 160, 235 15" stroke="url(#bgWaveGradTop)" strokeWidth="0.6" />
      </svg>

      {/* Golden Wave Lines — Bottom Right */}
      <svg
        className="fixed-bg__waves fixed-bg__waves--bottom"
        viewBox="0 0 320 320"
        fill="none"
      >
        <defs>
          <linearGradient id="bgWaveGradBottom" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#f5d696" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#ca9846" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#7a4f15" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M 360 100 C 280 140, 180 210, 160 360" stroke="url(#bgWaveGradBottom)" strokeWidth="1.2" />
        <path d="M 350 85 C 265 130, 165 200, 145 350" stroke="url(#bgWaveGradBottom)" strokeWidth="1" />
        <path d="M 340 70 C 250 120, 150 190, 130 340" stroke="url(#bgWaveGradBottom)" strokeWidth="0.9" />
        <path d="M 330 55 C 235 110, 135 180, 115 330" stroke="url(#bgWaveGradBottom)" strokeWidth="0.8" />
        <path d="M 320 40 C 220 100, 120 170, 100 320" stroke="url(#bgWaveGradBottom)" strokeWidth="0.7" />
      </svg>
    </div>
  )
}
