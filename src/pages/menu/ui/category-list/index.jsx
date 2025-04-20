import * as styles from '@src/pages/menu/ui/category-list/category-list.module.css';
import React, { useState } from 'react';

export const CategoryList = ({ categories }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className={styles.categoryContainer}>
      {categories.map((category, index) => (
        <button
          key={index}
          className={activeCategory === index ? styles.active : ''}
          onClick={() => setActiveCategory(index)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
