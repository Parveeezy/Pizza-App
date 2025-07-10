import ProductCard from "../../../components/ProductCard/ProductCard.tsx";
import type {MenuListProps} from "./MenuList.props.ts";

export const MenuList = ({products}: MenuListProps) => {
    return products.map((el) => (
        <ProductCard
            key={el.id}
            id={el.id}
            name={el.name}
            description={el.ingredients.join(', ')}
            image={el.image}
            price={el.price}
            rating={el.rating}/>
    ))
};