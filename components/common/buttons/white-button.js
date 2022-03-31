import React from 'react'
import styles from '../../../styles/components/common/buttons/WhiteButton.module.scss'

const WhiteButton = ({text, icon}) => {
  return (
    <div>
        <button className={styles.button}>
          {text}&nbsp;{icon} 
        </button>
    </div>
  )
}

export default WhiteButton