import logo from '@assets/logo.svg';
import cart from '@assets/cart.svg';
import styles from './header.module.css';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { RootState } from '@src/app/providers/store/config.ts';
import { NAV_TABS } from '@src/shared/config/nav-tabs.ts';

export const Header = () => {
  const location = useLocation();
  const cartItemsCount = useSelector((store: RootState) => store.cart.count);
  const isAuthenticated = useSelector((store: RootState) => store.auth.isAuthorized);

  const visibleTabs = NAV_TABS.filter((tab) => {
    if (tab.onlyForAuth && !isAuthenticated) return false;
    if (tab.onlyForGuests && isAuthenticated) return false;
    return true;
  });

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="logo" />
        <div className={styles.navContainer}>
          <nav className={styles.navMenu}>
            {visibleTabs.map(({ label, path }) => (
              <Link key={path} to={path} className={location.pathname === path ? styles.active : ''}>
                {label}
              </Link>
            ))}
          </nav>
          <div data-count={cartItemsCount} className={styles.cartContainer}>
            <img src={cart} alt="cart" />
          </div>
        </div>
      </div>
    </header>
  );
};
