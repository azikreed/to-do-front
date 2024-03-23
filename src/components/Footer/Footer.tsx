import styles from './Footer.module.css';

function Footer(){
	return (
		<footer className={styles['footer']}>
			<div className={styles['footer__main']}>
				<div className={styles['box__image']}>
					<img className={styles['footer__image']} src="/fb.png" alt="" />
					<img className={styles['footer__image']} src="/insta.png" alt="" />
					<img className={styles['footer__image']} src="/twitter.png" alt="" />
					<img className={styles['footer__image']} src="linkedin.png" alt="" />
				</div>
				<p className={styles['footer__text']}>Copyright ©2020 All rights reserved</p>
			</div>
		</footer>
	);
}

export default Footer;