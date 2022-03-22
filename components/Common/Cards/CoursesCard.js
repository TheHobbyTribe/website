import React from 'react'
import styles from '../../../styles/components/common/cards/CoursesCard.module.scss'
import SolidButton from '../buttons/SolidButton'
import CalendarIcon from '../../../public/images/icons/calendar.svg'
import UserIcon from '../../../public/images/icons/user.svg'
import TimerIcon from '../../../public/images/icons/timer.svg'

const CoursesCard = ({course}) => {
    // console.log(course)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={course.image.src} alt={course.title} />
        </div>
        <div className={styles.heading}>
          <h5>{course.title}</h5>
        </div>
        <div className={styles.paragraph}>
          <p>{course.description}</p>
        </div>
        <div className={styles.details}>
          <div className={styles.section1}>
            <p> <CalendarIcon /> &nbsp; {course.time}</p>
            <p> <TimerIcon /> &nbsp; {course.duration}</p>
          </div>
          <div className={styles.section2}>
            <p><UserIcon /> &nbsp; {course.time}</p>
          </div>
        </div>
        <div className={styles.button}>
          <SolidButton text="Get Started" />
        </div>
        <div className={styles.footer}>
          {course.title[0] === 'C' ? '100+ Chess Players' : '100+ Dancers'}
        </div>
      </div>
    </div>
  )
}

export default CoursesCard