import React from 'react'
import styles from '/styles/components/homepage/Testimonial.module.scss'
import People from '/public/images/faces/testimonial-faces.png'
import Face1 from '/public/images/faces/face-1.png'
import Image from 'next/image'

const Testimonial = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.section1}>
					<div className={styles.info}>
						<p>Over 1000 members</p>
					</div>
					<div className={styles.header}>
						<p>If they can, why can’t you?</p>
					</div>
					<div className={styles.paragraph1}>
						<p>
							Text here must emphasize that THT is a global community of working
							professionals, homemakers, business owners, etc. Quit making
							excuses for practicing your hobbies because, if they can, why
							can’t you?
						</p>
					</div>
				</div>
				<div className={styles.section2}>
					<div className={styles.imageContainer}>
						{/* <Image
                        src={People.src}
                        layout='responsive'
                        objectFit='contain'
                        width={343}
                        height={118}
                    /> */}
						<img src={People.src} alt="Testimonials" />
					</div>
					<div className={styles.name}>
						<p>Anamika Mehra</p>
					</div>
					<div className={styles.designation}>
						<p>General Physician</p>
					</div>
					<div className={styles.paragraph2}>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl, vel
							in ut neque tortor hac rutrum platea elementum. Auctor placerat ac
							tempor dictum. Tellus tortor ac morbi vitae id dictumst sed. Nisl
							eget elit iaculis elit non sagittis, id in. Diam integer dui erat
							ut luctus.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonial
