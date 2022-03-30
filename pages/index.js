import React from 'react'
import {
	Navbar,
	Unleash,
	Why,
	ExploreCategories,
	JoinTheTribe,
	Testimonial,
	UniqueHobbies,
	Quiz,
	GlobalInSpirit,
	PopularCourses,
	Tribe,
	Footer,
} from '/components'
import { useQuery } from 'react-query'


const Home = () => {

    const fetchCharacters = async () => {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        return response.json()
    }
    const { data, status } = useQuery('characters', fetchCharacters)

    console.log('===> data', data)
    console.log('===> status', status)

	return (
		<div>
			<Navbar />
			<Unleash />
			<Why />
			<ExploreCategories />
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

export default Home
