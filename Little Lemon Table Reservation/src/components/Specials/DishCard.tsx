import styles from './DishCard.module.css';
import bikeIcon from '../../assets/bikeicon.svg'; // Path to your delivery icon

function DishCard({ image, title, price, description }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.dishImage} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardHeader}>
          <h3 className="card-title color-dark">{title}</h3>
          <span className="highlight-text color-primary-yellow">{price}</span>
        </div>
        <p className="regular-paragraph color-dark">{description}</p>
        <button className={styles.deliveryButton}>
          <span className="section-body color-dark">Order a delivery</span>
          <img src={bikeIcon} alt="Delivery icon" />
        </button>
      </div>
    </article>
  );
}

export default DishCard;