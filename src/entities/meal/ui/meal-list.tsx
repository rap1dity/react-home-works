import styles from './meal-list.module.css';
import { MealCard, useMeals } from '@src/entities/meal';

type MealListProps = {
  addToCart: (value: number) => void;
  activeCategory: string;
};

export const MealList = ({ addToCart, activeCategory }: MealListProps) => {
  const { meals, loading, completed, loadMore } = useMeals(activeCategory);

  return (
    <>
      <div className={styles.productListContainer}>
        {!meals.length && loading ? (
          <p className={styles.loader}>Data loading...</p>
        ) : (
          meals.map(({ id, img, category, meal, instructions, price }) => (
            <MealCard
              key={id}
              src={img}
              alt={category}
              title={meal}
              description={instructions}
              price={price}
              addToCart={addToCart}
            />
          ))
        )}
      </div>
      {!completed && !loading && <button onClick={loadMore}>See more</button>}
    </>
  );
};
