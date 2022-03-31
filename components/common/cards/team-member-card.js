import React from 'react'
import styles from '../../../styles/components/common/cards/TeamMemberCard.module.scss'

const TeamMemberCard = ({member}) => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <img src={member.image} alt="Team Member" />
            </div>
            <div className={styles.header}>
                {member.name}
            </div>
            <div className={styles.designation}>
                {member.designation}
            </div>
        </div>
    </div>
  )
}

export default TeamMemberCard