import React from 'react'
import Head from 'next/head';
import SolidButton from '../components/Common/Buttons/SolidButton';
import OutlinedButton from '../components/Common/Buttons/OutlinedButton';
import WhiteButton from '../components/Common/Buttons/WhiteButton';
import UniqueHobbies from '../components/HomePage/UniqueHobbies';


const home = () => {
  return (
    <div>
      <UniqueHobbies />
    </div>
  )
}

export default home 