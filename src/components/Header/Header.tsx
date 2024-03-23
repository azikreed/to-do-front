import styles from './Header.module.css';

function Header(){
	return(
		<header className={styles['header']}>
			<div className={styles['box']}>
				<h1 className={styles['headling']}>Hi, I am John,<br/>
Creative Technologist</h1>
				<p className={styles['paragraph']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet<br/> sint. Velit officia consequat duis enim velit mollit. Exercitation veniam<br/>consequat sunt nostrud amet.</p>
				<button className={styles['btn']}>Download Resume</button>
			</div>
			<div className={styles['box']}>
				<img src="/person.png" alt="person's image" />
			</div>
		</header>
	);
}

export default Header;