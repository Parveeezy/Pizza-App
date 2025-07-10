import styles from "../AuthLayout/AuthLayout.module.css";
import {Outlet} from "react-router-dom";

export const AuthLayout = () => {
    return (
        <div className={styles['layout']}>
            <div className={styles['logo']}>
                <img src="/Logo.svg" alt="logo"/>
            </div>

            <div className={styles['content']}>
                <Outlet/>
            </div>
        </div>
    );
};