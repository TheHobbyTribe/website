import React from 'react'
import styles from '/styles/components/homepage/GlobalInSpirit.module.scss'
import worldmap from '/public/images/misc/world-map.png'
import Image from 'next/image'
import { SolidButton } from '/components'
import ArrowRight from '/public/images/icons/white-arrow-right.svg'

const GlobalInSpirit = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.heading}>
					<h3>Indian at Heart, Global in Spirit</h3>
				</div>
				<div className={styles.paragraph}>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
					accusamus praesentium culpa reprehenderit repellat minima!
				</div>
				<div className={styles.button}>
					<SolidButton
						text="Join the Tribe"
						icon={<ArrowRight />}
						className={styles.buttonText}
					/>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src={worldmap.src}
						alt="World Map"
						width={worldmap.width}
						height={worldmap.height}
						layout="responsive"
						objectFit="contain"
					/>
				</div>
			</div>
		</div>
	)
}

export default GlobalInSpirit
