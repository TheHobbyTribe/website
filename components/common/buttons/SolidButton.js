import React from 'react'
import styles from '../../../styles/components/common/buttons/SolidButton.module.scss'

const SolidButton = ({text}) => {
  return (
    <div>
        <button className={styles.button} >
            {text} 
        </button>
    </div>
  )
}

export default SolidButton