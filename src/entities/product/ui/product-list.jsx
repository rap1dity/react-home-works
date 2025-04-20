import * as styles from './product-list.module.css';
import { ProductCard } from '@src/entities/product';
import React, { useEffect, useState } from 'react';
import { mealsApi } from '@src/shared/api/v1/meals/index.js';

export const ProductList = ({ addToCart }) => {
  const [meals, setMeals] = useState([]);
  const [apiPagination, setApiPagination] = useState({
    limit: 6,
    page: 1,
    completed: false,
  })


  useEffect(() => {
    const fetchData = async () => {
      await loadMeals();
    }

    fetchData();
  }, []);

  const loadMeals = async () => {
    if (apiPagination.completed) {
      return;
    }

    const response = await mealsApi.getMeals({
      limit: apiPagination.limit,
      page: apiPagination.page,
    });

    setMeals((prev) => [...prev, ...response]);
    setApiPagination((prev) => ({
        ...prev,
        page: prev.page + 1,
        completed: response.length !== prev.limit
      })
    )
  }


  return (
    <>
      <div className={styles.productListContainer}>
        {meals.length
          ? meals.map(({ id, img, category, meal, instructions, price }) => (
            <ProductCard
              key={id}
              src={img}
              alt={category}
              title={meal}
              description={instructions}
              price={price}
              addToCart={addToCart}
            />
          ))
          : <p className={styles.loader}>Data loading...</p>}
      </div>
      {!apiPagination.completed && <button onClick={loadMeals}>See more</button>}
    </>
  )
}
