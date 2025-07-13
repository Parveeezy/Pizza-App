import axios from 'axios';
import { Suspense, lazy, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter, defer } from 'react-router-dom';

import { PREFIX } from '@/helpers/API';
import { RequireAuth } from '@/helpers/RequireAuth';
import { AuthLayout } from '@/layout/Auth/AuthLayout';
import { Layout } from '@/layout/Menu/Layout';
import { Cart } from '@/pages/Cart/Cart';
import { Error } from '@/pages/Error/Error';
import { Login } from '@/pages/Login/Login';
import { Product } from '@/pages/Product/Product';
import { Register } from '@/pages/Register/Register';
import { Success } from '@/pages/Success/Success';
import { store } from '@/store/store';


const Menu = lazy(() => import('./pages/Menu/Menu'));

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<RequireAuth>
				<Layout />
			</RequireAuth>
		),
		children: [
			{
				path: '/',
				element: (
					<Suspense fallback={<>Загрузка...</>}>
						<Menu />
					</Suspense>
				),
			},
			{
				path: '/success',
				element: <Success />
      },
			{
				path: '/cart',
				element: <Cart />
      },
			{
				path: '/product/:id',
				element: <Product />,
				errorElement: <>Ошибка</>,
				loader: async ({ params }) => {
					return defer({
						data: await new Promise((resolve, reject) => {
							setTimeout(() => {
								axios
									.get(`${PREFIX}/products/${params.id}`)
									.then((data) => resolve(data))
									.catch((e) => reject(e));
							}, 2000);
						})
          });
				},
			},
		],
	},
	{
		path: '/auth',
		element: <AuthLayout />,
		children: [
			{
				path: 'login',
				element: <Login />
      },
			{
				path: 'register',
				element: <Register />
      },
		],
	},
	{
		path: '*',
		element: <Error />
  },
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
);
