import RevealUp from './RevealUp'
import '../styles/rules.css'

const rules = [
  {
    num: '01',
    tag: 'ADMISSION',
    title: 'Entry & Government ID',
    desc: 'Valid government-issued photo ID is mandatory for admission. Attendees must be 16+. Wristbands issued at the gate are non-transferable and must remain securely worn throughout the concert.',
  },
  {
    num: '02',
    tag: 'RESTRICTED',
    title: 'Prohibited Items',
    desc: 'Weapons, glass bottles, illegal substances, professional camera rigs, drones, laser pointers, and fireworks are strictly forbidden. Outside food and beverages are not permitted.',
  },
  {
    num: '03',
    tag: 'PROTOCOL',
    title: 'Safety & Conduct',
    desc: 'Follow all directives from event security and medical staff. Any harassment, intoxication, or disorderly behavior will prompt immediate venue ejection without refund.',
  },
  {
    num: '04',
    tag: 'MEDIA',
    title: 'Recording Policy',
    desc: 'Personal mobile photography and short celebratory video clips are welcome. Professional recording equipment, tripods, and unauthorized commercial live-streams are strictly prohibited.',
  },
  {
    num: '05',
    tag: 'TICKETING',
    title: 'Re-Entry & Refunds',
    desc: 'No re-entry once you exit the arena gates. All ticket sales are final and non-refundable, except in the event of official cancellation declared by event organizers.',
  },
]

export default function Rules() {
  return (
    <section className="section rules" id="rules">
      <div className="section__inner">
        <RevealUp className="section__kicker" delay={0.05}>
          BEFORE YOU ARRIVE
        </RevealUp>
        <RevealUp as="h2" className="section__title" delay={0.15}>
          Rules &amp; Regulations
        </RevealUp>

        <div className="rules-grid">
          {rules.map((r, i) => (
            <RevealUp key={r.num} delay={0.1 + i * 0.08}>
              <div className="rule-card">
                <div className="rule-card__top">
                  <span className="rule-card__num">{r.num}</span>
                  <span className="rule-card__tag">{r.tag}</span>
                </div>
                <h3 className="rule-card__title">{r.title}</h3>
                <p className="rule-card__desc">{r.desc}</p>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  )
}
