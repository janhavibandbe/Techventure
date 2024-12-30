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

<!-- NEW TEST CODE-->
  <!----
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery Flip Card Effect</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f0f0f0;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
    }

    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    .card {
      width: 1000px;
      height: 700px;
      perspective: 1000px;
      cursor: pointer;
    }

    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      transition: transform 0.6s;
      transform-style: preserve-3d;
    }

    .card:hover .card-inner {
      transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #ddd;
      border-radius: 8px;
      overflow: hidden;
    }

    .card-front img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-back {
      background-color: #f8f8f8;
      transform: rotateY(180deg);
      text-align: center;
      padding: 10px;
      box-sizing: border-box;
    }

    @media (max-width: 600px) {
      .card {
        width: 150px;
        height: 200px;
      }
    }
  </style>
</head>
<body>
  <div class="gallery">
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="IMG-20240809-WA0039.jpg" alt="Front Image">
        </div>
        <div class="card-back">
          <p>The official TAGS members</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="image2.jpg" alt="Front Image">
        </div>
        <div class="card-back">
          <p>Description for Image 2</p>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-inner">
        <div class="card-front">
          <img src="image3.jpg" alt="Front Image">
        </div>
        <div class="card-back">
          <p>Description for Image 3</p>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
-->
