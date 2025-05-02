import { Header } from '@src/widgets/header';
import { MenuPage } from '@src/pages/menu';
import { useState } from 'react';
import styles from './app.module.css';
import { Footer } from '@src/widgets/footer';
import { HomePage } from '@src/pages/home';
import { LoginPage } from '@src/pages/login';

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItemsToCart = (count: number) => {
    setCartItemsCount(cartItemsCount + count);
  };

  return (
    <div className={styles.container}>
      <Header cartItemsCount={cartItemsCount} activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <HomePage />}
      {activeTab === 1 && <MenuPage addToCart={addItemsToCart} />}
      {activeTab === 3 && <LoginPage />}
      <Footer />
    </div>
  );
};
