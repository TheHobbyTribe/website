import React from 'react'
import styles from '/styles/components/homepage/JoinTheTribe.module.scss'
import buy from '/public/images/misc/buy-99-purple.png'
import getinvited from '/public/images/misc/get-invited-blue.png'
import Image from 'next/image'
import { SolidButton } from '/components'
import GreenLine from '/public/images/misc/green-line.svg'
import ArrowRight from '/public/images/icons/white-arrow-right.svg'

const JoinTheTribe = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.heading}>
					<div className={styles.item1}>
						<p>How you can&nbsp; </p>
					</div>
					<div className={styles.item2}>
						<p>
							join the tribe <GreenLine />
						</p>
					</div>
				</div>
				<div className={styles.paragraph}>
					<p>
						Body copy here about the three options to become a member. Lorem
						ipsum dolor sit amet. Body copy here about the steps. Lorem ipsum
						dolor sit amet.
					</p>
				</div>
				<div className={styles.section1}>
					<div className={styles.imageContainer}>
						<Image
							src={buy.src}
							layout="responsive"
							width={520}
							height={240}
							alt="purple image"
							objectFit="contain"
						/>
					</div>
					<div className={styles.subheading}>
						<p>Buy membership @ just ₹99</p>
					</div>
					<div className={styles.subparagraph}>
						<p>
							Explain that the user can pick whichever class they want and
							purchase it for 99. Once purchased, they become members
							automatically.
						</p>
					</div>
				</div>
				<div className={styles.section2}>
					<div className={styles.imageContainer}>
						<Image
							src={getinvited.src}
							layout="responsive"
							width={520}
							height={240}
							alt="blue image"
							objectFit="contain"
						/>
					</div>
					<div className={styles.subheading}>
						<p>Get invited by a friend</p>
					</div>
					<div className={styles.subparagraph}>
						<p>
							Explain that the user can pick whichever class they want and
							purchase it for 99. Once purchased, they become members
							automatically.
						</p>
					</div>
				</div>
				<div className={styles.button}>
					<SolidButton text="Join the tribe" icon={<ArrowRight />} />
				</div>
			</div>
		</div>
	)
}

export default JoinTheTribe
