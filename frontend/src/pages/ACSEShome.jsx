import React from 'react';
import ACSEhomeStyle from '../styles/ACSEShome.module.css';
import { motion } from 'framer-motion';

import img1 from '../assets/testImg1.jpg';
import img2 from '../assets/testImg2.jpg';
import img3 from '../assets/testImg3.jpg';
import img4 from '../assets/testImg4.jpg';
import img5 from '../assets/testImg5.jpg';

function ACSEShome() {
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



 const Faculty = [
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



  const upcomingEvents = [
    {
      id: 1,
      name: "AI Workshop",
      date: "2025-02-16",
      location: "CSE Department",
      image: "https://img.freepik.com/premium-vector/artificial-intelligence-ai-logo-neon-frame-dark-bluegreen-background_851328-493.jpg",
    },
    {
      id: 2,
      name: "Robotics Expo",
      date: "2025-02-17",
      location: "CSE Department",
      image: "https://imgcdn.stablediffusionweb.com/2024/9/22/38fbbdf5-adf0-4a15-8245-69ed80124559.jpg",
    },
    {
      id: 3,
      name: "Web Development Bootcamp",
      date: "2025-02-18",
      location: "CSE Department",
      image: "https://images-platform.99static.com//dSQhzTpWXDcpuu9Y2xEpXV84QMg=/129x129:992x992/fit-in/500x500/99designs-contests-attachments/118/118295/attachment_118295052",
    },
  ];
    

  return (
    <div className={ACSEhomeStyle.ACSEShome}>

      {/*********************** Hero Section ***********************/}
      <div className={ACSEhomeStyle.banner}>
        <div className={ACSEhomeStyle.overlay}>
          <motion.h1 className={ACSEhomeStyle.collageName}
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible">Finolex Academy of Management & Technology</motion.h1>

          <motion.h2 className={ACSEhomeStyle.departmentName}
            variants={fadeRight}
            initial="hidden"
            whileInView="visible">Computer Science And Engineering (AI & ML)</motion.h2>
        </div>
      </div>


       {/*********************** Faculty Members ***********************/}
      <motion.div 
        className={ACSEhomeStyle.faculty}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible">
        <div className={ACSEhomeStyle.sectionTitle}> Faculty Members</div>
      
        <div class={ACSEhomeStyle.facultyCards}>
          {Faculty.map((item, index) => {
            return(
              <div class={ACSEhomeStyle.facultyCard} key={index} >
                  <div class={ACSEhomeStyle.facultyCardInner}>
                    <div class={ACSEhomeStyle.facultyCardFront}>
                      <img src={item.imgSrc} alt="Front Image"/>
                    </div>
                    <div class={ACSEhomeStyle.facultyCardBack}>
                      <p>{item.imgDescription}</p>
                    </div>
                  </div>
              </div>
            )
          })}
        </div>
      </motion.div>


      {/*********************** Past Events ***********************/}
      <div className={ACSEhomeStyle.pastEvents}>
      </div>


      {/*********************** Upcoming Events ***********************/}
      <motion.div 
        className={ACSEhomeStyle.upcomingEvents}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible">
        <h2 className={ACSEhomeStyle.sectionTitle}>Upcoming Events</h2>
        <div className={ACSEhomeStyle.eventsList}>
            {upcomingEvents.map((upcomingEvent) => (
            <div
                key={upcomingEvents.id}
                className={ACSEhomeStyle.upcomingEventfacultyCard}
                style={{ backgroundImage: `url(${upcomingEvent.image})` }}
            >
              <div className={ACSEhomeStyle.upcomingEventInfo}>
                  <p className={ACSEhomeStyle.upcomingEventName}>{upcomingEvent.name}</p>
                  <p className={ACSEhomeStyle.upcomingEventDate}>Date: {upcomingEvent.date}</p>
                  <p className={ACSEhomeStyle.upcomingEventLocation}>Location: {upcomingEvent.location}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  )
}

export default ACSEShome