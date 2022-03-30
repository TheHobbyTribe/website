import React from 'react'
import styles from '../../styles/components/about/TeamRecommends.module.scss'
import abacus from '../../public/images/hobbies/abacus.png'
import bookreading from '../../public/images/hobbies/bookreading.png'
import painting from '../../public/images/hobbies/painting.png'
import photoshop from '../../public/images/hobbies/photoshop.png'
import {HobbyCard, OutlinedButton} from '../index'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const hobbyArray = [
    {
        id: 1,
        hobby: 'PhotoShop',
        time: '4 weeks',
        age: '12-100 yrs',
        image: photoshop
    },
    {
        id: 2,
        hobby: 'Abacus',
        time: '4 weeks',
        age: '12-100 yrs',
        image: abacus
    },
    {
        id: 3,
        hobby: 'Chess',
        time: '4 weeks',
        age: '12-100 yrs',
        image: painting
    },
    {
        id: 4,
        hobby: 'Story Telling',
        time: '4 weeks',
        age: '12-100 yrs',
        image: bookreading
    }
]

const TeamRecommends = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ],
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px"
              }}
            >
              <ul style={{ margin: "0px" }}> 
                {dots} 
              </ul>
            </div>
          ),
          // customPaging: i => (
          //   <div
          //     style={{
          //       backgroundColor: "#F97864",
          //       width: "24px",
          //       height: "8px",
          //       color: "blue",
          //       // border: "1px solid #2c2c2c",
          //       borderRadius: "4px",
          //       // margin: "0px 5px"
          //     }}
          //   />
          // )
      };

  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <p>
                    Our Team Recommends
                </p>
            </div>
            <div className={styles.content}>

                <Slider {...settings}>
                    {hobbyArray.map(hobby => {
                        return (
                            <div style={{'padding': '5px'}} className={styles.cardContainer} key={hobby.id}>
                                <HobbyCard hobby={hobby} />
                            </div>
                        )
                    })}
                </Slider>
            
            </div>
            <div className={styles.button}>
                <OutlinedButton text="View All Courses" />
            </div>
        </div>
    </div>
  )
}

export default TeamRecommends