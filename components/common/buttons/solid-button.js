import React from 'react'
import styles from '../../../styles/components/common/buttons/SolidButton.module.scss'

const SolidButton = ({text, icon}) => {
  return (
    <div>
        <button className={styles.button} >
            {text}&nbsp;{icon} 
        </button>
    </div>
  )
}

export default SolidButton