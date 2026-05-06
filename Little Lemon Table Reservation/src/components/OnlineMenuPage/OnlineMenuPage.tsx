/**
 * Full menu route: banner, dish-type filter chips, and gallery grid using `DishCard`.
 */
import { useMemo, useState } from 'react';
import DishCard from '../Specials/DishCard';
import styles from './OnlineMenuPage.module.css';
import bannerImage from '../../assets/restaurant 1.png';
import {
  DISH_TYPE_LABELS,
  MENU_DISHES,
  type DishType,
} from '../../data/menuDishes';

type FilterValue = 'all' | DishType;

const DISH_TYPE_ORDER = Object.keys(DISH_TYPE_LABELS) as DishType[];

function OnlineMenuPage() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('all');

  const filteredDishes = useMemo(
    () =>
      MENU_DISHES.filter(
        (d) => activeFilter === 'all' || d.dishType === activeFilter
      ),
    [activeFilter]
  );

  return (
    <div className={styles.page}>
      <section className={styles.banner} aria-labelledby="online-menu-heading">
        <div className={styles.bannerText}>
          <h1 id="online-menu-heading" className="display-title primary-yellow">
            Order Online
          </h1>
          <h2 className="subtitle light-highlight">Little Lemon Chicago</h2>
        </div>
        <img
          src={bannerImage}
          alt="Restaurant dining room"
          className={styles.bannerImage}
        />
      </section>

      <div className={styles.content}>
        <div
          className={styles.chipRow}
          role="group"
          aria-label="Filter menu by course"
        >
          <button
            type="button"
            className={`${styles.chip} ${activeFilter === 'all' ? styles.chipActive : ''}`}
            onClick={() => setActiveFilter('all')}
            aria-pressed={activeFilter === 'all'}
          >
            All
          </button>
          {DISH_TYPE_ORDER.map((type) => (
            <button
              key={type}
              type="button"
              className={`${styles.chip} ${activeFilter === type ? styles.chipActive : ''}`}
              onClick={() => setActiveFilter(type)}
              aria-pressed={activeFilter === type}
            >
              {DISH_TYPE_LABELS[type]}
            </button>
          ))}
        </div>

        {filteredDishes.length === 0 ? (
          <p className={`regular-paragraph color-dark ${styles.emptyState}`}>
            No dishes in this category yet.
          </p>
        ) : (
          <div className={styles.cardsGrid}>
            {filteredDishes.map((dish) => (
              <DishCard
                key={dish.id}
                title={dish.title}
                price={dish.price}
                description={dish.description}
                image={dish.image}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default OnlineMenuPage;
