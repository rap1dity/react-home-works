import logo from '/assets/logo.svg'
import cart from '/assets/cart.svg'
import * as styles from './header.module.css'
import React from 'react';

const tabs = ['Home', 'Menu', 'Company', 'Login'];

export class Header extends React.Component {
  render() {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src={logo} alt="logo"/>
          <div className={styles.navContainer}>
            <nav className={styles.navMenu}>
              {tabs.map((tab, index) => (
                <span
                  key={index}
                  className={index === this.props.activeTab ? styles.active : ''}
                  onClick={() => this.props.setActiveTab(index)}
                >
                  {tab}
                </span>
              ))}
            </nav>
            <div data-count={this.props.cartItemsCount} className={styles.cartContainer}>
              <img src={cart} alt="cart"/>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
