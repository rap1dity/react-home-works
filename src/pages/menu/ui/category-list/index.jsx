import * as styles from '@src/pages/menu/ui/category-list/category-list.module.css';

export const CategoryList = ({ activeCategory, setActiveCategory, categories }) => {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category, index) => (
        <button
          key={index}
          className={activeCategory === category ? styles.active : ''}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
