import {type ReactNode} from "react";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import type {RootState} from "../store/store.ts";

export const RequireAuth = ({children}: { children: ReactNode }) => {
    const jwt = useSelector<RootState>(state => state.user.jwt)
    if (!jwt) {
        return <Navigate to={'/auth/login'} replace/>
    }
    return children
};
