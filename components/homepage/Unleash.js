import React from 'react'
import styles from '/styles/components/homepage/Unleash.module.scss'
import Image from 'next/image'
import OrangeLine from '/public/images/misc/orange-line.svg'
import OrangeThreeShortLines from '/public/images/misc/orange-three-short-lines.svg'
import BoyIcon from '/public/images/icons/boy.svg'
import VidCam from '/public/images/icons/vid-cam.svg'
import SandClock from '/public/images/icons/sand-clock.svg'
import LocationPin from '/public/images/icons/location-pin.svg'
import DoubleDownArrow from '/public/images/icons/double-down-arrow.svg'
import LadyPainting from '/public/images/faces/lady-painting.png'
import LadyPaintingCrop from '/public/images/faces/lady-painting-crop.png'
import ArrowRight from '/public/images/icons/white-arrow-right.svg'
import { SolidButton } from '/components'

const Unleash = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.heading}>
					<div className={styles.headingTop}>
						<div className={styles.subheading1}>
							<h3>Unleash your &nbsp;</h3>
						</div>
						<div className={styles.subheading2}>
							<h3>
								{' '}
								<span className={styles.threeLines}>
									<OrangeThreeShortLines />
								</span>{' '}
								inner child <OrangeLine />
							</h3>
						</div>
					</div>
					<div className={styles.headingBottom}>
						<h3>with online hobby classes</h3>
					</div>
				</div>

				<div className={styles.featuresGrid}>
					<div className={styles.feature}>
						<div className={styles.featureIcon}>
							<BoyIcon />
						</div>
						<div className={styles.featureTextBox}>
							<div className={styles.featureTextOne}>1K+</div>
							<div className={styles.featureTextTwo}>students taught</div>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.featureIcon}>
							<VidCam />
						</div>
						<div className={styles.featureTextBox}>
							<div className={styles.featureTextOne}>45+</div>
							<div className={styles.featureTextTwo}>courses available</div>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.featureIcon}>
							<SandClock />
						</div>
						<div className={styles.featureTextBox}>
							<div className={styles.featureTextOne}>12.5K+</div>
							<div className={styles.featureTextTwo}>hours taught</div>
						</div>
					</div>
					<div className={styles.feature}>
						<div className={styles.featureIcon}>
							<LocationPin />
						</div>
						<div className={styles.featureTextBox}>
							<div className={styles.featureTextOne}>10+</div>
							<div className={styles.featureTextTwo}>countries present</div>
						</div>
					</div>
				</div>

				<div className={styles.button}>
					<SolidButton text="Join the tribe" icon={<ArrowRight />} />
				</div>
				<div className={styles.exploreCoursesButton}>
					Explore Our Courses <DoubleDownArrow />
				</div>

				<div className={styles.imageContainer}>
					<img
						className={styles.image}
						src={LadyPainting.src}
						alt="LadyPainting"
					/>
				</div>
			</div>
		</div>
	)
}

export default Unleash
