import React from 'react'
import styles from '../../styles/components/homepage/ExploreCategories.module.scss'
import ArtsCrafts from '../../public/images/Icons/artscrafts.svg'
import MusicDance from '../../public/images/Icons/musicdance.svg'
import MindGames from '../../public/images/Icons/mindgames.svg'
import CreativeWriting from '../../public/images/Icons/creativewriting.svg'
import Languages from '../../public/images/Icons/languages.svg'
import Photography from '../../public/images/Icons/photography.svg'
import PianoMan from'../../public/images/faces/pianoman.png'
import {CategoryCard, OutlinedButton} from '../index'


const categoryArray = [
    {
        id: 1,
        title: 'Arts & Craft',
        // backgroundColor: $Orange_40,
        icon: <ArtsCrafts/>
    },
    {
        id: 2,
        title: 'Music & Dance',
        // backgroundColor: $Blue_40,
        icon: <MusicDance/>
    },
    {
        id: 3,
        title: 'Mind Games',
        // backgroundColor: $Green_40,
        icon: <MindGames/>
    },
    {
        id: 4,
        title: 'Creative Writing',
        // backgroundColor: $Purple_40,
        icon: <CreativeWriting/>
    },
    {
        id: 5,
        title: 'Languages',
        // backgroundColor: $Pink_40,
        icon: <Languages/>
    },
    {
        id: 6,
        title: 'Photography',
        // backgroundColor: $Yellow_40,
        icon: <Photography/>
    },
    
    
]

const ExploreCategories = () => {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={PianoMan.src} alt="PianoMan" />
            </div>
            <div className={styles.heading}>
                <h4>Explore Categories</h4>
            </div>
            <div className={styles.paragraph}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus nulla scelerisque placerat lectus elementum facilisis suscipit volutpat. Text here must emphasize that THT offers a wide variety of classes inlcuing some very unique ones. 
                </p>
            </div>
            <div className={styles.content}>
                {categoryArray.map(category => {
                    return(
                        <div key={category.id} className={styles.contentContainer}>
                            <CategoryCard category={category} />
                        </div>
                    )
                })}
            </div>
            <div className={styles.outlinedButton}>
                <OutlinedButton text="View all Courses" />
            </div>
        </div>
    </div>
  )
}

export default ExploreCategories