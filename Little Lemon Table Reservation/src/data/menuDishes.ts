/**
 * Frontend-only menu source. Add dishes here; each row must set `dishType` for filters.
 */
import bruchetta from '../assets/bruchetta.png';
import lemonDessert from '../assets/lemonDessert.png';
import greekSalad from '../assets/greekSalad.png';
import heroImage from '../assets/heroImage.png';
import restaurantChef from '../assets/restaurantChef.png';

export type DishType = 'appetizer' | 'main' | 'dessert';

export const DISH_TYPE_LABELS: Record<DishType, string> = {
  appetizer: 'Appetizers',
  main: 'Mains',
  dessert: 'Desserts',
};

export interface MenuDish {
  id: string;
  dishType: DishType;
  title: string;
  price: string;
  description: string;
  image: string;
}

export const MENU_DISHES: MenuDish[] = [
  {
    id: 'bruschetta',
    dishType: 'appetizer',
    title: 'Bruschetta',
    price: '$7.99',
    description:
      'Grilled bread rubbed with garlic, olive oil, and salt—served with ripe tomatoes and fresh basil.',
    image: bruchetta,
  },
  {
    id: 'hummus-pita',
    dishType: 'appetizer',
    title: 'Hummus & Pita',
    price: '$6.50',
    description:
      'Creamy chickpea dip with tahini and lemon, served with warm grilled pita wedges.',
    image: greekSalad,
  },
  {
    id: 'dolmades',
    dishType: 'appetizer',
    title: 'Stuffed Grape Leaves',
    price: '$8.25',
    description:
      'Rice, herbs, and lemon wrapped in tender grape leaves, finished with a drizzle of olive oil.',
    image: restaurantChef,
  },
  {
    id: 'greek-salad',
    dishType: 'main',
    title: 'Greek Salad',
    price: '$12.99',
    description:
      'Crispy lettuce, peppers, olives, and Chicago-style feta with garlic rosemary croutons.',
    image: greekSalad,
  },
  {
    id: 'grilled-sea-bass',
    dishType: 'main',
    title: 'Grilled Sea Bass',
    price: '$24.00',
    description:
      'Whole fillet with lemon, capers, and herbs, served with roasted vegetables and olive oil potatoes.',
    image: heroImage,
  },
  {
    id: 'lamb-kebab',
    dishType: 'main',
    title: 'Lamb Kebab Plate',
    price: '$22.50',
    description:
      'Marinated lamb skewers with tzatziki, herb rice, and a small Greek village salad.',
    image: bruchetta,
  },
  {
    id: 'lemon-dessert',
    dishType: 'dessert',
    title: 'Lemon Dessert',
    price: '$5.00',
    description:
      "From grandma's recipe book—authentic ingredients in a light, tangy citrus finish.",
    image: lemonDessert,
  },
  {
    id: 'baklava',
    dishType: 'dessert',
    title: 'Baklava',
    price: '$6.50',
    description:
      'Layers of phyllo, honey, and spiced walnuts—a classic Mediterranean sweet.',
    image: lemonDessert,
  },
];
