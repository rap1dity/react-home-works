import styles from './meal-list.module.css';
import { MealCard, useMeals } from '@src/entities/meal';
import { useSelector } from 'react-redux';

export const MealList = () => {
  const activeCategory = useSelector((store: { menu: { category: string } }) => store.menu.category);
  const { meals, loading, completed, loadMore } = useMeals(activeCategory);

  return (
    <>
      <div className={styles.productListContainer}>
        {!meals.length && loading ? (
          <p className={styles.loader}>Data loading...</p>
        ) : (
          meals.map((meal) => <MealCard key={meal.id} meal={meal} />)
        )}
      </div>
      {!completed && !loading && <button onClick={loadMore}>See more</button>}
    </>
  );
};
