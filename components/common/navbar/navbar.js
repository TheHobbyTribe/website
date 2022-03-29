import React from 'react'
import styles from '../../../styles/components/common/navbar/navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import THT_Logo_SVG from '../../../public/images/logo/THT_Logo_SVG.svg'
import Menu_logo from '../../../public/images/Icons/menuright.svg'
import { OutlinedButton} from '../../index'

const Navbar =() => {
    return (
        <nav className= {styles.container}>
            <div className= {styles.wrapper}>
                <div className= {styles.logo} >
                    <THT_Logo_SVG/>
                </div>
                <div className= {styles.topRight}>
                    <ul className={styles.menu}>
                        <li className={styles.menuItems}><Link href="/"><a>Home</a></Link></li> 
                        <li className={styles.menuItems}><Link href="/about"><a>About Us</a></Link></li>    
                        <li className={styles.menuItems}><Link href="/courses"><a>Find a hobby</a></Link></li>  
                        <li className={styles.menuItems}><Link href="/blog"><a>Blog</a></Link></li>        
                    </ul>  
                    <div className={styles.buttonContainer}>
                        {/* Modify button according to login type  */}
                        <OutlinedButton text="Login"/>
                    </div>
                    <span className={styles.menuLogo}><Menu_logo/></span> 
                </div>
            </div>
        </nav>
    )
}

export default Navbar