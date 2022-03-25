import React from 'react'
import { Navbar, Unleash, Why, ExploreCategories, JoinTheTribe, Testimonial, UniqueHobbies,Quiz,GlobalInSpirit,PopularCourses,Tribe, Footer} from '../components/index'



const home = () => {
  return (
    <div>
      <Navbar/>
      <Unleash/>
      <Why/>
      <ExploreCategories/>
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
