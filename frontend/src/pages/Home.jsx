import React, { useState, useEffect } from "react";
import HomeStyle from '../styles/Home.module.css';
import FlipCard from "../components/FlipCard";
import { useNavigate } from 'react-router-dom';
import Countdown from "../components/Countdown";

import Image1 from '../assets/testImg1.jpg';
import Image2 from '../assets/testImg2.jpg';
import Image3 from '../assets/testImg3.jpg';
import Image4 from '../assets/testImg4.jpg';



function Home() {

  const eventTime = "2025-02-03T00:00:00";

  const events = [
    {
      id: 1,
      image: Image1,
      name: 'Tech Conference 2024',
      description: 'Join the most innovative tech conference this year with top speakers from around the world.'
    },
    {
      id: 2,
      image: Image2,
      name: 'Music Festival',
      description: 'A weekend of music, fun, and unforgettable performances from various artists.'
    },
    {
      id: 3,
      image: Image3,
      name: 'Art Expo 2024',
      description: 'Explore the world of art at the biggest expo showcasing modern and contemporary art.'
    },
    {
      id: 4,
      image: Image4,
      name: 'Art Expo 2024',
      description: 'Explore the world of art at the biggest expo showcasing modern and contemporary art.'
    },
  ];


  const navigate = useNavigate();
  const goToAbout = () =>{
    navigate('/techventure/about');
  };

  return (
    <div className={HomeStyle.homePage}>

      {/*********************** Hero Section ***********************/}
      <div className={HomeStyle.heroSection}>

        <div className={HomeStyle.heroInfo}>
          <div className={HomeStyle.eventName}>TECHVENTURE</div>

          <div className={HomeStyle.tagline}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sequi.
          </div>

          <div className={HomeStyle.date}>
            <i className="fa-regular fa-calendar-days"></i>
            15 Feb 2025
          </div>

          <div className={HomeStyle.venue}>
            <i className="fa-solid fa-location-dot"></i>
            Finolex Academy of Management and Technology, Ratnagiri.
          </div>

        </div>
      </div>


      {/*********************** Countdown ***********************/}
      <div className={HomeStyle.countdownSection}>
        <Countdown eventTime={eventTime}/>
      </div>


      {/*********************** About Section ***********************/}
      <div className={HomeStyle.homeAbout}>
        <div className={HomeStyle.sectionTitle}>Welcome to Techventure</div>

        <div className={HomeStyle.homeAboutInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci harum iusto, earum aspernatur distinctio ipsa beatae saepe 
          ratione labore blanditiis illo magni repudiandae odio debitis ipsum! Laudantium, rem vel! Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Sit odit, deleniti quis eaque ab facilis hic vitae repellat dolorem illo architecto eveniet quibusdam accusantium 
          itaque nisi minima laborum. Aperiam, ullam.
        </div>

        <button onClick={goToAbout}>Know more →</button>
      </div>
      

      {/*********************** Event Section ***********************/}
      <div className={HomeStyle.events}>
        <div className={HomeStyle.sectionTitle}>Events</div>

        <div className={HomeStyle.cardContainer}>
          {events.map((event, index) => (
            <FlipCard key={index} {...event} />
          ))}
        </div>
      </div>

    </div>
    
  )
}

export default Home