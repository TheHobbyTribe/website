import React from 'react'
import styles from '../../../styles/Components/Common/OutlinedButton.module.scss'

const OutlinedButton = ({text}) => {
  return (
    <div>
        <button className={styles.button}>
            {text}
        </button>
    </div>
  )
}

export default OutlinedButton