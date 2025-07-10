import type {InputHTMLAttributes} from "react";

export interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
    isValid?: boolean
}