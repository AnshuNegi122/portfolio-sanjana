import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <i className="fas fa-balance-scale"></i>
              <h3>Sanjana Bisht Legal</h3>
            </div>
            <p>
              Dedicated legal advocacy with a proven track record of success. Protecting your rights with integrity and
              excellence.
            </p>
            <div className="social-links">
              <a href="#" aria-label="LinkedIn">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>
              <i className="fas fa-link"></i>
              Quick Links
            </h4>
            <ul>
              <li>
                <a href="#home">
                  <i className="fas fa-home"></i>
                  Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i className="fas fa-user"></i>
                  About
                </a>
              </li>
              <li>
                <a href="#services">
                  <i className="fas fa-briefcase"></i>
                  Services
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i className="fas fa-envelope"></i>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              <i className="fas fa-gavel"></i>
              Legal Services
            </h4>
            <ul>
              <li>
                <a href="#">
                  <i className="fas fa-balance-scale"></i>
                  Civil Litigation
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-user-injured"></i>
                  Personal Injury
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-briefcase"></i>
                  Employment Law
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fas fa-shield-alt"></i>
                  Criminal Defense
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              <i className="fas fa-map-marker-alt"></i>
              Contact Info
            </h4>
            <div className="contact-info">
              <p>
                <i className="fas fa-map-marker-alt"></i>
                123 Legal Plaza, Suite 500
                <br />
                Downtown District, NY 10001
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                Hall no 6, Near Court no 8, District & Sessions
                Court, Gurgaon, HR 122001
              </p>
              <p>
                <i className="fas fa-phone"></i>
                (555) 123-4567
              </p>
              <p>
                <i className="fas fa-envelope"></i>
                Sanjana@Bishtlegal.com
              </p>
              <p>
                <i className="fas fa-clock"></i>
                Mon-Fri: 8AM-6PM
              </p>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            <i className="fas fa-copyright"></i>
            2024 Sanjana Bisht Legal. All rights reserved.
          </p>
          <div className="footer-links">
            <a href="#">
              <i className="fas fa-shield-alt"></i>
              Privacy Policy
            </a>
            <a href="#">
              <i className="fas fa-file-contract"></i>
              Terms of Service
            </a>
            <a href="#">
              <i className="fas fa-exclamation-triangle"></i>
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
