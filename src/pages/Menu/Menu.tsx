import {Headling} from "../../components/Headling/Headling.tsx";
import {Search} from "../../components/Search/Search.tsx";
import styles from "./Menu.module.css"
import {PREFIX} from "../../healpers/API.ts";
import type {Product} from "../../interfaces/product.interface.ts";
import {useEffect, useState} from "react";
import axios, {AxiosError} from "axios";
import {MenuList} from "./MenuList/MenuList.tsx";


const Menu = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [error, setError] = useState<string | undefined>('')

    const getMenu = async () => {
        try {
            setIsLoading(true)
            const {data} = await axios.get<Product[]>(`${PREFIX}/products`)
            setProducts(data)
        } catch (err) {
            if(err instanceof AxiosError) {
                console.log(err)
                setError(err.message)
            }
            return
        } finally {
            setIsLoading(false)
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
            <div>
                {error && <div>{error}</div>}
                {!isLoading && <MenuList products={products} />}
                {isLoading && <>Loading</>}
            </div>
        </>
    );
};

export default Menu;