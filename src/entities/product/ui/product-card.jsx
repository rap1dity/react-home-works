import * as styles from '@src/entities/product/ui/product-card.module.css';
import React from 'react';

export class ProductCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mealCount: 0,
    }

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({ mealCount: e.target.value.replace(/\D/g, '') })
  }

  render() {
    return (
      <div className={styles.product}>
        <img src={this.props.src} alt={this.props.alt}/>
        <div className={styles.content}>
          <div className={styles.generalInfo}>
            <div className={styles.contentHeader}>
              <span className={styles.contentHeaderTitle}>{this.props.title}</span>
              <span className={styles.contentHeaderPrice}>$ {this.props.price.toFixed(2)} USD</span>
            </div>
            <p>
              {this.props.description}
            </p>
          </div>
          <div className={styles.contentControllers}>
            <input
              type="text"
              inputMode="numeric"
              value={this.state.mealCount}
              pattern="[0-9]*"
              onInput={this.handleInput}
            />
            <button onClick={() => this.props.addToCart(this.state.mealCount)}>Add to cart</button>
          </div>
        </div>
      </div>
    )
  }
}
