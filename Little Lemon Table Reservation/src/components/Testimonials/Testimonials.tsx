/**
 * Customer testimonials section: maps static review data to `ReviewCard` components.
 */
import styles from './Testimonials.module.css';
import ReviewCard from './ReviewCard';
import Liam from '../../assets/Liam.png';
import Anita from '../../assets/Anita.png';
import Marcus from '../../assets/Marcus.png';
import Jordan from '../../assets/Jordan.png';

const testimonialsData = [
  {
    rating: 5,
    name: "Liam",
    image: Liam,
    reviewText: "The atmosphere here is incredible. I've been looking for a consistent spot for weekend dinners, and this exceeded every expectation."
  },
  {
    rating: 5,
    name: "Anita",
    image: Anita,
    reviewText: "I'm quite picky about authentic flavors, but the menu here is truly impressive. Everything was fresh and beautifully presented."
  },
  {
    rating: 5,
    name: "Marcus",
    image: Marcus,
    reviewText: "Great value for the price. It's hard to find a place that balances quality and speed so well. The staff made us feel right at home."
  },
  {
    rating: 5,
    name: "Jordan",
    image: Jordan,
    reviewText: "An absolute gem! The attention to detail in every dish is obvious. It's the perfect location for a special night out."
  }
];

function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <h2 className={`display-title primary-yellow ${styles.title}`}>Testimonials</h2>
      <div className={styles.grid}>
        {testimonialsData.map((review) => (
          <ReviewCard
            key={review.name}
            rating={review.rating}
            name={review.name}
            image={review.image}
            reviewText={review.reviewText}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonials;