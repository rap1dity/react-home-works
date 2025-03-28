import * as styles from './product-list.module.css';
import { ProductCard } from '@src/entities/product';

export const ProductList = ({ products }) => {

    return (
        <div className={styles.productListContainer}>
            {products.map(({ id, src, alt, title, description, price}) => (
                <ProductCard
                    key={id}
                    src={src}
                    alt={alt}
                    title={title}
                    description={description}
                    price={price}
                />
            ))}
        </div>
    )
}
