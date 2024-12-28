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
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!",
    },
    {
      id: 2,
      imgSrc: img2,
      imgName: "Image2",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!",
    },
    {
      id: 3,
      imgSrc: img3,
      imgName: "Image3",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit Voluptatem tenetur",
    },
    {
      id: 4,
      imgSrc: img4,
      imgName: "Image4",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!",
    },
    {
      id: 5,
      imgSrc: img5,
      imgName: "Image5",
      imgDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, tenetur!",
    }
  ]

  const [imgModel, setImgModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');

  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = (id) => {
    setIsFlipped((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setImgModel(true);
  }

  return (
    <div className={GalleryStyle.gallery}>
      <div className={GalleryStyle.sectionName}>
          Gallery
      </div>

      <div className={imgModel ? `${GalleryStyle.imgModel} ${GalleryStyle.open}` : `${GalleryStyle.imgModel}`}>
          <img src={tempimgSrc} alt="" />
          <i className="fa-solid fa-x" onClick={() => setImgModel(false)}></i>
      </div>

      <div className={GalleryStyle.photoGallery}>
      {photos.map((item, index) => {

          return(
            <div id='flip-card' className={`${GalleryStyle.flipCard} ${isFlipped[item.id] ? `${GalleryStyle.flipped}` : ''}`}
              key={item.id}
              onClick={() => handleCardClick(item.id)}>
              <div className={GalleryStyle.flipCardInner} key={index}>
                  <div className={GalleryStyle.flipCardFront}>
                    <img src={item.imgSrc} alt="" />
                    {/* onClick={() => {setImgModel(true)
                    setTempImgSrc(item.imgSrc)
                    }}/> */}
                  </div>

                  <div className={GalleryStyle.flipCardBack}>
                    <h2 className={GalleryStyle.imgName}>{item.imgName}</h2>
                    <p className={GalleryStyle.imgDescription}>{item.imgDescription}</p>
                  </div>
              </div>
            </div>
          )
        })
        }
      </div>

    </div>
  )
}

export default Gallery