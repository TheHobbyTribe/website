import React from 'react'
import styles from '../../styles/Components/HomePage/Quiz.module.scss'
import WhiteButton from '../Common/Buttons/WhiteButton'
import ThinkingWoman from '../../public/images/faces/ThinkingWoman.png'
import Image from 'next/image'

const Quiz = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.text}>
                <div className={styles.header}>
                    <p>
                    Not sure which hobby to pursue ?
                    </p>
                </div>
                <div className={styles.paragraph}>
                    <p>
                    Text here must explain that a quick quiz can be completed post which user will get recommendations
                    Text here must explain that a quick quiz can be completed post which user will get recommendations
                    </p>
                </div>
                <div className={styles.button}>
                    <WhiteButton text="Take the quiz &#10142;" />
                </div>
            </div>
            
            <div className={styles.imageContainer}>
                <Image
                    className={styles.image} 
                    src={ThinkingWoman.src}
                    alt='Thinking Woman' 
                    layout="fill"
                    objectFit='contain'
                    quality={100}
                />
            </div>
            
        </div>
    </div>
  )
}

export default Quiz