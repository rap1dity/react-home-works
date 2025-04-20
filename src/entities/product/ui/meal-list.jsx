import * as styles from './meal-list.module.css';
import { MealCard } from '@src/entities/product';
import React from 'react';
import { useMeals } from '@src/entities/product/model/use-meals.js';

export const MealList = ({ addToCart, activeCategory }) => {
  const {
    meals,
    loading,
    completed,
    loadMore
  } = useMeals(activeCategory);

  return (
    <>
      <div className={styles.productListContainer}>
        {!meals.length && loading
          ? <p className={styles.loader}>Data loading...</p>
          : meals.map(({ id, img, category, meal, instructions, price }) => (
            <MealCard
              key={id}
              src={img}
              alt={category}
              title={meal}
              description={instructions}
              price={price}
              addToCart={addToCart}
            />
          ))}
      </div>
      {!completed && !loading && <button onClick={loadMore}>See more</button>}
    </>
  )
}
