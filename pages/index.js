import React from 'react'
import { UniqueHobbies,Quiz,GlobalInSpirit,PopularCourses,Tribe, Footer, JoinTheTribe } from '../components/index'



const home = () => {
  return (
    <div>
      <JoinTheTribe />
      <UniqueHobbies />
      <Quiz />
      <GlobalInSpirit />
      <PopularCourses />
      <Tribe />
      <Footer />
    </div>
  )
}

export default home 
