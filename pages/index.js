import React from 'react'
import { Navbar, Unleash, Why, ExploreCategories, UniqueHobbies,Quiz,GlobalInSpirit,PopularCourses,Tribe, Footer} from '../components/index'



const home = () => {
  return (
    <div>
      <Navbar/>
      <Unleash/>
      <Why/>
      <ExploreCategories/>
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
