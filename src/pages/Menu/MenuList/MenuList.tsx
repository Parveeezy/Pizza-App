import ProductCard from "../../../components/ProductCard/ProductCard.tsx";
import type {MenuListProps} from "./MenuList.props.ts";
import styles from './MenuList.module.css'

export const MenuList = ({products}: MenuListProps) => {
    return (
        <div className={styles['wrapper']}>
            {products.map((el) => (
                <ProductCard
                    key={el.id}
                    id={el.id}
                    name={el.name}
                    description={el.ingredients.join(', ')}
                    image={el.image}
                    price={el.price}
                    rating={el.rating}/>
            ))}
        </div>
    )
};