import * as styles from '@src/pages/menu/ui/category-list/category-list.module.css';
import React from 'react';

export class CategoryList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeCategory: 0,
    }
  }

  setActiveCategory(newCategory) {
    this.setState({ activeCategory: newCategory });
  }

  render() {
    return (
      <div className={styles.categoryContainer}>
        {this.props.categories.map((category, index) => (
          <button
            key={index}
            className={this.state.activeCategory === index ? styles.active : ''}
            onClick={() => this.setActiveCategory(index)}
          >
            {category}
          </button>
        ))}
      </div>
    )
  }
}
