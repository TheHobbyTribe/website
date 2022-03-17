import React from 'react'
import styles from '../../../styles/Components/Common/WhiteButton.module.scss'

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