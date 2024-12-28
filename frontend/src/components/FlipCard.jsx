import React from 'react';
import FlipCardStyle from '../styles/FlipCard.module.css';

function FlipCard({ image, name, description }) {
  return (
    <div className={FlipCardStyle.card}>
        <div className={FlipCardStyle.cardInner}>
        <div className={FlipCardStyle.cardFront}>
            <img src={image} alt={name} className={FlipCardStyle.cardImage}/>
            <div className={FlipCardStyle.cardName}>{name}</div>
        </div>

        <div className={FlipCardStyle.cardBack}>
            <div className={FlipCardStyle.cardDescription}>{description}</div>
            <button>Explore</button>
        </div>
        </div>
    </div>
  )
}

export default FlipCard