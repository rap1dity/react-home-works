import styles from './menu-page.module.css';
import { MealList } from '@src/entities/meal';
import { UiTooltip } from '@src/shared/ui/ui-tooltip';
import { CategoryList } from './category-list';
import { useState } from 'react';

const categories = ['Dessert', 'Dinner', 'Breakfast'];

type MenuPageProps = {
  addToCart: (value: number) => void;
};

export const MenuPage = ({ addToCart }: MenuPageProps) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <main className={styles.menuPageContainer}>
      <h1>Browse our menu</h1>
      <div className={styles.description}>
        <p>
          Use our menu to place an order online, or&nbsp;
          <UiTooltip content="+48739238866">
            <span>phone</span>
          </UiTooltip>
          &nbsp;our store to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <CategoryList activeCategory={activeCategory} setActiveCategory={setActiveCategory} categories={categories} />
      <MealList activeCategory={activeCategory} addToCart={addToCart} />
    </main>
  );
};
