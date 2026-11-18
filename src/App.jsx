import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Nav from './components/Nav'
import ProgressBar from './components/ProgressBar'
import Hero from './components/Hero'
import StorySection from './components/StorySection'
import Artists from './components/Artists'
import Rules from './components/Rules'
import Details from './components/Details'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1400)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Loader hidden={loaded} />
      <Nav />
      <ProgressBar />
      <Hero />
      {/* <StorySection /> */}
      <Artists />
      <Rules />
      <Details />
      <CTA />
      <Footer />
    </>
  )
}
