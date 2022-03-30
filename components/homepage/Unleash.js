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
import ArrowRight from '../../public/images/icons/white-arrow-right.svg'
import { SolidButton } from '../index'

const Unleash = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            
            <div className={styles.heading}>
                <div className={styles.headingTop}>
                    <div className={styles.subheading1}>
                        <h3>Unleash your &nbsp;</h3>
                    </div>
                    <div className={styles.subheading2}>
                        <h3> <span className={styles.threeLines}><OrangeThreeShortLines/></span> inner child <OrangeLine /></h3>
                    </div>
                </div>
                <div className={styles.headingBottom}>
                    <h3>with online hobby classes</h3>
                </div>

                {/* Unleash your  */}
                {/* <span>inner child <span><OrangeLine/></span> </span>  */}
                {/* with online hobby classes */}

            </div>

            <div className={styles.featuresGrid}>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <BoyIcon/>
                    </div>
                    <div className={styles.featureTextBox}>
                        <div className={styles.featureTextOne}>
                            1K+
                        </div>
                        <div className={styles.featureTextTwo}>
                            students taught
                        </div>
                    </div>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <VidCam/>
                    </div>
                    <div className={styles.featureTextBox}>
                        <div className={styles.featureTextOne}>
                            45+
                        </div>
                        <div className={styles.featureTextTwo}>
                            courses available
                        </div>
                    </div>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <SandClock/>
                    </div>
                    <div className={styles.featureTextBox}>
                        <div className={styles.featureTextOne}>
                            12.5K+
                        </div>
                        <div className={styles.featureTextTwo}>
                            hours taught
                        </div>
                    </div>
                </div>
                <div className={styles.feature}>
                    <div className={styles.featureIcon}>
                        <LocationPin/>
                    </div>
                    <div className={styles.featureTextBox}>
                        <div className={styles.featureTextOne}>
                            10+
                        </div>
                        <div className={styles.featureTextTwo}>
                            countries present
                        </div>
                    </div>
                </div>    

                {/* <div className={styles.feature1}>
                    <div className={styles.feature1Icon}>
                        <BoyIcon/>
                    </div>
                    <div className={styles.feature1TextBox}>
                        <div className={styles.feature1TextOne}>
                            1K+
                        </div>
                        <div className={styles.feature1TextTwo}>
                            students taught
                        </div>
                    </div>
                </div>
                <div className={styles.feature2}>
                    <div className={styles.feature2Icon}>
                        <VidCam/>
                    </div>
                    <div className={styles.feature2TextBox}>
                        <div className={styles.feature2TextOne}>
                            45+
                        </div>
                        <div className={styles.feature2TextTwo}>
                            courses available
                        </div>
                    </div>
                </div>
                <div className={styles.feature3}>
                    <div className={styles.feature3Icon}>
                        <SandClock/>
                    </div>
                    <div className={styles.feature3TextBox}>
                        <div className={styles.feature3TextOne}>
                            12.5K+
                        </div>
                        <div className={styles.feature3TextTwo}>
                            hours taught
                        </div>
                    </div>
                </div>
                <div className={styles.feature4}>
                    <div className={styles.feature4Icon}>
                        <LocationPin/>
                    </div>
                    <div className={styles.feature4TextBox}>
                        <div className={styles.feature4TextOne}>
                            10+
                        </div>
                        <div className={styles.feature4TextTwo}>
                            countries present
                        </div>
                    </div>
                </div>                 */}
            </div>

            <div className={styles.button}>
                <SolidButton text="Join the tribe" icon={<ArrowRight />} />
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