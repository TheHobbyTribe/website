import React from 'react'
import { Footer, HowItBegan, MeetTheTeam, TeamRecommends, Tribe, UniqueHobbies, Welcome } from '../components'
import styles from '../styles/pages/About.module.scss'

const about = () => {
  return (
    <div>
      <Welcome />
      <HowItBegan />
      <MeetTheTeam />
      <TeamRecommends />
      <div className={styles.disappear}>
        <Tribe />
      </div>
      
      <Footer />
    </div>
  )
}

export default about