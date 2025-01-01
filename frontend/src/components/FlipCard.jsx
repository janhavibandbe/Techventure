import React from 'react';
import FlipCardStyle from '../styles/FlipCard.module.css';
import { Link } from 'react-router-dom';

function FlipCard({ id, image, name, description }) {
  // const navigate = useNavigate();
  // const goToEvent = () => {
  //   navigate('/techventure/event')
  // }
  return (
    <div className={FlipCardStyle.card}>
        <div className={FlipCardStyle.cardInner}>
        <div className={FlipCardStyle.cardFront}>
            <img src={image} alt={name} className={FlipCardStyle.cardImage}/>
            <div className={FlipCardStyle.cardName}>{name}</div>
        </div>

        <div className={FlipCardStyle.cardBack}>
            <div className={FlipCardStyle.cardDescription}>{description}</div>
            <Link to={`/techventure/event/${id}`}>
              <button>Explore</button>
            </Link>
        </div>
        </div>
    </div>
  )
}

export default FlipCard