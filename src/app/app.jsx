import { Header } from '@src/widgets/header';
import { MenuPage } from '@src/pages/menu'
import React, { useState } from 'react';
import * as styles from './app.module.css';
import { Footer } from '@src/widgets/footer/index.js';
import { HomePage } from '@src/pages/home';
import { LoginPage } from '@src/pages/login';

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  return (
    <div className={styles.container}>
      <Header
        cartItemsCount={cartItemsCount}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      {activeTab === 0 && <HomePage/>}
      {activeTab === 1 && <MenuPage addToCart={setCartItemsCount}/>}
      {activeTab === 3 && <LoginPage />}
      <Footer/>
    </div>
  )
}
