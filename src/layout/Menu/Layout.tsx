import cn from 'classnames';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import type { AppDispath, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';

import styles from './Layout.module.css';


export function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispath>();
	const profile = useSelector((s: RootState) => s.user.profile);
	const items = useSelector((s: RootState) => s.cart.items);

	useEffect(() => {
		void dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src="/avatar.png" alt="Аватар пользователя" />
					<div className={styles['name']}>{profile?.name}</div>
					<div className={styles['email']}>{profile?.email}</div>
				</div>
				<div className={styles['menu']}>
					<NavLink
						to="/"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
              })
						}
					>
						<img src="/menu-icon.svg" alt="Иконка меню" />
            Меню
					</NavLink>
					<NavLink
						to="/cart"
						className={({ isActive }) =>
							cn(styles['link'], {
								[styles.active]: isActive
              })
						}
					>
						<img src="/cart-icon.svg" alt="Иконка корзины" />
            Корзина{' '}
						<span className={styles['cart-count']}>
							{items.reduce((acc, item) => (acc += item.count), 0)}
						</span>
					</NavLink>
				</div>
				<Button className={styles['exit']} onClick={logout}>
					<img src="/exit-icon.svg" alt="Иконка выхода" />
          Выход
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}
