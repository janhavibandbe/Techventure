import React, { useState, useEffect } from "react";
import HomeStyle from '../styles/Home.module.css';
import FlipCard from "../components/FlipCard";

import Image1 from '../assets/testImg1.jpg';
import Image2 from '../assets/testImg2.jpg';
import Image3 from '../assets/testImg3.jpg';
import Image4 from '../assets/testImg4.jpg';
import Image5 from '../assets/testImg5.jpg';



function Home() {

  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-15T00:00:00"); // Set your event date here
    const currentTime = new Date();
    const difference = eventDate - currentTime;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
    }, []);


    const events = [
      {
        image: Image1,
        name: 'Tech Conference 2024',
        description: 'Join the most innovative tech conference this year with top speakers from around the world.'
      },
      {
        image: Image2,
        name: 'Music Festival',
        description: 'A weekend of music, fun, and unforgettable performances from various artists.'
      },
      {
        image: Image3,
        name: 'Art Expo 2024',
        description: 'Explore the world of art at the biggest expo showcasing modern and contemporary art.'
      },
      {
        image: Image4,
        name: 'Art Expo 2024',
        description: 'Explore the world of art at the biggest expo showcasing modern and contemporary art.'
      },
      {
        image: Image5,
        name: 'Art Expo 2024',
        description: 'Explore the world of art at the biggest expo showcasing modern and contemporary art.'
      },
      {
        image: Image4,
        name: 'Art Expo 2024',
        description: 'Explore the world of art at the biggest expo showcasing modern and contemporary art.'
      },
    ];

  return (
    <div className={HomeStyle.homePage}>
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



      <div className={HomeStyle.countdownContainer}>
        <div className={HomeStyle.countdown}>
          {Object.keys(timeLeft).map((interval, index) => (
            <div key={index} className={HomeStyle.timeBlock}>
              <div className={HomeStyle.time}>{timeLeft[interval] || "00"}</div>
              <div className={HomeStyle.label}>{interval.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>



      <div className={HomeStyle.homeAbout}>
        <div className={HomeStyle.sectionTitle}>Welcome to Techventure</div>

        <div className={HomeStyle.homeAboutaboutInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci harum iusto, earum aspernatur distinctio ipsa beatae saepe 
          ratione labore blanditiis illo magni repudiandae odio debitis ipsum! Laudantium, rem vel! Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Sit odit, deleniti quis eaque ab facilis hic vitae repellat dolorem illo architecto eveniet quibusdam accusantium 
          itaque nisi minima laborum. Aperiam, ullam.
        </div>
      </div>
      


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