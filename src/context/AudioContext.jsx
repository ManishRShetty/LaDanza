import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react'

const AudioContext = createContext(null)

const AMBIENT_SRC = '/audio/ambient-party.mp3'
const ARTIST_TRACKS = {
  1: { id: 'the-weeknd', src: '/audio/the-weeknd.mp3', title: 'Starboy (feat. Daft Punk)', artist: 'The Weeknd' },
  2: { id: 'linkin-park', src: '/audio/linkin-park.mp3', title: 'In the End', artist: 'Linkin Park' },
  3: { id: 'kendrick-lamar', src: '/audio/kendrick-lamar.mp3', title: 'HUMBLE.', artist: 'Kendrick Lamar' },
  4: { id: 'tame-impala', src: '/audio/tame-impala.mp3', title: 'New Person, Same Old Mistakes', artist: 'Tame Impala' },
  5: { id: 'eminem', src: '/audio/eminem.mp3', title: 'Without Me', artist: 'Eminem' },
}

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackInfo, setCurrentTrackInfo] = useState({
    id: 'ambient',
    title: 'Party Ambience',
    artist: 'Swedish House Mafia',
  })
  const [activeArtistId, setActiveArtistId] = useState(null)

  // Two audio elements for cross-fading channel A and channel B
  const activeChannelRef = useRef('A')
  const audioARef = useRef(null)
  const audioBRef = useRef(null)
  const fadeAnimRef = useRef(null)

  useEffect(() => {
    audioARef.current = new Audio()
    audioBRef.current = new Audio()

    audioARef.current.loop = true
    audioBRef.current.loop = true

    audioARef.current.volume = 0
    audioBRef.current.volume = 0

    return () => {
      if (audioARef.current) {
        audioARef.current.pause()
        audioARef.current.src = ''
      }
      if (audioBRef.current) {
        audioBRef.current.pause()
        audioBRef.current.src = ''
      }
    }
  }, [])

  // Smooth Cross-Fade Engine (800ms linear ramp)
  const crossFadeTo = useCallback((src, targetVol = 0.65, onFadeInStart) => {
    const fadeDuration = 850
    const currentChannel = activeChannelRef.current
    const nextChannel = currentChannel === 'A' ? 'B' : 'A'

    const currentAudio = currentChannel === 'A' ? audioARef.current : audioBRef.current
    const nextAudio = nextChannel === 'A' ? audioARef.current : audioBRef.current

    if (!currentAudio || !nextAudio) return

    // Cancel any running fade animation
    if (fadeAnimRef.current) {
      cancelAnimationFrame(fadeAnimRef.current)
    }

    const startCurrentVol = currentAudio.volume
    const startTime = performance.now()

    // Setup incoming track
    nextAudio.src = src
    nextAudio.currentTime = 0
    nextAudio.volume = 0
    const playPromise = nextAudio.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
          activeChannelRef.current = nextChannel
          if (onFadeInStart) onFadeInStart()

          const step = now => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / fadeDuration, 1)

            // EaseInOut interpolation for smooth crossfade
            const ease = progress < 0.5
              ? 2 * progress * progress
              : -1 + (4 - 2 * progress) * progress

            if (currentAudio) {
              currentAudio.volume = Math.max(0, startCurrentVol * (1 - ease))
            }
            if (nextAudio) {
              nextAudio.volume = Math.min(targetVol, targetVol * ease)
            }

            if (progress < 1) {
              fadeAnimRef.current = requestAnimationFrame(step)
            } else {
              if (currentAudio) {
                currentAudio.pause()
                currentAudio.volume = 0
              }
              if (nextAudio) {
                nextAudio.volume = targetVol
              }
            }
          }

          fadeAnimRef.current = requestAnimationFrame(step)
        })
        .catch(err => {
          console.warn('Audio playback prevented by browser:', err)
          setIsPlaying(false)
        })
    }
  }, [])

  // Fade out and pause everything
  const fadeOutAndStop = useCallback(() => {
    const fadeDuration = 600
    const currentChannel = activeChannelRef.current
    const currentAudio = currentChannel === 'A' ? audioARef.current : audioBRef.current

    if (!currentAudio || currentAudio.paused) {
      setIsPlaying(false)
      setActiveArtistId(null)
      return
    }

    if (fadeAnimRef.current) {
      cancelAnimationFrame(fadeAnimRef.current)
    }

    const startVol = currentAudio.volume
    const startTime = performance.now()

    const step = now => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / fadeDuration, 1)
      currentAudio.volume = Math.max(0, startVol * (1 - progress))

      if (progress < 1) {
        fadeAnimRef.current = requestAnimationFrame(step)
      } else {
        currentAudio.pause()
        currentAudio.volume = 0
        setIsPlaying(false)
        setActiveArtistId(null)
      }
    }

    fadeAnimRef.current = requestAnimationFrame(step)
  }, [])

  // Play an individual artist's track with smooth fade
  const playArtistTrack = useCallback((artistId) => {
    const track = ARTIST_TRACKS[artistId]
    if (!track) return

    // If already playing this artist, toggle mute/pause back to ambient
    if (activeArtistId === artistId && isPlaying) {
      // Fade back to ambient party music
      setActiveArtistId(null)
      setCurrentTrackInfo({
        id: 'ambient',
        title: 'Party Ambience',
        artist: 'Swedish House Mafia',
      })
      crossFadeTo(AMBIENT_SRC, 0.35)
      return
    }

    setActiveArtistId(artistId)
    setCurrentTrackInfo(track)
    crossFadeTo(track.src, 0.72)
  }, [activeArtistId, isPlaying, crossFadeTo])

  // Play Ambient Party Music with smooth fade
  const playAmbient = useCallback(() => {
    setActiveArtistId(null)
    setCurrentTrackInfo({
      id: 'ambient',
      title: 'Party Ambience',
      artist: 'Swedish House Mafia',
    })
    crossFadeTo(AMBIENT_SRC, 0.35)
  }, [crossFadeTo])

  // Toggle audio (Mute / Unmute global)
  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      fadeOutAndStop()
    } else {
      if (activeArtistId && ARTIST_TRACKS[activeArtistId]) {
        playArtistTrack(activeArtistId)
      } else {
        playAmbient()
      }
    }
  }, [isPlaying, activeArtistId, fadeOutAndStop, playArtistTrack, playAmbient])

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTrackInfo,
        activeArtistId,
        playArtistTrack,
        playAmbient,
        toggleAudio,
      }}
    >
      {children}
    </AudioContext.Provider>
  )
}

export function useAudio() {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
