import React from 'react'
import styles from '/styles/components/homepage/Quiz.module.scss'
import ThinkingWoman from '/public/images/faces/thinking-woman.png'
import Image from 'next/image'
import { WhiteButton } from '/components'
import ArrowRight from '/public/images/icons/black-arrow-right.svg'

const Quiz = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.text}>
					<div className={styles.header}>
						<p>Not sure which hobby to pursue ?</p>
					</div>
					<div className={styles.paragraph}>
						<p>
							Text here must explain that a quick quiz can be completed post
							which user will get recommendations Text here must explain that a
							quick quiz can be completed post which user will get
							recommendations
						</p>
					</div>
					<div className={styles.button}>
						<WhiteButton text="Take the quiz" icon={<ArrowRight />} />
					</div>
				</div>

				<div className={styles.imageContainer}>
					<Image
						src={ThinkingWoman.src}
						alt="Thinking Woman"
						layout="responsive"
						width={ThinkingWoman.width}
						height={ThinkingWoman.height}
						objectFit="cover"
						quality={100}
					/>
				</div>
			</div>
		</div>
	)
}

export default Quiz
