import styles from './order-meal-card.module.css';
import type { Meal } from '@src/shared/types/meals.type.ts';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '@src/entities/cart';

type OrderMealCardProps = {
  meal: Meal;
  quantity: number;
};

export const OrderMealCard = ({ meal, quantity }: OrderMealCardProps) => {
  const dispatch = useDispatch();

  return (
    <div data-testid="order-meal-card" className={styles.orderMealCardContainer}>
      <div className={styles.mealGeneralInfo}>
        <img src={meal.img} alt={meal.meal} />
        <div>{meal.meal}</div>
      </div>
      <div className={styles.mealControls}>
        <div className={styles.mealPrice}>$ {(meal.price * quantity).toFixed(2)} USD</div>
        <div data-testid="order-meal-quantity" className={styles.mealQuantity}>
          {quantity}
        </div>
        <button
          data-testid="order-meal-remove"
          onClick={() => dispatch(removeFromCart(meal.id))}
          className={styles.mealRemove}
        >
          х
        </button>
      </div>
    </div>
  );
};
