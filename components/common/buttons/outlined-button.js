import React from 'react'
import styles from '../../../styles/components/common/buttons/OutlinedButton.module.scss'

const OutlinedButton = ({text, icon}) => {
  return (
    <div>
        <button className={styles.button}>
            {text}&nbsp;{icon} 
        </button>
    </div>
  )
}

export default OutlinedButton