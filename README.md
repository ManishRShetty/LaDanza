# LaDanza✦ — Live Concert Experience

> **An ultra-premium, dark-mode fictional mega-concert landing website.**  
> Crafted with an editorial dark amber and metallic gold aesthetic, cinematic Apple-style blur animations, and a globally fixed atmospheric concert stage.

---

## 🌟 Overview

**LaDanza** is a fictional live music experience conceived as the ultimate dream arena event. The website is engineered to immerse visitors from the moment they enter with slow, blurred-out preloader dissolves, metallic script typography, and interactive headliner showcases featuring world-class superstars.

Designed &amp; Developed by **Nexus**.

---

## 🎤 Headlining Lineup

LaDanza brings together 5 global icons across distinct musical dimensions onto one legendary stage:

| # | Artist | Role / Style | Iconic Highlights |
|---|--------|--------------|-------------------|
| **01** | **The Weeknd** | Global Pop & Synthwave Visionary | *After Hours*, *Dawn FM*, "Blinding Lights", "Starboy" |
| **02** | **Linkin Park** | Alternative Rock Pioneers | *Hybrid Theory*, *Meteora*, *From Zero*, "In the End", "Numb" |
| **03** | **Kendrick Lamar** | Hip-Hop Luminary & Cultural Titan | *DAMN.*, *good kid, m.A.A.d city*, Pulitzer Prize & 17x Grammys |
| **04** | **Tame Impala** | Psychedelic Sound Architect | *Currents*, *The Slow Rush*, "The Less I Know The Better" |
| **05** | **Eminem** | Rap God & Global Hip-Hop Legend | *The Marshall Mathers LP*, *The Eminem Show*, "Lose Yourself", "Without Me" |

### Lineup Visual Features:
- **Paper-Cut Silhouette Treatment**: Portrait cutouts with smooth bottom gradient fadeouts (`linear-gradient(180deg, black 65%, transparent 100%)`) seamlessly melting into the stage floor without boxy card borders.
- **Monochrome to Stage Warmth**: High-contrast black & white silhouettes by default that bloom into full vibrant stage color with an amber backlight aura when hovered or tapped.
- **Active Performer Spotlight**: Dedicated real-time display below the cards showing the active artist's role, genre signature, and editorial biography.

---

## ✨ Key Architectural & Design Features

### 1. Global Fixed Concert Stage (`FixedBackground`)
- The concert atmosphere remains **globally fixed** (`position: fixed`) behind the entire site.
- High-contrast, dark arena visual featuring thousands of phone lights, deep audience silhouettes, and overhead warm golden spotlights.
- Multi-stop dark vignette gradient (`#080503` base) ensuring crisp contrast and legibility for all foreground content.

### 2. Apple-Style Slow De-Blur Arrival Animations (`RevealUp`)
- Signature slow de-blur arrivals across every component:
  ```css
  filter: blur(32px) brightness(1.6);
  transform: translateY(35px) scale(0.96);
  /* Transitions to blur(0px), translateY(0), scale(1) via cubic-bezier(0.16, 1, 0.3, 1) */
  ```
- Built with custom IntersectionObserver hooks (`useReveal.js`) for lightweight, buttery 60fps performance without heavy animation bundles.

### 3. Hero Reference Poster Reproduction
- Metallic gold gradient title **`LaDanza`** styled in the DaFont **Moduley** script typeface.
- Framing gold eyebrow: `─── A LIVE CONCERT EXPERIENCE ───`.
- Custom SVG celestial orbit swoosh with a glowing 4-point sparkle star (`✦`).
- Luminous glass capsule CTA button with breathing golden lens flare and sweep animation.

### 4. Rules & Guidelines Grid
- 5 dark glassmorphic cards (`Entry & Identity`, `Prohibited Items`, `Code of Conduct`, `Safety & Medical`, `Photography`) with Carmila serif numerals (`01`–`05`) and golden category tags.

### 5. Event Logistics & Details
- Clean 4-card overview covering Date (`18 — 19 December 2026`), Venue (`Sir Manish Shetty Stadium, Mangalore`), Tickets (`Starting from ₹20,000`), and Parking/Transit guidance.

### 6. Interactive Ticket Tier Selection (`Tickets`)
- **Starting from ₹20,000**:
  - **Silver Arena** (₹20,000) — General admission floor & lower bowl access.
  - **Golden Circle VIP** (₹38,000) — Front-stage priority enclosure, fast-track lane, and exclusive Gold Lounge.
  - **Diamond All-Access** (₹75,000) — Elevated suite viewing, backstage tour, complimentary dining, and open bar.
- Interactive tier selection, live quantity selector (1–6 passes), real-time total calculator, and animated checkout reservation button.

### 7. Smooth Fading Cross-Fade Audio Engine (`AudioPlayer` & `AudioContext`)
- **Default Tomorrowland Mainstage Anthem**: Plays the festival hymn *"Mammoth"* by Dimitri Vegas & Like Mike, MOGUAI on first user gesture with a floating glassmorphic controller and animated golden equalizer waves (`||||`).
- **Hover & Click Artist Audio Playback**:
  - **Hovering** over any headliner's card or name pill smoothly cross-fades into their song!
  - **Leaving hover** smoothly cross-fades back to the Tomorrowland anthem.
  - **Clicking** an artist card locks/pins their song to keep playing.
  - Roster:
    - **The Weeknd**: "Starboy (feat. Daft Punk)"
    - **Linkin Park**: "In The End"
    - **Kendrick Lamar**: "HUMBLE."
    - **Tame Impala**: "New Person, Same Old Mistakes"
    - **Eminem**: "Without Me"
- **680ms Smooth Linear Interpolation**: Seamless, continuous volume cross-fade between tracks without harsh cuts or clicks.

### 7. Smooth Fading Cross-Fade Audio Engine (`AudioPlayer` & `AudioContext`)
- **Default Tomorrowland Mainstage Anthem**: Plays the festival hymn *"Mammoth"* by Dimitri Vegas & Like Mike, MOGUAI on first user gesture with a floating glassmorphic controller and animated golden equalizer waves (`||||`).
- **Hover & Click Artist Audio Playback**:
  - **Hovering** over any headliner's card or name pill smoothly cross-fades into their song!
  - **Leaving hover** smoothly cross-fades back to the Tomorrowland anthem.
  - **Clicking** an artist card locks/pins their song to keep playing.
  - Roster:
    - **The Weeknd**: "Starboy (feat. Daft Punk)"
    - **Linkin Park**: "In The End"
    - **Kendrick Lamar**: "HUMBLE."
    - **Tame Impala**: "New Person, Same Old Mistakes"
    - **Eminem**: "Without Me"
- **680ms Smooth Linear Interpolation**: Seamless, continuous volume cross-fade between tracks without harsh cuts or clicks.

---

## 🎨 Design System & Tokens

| Element | Specification |
|---------|---------------|
| **Background Base** | `--bg: #080503` (deep warm onyx / charcoal) |
| **Accent Gold** | `--accent: #e5b364`, `--accent-bright: #f5d696`, `--accent-dim: #ca9846` |
| **Surface Glass** | `rgba(18, 10, 5, 0.75)` with `backdrop-filter: blur(12px)` |
| **Primary Script** | `'Moduley', cursive` *(Hero brand, navbar logo, preloader)* |
| **Editorial Serif** | `'Carmila', Georgia, serif` *(Section headings, numerals, spotlight titles)* |
| **Body Font** | `'Inter', system-ui, sans-serif` |

---

## 🛠️ Tech Stack & Directory Structure

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: Handcrafted Modern CSS (Zero bulky UI libraries, customized design tokens)
- **Local Media Assets**: Fast local delivery inside `public/images/`

```text
Novera/
├── public/
│   ├── fonts/
│   │   └── moduley.otf             # Custom Moduley script font
│   └── images/
│       ├── artists/                # Web-optimized headliner portraits
│       │   ├── the-weeknd.jpg
│       │   ├── linkin-park.jpg
│       │   ├── kendrick-lamar.jpg
│       │   ├── tame-impala.jpg
│       │   └── don-toliver.jpg
│       └── bg/
│           └── concert-bg.jpg      # High-contrast fixed arena background
├── src/
│   ├── components/
│   │   ├── Artists.jsx             # 5 Headliners interactive gallery & spotlight
│   │   ├── Tickets.jsx             # Interactive ticket tier selection starting from ₹20,000
│   │   ├── Details.jsx             # Event date, venue, tickets, and parking
│   │   ├── FixedBackground.jsx     # Globally fixed concert stage & spotlights
│   │   ├── Footer.jsx              # Links, legal, copyright, and developer credits
│   │   ├── BuiltByBadge.jsx        # Minimal signature footer bar linked to portfolio
│   │   ├── Hero.jsx                # Poster reproduction with Moduley title & orbit
│   │   ├── Loader.jsx              # Apple-style de-blur preloader with bloom
│   │   ├── Nav.jsx                 # Fixed glassmorphic navigation bar
│   │   ├── ProgressBar.jsx         # Top hairline reading progress indicator
│   │   ├── RevealUp.jsx            # Scroll-triggered blur arrival wrapper
│   │   └── Rules.jsx               # Luxury 5-card rules & guidelines grid
│   ├── hooks/
│   │   ├── useReveal.js            # IntersectionObserver scroll reveal hook
│   │   └── useScrollProgress.js    # Window scroll progress tracking
│   ├── styles/                     # Dedicated modular component stylesheets
│   ├── App.jsx                     # Root application assembly
│   └── main.jsx                    # Vite React entrypoint
├── index.html                      # HTML root, Google Fonts preloads, metadata
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.0.0 or higher recommended)
- `npm` or `pnpm`

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/ladanza.git
cd ladanza

# Install dependencies
npm install
```

### Development Server
```bash
# Start the local development server with HMR
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build
```bash
# Compile and optimize production bundle
npm run build

# Preview the production build locally
npm run preview
```

---

## 👥 Credits

- **Event Concept**: LaDanza 2026
- **Creator / Built by**: [Manish R. Shetty](https://manishramshetty.vercel.app)
- **Engineering & Design**: Nexus
