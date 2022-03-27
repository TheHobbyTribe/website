import React from 'react'
import styles from '../../styles/components/homepage/UniqueHobbies.module.scss'
import Image from 'next/image'
import abacus from '../../public/images/hobbies/abacus.png'
import bookreading from '../../public/images/hobbies/bookreading.png'
import painting from '../../public/images/hobbies/painting.png'
import photoshop from '../../public/images/hobbies/photoshop.png'
import CalendarIcon from '../../public/images/icons/calendar.svg'
import UserIcon from '../../public/images/icons/user.svg'
import { SolidButton, OutlinedButton, HobbyCard } from '../index'



const hobbyArray = [
    {
        id: 1,
        hobby: 'PhotoShop',
        time: '4 weeks',
        age: '12-100 yrs',
        image: photoshop
    },
    {
        id: 2,
        hobby: 'Abacus',
        time: '4 weeks',
        age: '12-100 yrs',
        image: abacus
    },
    {
        id: 3,
        hobby: 'Chess',
        time: '4 weeks',
        age: '12-100 yrs',
        image: painting
    },
    {
        id: 4,
        hobby: 'Story Telling',
        time: '4 weeks',
        age: '12-100 yrs',
        image: bookreading
    }
]

const UniqueHobbies = () => {


  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <p className={styles.header}>
                An Array of unique Hobbies
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam accusantium nesciunt illum reiciendis reprehenderit doloremque repellat minus deserunt porro sint explicabo numquam repellendus dolorem consequatur, ea sit deleniti ratione maiores!
            </p>
            <div className={styles.gridContainer}>
                {hobbyArray.map(hobby => {
                    return (
                        <div className={styles.cardContainer} key={hobby.id}>
                            <HobbyCard hobby={hobby} />
                        </div>
                    )
                })}
            </div>
            <div className={styles.outlinedButton}>
                <OutlinedButton text="View all Courses" />
            </div>
        </div>
    </div> 
  )
}

export default UniqueHobbies