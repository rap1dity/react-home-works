import * as styles from "@src/entities/product/ui/product-card.module.css";

export const ProductCard = ({ src, alt, title, price, description }) => {
    return (
        <div className={styles.product}>
            <img src={src} alt={alt} />
            <div className={styles.content}>
                <div className={styles.contentHeader}>
                    <span className={styles.contentHeaderTitle}>{title}</span>
                    <span className={styles.contentHeaderPrice}>$ {price.toFixed(2)} USD</span>
                </div>
                <p>
                    {description}
                </p>
                <div className={styles.contentControllers}>
                    <input
                        type='text'
                        inputMode='numeric'
                        defaultValue='0'
                        pattern='[0-9]*'
                        onInput={(e) => {
                            e.target.value = e.target.value.replace(/\D/g, '')
                        }}
                    />
                    <button>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
