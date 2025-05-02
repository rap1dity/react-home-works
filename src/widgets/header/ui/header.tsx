import logo from '@assets/logo.svg';
import cart from '@assets/cart.svg';
import styles from './header.module.css';

const tabs = ['Home', 'Menu', 'Company', 'Login'];

type HeaderProps = {
  activeTab: number;
  setActiveTab: (index: number) => void;
  cartItemsCount: number;
};

export const Header = ({ activeTab, setActiveTab, cartItemsCount }: HeaderProps) => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <img src={logo} alt="logo" />
        <div className={styles.navContainer}>
          <nav className={styles.navMenu}>
            {tabs.map((tab, index) => (
              <span
                key={index}
                className={index === activeTab ? styles.active : ''}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </span>
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
