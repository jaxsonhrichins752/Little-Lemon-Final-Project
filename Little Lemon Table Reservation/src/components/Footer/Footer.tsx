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
          <nav>
            <ul className={styles.linkList}>
              <li><HashLink smooth to="/#home" className="paragraph-text pure-white">Home</HashLink></li>
              <li><HashLink smooth to="/#about" className="paragraph-text pure-white">About</HashLink></li>
              <li><HashLink smooth to="/#menu" className="paragraph-text pure-white">Menu</HashLink></li>
              <li><Link to="/reservations" className="paragraph-text pure-white">Reservations</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.gridColumn}>
          <h4 className="card-title primary-yellow">Contact</h4>
          <p className="paragraph-text pure-white">
            123 Main St,<br />
            Chicago, IL 60601
          </p>
          <p className="paragraph-text pure-white">(555) 123-4567</p>
          <p className="paragraph-text pure-white">info@littlelemon.com</p>
        </div>

        <div className={styles.gridColumn}>
          <h4 className="card-title primary-yellow">Social Media</h4>
          <ul className={styles.linkList}>
            <li><a href="https://facebook.com" className="paragraph-text pure-white">Facebook</a></li>
            <li><a href="https://instagram.com" className="paragraph-text pure-white">Instagram</a></li>
            <li><a href="https://twitter.com" className="paragraph-text pure-white">X / Twitter</a></li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}

export default Footer;