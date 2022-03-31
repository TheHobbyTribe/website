import React from 'react'
import styles from '/styles/components/homepage/ExploreCategories.module.scss'
import ArtsCrafts from '/public/images/icons/arts-crafts.svg'
import MusicDance from '/public/images/icons/music-dance.svg'
import MindGames from '/public/images/icons/mind-games.svg'
import CreativeWriting from '/public/images/icons/creative-writing.svg'
import Languages from '/public/images/icons/languages.svg'
import Photography from '/public/images/icons/photography.svg'
import PianoMan from '/public/images/faces/piano-man.png'
import { CategoryCard, OutlinedButton } from '/components'

const categoryArray = [
	{
		id: 1,
		title: 'Arts & Craft',
		backgroundColor: '#FFDAD4', // $Orange_40
		fontColor: '#BD502D', // $Orange_100
		icon: <ArtsCrafts />,
	},
	{
		id: 2,
		title: 'Music & Dance',
		backgroundColor: '#D3F7FF', // $Blue_40
		fontColor: '#0374A5', // $Blue_100
		icon: <MusicDance />,
	},
	{
		id: 3,
		title: 'Mind Games',
		backgroundColor: '#D0FFEE', // $Green_40
		fontColor: '#28845D', // $Green_100
		icon: <MindGames />,
	},
	{
		id: 4,
		title: 'Creative Writing',
		backgroundColor: '#ECD9FF', // $Purple_40
		fontColor: '#761ECE', // $Purple_100
		icon: <CreativeWriting />,
	},
	{
		id: 5,
		title: 'Languages',
		backgroundColor: '#FFDAF5', // $Pink_40
		fontColor: '#690058', // $Pink_100
		icon: <Languages />,
	},
	{
		id: 6,
		title: 'Photography',
		backgroundColor: '#FDFED8', // $Yellow_40
		fontColor: '#583500', // $Yellow_100
		icon: <Photography />,
	},
]

const ExploreCategories = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.imageContainer}>
					<img className={styles.image} src={PianoMan.src} alt="PianoMan" />
				</div>
				<div className={styles.heading}>
					<h4>Explore Categories</h4>
				</div>
				<div className={styles.paragraph}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien eu
						sed magna faucibus.
					</p>
				</div>
				<div className={styles.content}>
					{categoryArray.map((category) => {
						return (
							<div key={category.id} className={styles.contentContainer}>
								<CategoryCard category={category} />
							</div>
						)
					})}
				</div>
				<div className={styles.outlinedButton}>
					<OutlinedButton text="View all Courses" />
				</div>
			</div>
		</div>
	)
}

export default ExploreCategories
