import React from 'react'
import styles from '../../styles/Components/HomePage/UniqueHobbies.module.scss'
import Image from 'next/image'
import abacus from '../../public/images/hobbies/abacus.png'
import bookreading from '../../public/images/hobbies/bookreading.png'
import painting from '../../public/images/hobbies/painting.png'
import photoshop from '../../public/images/hobbies/photoshop.png'
import CalendarIcon from '../../public/images/Icons/calendar.svg'
import UserIcon from '../../public/images/Icons/user.svg'
import SolidButton from '../Common/Buttons/SolidButton'
import OutlinedButton from '../Common/Buttons/OutlinedButton'


const hobbyArray = [
    {
        hobby: 'PhotoShop',
        time: '4 weeks',
        age: '12-100 yrs',
        image: photoshop
    },
    {
        hobby: 'Abacus',
        time: '4 weeks',
        age: '12-100 yrs',
        image: abacus
    },
    {
        hobby: 'Chess',
        time: '4 weeks',
        age: '12-100 yrs',
        image: painting
    },
    {
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
                        <div className={styles.card} key={hobby.hobby}>
                            <div className={styles.image}>
                                <Image 
                                src={hobby.image.src} 
                                alt='Hobby' 
                                layout="responsive"
                                width={hobby.image.width}
                                height={hobby.image.height} 
                                />
                            </div>
                            <div className={styles.details}>
                                <h2 className={styles.heading}>{hobby.hobby}</h2>
                                <div className={styles.miniDetails}>
                                    <div className={styles.items}>
                                        <CalendarIcon className={styles.icon}/>
                                        {hobby.time}
                                    </div>
                                    
                                    <div className={styles.items}>
                                        <UserIcon className={styles.icon}/>
                                        {hobby.age}
                                    </div>
                                </div>
                            </div>
                        
                            
                            <div className={styles.button}>
                                <SolidButton text="Book for Free" />
                            </div>
                            
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