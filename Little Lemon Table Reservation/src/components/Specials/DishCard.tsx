/**
 * Single dish tile: image, title, price, description, and an add-to-cart CTA.
 */
import styles from './DishCard.module.css';

export interface DishCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  onAddToCart?: (item: { title: string; price: string }) => void;
}

function DishCard({ image, title, price, description, onAddToCart }: DishCardProps) {
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
        <button
          type="button"
          className={styles.deliveryButton}
          onClick={() => onAddToCart?.({ title, price })}
        >
          <span className="section-body color-dark">Add to cart</span>
        </button>
      </div>
    </article>
  );
}

export default DishCard;