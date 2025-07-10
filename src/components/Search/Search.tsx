import {forwardRef} from "react";
import cn from "classnames";
import styles from "./Search.module.css";
import type {SearchProps} from "./Search.props.ts";

export const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
    {isValid = true, className, ...props},
    ref
) {
    return (
        <div className={styles['input-wrapper']}>
            <input
                {...props}
                ref={ref}
                className={cn(styles['input'], className, styles["input"], {
                    [styles["invalid"]]: !isValid,
                })}
            />
            <img className={styles['icon']} src="/search.svg" alt="search icon"/>
        </div>
    );
});