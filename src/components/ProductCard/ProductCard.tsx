import type {ProductCardProps} from "./ProductCard.props.ts";
import styles from './ProductCard.module.css'
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../store/store.ts";
import {add} from "../../store/cart.slice.ts";
import {type MouseEvent} from "react";


const ProductCard = (props: ProductCardProps) => {
    const {id, name, description, price, rating, image} = props
    const dispatch = useDispatch<AppDispatch>()
    const addToCart = (e: MouseEvent): void => {
        e.preventDefault()
        dispatch(add(props.id))
    }

    return (
        <Link to={`/product/${id}`} className={styles['link']}>
            <div className={styles['card']}>
                <div className={styles['head']} style={{backgroundImage: `url("${image}")`}}>
                    <div className={styles['price']}>
                        {price}&nbsp;
                        <span className={styles['currency']}>₽</span>
                    </div>
                    <button className={styles['add-to-cart']} onClick={addToCart}>
                        <img src="/add-to-card.svg" alt="add to cart"/>
                    </button>
                    <div className={styles['rating']}>
                        {rating}&nbsp;
                        <img src="/rating.svg" alt="star icon"/>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['title']}>{name}</div>
                    <div className={styles['description']}>{description}</div>
                </div>
            </div>

        </Link>
    );
};

export default ProductCard;