import RevealUp from './RevealUp'
import StoryStep from './StoryStep'
import '../styles/rules.css'

const rules = [
  {
    num: '01',
    title: 'Entry & ID',
    desc: 'Valid government-issued photo ID is mandatory for entry. You must be 16+ to attend. Wristbands are non-transferable and must be worn at all times inside the venue.',
  },
  {
    num: '02',
    title: 'Prohibited Items',
    desc: 'No weapons, glass bottles, illegal substances, professional cameras, drones, laser pointers, or fireworks. Outside food & beverages are not permitted.',
  },
  {
    num: '03',
    title: 'Safety & Conduct',
    desc: 'Follow all instructions from event staff and security. Any form of harassment, violence, or disruptive behaviour will result in immediate removal without refund.',
  },
  {
    num: '04',
    title: 'Recording Policy',
    desc: 'Personal phone photography and short video clips are welcome. Professional recording equipment, tripods, and live-streaming without authorisation are strictly prohibited.',
  },
  {
    num: '05',
    title: 'Re-Entry & Refunds',
    desc: 'No re-entry once you exit the venue. Tickets are non-refundable except in the event of cancellation by the organisers. Resale of tickets is not permitted.',
  },
]

export default function Rules() {
  return (
    <section className="story story--rules" id="rules">
      <div className="story__sticky">
        <div className="story__center">
          <RevealUp className="story__kicker">BEFORE YOU ARRIVE</RevealUp>
          <RevealUp as="h2" className="story__heading">
            Rules &amp; Regulations
          </RevealUp>
        </div>
      </div>

      <div className="story__steps">
        {rules.map((r, i) => (
          <StoryStep key={i}>
            <div className="rule-card">
              <span className="rule-card__num">{r.num}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          </StoryStep>
        ))}
      </div>
    </section>
  )
}
