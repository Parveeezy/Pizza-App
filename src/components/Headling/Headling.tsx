import type {HeadlingProps} from "./Headling.props.ts";
import cn from "classnames";
import styles from './Headling.module.css'


export const Headling = ({children, className, ...props}: HeadlingProps) => {
    return (
        <h1 {...props} className={cn(className, styles['h1'])}>
            {children}
        </h1>
    );
};