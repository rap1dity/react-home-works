import burgerDreams from '/assets/burgers/burger-dreams.png';
import burgerWaldo from '/assets/burgers/burger-waldo.png';
import burgerCali from '/assets/burgers/burger-cali.png';
import burgerBaconBuddy from '/assets/burgers/burger-bacon-buddy.png';
import burgerSpicy from '/assets/burgers/burger-spicy.png';
import burgerClassic from '/assets/burgers/burger-classic.png';
import * as styles from './menu-page.module.css'
import { ProductList } from '@src/entities/product';
import { UiTooltip } from '@src/shared/ui/ui-tooltip';
import { CategoryList } from '@src/entities/category';

const products = [
    { id: '049339e6-a9d9-452b-bfad-4be5e3fa811b', title: 'Burger Dreams', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 9.20, src: burgerDreams, alt: 'Burger'},
    { id: '049339e6-a9d9-452b-bfad-4be5e3fa8112', title: 'Burger Waldo', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 10.00, src: burgerWaldo, alt: 'Burger'},
    { id: '049339e6-a9d9-452b-bfad-4be5e3fa8113', title: 'Burger Cali', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 8.00, src: burgerCali, alt: 'Burger'},
    { id: '049339e6-a9d9-452b-bfad-4be5e3fa8114', title: 'Burger Bacon Buddy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 9.99, src: burgerBaconBuddy, alt: 'Burger'},
    { id: '049339e6-a9d9-452b-bfad-4be5e3fa8115', title: 'Burger Spicy', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 9.20, src: burgerSpicy, alt: 'Burger'},
    { id: '049339e6-a9d9-452b-bfad-4be5e3fa8116', title: 'Burger Classic', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', price: 8.00, src: burgerClassic, alt: 'Burger'},
]

const categories = ['Desert', 'Dinner', 'Breakfast'];

export const MenuPage = () => {
    return (
        <main className={styles.menuPageContainer}>
            <h1>Browse our menu</h1>
            <div className={styles.description}>
                <p>
                    Use our menu to place an order online, or&nbsp;
                    <UiTooltip content="+48739238866">
                        <span>phone</span>
                    </UiTooltip>
                    &nbsp;our store to place a pickup order. Fast and fresh food.
                </p>
            </div>
            <CategoryList categories={categories} />
            <ProductList products={products} />
            <button>See more</button>
        </main>
    )
}
