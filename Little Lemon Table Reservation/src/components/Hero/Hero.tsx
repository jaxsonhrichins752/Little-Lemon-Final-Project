import styles from './Hero.module.css'
import heroImage from '../../assets/heroImage.svg'
import { Link } from 'react-router-dom'

function Hero() {

    return (
      <section id="home" className={styles.heroBackground}>
      <div className={styles.heroContainer}>
        <div className={styles.heroText}>
          <h1 className="display-title primary-yellow">Little Lemon</h1>
          <h2 className="subtitle light-highlight">Chicago</h2>
          <p className="lead-text light-highlight">
            We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
          </p>
          <Link to="/reservations" className={`button button-primary section-title pure-black ${styles.heroButton}`}>
            Reserve a Table
          </Link>
        </div>
        <div className={styles.heroImageContainer}>
          <img src={heroImage} alt="Delicious Mediterranean food" className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}

export default Hero