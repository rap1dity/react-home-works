import styles from './order-meal-list.module.css';
import { OrderMealCard } from './order-meal-card.tsx';
import { Meal } from '@src/shared/types/meals.type.ts';

type OrderMealListProps = {
  meals: { meal: Meal; quantity: number }[];
};

export const OrderMealList = ({ meals }: OrderMealListProps) => {
  return (
    <div className={styles.orderMealListContainer}>
      {meals.map(({ meal, quantity }) => (
        <OrderMealCard meal={meal} quantity={quantity} />
      ))}
    </div>
  );
};
