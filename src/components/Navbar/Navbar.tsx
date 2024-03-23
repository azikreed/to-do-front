import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Button from '../Button/Button';
import { NavbarProps } from './Navbar.props';

function Navbar({logout}: NavbarProps) {
	return (
		<nav className={styles['navbar']}>
			<ul className={styles['ul']}>
				<li><Link to="#" className={styles['link']}>Works</Link></li>
				<li><Link to="#" className={styles['link']}>Blog</Link></li>
				<li><Link to="#" className={styles['link']}>Contact</Link></li>
				<li>
					<Button onClick={logout} className={styles['exit']}>
						<img src="/exit-icon.svg" alt="" />
				Quit
					</Button>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;