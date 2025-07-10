import styles from './Button.module.css'
import {type FC, memo} from "react";
import type {ButtonProps} from "./Button.props.ts";
import cn from "classnames";


export const Button: FC<ButtonProps> = memo(({children, className, appearance = 'small', ...props}) => {


    return (
        <button className={cn(styles['button'], styles['accent'], className, {
            [styles['small']]: appearance === 'small',
            [styles['big']]: appearance === 'big',
        })} {...props}>
            {children}
        </button>
    );
});