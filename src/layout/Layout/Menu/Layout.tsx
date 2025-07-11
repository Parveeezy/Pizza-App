import {NavLink, Outlet, useNavigate} from "react-router-dom";
import styles from './Layout.module.css'
import {Button} from "../../../components/Button/Button.tsx";
import cn from 'classnames'
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../../store/store.ts";
import {logout} from "../../../store/user.slice.ts";

export const Layout = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch<AppDispatch>()

    const logoutHandler = () => {
        dispatch(logout())
        navigate('/auth/login')
    }

    return (
        <div className={styles['layout']}>
            <div className={styles['sidebar']}>
                <div className={styles['user']}>
                    <img src="../../../../public/Avatar.png" alt="" className={styles['avatar']}/>
                    <div>
                        <h2 className={styles['user-name']}>Parviz Shirinov</h2>
                        <p className={styles['user-email']}>email@email.com</p>
                    </div>
                </div>
                <div className={styles['menu']}>
                    <NavLink to="/" className={({isActive}) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                        <img src="../../../../public/Document.svg" alt="Menu"/>
                        Меню
                    </NavLink>
                    <NavLink to="/cart" className={({isActive}) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                        <img src="../../../../public/cart.svg" alt="Cart"/>
                        Корзина
                    </NavLink>
                </div>
                <Button className={styles['exit']} onClick={logoutHandler}>
                    <img src="../../../../public/exit.svg" alt="Exit"/>
                    Выход
                </Button>
            </div>
            <div className={styles['content']}>
                <Outlet/>
            </div>
        </div>
    );
};