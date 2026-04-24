/**
 * One testimonial: star rating (repeated icons), avatar, name, and quoted text.
 */
import styles from './ReviewCard.module.css';
import starIcon from '../../assets/starIcon.png'; // Assuming you have a star icon

interface ReviewProps {
  rating: number;
  image: string;
  name: string;
  reviewText: string;
}

function ReviewCard({ rating, image, name, reviewText }: ReviewProps) {
  // Create an array based on the rating number to map out stars
  const stars = Array.from({ length: rating }, (_, i) => i);

  return (
    <article className={styles.card}>
      <div className={styles.rating} aria-label={`${rating} out of 5 stars`}>
        {stars.map((star) => (
          <img key={star} src={starIcon} alt="" className={styles.star} aria-hidden="true" />
        ))}
      </div>
      <div className={styles.userProfile}>
        <img src={image} alt={name} className={styles.userPhoto} />
        <h3 className="card-title color-dark">{name}</h3>
      </div>
      <p className="testimonial color-dark">"{reviewText}"</p>
    </article>
  );
}

export default ReviewCard;