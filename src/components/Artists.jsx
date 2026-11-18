import RevealUp from './RevealUp'
import AccordionGallery from './AccordionGallery'
import '../styles/artists.css'

const artists = [
  {
    name: 'Arjun Kanungo',
    role: 'Headliner — Pop / Electronic',
    bio: 'Chart-topping vocalist known for electrifying live sets that blur the line between pop and electronic music. His anthems have amassed over 500 million streams worldwide.',
    img: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80',
  },
  {
    name: 'Priya Ragu',
    role: 'Featured — R&B / Soul',
    bio: "A boundary-breaking artist fusing Tamil heritage with contemporary R&B. Her debut EP was crowned one of the year's best by Rolling Stone and BBC Radio.",
    img: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=900&q=80',
  },
  {
    name: 'The Revisit Project',
    role: 'Featured — Indie / Fusion',
    bio: 'An indie powerhouse collective reimagining Bollywood classics with jazz, funk, and electronica. Known for magnetic stage presence and unpredictable live arrangements.',
    img: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900&q=80',
  },
  {
    name: 'Rajakumari',
    role: 'Featured — Hip-Hop / Rap',
    bio: 'Grammy-nominated rapper and songwriter who has penned hits for global superstars. Her fierce lyricism and high-octane performances make every show unforgettable.',
    img: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=900&q=80',
  },
  {
    name: 'Dhruv Visvanath',
    role: 'Featured — Acoustic / Singer-Songwriter',
    bio: 'Award-winning multi-instrumentalist whose percussive guitar style has captivated audiences across four continents. A storyteller who turns strings into poetry.',
    img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=900&q=80',
  },
]

const galleryItems = artists.map(a => ({
  image: a.img,
  label: `${a.name}  —  ${a.role}`,
  alt: a.name
}))

export default function Artists() {
  return (
    <section className="section artists" id="artists">
      <div className="section__inner">
        <RevealUp className="section__kicker">The Lineup</RevealUp>
        <RevealUp as="h2" className="section__title">
          Meet the Artists
        </RevealUp>

        {/* ── Interactive 3D Accordion Gallery from React Bits ── */}
        <RevealUp delay={0.15}>
          <div className="artists__gallery-wrapper">
            <AccordionGallery
              items={galleryItems}
              defaultIndex={0}
              expandRatio={0.52}
              trigger="hover"
              height={500}
              gap={12}
              radius={16}
              accentColor="#e5b364"
              overlayColor="#080503"
              textColor="#ffffff"
              grayscale={true}
              parallax={0.5}
              tilt={8}
            />
          </div>
        </RevealUp>

        {/* ── Performer Information & Bios ── */}
        <div className="artist-bios-grid">
          {artists.map((a, i) => (
            <RevealUp key={i} delay={i * 0.08}>
              <div className="artist-bio-card">
                <div className="artist-bio-card__header">
                  <span className="artist-bio-card__num">0{i + 1}</span>
                  <div>
                    <h3 className="artist-bio-card__name">{a.name}</h3>
                    <p className="artist-bio-card__role">{a.role}</p>
                  </div>
                </div>
                <p className="artist-bio-card__text">{a.bio}</p>
              </div>
            </RevealUp>
          ))}
        </div>
      </div>
    </section>
  )
}
