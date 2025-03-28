import logo from '/assets/logo.svg'
import cart from '/assets/cart.svg'
import * as styles from './header.module.css'

const tabs = ['Home', 'Menu', 'Company', 'Login'];

export const Header = ({activeTab, setActiveTab}) => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src={logo} alt='logo' />
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
                    <div data-count={0} className={styles.cartContainer}>
                        <img src={cart} alt='cart' />
                    </div>
                </div>
            </div>
        </header>
    )
}
