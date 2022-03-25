import React from 'react'
import styles from '../../styles/components/homepage/Unleash.module.scss'
import Image from 'next/image'
import OrangeLine from '../../public/images/misc/orangeLine.svg'
import OrangeThreeShortLines from '../../public/images/misc/orangeThreeShortLines.svg'
import BoyIcon from '../../public/images/Icons/boy.svg'
import VidCam from '../../public/images/Icons/vidcam.svg'
import SandClock from '../../public/images/Icons/sandclock.svg'
import LocationPin from '../../public/images/Icons/locationpin.svg'
import DoubleDownArrow from '../../public/images/Icons/doubledownarrow.svg'
import LadyPainting from '../../public/images/faces/ladypainting.png'
import LadyPaintingCrop from '../../public/images/faces/ladypaintingcrop.png'
import { SolidButton } from '../index'

const Unleash = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            
            <div className={styles.heading}>
                {/* <div className={styles.subheading1}>
                    <h3>Unleash your</h3>
                </div>
                <div className={styles.subheading2}>
                    <h3> inner child <OrangeLine /></h3>
                </div>
                <div className={styles.subheading1}>
                    <h3>with online hobby classes</h3>
                </div> */}

                Unleash your inner child with online hobby classes

            </div>

            <div className={styles.featuresGrid}>
                <div className={styles.feature1}>
                    <div className={styles.featureIcon}>
                        <BoyIcon/>
                    </div>
                    <div className={styles.featureTextBox}>
                        <div className={styles.featuresTextOne}>
                            1K+
                        </div>
                        <div className={styles.featuresTextTwo}>
                            students taught
                        </div>
                    </div>
                </div>
                <div className={styles.feature2}>
                    <div className={styles.featureIcon}>
                        <VidCam/>
                    </div>
                    <div className={styles.featuresTextOne}>
                        45+
                    </div>
                    <div className={styles.featuresTextTwo}>
                        Courses Available
                    </div>
                </div>
                <div className={styles.feature3}>
                    <div className={styles.featureIcon}>
                        <SandClock/>
                    </div>
                    <div className={styles.featuresTextOne}>
                        12.5K+
                    </div>
                    <div className={styles.featuresTextTwo}>
                        hours taught
                    </div>
                </div>
                <div className={styles.feature4}>
                    <div className={styles.featureIcon}>
                        <LocationPin/>
                    </div>
                    <div className={styles.featuresTextOne}>
                        10+
                    </div>
                    <div className={styles.featuresTextTwo}>
                        countries present
                    </div>
                </div>
            </div>

            <div className={styles.button}>
                <SolidButton text='Join the Tribe &#10142;'/>
            </div>
            <div className={styles.exploreCoursesText}>
                Explore Our Courses <DoubleDownArrow/>
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={LadyPainting.src} alt="LadyPainting" />
            </div>
        </div>
</div>
  )
}

export default Unleash