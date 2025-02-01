import React from "react";
import HomeStyle from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import FlipCard from "../components/FlipCard";
import { useNavigate } from 'react-router-dom';
import Countdown from "../components/Countdown";

import quizRelay from '../assets/quizRelay.jpeg';
import codeHunt from '../assets/codeHunt.jpeg';
import miniBattle from '../assets/miniBattle.jpeg';
import futsal from '../assets/futsal.jpeg';


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

  const eventTime = "2025-02-17T09:15:00";

  const techEvents = [
    {
      id: 1,
      image: codeHunt,
      name: 'Code Hunt',
      description: 'Code Hunt is coding treasure hunt where teams solve C programming challenges to uncover hidden locations.'
    },
    {
      id: 2,
      image: 'https://media.licdn.com/dms/image/v2/D4D12AQHsGUCYBeE2AA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697107698641?e=2147483647&v=beta&t=LkKXefH8Oa3reHEyrGiuAF3U7z7WpD6d_ovnjWdTPMI',
      name: 'Break the Query',
      description: 'Break the Query is a SQL challenge where participants write efficient queries to solve given problems within 45 minutes.'
    },
    {
      id: 3,
      image: quizRelay,
      name: 'Quiz Relay',
      description: 'Quiz Relay is a four-phase challenge testing general knowledge, problem-solving, math, and logical reasoning skills.'
    },
    {
      id: 4,
      image: 'https://www.shutterstock.com/image-vector/futuristic-robot-interacting-digital-data-600nw-2500204599.jpg',
      name: 'Prompt It',
      description: 'Prompt It! is a competition where participants craft prompts to recreate a pre-written story using ChatGPT.'
    },
    {
      id: 5,
      image: 'https://engineering.facile.it/images/vp-may-2024/hack-the-box-v0-a56fw7h8a2aa1.webp',
      name: 'Hack The Box',
      description: 'Hack the Box is a timed cybersecurity challenge where participants navigate a Linux system to find and execute a hidden file.'
    },
  ];

  const nonTechEvents = [
    {
      id: 6,
      image: futsal,
      name: 'Futsal',
      description: 'Futsal is a fast-paced indoor game where two-player teams compete to score the most goals within 10 minutes.'
    },
    {
      id: 7,
      image: miniBattle,
      name: 'Mini Battle',
      description: 'A weekend of music, fun, and unforgettable performances from various artists.'
    },
    {
      id: 8,
      image: 'https://static.vecteezy.com/system/resources/previews/000/221/232/non_2x/vector-illustration-of-blast-with-balloon.jpg',
      name: 'Balloon Blast',
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
            Techventure is where innovation meets celebration
          </motion.div>

          <motion.div 
            className={HomeStyle.date}
            variants={window.innerWidth>470 ? fadeRight : fadeUp}
            initial="hidden"
            whileInView="visible"
            >
            <i className="fa-regular fa-calendar-days"></i>
            17 Feb 2025
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
          Welcome to Techventure, the flagship event of the Computer Science
          and Engineering Department at Finolex Academy of Management and
          Technology. Organized and managed with passion by the dynamic ACSES
          committee—a group of aspiring technologists pursuing their
          undergraduate degrees in Computer Science and Engineering (AI &
          ML)—Techventure is where innovation meets celebration.
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