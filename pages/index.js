import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>The Hobby Tribe</title>
				<meta name="description" content="Generated by The Hobby Tribe" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			Hello 
		</div>
	);
}
