import React from 'react'
import styles from '../../styles/components/about/MeetTheTeam.module.scss'
import member from '../../public/images/faces/teamMember.png'
import {TeamMemberCard} from '../index'

const team = [
    {
        image: member.src,
        name: 'Joshua Salins',
        designation: 'Co-founder & CEO'
    },
    {
        image: member.src,
        name: 'Gaurav Mirchandani',
        designation: 'Co-founder & COO'
    },
    {
        image: member.src,
        name: 'Joshua Salins',
        designation: 'Co-founder & CEO'
    },
    {
        image: member.src,
        name: 'Gaurav Mirchandani',
        designation: 'Co-founder & COO'
    },
    {
        image: member.src,
        name: 'Joshua Salins',
        designation: 'Co-founder & CEO'
    },
    {
        image: member.src,
        name: 'Gaurav Mirchandani',
        designation: 'Co-founder & COO'
    },
    {
        image: member.src,
        name: 'Joshua Salins',
        designation: 'Co-founder & CEO'
    },
    {
        image: member.src,
        name: 'Gaurav Mirchandani',
        designation: 'Co-founder & COO'
    }
]

const MeetTheTeam = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p>
                    Meet the team
                </p>
            </div>
            <div className={styles.team}>
                {team.map(individual => {
                    return(
                        <div>
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