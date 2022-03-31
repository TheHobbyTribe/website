import React from 'react'
import styles from '/styles/components/about/MeetTheTeam.module.scss'
import member from '/public/images/faces/team-member.png'
import { TeamMemberCard } from '/components'

const team = [
	{
		id: 1,
		image: member.src,
		name: 'Joshua Salins',
		designation: 'Co-founder & CEO',
	},
	{
		id: 2,
		image: member.src,
		name: 'Gaurav Mirchandani',
		designation: 'Co-founder & COO',
	},
	{
		id: 3,
		image: member.src,
		name: 'Joshua Salins',
		designation: 'Co-founder & CEO',
	},
	{
		id: 4,
		image: member.src,
		name: 'Gaurav Mirchandani',
		designation: 'Co-founder & COO',
	},
	{
		id: 5,
		image: member.src,
		name: 'Joshua Salins',
		designation: 'Co-founder & CEO',
	},
	{
		id: 6,
		image: member.src,
		name: 'Gaurav Mirchandani',
		designation: 'Co-founder & COO',
	},
	{
		id: 7,
		image: member.src,
		name: 'Joshua Salins',
		designation: 'Co-founder & CEO',
	},
	{
		id: 8,
		image: member.src,
		name: 'Gaurav Mirchandani',
		designation: 'Co-founder & COO',
	},
]

const MeetTheTeam = () => {
	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<p>Meet the team</p>
				</div>
				<div className={styles.team}>
					{team.map((individual) => {
						return (
							<div key={individual.id}>
								<TeamMemberCard member={individual} />
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default MeetTheTeam
