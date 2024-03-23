import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import styles from './AuthLayout.module.css';
import Button from '../../components/Button/Button';
import { useEffect } from 'react';
import cn from 'classnames';

export function AuthLayout() {
	return <div className={styles['layout']}>
		<div className={styles['logo']}>
			<img src="/logo.svg" alt="logo" />
		</div>
		<div className={styles['content']}>
			<Outlet/>
		</div>
	</div>;
}