import { useState, useEffect } from 'react'
import FixedBackground from './components/FixedBackground'
import Loader from './components/Loader'
import Nav from './components/Nav'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import StorySection from './components/StorySection'
import Artists from './components/Artists'
import Rules from './components/Rules'
import Details from './components/Details'
import Tickets from './components/Tickets'
import Footer from './components/Footer'
import AudioPlayer from './components/AudioPlayer'
import { AudioProvider } from './context/AudioContext'

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [heroReady, setHeroReady] = useState(false)

  useEffect(() => {
    // Stage 1: Apple-style slow loader entrance
    const loadTimer = setTimeout(() => {
      setLoaded(true)
      // Stage 2: Staggered slow blurred-out hero reveal begins as loader dissolves
      const heroTimer = setTimeout(() => {
        setHeroReady(true)
      }, 350)
      return () => clearTimeout(heroTimer)
    }, 1900)

    return () => clearTimeout(loadTimer)
  }, [])

  return (
    <AudioProvider>
      <FixedBackground />
      <Loader hidden={loaded} />
      <Nav ready={heroReady} />
      <ProgressBar />
      <Hero ready={heroReady} />
      {/* <StorySection /> */}
      <Artists />
      <Rules />
      <Details />
      <Tickets />
      <Footer />
      <AudioPlayer />
    </AudioProvider>
  )
}
