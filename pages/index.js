import React from 'react'
import { UniqueHobbies,Quiz,GlobalInSpirit,PopularCourses,Tribe, Footer, JoinTheTribe, Testimonial } from '../components/index'



const home = () => {
  return (
    <div>
      <Testimonial />
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
