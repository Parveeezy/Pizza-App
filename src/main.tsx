import {lazy, StrictMode, Suspense} from 'react'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Cart from "./pages/Cart/Cart.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import {Layout} from "./layout/Layout/Menu/Layout.tsx";
import {Product} from "./pages/Product/Product.tsx";
import axios from "axios";
import {PREFIX} from "./healpers/API.ts";
import {AuthLayout} from "./layout/Layout/AuthLayout/AuthLayout.tsx";
import {Login} from "./pages/Login/Login.tsx";
import Register from "./pages/Register/Register.tsx";
import {RequireAuth} from "./healpers/RequireAuth.tsx";
import {createRoot} from "react-dom/client";

const Menu = lazy(() => import('./pages/Menu/Menu'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <RequireAuth><Layout/></RequireAuth>,
        children: [
            {
                path: '/',
                element:
                    <Suspense fallback={<>Loading...</>}>
                        <Menu/>
                    </Suspense>,
            }, {
                path: '/cart',
                element: <Cart/>,
            }, {
                path: '/product/:id',
                element: <Product/>,
                errorElement: <ErrorPage/>,
                loader: async ({params}) => {
                    const {data} = await axios.get(`${PREFIX}/products/${params.id}`)
                    return data
                }
            },

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout/>,
        children: [
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    },

])


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
