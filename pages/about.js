import React from 'react'
import { Footer, HowItBegan, MeetTheTeam, Tribe, UniqueHobbies, Welcome } from '../components'

const about = () => {
  return (
    <div style={{border: "1px solid black"}}>
      <Welcome />
      <HowItBegan />
      <MeetTheTeam />
      <UniqueHobbies />
      <Tribe />
      <Footer />
    </div>
  )
}

export default about