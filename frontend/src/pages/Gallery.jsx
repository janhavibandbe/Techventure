import React from 'react';
import GalleryStyle from '../styles/Gallery.module.css';
import { motion } from 'framer-motion';

import img1 from '../assets/gallery1.jpg';
import img2 from '../assets/gallery2.JPG';
import img3 from '../assets/gallery3.JPG';
import img4 from '../assets/gallery14.jpg';
import img5 from '../assets/gallery15.jpg';
import img6 from '../assets/gallery16.jpg';
import img7 from '../assets/gallery17.jpg';
import img8 from '../assets/gallery18.jpg';
import img9 from '../assets/FreshFlex.jpg';


function Gallery() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const childAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  let photos = [
    {
      id: 1,
      imgSrc: img1,
      imgName: "Image1",
      imgDescription: "The ACSES committee group photo captures the members together, showcasing their unity and collaboration.",
    },
    {
      id: 2,
      imgSrc: img2,
      imgName: "Image2",
      imgDescription: "TechVenture 2k24 is an exciting event showcasing innovation and technology.",
    },
    {
      id: 3,
      imgSrc: img3,
      imgName: "Image3",
      imgDescription: "The HOD is warmly welcoming the Principal to the Techventure event.",
    },
    {
      id: 4,
      imgSrc: img4,
      imgName: "Image4",
      imgDescription: "Students and teachers celebrating Teachers' Day with joy and gratitude.",
    },
    {
      id: 5,
      imgSrc: img5,
      imgName: "Image5",
      imgDescription: "Teachers' Day Celebration",
    },
    {
      id: 6,
      imgSrc: img6,
      imgName: "Image6",
      imgDescription: "A beautiful rangoli on the occasion of Khandenavmi.",
    },
    {
      id: 7,
      imgSrc: img7,
      imgName: "Image7",
      imgDescription: "Khandenavmi pooja",
    },
    {
      id: 8,
      imgSrc: img8,
      imgName: "Image8",
      imgDescription: "Khandenavmi pooja",
    },
    {
      id: 9,
      imgSrc: img9,
      imgName: "Image9",
      imgDescription: "Freshers' party celebration",
    },
  ]

  return (
    <div className={GalleryStyle.gallery}>

      {/*********************** Header ***********************/}
      <div className={GalleryStyle.sectionName}>
          Gallery
      </div>

      {/*********************** Photos ***********************/}
      <motion.div 
        class={GalleryStyle.cards}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        >
        {photos.map((item, index) => {
          return(
            <motion.div class={GalleryStyle.card} key={index} variants={childAnimation}>
                <div class={GalleryStyle.cardInner}>
                  <div class={GalleryStyle.cardFront}>
                    <img src={item.imgSrc} alt="Front Image"/>
                  </div>
                  <div class={GalleryStyle.cardBack}>
                    <p>{item.imgDescription}</p>
                  </div>
                </div>
            </motion.div>
          )
        })}
      </motion.div>

    </div>
  )
}

export default Gallery
