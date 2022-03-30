import React from 'react'
import styles from '/styles/components/common/navbar/Navbar.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import THT_Logo_SVG from '/public/images/logo/THT_Logo_SVG.svg'
import Menu_logo from '/public/images/icons/menuright.svg'
import { OutlinedButton } from '../../index'
import SolidButton from '../buttons/SolidButton'

const Navbar = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.wrapper}>
				<div className={styles.navbarLeft}>
					<div className={styles.logo}>
						<THT_Logo_SVG />
					</div>
				</div>
				<div className={styles.navbarRight}>
					<div className={styles.menu}>
						<li className={styles.menuItems}>
							<Link href="/">
								<a>Home</a>
							</Link>
						</li>
						<li className={styles.menuItems}>
							<Link href="/about">
								<a>About Us</a>
							</Link>
						</li>
						<li className={styles.menuItems}>
							<Link href="/courses">
								<a>Find a hobby</a>
							</Link>
						</li>
						<li className={styles.menuItems}>
							<Link href="/blog">
								<a>Blog</a>
							</Link>
						</li>
					</div>
					<div className={styles.buttonContainer}>
						{/* Modify button according to login type  */}
						<OutlinedButton text="Login" />
					</div>
					<div className={styles.menuLogo}>
						<Menu_logo />
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
