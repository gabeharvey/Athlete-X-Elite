import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">©2024 <span className="tilt-prism-footer">Athlete X Elite LLC</span>. All Rights Reserved.</div>
        <nav className="footer-nav">
          <ul className="footer-links">
            <li className="footer-item">
              <Link to="/contact" className="footer-link">Contact</Link>
            </li>
            <li className="footer-item">
              <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
