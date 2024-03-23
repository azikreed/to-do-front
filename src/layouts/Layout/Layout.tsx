import { useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
// import Button from '../../components/Button/Button';
// import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
import Recent from '../../components/Recent/Recent';
import Featured from '../../components/Featured/Featured';
import Footer from '../../components/Footer/Footer';

export function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	// const profile = useSelector((s: RootState) => s.user.profile);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	return <div className={styles['layout']}>
		<Navbar logout={logout}/>
		<Header/>
		<Recent/>
		<Featured/>
		<Footer/>
		{/* <div className={styles['sidebar']}>
			<div className={styles['user']}>
				<img src="/avatar.png" alt="avatar" className={styles['avatar']}/>
				<div className={styles['name']}>{profile?.name}</div>
				<div className={styles['email']}>{profile?.email}</div>
			</div>
			<div className={styles['menu']}>
				<NavLink to="/" className={({isActive})=>cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/menu-icon.svg" alt="menu icon" />
				Menu
				</NavLink>
				<NavLink to="/cart" className={({isActive})=>cn(styles['link'], {
					[styles.active]: isActive
				})}>
					<img src="/cart-icon.svg" alt="cart icon" />
				Cart
				</NavLink>
			</div>
			<Button onClick={logout} className={styles['exit']}>
				<img src="/exit-icon.svg" alt="" />
				Выход
			</Button>
		</div>
		<div className={styles['content']}>
			<Outlet/>
		</div> */}
	</div>;
}