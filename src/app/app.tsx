import { Header } from '@src/widgets/header';
import { MenuPage } from '@src/pages/menu';
import { useState } from 'react';
import styles from './app.module.css';
import { Footer } from '@src/widgets/footer';
import { HomePage } from '@src/pages/home';
import { LoginPage } from '@src/pages/login';

export const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={styles.container}>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 0 && <HomePage />}
      {activeTab === 1 && <MenuPage />}
      {activeTab === 3 && <LoginPage />}
      <Footer />
    </div>
  );
};
