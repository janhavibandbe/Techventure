import React from "react";
import HomeStyle from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import FlipCard from "../components/FlipCard";
import { useNavigate } from 'react-router-dom';
import Countdown from "../components/Countdown";

import Image1 from '../assets/testImg1.jpg';
import Image2 from '../assets/testImg2.jpg';
import Image3 from '../assets/testImg3.jpg';
import Image4 from '../assets/testImg4.jpg';



function Home() {
  const fadeIn = {
    hidden: { opacity: 0},
    visible: {
      opacity: 1, 
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const eventTime = "2025-02-03T00:00:00";

  const techEvents = [
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

  const nonTechEvents = [
    {
      id: 5,
      image: Image1,
      name: 'Tech Conference 2024',
      description: 'Join the most innovative tech conference this year with top speakers from around the world.'
    },
    {
      id: 6,
      image: Image2,
      name: 'Music Festival',
      description: 'A weekend of music, fun, and unforgettable performances from various artists.'
    },
    {
      id: 7,
      image: Image3,
      name: 'Art Expo 2024',
      description: 'Explore the world of art at the biggest expo showcasing modern and contemporary art.'
    },
    {
      id: 8,
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
          <motion.div 
            className={HomeStyle.eventName}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible">TECHVENTURE</motion.div>

          <motion.div 
            className={HomeStyle.tagline}
            variants={window.innerWidth>470 ? fadeLeft : fadeUp}
            initial="hidden"
            whileInView="visible"
            >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sequi.
          </motion.div>

          <motion.div 
            className={HomeStyle.date}
            variants={window.innerWidth>470 ? fadeRight : fadeUp}
            initial="hidden"
            whileInView="visible"
            >
            <i className="fa-regular fa-calendar-days"></i>
            15 Feb 2025
          </motion.div>

          <motion.div 
            className={HomeStyle.venue}
            variants={window.innerWidth>470 ? fadeRight : fadeUp}
            initial="hidden"
            whileInView="visible"
            >
            <i className="fa-solid fa-location-dot"></i>
            Finolex Academy of Management and Technology, Ratnagiri.
          </motion.div>

        </div>
      </div>


      {/*********************** Countdown ***********************/}
      <div className={HomeStyle.countdownSection}>
        <Countdown eventTime={eventTime}/>
      </div>


      {/*********************** About Section ***********************/}
      <motion.div 
      className={HomeStyle.homeAbout}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      >
        <div className={HomeStyle.sectionTitle}>Welcome to Techventure</div>

        <div className={HomeStyle.homeAboutInfo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit adipisci harum iusto, earum aspernatur distinctio ipsa beatae saepe 
          ratione labore blanditiis illo magni repudiandae odio debitis ipsum! Laudantium, rem vel! Lorem ipsum dolor sit amet, consectetur 
          adipisicing elit. Sit odit, deleniti quis eaque ab facilis hic vitae repellat dolorem illo architecto eveniet quibusdam accusantium 
          itaque nisi minima laborum. Aperiam, ullam.
        </div>

        <button onClick={goToAbout}>Know more →</button>
      </motion.div>
      

      <div className={HomeStyle.eventOuterContainer}>
        {/*********************** Technical Event Section ***********************/}
        <motion.div 
          className={HomeStyle.events}
          variants={window.innerWidth>470 ? fadeLeft : fadeUp}
          initial="hidden"
          whileInView="visible"
          >
          <div className={HomeStyle.sectionTitle}>Technical Events</div>
          <div className={HomeStyle.cardContainer}>
            {techEvents.map((event, index) => (
              <FlipCard key={index} {...event} />
            ))}
          </div>
        </motion.div>

        {/*********************** Non-Technical Event Section ***********************/}
        <motion.div 
          className={HomeStyle.events}
          variants={window.innerWidth>470 ? fadeRight : fadeUp}
          initial="hidden"
          whileInView="visible"
          >
          <div className={HomeStyle.sectionTitle}>Non-Technical Events</div>
          <div className={HomeStyle.cardContainer}>
            {nonTechEvents.map((event, index) => (
              <FlipCard key={index} {...event} />
            ))}
          </div>
        </motion.div>
      </div>
      

    </div>
    
  )
}

export default Home