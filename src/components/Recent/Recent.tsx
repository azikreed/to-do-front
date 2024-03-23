import { Link } from 'react-router-dom';
import styles from './Recent.module.css';

function Recent() {
	return (
		<section className={styles['recent']}>
			<div className={styles['recent__first']}>
				<p className={styles['first__text']}>Recent posts</p>
				<Link to="#" className={styles['first__link']}>
          View all
				</Link>
			</div>
			<div className={styles['recent__second']}>
				<div className={styles['recent__box']}>
					<h2 className={styles['box__title']}>
            Making a design system from scratch
					</h2>
					<div className={styles['inside__box']}>
						<p className={styles['inside_first']}>12 Feb 2020</p>
						<p className={styles['inside_second']}>Design, Pattern</p>
					</div>
					<p className={styles['box__text']}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
					</p>
				</div>
				<div className={styles['recent__box']}>
					<h2 className={styles['box__title']}>
            Creating pixel perfect icons in Figma
					</h2>
					<div className={styles['inside__box']}>
						<p className={styles['inside_first']}>12 Feb 2020</p>
						<p className={styles['inside_second']}>Figma, Icon Design</p>
					</div>
					<p className={styles['box__text']}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
					</p>
				</div>
			</div>
		</section>
	);
}

export default Recent;
