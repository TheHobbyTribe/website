import React from 'react'
import styles from '../../../styles/components/common/cards/CategoryCard.module.scss'


const CategoryCard = ({category}) => {
    // console.log(category)
  return (
      <div className={styles.container} style={{backgroundColor: `${category.backgroundColor}`}}>
        <div className={styles.wrapper}>
          <div className={styles.heading} style={{color: `${category.fontColor}`}}>
            {category.title}
          </div>
          <div className={styles.image}>
            {category.icon}
          </div>
      </div>
    </div>
  )
}

export default CategoryCard