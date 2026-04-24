import styles from './Specials.module.css';
import DishCard from './DishCard';
import bruchetta from '../../assets/bruchetta.png';
import lemonDessert from '../../assets/lemonDessert.png';
import greekSalad from '../../assets/greekSalad.png';
import { HashLink } from 'react-router-hash-link';


// Import your images here or pass them in the data array

const specialsData = [
  {
    title: "Greek Salad",
    price: "$12.99",
    description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSalad
  },
  {
    title: "Bruchetta",
    price: "$7.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image: bruchetta
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image: lemonDessert
  }
];

function Specials() {
  return (
    <section id="specials" className={styles.specialsSection}>
      <header className={styles.specialsHeader}>
        <h2 className="section-title color-dark">This weeks specials!</h2>
        <HashLink smooth to="/#menu" className="button button-primary section-title pure-black">Online Menu</HashLink>
      </header>

      <div className={styles.cardsGrid}>
        {specialsData.map((dish) => (
          <DishCard
            key={dish.title}
            title={dish.title}
            price={dish.price}
            description={dish.description}
            image={dish.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Specials;