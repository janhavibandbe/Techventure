import React, { useState } from 'react';
import GalleryStyle from '../styles/Gallery.module.css';

import img1 from '../assets/testImg1.jpg';
import img2 from '../assets/testImg2.jpg';
import img3 from '../assets/testImg3.jpg';
import img4 from '../assets/testImg4.jpg';
import img5 from '../assets/testImg5.jpg';

function Gallery() {

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
      <div className={GalleryStyle.sectionName}>
          Gallery
      </div>

      <div class={GalleryStyle.cards}>
        {photos.map((item, index) => {
          return(
            <div class={GalleryStyle.card} key={index}>
                <div class={GalleryStyle.cardInner}>
                  <div class={GalleryStyle.cardFront}>
                    <img src={item.imgSrc} alt="Front Image"/>
                  </div>
                  <div class={GalleryStyle.cardBack}>
                    <p>{item.imgDescription}</p>
                  </div>
                </div>
            </div>
          )
        })}
        
      </div>

    </div>
  )
}

export default Gallery
