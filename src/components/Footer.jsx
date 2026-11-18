import RevealUp from './RevealUp'
import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <RevealUp delay={0.1}>
          <div className="footer__brand">
            <h2 className="footer__logo">LaDanza</h2>
            <p className="footer__tagline">A Live Concert Experience</p>
          </div>
        </RevealUp>

        <RevealUp delay={0.25}>
          <div className="footer__columns">
            <div className="footer__col">
              <h4>Navigate</h4>
              <ul>
                <li><a href="#hero">Home</a></li>
                <li><a href="#artists">Artists</a></li>
                <li><a href="#rules">Rules</a></li>
                <li><a href="#details">Details</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Legal</h4>
              <ul>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund Policy</a></li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Connect</h4>
              <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter / X</a></li>
                <li><a href="#">YouTube</a></li>
                <li><a href="#">contact@ladanza.live</a></li>
              </ul>
            </div>
          </div>
        </RevealUp>

        <RevealUp delay={0.4}>
          <div className="footer__bottom">
            <p>&copy; 2026 LADANZA. All rights reserved.</p>
            <div className="footer__credit">
              <p>Designed &amp; Developed by <strong>Nexus SIT</strong></p>
              <div className="footer__devs">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Developer 1</a>
                <span className="footer__dev-dot" />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Developer 2</a>
                <span className="footer__dev-dot" />
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Developer 3</a>
              </div>
            </div>
          </div>
        </RevealUp>
      </div>
    </footer>
  )
}
