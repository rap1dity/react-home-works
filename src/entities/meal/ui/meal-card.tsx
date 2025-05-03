import styles from './meal-card.module.css';
import { ChangeEvent, useState } from 'react';
import { addToCart } from '@src/entities/cart';
import { useDispatch } from 'react-redux';
import { Meal } from '@src/shared/types/meals.type.ts';

type MealCardProps = {
  meal: Meal;
};

export const MealCard = ({ meal }: MealCardProps) => {
  const [mealCount, setMealCount] = useState('0');
  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <img src={meal.img} alt={meal.meal} />
      <div className={styles.content}>
        <div className={styles.generalInfo}>
          <div className={styles.contentHeader}>
            <span className={styles.contentHeaderTitle}>{meal.meal}</span>
            <span className={styles.contentHeaderPrice}>$ {meal.price.toFixed(2)} USD</span>
          </div>
          <p>{meal.instructions}</p>
        </div>
        <div className={styles.contentControllers}>
          <input
            type="text"
            inputMode="numeric"
            value={mealCount}
            pattern="[0-9]*"
            onInput={(e: ChangeEvent<HTMLInputElement>) => {
              setMealCount(e.target.value.replace(/\D/g, ''));
            }}
          />
          <button onClick={() => dispatch(addToCart({ meal, count: +mealCount }))}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
