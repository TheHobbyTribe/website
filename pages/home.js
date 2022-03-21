import React from 'react'
import Head from 'next/head';
import SolidButton from '../components/Common/Buttons/SolidButton';
import OutlinedButton from '../components/Common/Buttons/OutlinedButton';
import WhiteButton from '../components/Common/Buttons/WhiteButton';
import UniqueHobbies from '../components/HomePage/UniqueHobbies';
import Quiz from '../components/HomePage/Quiz';
import GlobalInSpirit from '../components/HomePage/GlobalInSpirit';
import Tribe from '../components/HomePage/Tribe';


const home = () => {
  return (
    <div>
      <UniqueHobbies />
      <Quiz />
      <GlobalInSpirit />
      <Tribe />
    </div>
  )
}

export default home 