/**
 * Site footer: repeated navigation, contact block, and social links.
 */
import styles from './Footer.module.css';
import logo from '../../assets/footer-logo.png';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Little Lemon small logo" className={styles.logo} />
      </div>

      <div className={styles.contentGrid}>
        <div className={styles.gridColumn}>
          <h4 className="card-title primary-yellow">Navigation</h4>
          <nav aria-label='Footer Navigation'>
            <ul className={styles.linkList}>
              <li><HashLink smooth to="/#home" className="regular-paragraph light-highlight">Home</HashLink></li>
              <li><HashLink smooth to="/#about" className="regular-paragraph light-highlight">About</HashLink></li>
              <li><HashLink smooth to="/#menu" className="regular-paragraph light-highlight">Menu</HashLink></li>
              <li><Link to="/reservations" className="regular-paragraph light-highlight">Reservations</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.gridColumn}>
          <h4 className="card-title primary-yellow">Contact</h4>
          <address>
            <p className="regular-paragraph light-highlight">
              123 Main St,<br />
              Chicago, IL 60601
            </p>
            <p className="regular-paragraph light-highlight">(555) 123-4567</p>
            <p className="regular-paragraph light-highlight">info@littlelemon.com</p>
          </address>
        </div>

        <div className={styles.gridColumn}>
          <h4 className="card-title primary-yellow">Social Media</h4>
          <ul className={styles.linkList}>
            <li><a href="https://facebook.com" className="regular-paragraph light-highlight">Facebook</a></li>
            <li><a href="https://instagram.com" className="regular-paragraph light-highlight">Instagram</a></li>
            <li><a href="https://twitter.com" className="regular-paragraph light-highlight">X / Twitter</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;