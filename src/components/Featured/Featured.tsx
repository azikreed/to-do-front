import styles from './Featured.module.css';

function Featured() {
	return (
		<section className={styles['featured']}>
			<div className={styles['fetured__first']}>
				<p className={styles['first__text']}>Featured works</p>
			</div>
			<div className={styles['featured__second']}>
				<div className={styles['featured__image']}>
					<img src="/featured_1.png" alt="first image of features section" />
				</div>
				<div className={styles['featured__box']}>
					<h2 className={styles['box__title']}>Designing dashboards</h2>
					<div className={styles['inside__box']}>
						<button className={styles['inside__btn']}>2020</button>
						<p className={styles['inside__type']}>Dashboard</p>
					</div>
					<p className={styles['box__text']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br/>nostrud amet.</p>
				</div>
			</div>
			<div className={styles['featured__second']}>
				<div className={styles['featured__image']}>
					<img src="/featured_2.png" alt="second image of features section" />
				</div>
				<div className={styles['featured__box']}>
					<h2 className={styles['box__title']}>Vibrant Portraits of 2020</h2>
					<div className={styles['inside__box']}>
						<button className={styles['inside__btn']}>2018</button>
						<p className={styles['inside__type']}>Illustration</p>
					</div>
					<p className={styles['box__text']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br/>nostrud amet.</p>
				</div>
			</div>
			<div className={styles['featured__second']}>
				<div className={styles['featured__image']}>
					<img src="/featured_3.png" alt="third image of features section" />
				</div>
				<div className={styles['featured__box']}>
					<h2 className={styles['box__title']}>36 Days of Malayalam type</h2>
					<div className={styles['inside__box']}>
						<button className={styles['inside__btn']}>2018</button>
						<p className={styles['inside__type']}>Typography</p>
					</div>
					<p className={styles['box__text']}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit<br/>officia consequat duis enim velit mollit. Exercitation veniam consequat sunt<br/>nostrud amet.</p>
				</div>
			</div>
		</section>
	);
}

export default Featured;
