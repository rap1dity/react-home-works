import styles from './meal-card.module.css';
import { ChangeEvent, useState } from 'react';
import { addToCart } from '@src/entities/cart';
import { useDispatch } from 'react-redux';

type MealCardProps = {
  src: string;
  alt: string;
  title: string;
  description: string;
  price: number;
};

export const MealCard = ({ src, alt, title, description, price }: MealCardProps) => {
  const [mealCount, setMealCount] = useState('0');
  const dispatch = useDispatch();

  return (
    <div className={styles.product}>
      <img src={src} alt={alt} />
      <div className={styles.content}>
        <div className={styles.generalInfo}>
          <div className={styles.contentHeader}>
            <span className={styles.contentHeaderTitle}>{title}</span>
            <span className={styles.contentHeaderPrice}>$ {price.toFixed(2)} USD</span>
          </div>
          <p>{description}</p>
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
          <button onClick={() => dispatch(addToCart(+mealCount))}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};
