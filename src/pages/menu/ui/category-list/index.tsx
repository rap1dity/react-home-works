import styles from '@src/pages/menu/ui/category-list/category-list.module.css';

type CategoryListProps = {
  activeCategory: string;
  setActiveCategory: (value: string) => void;
  categories: string[];
};

export const CategoryList = ({ activeCategory, setActiveCategory, categories }: CategoryListProps) => {
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
  );
};
