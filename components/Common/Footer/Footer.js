import React from 'react'
import styles from '../../../styles/components/common/footer/Footer.module.scss'
import logo from '../../../public/images/logo/logo.png'
import SolidButton from '../buttons/SolidButton'
import Telephone from '../../../public/images/icons/telephone.svg'
import Email from '../../../public/images/icons/email.svg'
import Facebook from '../../../public/images/icons/facebook.svg'
import Instagram from '../../../public/images/icons/instagram.svg'
import Twitter from '../../../public/images/icons/twitter.svg'
// import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img className={styles.image} src={logo.src} alt="Hobby tribe Logo" />
            </div>
            <div className={styles.paragraph}>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis facilisi euismod ornare gravida etiam lorem non. Quis facilisi euismod ornare gravida etiam lorem non.
                </p>
            </div>
            <div className={styles.formHeading}>
                <p>Get access to exclusive updates</p>
            </div>
            <div className={styles.formContainer}>
                <input 
                    className={styles.form} 
                    type="text" 
                    placeholder='Enter your email'
                />
                <div className={styles.button}>
                    <SolidButton  
                    text="Subscribe" 
                    />
                </div>
                
            </div>
            <div className={styles.hyperlinks}>
                <a href="#">Find a hobby</a>
                <a href="#">About us</a>
                <a href="#">Blog</a>
                <a href="#">For Corporates</a>
            </div>
            <div className={styles.contact}>
                <div className={styles.subheading}>
                    <p>Get In Touch</p>
                </div>
                <div className={styles.item1}>
                    <Telephone />
                    <p>+91 9920318736</p>
                </div>
                <div className={styles.item2}>
                    <Email />
                    <p>support@thehobbytribe.com</p>
                </div>
            </div>
            <div className={styles.socialMedia}>
                <div className={styles.item}>
                    {/* <Link href='#'> */}
                        <Facebook />
                    {/* </Link> */}
                </div>
               <div className={styles.item}>
                    {/* <Link href='#'> */}
                        <Instagram />
                    {/* </Link> */}
                </div>
                <div className={styles.item}>
                    {/* <Link href='#'> */}
                        <Twitter />
                    {/* </Link> */}
                </div>
            </div>
            <div className={styles.end}>
                <p>Copyright &#169; 2021 Salins Technologies Pvt Ltd.</p>
                <p>Privacy|Terms|Refund</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer