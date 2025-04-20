import * as styles from './meal-card.module.css';
import React, { useState } from 'react';

export const MealCard = ({ src, alt, title, description, price, addToCart }) => {
  const [mealCount, setMealCount] = useState(0);

  return (
    <div className={styles.product}>
      <img src={src} alt={alt}/>
      <div className={styles.content}>
        <div className={styles.generalInfo}>
          <div className={styles.contentHeader}>
            <span className={styles.contentHeaderTitle}>{title}</span>
            <span className={styles.contentHeaderPrice}>$ {price.toFixed(2)} USD</span>
          </div>
          <p>
            {description}
          </p>
        </div>
        <div className={styles.contentControllers}>
          <input
            type="text"
            inputMode="numeric"
            value={mealCount}
            pattern="[0-9]*"
            onInput={(e) => setMealCount(e.target.value.replace(/\D/g, ''))}
          />
          <button onClick={() => addToCart((prev) => prev + Number(mealCount))}>Add to cart</button>
        </div>
      </div>
    </div>
  )
}
