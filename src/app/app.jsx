import { Header } from '@src/widgets/header';
import { MenuPage } from '@src/pages/menu'
import React from 'react';
import * as styles from './app.module.css';
import { Footer } from '@src/widgets/footer/index.js';
import { HomePage } from '@src/pages/home';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      cartItemsCount: 0,
    }

    this.setActiveTab = this.setActiveTab.bind(this);
    this.addToCart = this.addToCart.bind(this);
  }

  setActiveTab(newActiveTab) {
    this.setState({
      ...this.state,
      activeTab: newActiveTab,
    })
  }

  addToCart(count) {
    this.setState({
      ...this.state,
      cartItemsCount: this.state.cartItemsCount + Number(count),
    })
  }

  render() {
    return (
      <div className={styles.container}>
        <Header
          cartItemsCount={this.state.cartItemsCount}
          activeTab={this.state.activeTab}
          setActiveTab={this.setActiveTab}
        />
        {this.state.activeTab === 0 && <HomePage/>}
        {this.state.activeTab === 1 && <MenuPage addToCart={this.addToCart}/>}
        <Footer/>
      </div>
    )
  }
}
