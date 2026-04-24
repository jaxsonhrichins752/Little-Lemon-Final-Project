/**
 * About section on the home page: restaurant story and overlapping chef imagery.
 */
import styles from './About.module.css';
import marioandadrian from '../../assets/MarioandAdrian.png';
import restaurantChef from '../../assets/restaurantChef.png';

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.content}>
        <h1 className="display-title color-dark">Little Lemon</h1>
        <h2 className="subtitle color-dark">Chicago</h2>
        <p className="lead-text color-dark">
          Based in the heart of Chicago, Little Lemon is a family-owned Mediterranean restaurant focused on traditional recipes served with a modern twist. 
        </p>
        <p className="regular-paragraph color-dark">
          Our journey began with a passion for authentic flavors and a desire to bring the vibrant spirit of the Mediterranean to our local community. From our hand-crafted small plates to our signature grilled entrees, every dish is prepared with fresh, locally sourced ingredients and a touch of heritage.
        </p>
      </div>
      
      <figure className={styles.imageContainer}>
        <img 
          src={marioandadrian} 
          alt="Mario and Adrian cooking" 
          className={styles.imageTop} 
        />
        <img 
          src={restaurantChef} 
          alt="Chef presenting a dish" 
          className={styles.imageBottom} 
        />
      </figure>
    </section>
  );
}

export default About;