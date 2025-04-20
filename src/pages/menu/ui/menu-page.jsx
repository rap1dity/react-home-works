import * as styles from './menu-page.module.css'
import { ProductList } from '@src/entities/product';
import { UiTooltip } from '@src/shared/ui/ui-tooltip';
import { CategoryList } from './category-list';
import React from 'react';

const categories = ['Dessert', 'Dinner', 'Breakfast'];

export const MenuPage = ({ addToCart }) => {
  return (
    <main className={styles.menuPageContainer}>
      <h1>Browse our menu</h1>
      <div className={styles.description}>
        <p>
          Use our menu to place an order online, or&nbsp;
          <UiTooltip content="+48739238866">
            <span>phone</span>
          </UiTooltip>
          &nbsp;our store to place a pickup order. Fast and fresh food.
        </p>
      </div>
      <CategoryList categories={categories}/>
      <ProductList addToCart={addToCart}/>
    </main>
  )
}
