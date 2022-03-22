import React from 'react'
import styles from '../../../styles/components/common/WhiteButton.module.scss'

const WhiteButton = ({text}) => {
  return (
    <div>
        <button className={styles.button}>
            {text}
        </button>
    </div>
  )
}

export default WhiteButton