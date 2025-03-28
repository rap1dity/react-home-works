import * as styles from "./category-list.module.css";
import { useState } from "react";

export const CategoryList = ({ categories }) => {
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className={styles.categoryContainer}>
            {categories.map((category, index) => (
                <span
                    key={index}
                    className={activeCategory === index ? styles.active : ''}
                    onClick={() => setActiveCategory(index)}
                >
                    {category}
                </span>
            ))}
        </div>
    )
}
