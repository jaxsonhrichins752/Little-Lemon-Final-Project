import styles from './Footer.module.css';
import logo from '../../assets/footer-logo.png'; // Assuming you have a standard footer logo

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
              <li><a href="#home" className="paragraph-text pure-white">Home</a></li>
              <li><a href="#about" className="paragraph-text pure-white">About</a></li>
              <li><a href="/menu" className="paragraph-text pure-white">Menu</a></li>
              <li><a href="/reservations" className="paragraph-text pure-white">Reservations</a></li>
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