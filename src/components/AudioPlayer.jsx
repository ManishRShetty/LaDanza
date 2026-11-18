import { useAudio } from '../context/AudioContext'
import '../styles/audio-player.css'

export default function AudioPlayer() {
  const { isPlaying, currentTrackInfo, toggleAudio, playAmbient, activeArtistId } = useAudio()

  return (
    <div className={`audio-pill${isPlaying ? ' is-playing' : ''}`}>
      <button
        type="button"
        className="audio-pill__btn"
        onClick={toggleAudio}
        aria-label={isPlaying ? 'Pause background music' : 'Play party background music'}
        title={isPlaying ? 'Click to pause music' : 'Click to play music'}
      >
        {/* Animated Equalizer Waves when playing */}
        <div className="audio-pill__eq" aria-hidden="true">
          <span className="audio-eq__bar" />
          <span className="audio-eq__bar" />
          <span className="audio-eq__bar" />
          <span className="audio-eq__bar" />
        </div>

        {/* Audio Icon when paused */}
        <svg
          className="audio-pill__icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          {isPlaying ? (
            <>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </>
          ) : (
            <>
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </>
          )}
        </svg>

        {/* Track Info Marquee / Label */}
        <div className="audio-pill__info">
          <span className="audio-pill__status">
            {isPlaying ? (activeArtistId ? 'ARTIST PREVIEW' : 'PARTY AMBIENCE') : 'PARTY MUSIC'}
          </span>
          <span className="audio-pill__track gold-gradient-text">
            {isPlaying ? `${currentTrackInfo.artist} — ${currentTrackInfo.title}` : 'Tap to Play Party Sound'}
          </span>
        </div>
      </button>

      {/* Switch back to party ambient music button if an artist is playing */}
      {isPlaying && activeArtistId && (
        <button
          type="button"
          className="audio-pill__switch-ambient"
          onClick={playAmbient}
          title="Switch back to Party Ambience"
          aria-label="Switch back to Party Ambience"
        >
          <span>Return to Party Vibe ↺</span>
        </button>
      )}
    </div>
  )
}
