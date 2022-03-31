import React from 'react'
import chess from '/public/images/hobbies/chess.png'
import dance from '/public/images/hobbies/dance.png'
import styles from '/styles/components/homepage/PopularCourses.module.scss'
import { CoursesCard } from '/components'
import ChessPlayers from '/public/images/icons/100-chess-players.svg'
import Dancers from '/public/images/icons/100-dancers.svg'

const courseArray = [
	{
		id: 1,
		image: chess,
		title: 'Chess Masters',
		description:
			'This universal chess training for beginners teaches you the nitty-gritty of what goes behind winning the ...',
		time: '4 weeks',
		duration: '60mins/session',
		age: '12-100 yrs',
		icon: <ChessPlayers />,
	},
	{
		id: 2,
		image: dance,
		title: 'Dance-it-out',
		description:
			'Be it Bollywood dance classes or freestyle, you are going to enjoy your time and let go of all your ...',
		time: '4 weeks',
		duration: '60mins/session',
		age: '12-100 yrs',
		icon: <Dancers />,
	},
	{
		id: 3,
		image: chess,
		title: 'Chess Masters',
		description:
			'This universal chess training for beginners teaches you the nitty-gritty of what goes behind winning the ...',
		time: '4 weeks',
		duration: '60mins/session',
		age: '12-100 yrs',
		icon: <ChessPlayers />,
	},
	{
		id: 4,
		image: dance,
		title: 'Dance-it-out',
		description:
			'Be it Bollywood dance classes or freestyle, you are going to enjoy your time and let go of all your ...',
		time: '4 weeks',
		duration: '60mins/session',
		age: '12-100 yrs',
		icon: <Dancers />,
	},
]

const PopularCourses = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.heading}>
					<h4>Popular Courses</h4>
				</div>
				<div className={styles.paragraph}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla
						scelerisque placerat lectus elementum facilisis suscipit volutpat.
						Text here must emphasize that THT offers a wide variety of classes
						inlcuing some very unique ones.
					</p>
				</div>
				<div className={styles.content}>
					{courseArray.map((course) => {
						return (
							<div key={course.id} className={styles.contentContainer}>
								<CoursesCard course={course} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default PopularCourses
