import '../styles/footer.css'

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h2 className="footer__logo">NOVERA</h2>
          <p className="footer__tagline">A Live Concert Experience</p>
        </div>

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
              <li><a href="#">contact@novera.live</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; 2026 NOVERA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
