import { Header } from '@src/widgets/header';
import { MenuPage } from '@src/pages/menu';
import styles from './app.module.css';
import { Footer } from '@src/widgets/footer';
import { HomePage } from '@src/pages/home';
import { LoginPage } from '@src/pages/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAuthorized } from '@src/entities/auth';
import { RootState } from '@src/app/providers/store/config.ts';
import { OrderPage } from '@src/pages/order';

export const App = () => {
  const isAuthenticated = useSelector((store: RootState) => store.auth.isAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      dispatch(setAuthorized());
    }
  }, [dispatch]);

  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/company" element={<div>Company Info</div>} />
          {isAuthenticated ? (
            <Route path="/order" element={<OrderPage />} />
          ) : (
            <Route path="/login" element={<LoginPage />} />
          )}
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
