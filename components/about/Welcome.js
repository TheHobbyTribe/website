import React from 'react'
import styles from '../../styles/components/about/Welcome.module.scss'
import Smiley from '../../public/images/curves/BlueSmiley.svg'
import BlueLine from '../../public/images/misc/blueLine.svg'
import Image from 'next/image'
import People from '../../public/images/faces/diversity.png'

const Welcome = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            {/* Header */}
            <div className={styles.header}>
                <div className={styles.heading}>
                    {/* <p>
                        Welcome to&nbsp;<span>The Hobby Tribe <BlueLine /></span>
                    </p> */}
                    <div className={styles.item1}>
                        <p>
                            Welcome to&nbsp; 
                        </p> 
                    </div>
                    <div className={styles.item2}>
                        <p>
                            The Hobby Tribe <BlueLine /> 
                        </p> 
                    </div>
                    
                    {/* <p> */}
                         
                        {/* <div className={styles.item}>
                            Welcome to&nbsp;The Hobby Tribe
                            <BlueLine />
                        </div> */}
                    {/* </p> */}
                </div>

                <div className={styles.smiley}>
                    <Smiley />
                </div>
            </div>
            {/* Paragraph */}
            <div className={styles.paragraph}>
                <p>
                    We are a group of hobby enthusiasts who want to bring change to the way hobbies are viewed. We believe everyone should have the ability and chance to learn something new in this ever-expanding world of opportunities.
                    
                </p>
            </div>
            {/* Image */}
            <div className={styles.imageContainer}>
                <Image
                    src={People.src}
                    alt='Diverse group of People' 
                    layout="responsive"
                    width={People.width}
                    height={People.height}
                    objectFit='cover'
                    quality={100}
                />
            </div>
            
        </div>
    </div>
  )
}

export default Welcome