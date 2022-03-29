import React from 'react'
import styles from '../../styles/components/homepage/Why.module.scss'
import IdeaLamp from '../../public/images/Icons/idealamp.svg'
import GreenBlocks from '../../public/images/Icons/greenblocks.svg'
import BlueGradHat from '../../public/images/Icons/bluegradhat.svg'
import { SolidButton } from '../index'
import ArrowRight from '../../public/images/icons/white-arrow-right.svg'

const Why = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.heading}>
                <h2>Why The Hobby Tribe?</h2>
            </div>

            <div className={styles.paragraph}>
                <p>Here are a plethora of new hobbies to learn for people of all ages. With just a computer and internet connection, you can be engaged for hours with our hobby courses.</p>
            </div>

            <div className={styles.reasonsContainer}>
                <div className={styles.block}>
                    <div className={styles.blockImage}>
                        <IdeaLamp/>
                    </div>
                    <div className={styles.blockTitle}>
                        Learn Anything
                    </div>
                    <div className={styles.blockPara}>
                        {/* //put p tag wherever paragraph is there. Confirm once. */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque maecenas sagittis.
                    </div>
                </div>
            
                <div className={styles.block}>
                    <div className={styles.blockImage}>
                        <GreenBlocks/>
                    </div>
                    <div className={styles.blockTitle}>
                        Learn Together
                    </div>
                    <div className={styles.blockPara}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque maecenas sagittis.
                    </div>
                </div>
            
                <div className={styles.block}>
                    <div className={styles.blockImage}>
                        <BlueGradHat/>
                    </div>
                    <div className={styles.blockTitle}>
                        Learn from experts
                    </div>
                    <div className={styles.blockPara}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque maecenas sagittis.
                    </div>
                </div>
            </div>

            <div className={styles.button}>
                <SolidButton text="Join the tribe" icon={<ArrowRight />} />
            </div>

        </div>
    </div>
  )
}

export default Why