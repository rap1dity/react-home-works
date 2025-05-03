import styles from './category-list.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { MEAL_CATEGORIES } from '@src/shared/const/categories.ts';
import { setCategory } from '@src/entities/menu';

export const CategoryList = () => {
  const activeCategory = useSelector((store: { menu: { category: string } }) => store.menu.category);
  const dispatch = useDispatch();

  return (
    <div className={styles.categoryContainer}>
      {MEAL_CATEGORIES.map((category, index) => (
        <button
          key={index}
          className={activeCategory === category ? styles.active : ''}
          onClick={() => dispatch(setCategory(category))}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
