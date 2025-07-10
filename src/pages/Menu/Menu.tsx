import {Headling} from "../../components/Headling/Headling.tsx";
import {Search} from "../../components/Search/Search.tsx";
import styles from "./Menu.module.css"
import ProductCard from "../../components/ProductCard/ProductCard.tsx";
import {PREFIX} from "../../healpers/API.ts";
import type {Product} from "../../interfaces/product.interface.ts";
import {useEffect, useState} from "react";
import axios from "axios";

const Menu = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const getMenu = async () => {
        try {
            await new Promise<void>((res) => {
                setTimeout(() => {
                    res()
                }, 5000)
            })
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`)
            setProducts(data)
        } catch (err) {
            console.log(err)
            return
        }
    }

    useEffect(() => {
        getMenu()
    }, [])

    return (
        <>
            <div className={styles['head']}>
                <Headling> Меню</Headling>
                <Search placeholder='Введите блюдо или состав'/>
            </div>
            <div className={styles['products']}>
                {products.map(el => (
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
        </>
    );
};

export default Menu;