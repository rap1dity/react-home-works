import styles from './order-page.module.css';
import { OrderForm, OrderMealList, selectCartMeals } from '@src/entities/cart';
import { useSelector } from 'react-redux';

export const OrderPage = () => {
  const meals = useSelector(selectCartMeals);

  return (
    <main className={styles.orderPageContainer}>
      {!!meals.length ? (
        <>
          <h2>Finish your order</h2>
          <OrderMealList meals={meals} />
          <OrderForm />
        </>
      ) : (
        <p>Cart is Empty</p>
      )}
    </main>
  );
};
