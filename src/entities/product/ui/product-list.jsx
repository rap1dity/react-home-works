import * as styles from './product-list.module.css';
import { ProductCard } from '@src/entities/product';
import React from 'react';
import { mealsApi } from '@src/shared/api/v1/meals/index.js';

export class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      meals: [],
      limit: 6,
      page: 1,
      completed: false,
    }

    this.loadMeals = this.loadMeals.bind(this);
  }

  async componentDidMount() {
    await this.loadMeals();
  }

  async loadMeals() {
    if (this.state.completed) {
      return;
    }

    const response = await mealsApi.getMeals({
      limit: this.state.limit,
      page: this.state.page,
      offset: this.state.offset,
    });

    this.setState({
      ...this.state,
      meals: [...this.state.meals, ...response],
      page: this.state.page + 1,
      ...(response.length !== this.state.limit ? { completed: true } : {})
    })
  }


  render() {
    return (
      <>
        <div className={styles.productListContainer}>
          {this.state.meals.length
            ? this.state.meals.map(({ id, img, category, meal, instructions, price }) => (
                <ProductCard
                  key={id}
                  src={img}
                  alt={category}
                  title={meal}
                  description={instructions}
                  price={price}
                  addToCart={this.props.addToCart}
                />
              ))
            : <p className={styles.loader}>Data loading...</p>}
        </div>
        {!this.state.completed && <button onClick={this.loadMeals}>See more</button>}
      </>
    )
  }
}
