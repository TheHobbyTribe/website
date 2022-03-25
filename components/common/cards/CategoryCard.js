import React from 'react'
import styles from '../../../styles/components/common/cards/CategoryCard.module.scss'


const CategoryCard = ({category}) => {
    console.log(category)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        //Add a style tag for the backgroundColor here
        <div className={styles.heading}>
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