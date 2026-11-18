import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react'

const AudioContext = createContext(null)

const AMBIENT_SRC = '/audio/ambient-party.mp3'
const AMBIENT_INFO = {
  id: 'ambient',
  title: 'Mammoth (Tomorrowland Anthem)',
  artist: 'Dimitri Vegas & Like Mike',
}

const ARTIST_TRACKS = {
  1: { id: 'the-weeknd', src: '/audio/the-weeknd.mp3', title: 'Starboy (feat. Daft Punk)', artist: 'The Weeknd' },
  2: { id: 'linkin-park', src: '/audio/linkin-park.mp3', title: 'In the End', artist: 'Linkin Park' },
  3: { id: 'kendrick-lamar', src: '/audio/kendrick-lamar.mp3', title: 'HUMBLE.', artist: 'Kendrick Lamar' },
  4: { id: 'tame-impala', src: '/audio/tame-impala.mp3', title: 'New Person, Same Old Mistakes', artist: 'Tame Impala' },
  5: { id: 'eminem', src: '/audio/eminem.mp3', title: 'Without Me', artist: 'Eminem' },
}

export function AudioProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTrackInfo, setCurrentTrackInfo] = useState(AMBIENT_INFO)
  const [activeArtistId, setActiveArtistId] = useState(null)
  const [pinnedArtistId, setPinnedArtistId] = useState(null)

  const isPlayingRef = useRef(false)
  const pinnedArtistIdRef = useRef(null)
  const hoverTimeoutRef = useRef(null)

  // Keep refs synchronized
  useEffect(() => {
    isPlayingRef.current = isPlaying
  }, [isPlaying])

  useEffect(() => {
    pinnedArtistIdRef.current = pinnedArtistId
  }, [pinnedArtistId])

  // Dual HTML5 audio channels for seamless linear volume cross-fades
  const activeChannelRef = useRef('A')
  const audioARef = useRef(null)
  const audioBRef = useRef(null)
  const fadeAnimRef = useRef(null)

  useEffect(() => {
    const a = new Audio()
    const b = new Audio()

    a.loop = true
    b.loop = true
    a.volume = 0
    b.volume = 0

    audioARef.current = a
    audioBRef.current = b

    return () => {
      a.pause()
      a.src = ''
      b.pause()
      b.src = ''
    }
  }, [])

  // Smooth Cross-Fade Engine (650ms smooth curve)
  const crossFadeTo = useCallback((src, targetVol = 0.65) => {
    const fadeDuration = 680
    const currentChannel = activeChannelRef.current
    const nextChannel = currentChannel === 'A' ? 'B' : 'A'

    const currentAudio = currentChannel === 'A' ? audioARef.current : audioBRef.current
    const nextAudio = nextChannel === 'A' ? audioARef.current : audioBRef.current

    if (!currentAudio || !nextAudio) return

    if (fadeAnimRef.current) {
      cancelAnimationFrame(fadeAnimRef.current)
    }

    const startCurrentVol = currentAudio.volume
    const startTime = performance.now()

    nextAudio.src = src
    nextAudio.currentTime = 0
    nextAudio.volume = 0
    const playPromise = nextAudio.play()

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true)
          isPlayingRef.current = true
          activeChannelRef.current = nextChannel

          const step = now => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / fadeDuration, 1)

            // Smooth cubic ease-in-out
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
          console.warn('Audio playback waiting for user gesture:', err.message)
        })
    }
  }, [])

  // Fade out everything and stop
  const fadeOutAndStop = useCallback(() => {
    const fadeDuration = 550
    const currentChannel = activeChannelRef.current
    const currentAudio = currentChannel === 'A' ? audioARef.current : audioBRef.current

    if (!currentAudio || currentAudio.paused) {
      setIsPlaying(false)
      isPlayingRef.current = false
      setActiveArtistId(null)
      setPinnedArtistId(null)
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
        isPlayingRef.current = false
        setActiveArtistId(null)
        setPinnedArtistId(null)
      }
    }

    fadeAnimRef.current = requestAnimationFrame(step)
  }, [])

  // Play Default Tomorrowland Party Music
  const playAmbient = useCallback(() => {
    setActiveArtistId(null)
    setPinnedArtistId(null)
    setCurrentTrackInfo(AMBIENT_INFO)
    crossFadeTo(AMBIENT_SRC, 0.45)
  }, [crossFadeTo])

  // Hover over an artist -> Smoothly preview their song (with 100ms debounce to prevent brush jumps)
  const previewArtistOnHover = useCallback((artistId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    hoverTimeoutRef.current = setTimeout(() => {
      const track = ARTIST_TRACKS[artistId]
      if (!track) return

      setActiveArtistId(artistId)
      setCurrentTrackInfo(track)
      crossFadeTo(track.src, 0.72)
    }, 120)
  }, [crossFadeTo])

  // Mouse leaves artist card -> Return smoothly to default Tomorrowland music unless pinned
  const leaveArtistPreview = useCallback(() => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    // Only return to ambient if user hasn't explicitly clicked/pinned an artist
    if (!pinnedArtistIdRef.current) {
      hoverTimeoutRef.current = setTimeout(() => {
        playAmbient()
      }, 180)
    }
  }, [playAmbient])

  // Click on an artist -> Lock/pin their song or toggle
  const clickArtistTrack = useCallback((artistId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }

    // If already pinned, unpin and return to Tomorrowland default
    if (pinnedArtistId === artistId) {
      setPinnedArtistId(null)
      playAmbient()
      return
    }

    const track = ARTIST_TRACKS[artistId]
    if (!track) return

    setPinnedArtistId(artistId)
    setActiveArtistId(artistId)
    setCurrentTrackInfo(track)
    crossFadeTo(track.src, 0.74)
  }, [pinnedArtistId, playAmbient, crossFadeTo])

  // Global toggle (Mute / Play)
  const toggleAudio = useCallback(() => {
    if (isPlaying) {
      fadeOutAndStop()
    } else {
      if (pinnedArtistId && ARTIST_TRACKS[pinnedArtistId]) {
        clickArtistTrack(pinnedArtistId)
      } else {
        playAmbient()
      }
    }
  }, [isPlaying, pinnedArtistId, fadeOutAndStop, clickArtistTrack, playAmbient])

  // Start Tomorrowland default audio on the very first user interaction anywhere
  useEffect(() => {
    const handleFirstGesture = () => {
      if (!isPlayingRef.current) {
        playAmbient()
      }
      window.removeEventListener('click', handleFirstGesture)
      window.removeEventListener('keydown', handleFirstGesture)
      window.removeEventListener('touchstart', handleFirstGesture)
    }

    window.addEventListener('click', handleFirstGesture, { once: true })
    window.addEventListener('keydown', handleFirstGesture, { once: true })
    window.addEventListener('touchstart', handleFirstGesture, { once: true })

    return () => {
      window.removeEventListener('click', handleFirstGesture)
      window.removeEventListener('keydown', handleFirstGesture)
      window.removeEventListener('touchstart', handleFirstGesture)
    }
  }, [playAmbient])

  return (
    <AudioContext.Provider
      value={{
        isPlaying,
        currentTrackInfo,
        activeArtistId,
        pinnedArtistId,
        previewArtistOnHover,
        leaveArtistPreview,
        clickArtistTrack,
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
