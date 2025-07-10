import {forwardRef} from "react";
import styles from "./Input.module.css";
import cn from "classnames";
import type {InputProps} from "./Input.props.ts";

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
    {isValid = true, className, ...props},
    ref
) {
    return (
        <input
            {...props}
            ref={ref}
            className={cn(styles['input'], className, styles["input"], {
                [styles["invalid"]]: !isValid,
            })}
        />
    );
});
