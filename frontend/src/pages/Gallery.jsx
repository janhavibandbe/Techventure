import React, { useState } from 'react';
import GalleryStyle from '../styles/Gallery.module.css';
import { motion } from 'framer-motion';

import img1 from '../assets/testImg1.jpg';
import img2 from '../assets/testImg2.jpg';
import img3 from '../assets/testImg3.jpg';
import img4 from '../assets/testImg4.jpg';
import img5 from '../assets/testImg5.jpg';

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
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!001",
    },
    {
      id: 2,
      imgSrc: img2,
      imgName: "Image2",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!002",
    },
    {
      id: 3,
      imgSrc: img3,
      imgName: "Image3",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatem tenetur003",
    },
    {
      id: 4,
      imgSrc: img4,
      imgName: "Image4",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!004",
    },
    {
      id: 5,
      imgSrc: img5,
      imgName: "Image5",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!005",
    }
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
