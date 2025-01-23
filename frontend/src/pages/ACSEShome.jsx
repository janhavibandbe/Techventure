import React from 'react';
import ACSEhomeStyle from '../styles/ACSEShome.module.css';
import { motion } from 'framer-motion';

import Image1 from '../assets/testImg1.jpg';
import Image2 from '../assets/testImg2.jpg';
import Image3 from '../assets/testImg3.jpg';


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
            variants={window.innerWidth>470 ? fadeLeft : fadeUp}
            initial="hidden"
            whileInView="visible">Finolex Academy of Management And Technology</motion.h1>

          <motion.h2 className={ACSEhomeStyle.departmentName}
            variants={window.innerWidth>470 ? fadeRight : fadeUp}
            initial="hidden"
            whileInView="visible">Computer Science And Engineering (AI & ML)</motion.h2>
        </div>
      </div>

        <div className="faculty">
            
        </div>

        <div className="pastEvents">

        </div>

        <div className={ACSEhomeStyle.upcomingEvents}>
            <h2 className={ACSEhomeStyle.eventsHeader}>Upcoming Events</h2>
            <div className={ACSEhomeStyle.eventsList}>
                {upcomingEvents.map((upcomingEvent) => (
                <div
                    key={upcomingEvents.id}
                    className={ACSEhomeStyle.upcomingEventCard}
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
        </div>

    </div>
  )
}

export default ACSEShome