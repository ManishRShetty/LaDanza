import RevealUp from './RevealUp'
import '../styles/artists.css'

const artists = [
  {
    name: 'Arjun Kanungo',
    role: 'Headliner — Pop / Electronic',
    bio: 'Chart-topping vocalist known for electrifying live sets that blur the line between pop and electronic music. His anthems have amassed over 500 million streams worldwide.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&q=80',
  },
  {
    name: 'Priya Ragu',
    role: 'Featured — R&B / Soul',
    bio: 'A boundary-breaking artist fusing Tamil heritage with contemporary R&B. Her debut EP was crowned one of the year\'s best by Rolling Stone and BBC Radio.',
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80',
  },
  {
    name: 'The Revisit Project',
    role: 'Featured — Indie / Fusion',
    bio: 'An indie powerhouse collective reimagining Bollywood classics with jazz, funk, and electronica. Known for magnetic stage presence and unpredictable live arrangements.',
    img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80',
  },
  {
    name: 'Rajakumari',
    role: 'Featured — Hip-Hop / Rap',
    bio: 'Grammy-nominated rapper and songwriter who has penned hits for global superstars. Her fierce lyricism and high-octane performances make every show unforgettable.',
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=600&q=80',
  },
  {
    name: 'Dhruv Visvanath',
    role: 'Featured — Acoustic / Singer-Songwriter',
    bio: 'Award-winning multi-instrumentalist whose percussive guitar style has captivated audiences across four continents. A storyteller who turns strings into poetry.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&q=80',
  },
]

export default function Artists() {
  return (
    <section className="section artists" id="artists">
      <div className="section__inner">
        <RevealUp className="section__kicker">The Lineup</RevealUp>
        <RevealUp as="h2" className="section__title">Meet the Artists</RevealUp>

        <div className="artist-grid">
          {artists.map((a, i) => (
            <RevealUp key={i} delay={i * 0.08}>
              <article className="artist-card">
                <div className="artist-card__img-wrap">
                  <img src={a.img} alt={a.name} className="artist-card__img" loading="lazy" />
                </div>
                <div className="artist-card__body">
                  <h3 className="artist-card__name">{a.name}</h3>
                  <p className="artist-card__role">{a.role}</p>
                  <p className="artist-card__bio">{a.bio}</p>
                </div>
              </article>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  )
}
