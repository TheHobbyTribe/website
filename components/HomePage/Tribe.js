import React from 'react'
import styles from '../../styles/Components/HomePage/Tribe.module.scss'
import handsImage from '../../public/images/misc/hands.png'
import Image from 'next/image'
import PurpleLine from '../../public/images/misc/purpleLine.svg'
import TwistedLine from '../../public/images/Icons/twistedline.svg'
import Envelope from '../../public/images/Icons/envelope.svg'
import SolidButton from '../Common/Buttons/SolidButton'

const Tribe = () => {
  return (
    <div className={styles.container}>
        {/* hello this is tribe */}
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <Image
                    src={handsImage.src}
                    // width={handsImage.width}
                    // height={handsImage.height}
                    alt="Hands Image"
                    layout='fill'
                    objectFit='contain'
                />
            </div>
            <div className={styles.heading}>
                <div className={styles.subheading1}>
                    <h3>A Tribe ?</h3>
                </div>
                <div className={styles.subheading2}>
                    <h3>A Family <PurpleLine /></h3>
                </div>
            </div>
            <div className={styles.paragraph}>
               <p>Text here must explain the meanign of an invite only platform. The process and benefits of being a member</p>
            </div>
            <div className={styles.section1}>
                <div className={styles.items}>
                    <TwistedLine />
                </div>
                <div className={styles.items}>
                    <h5>Unlimited free classes</h5>
                </div>
                <div className={styles.items}>
                    <p>Text here must explain the meaing of an invite only platform. The process and benfits of being a member. The process and benefits of...</p>
                </div>
                
                
            </div>
            <div className={styles.section2}>
                <div className={styles.items}>
                    <Envelope />
                </div>
                <div className={styles.items}>
                    <h5>Early access to events</h5>
                </div>
                <div className={styles.items}>
                    <p>Text here must explain the meaing of an invite only platform. The process and benfits of being a member. The process and benefits of...</p>
                </div>
            </div>
            <div className={styles.button}>
                <SolidButton text="Join The Tribe &#10142;" />
            </div>    
        </div>
    </div>
  )
}

export default Tribe