import RevealUp from './RevealUp'
import StoryStep from './StoryStep'
import '../styles/story.css'

export default function StorySection() {
  return (
    <section className="story" id="story-intro">
      <div className="story__sticky">
        <div className="story__center">
          <RevealUp className="story__kicker">THE EXPERIENCE</RevealUp>
          <RevealUp as="h2" className="story__heading">
            One Stage. Infinite Energy.
          </RevealUp>
        </div>
      </div>

      <div className="story__steps">
        <StoryStep>
          <p>
            NOVERA is not just a concert — it's a sensory journey crafted for
            those who live and breathe music. Feel every beat reverberate through
            the crowd under a sky lit by lasers and light.
          </p>
        </StoryStep>

        <StoryStep>
          <p>
            Two nights. Five headliners. Thousands of hearts beating as one.
            This December, Bangalore transforms into the epicentre of live music.
          </p>
        </StoryStep>

        <StoryStep>
          <p>
            Whether you're in the front row or swaying at the back, every corner
            of NOVERA is designed to move you.
          </p>
        </StoryStep>
      </div>
    </section>
  )
}
