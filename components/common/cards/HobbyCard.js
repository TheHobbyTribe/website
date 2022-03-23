import React from 'react'
import styles from '../../../styles/components/common/cards/HobbyCard.module.scss'
import Image from 'next/image'
import CalendarIcon from '../../../public/images/icons/calendar.svg'
import UserIcon from '../../../public/images/icons/user.svg'
import {SolidButton} from '../../index'

const HobbyCard = ({hobby}) => {
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
}

export default HobbyCard 