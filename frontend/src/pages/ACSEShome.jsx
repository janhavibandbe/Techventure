import React from 'react';
import ACSEhomeStyle from '../styles/ACSEShome.module.css';
import { motion } from 'framer-motion';

import faculty1 from '../assets/NimbalkarMam.jpg';
import faculty2 from '../assets/SawantMam.jpeg';
import faculty3 from '../assets/JadhavSir.jpg';
import faculty4 from '../assets/TivarekarSir.jpg';
import faculty5 from '../assets/ShetyeSir.jpeg';
import faculty6 from '../assets/ZagadeMam.jpg';
import faculty7 from '../assets/AthalyeMam.png';
import faculty8 from '../assets/TeliMam.jpeg';
import faculty9 from '../assets/HatiskarMam.jpg';
import faculty10 from '../assets/GoreMam.jpg';

import Techventure2k25 from '../assets/background.jpg'
import Techventure2k24 from '../assets/gallery1.jpg';
import TeachersDay from '../assets/gallery14.jpg'
import FreshFlex from '../assets/FreshFlex.jpg';
import KandenavmiPooja from '../assets/KandenavmiPooja.jpg'

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
    facultySrc: faculty1,
    facultyName: "Ms. Vrishali Nimbalkar",
    designation: "HOD, Assistant Professor"
  },
  {
    id: 2,
    facultySrc: faculty2,
    facultyName: "Dr. Geetanjali N. Sawant",
    designation: "Assistant Professor"
  },
  {
    id: 3,
    facultySrc: faculty3,
    facultyName: "Mr. Mahesh Jadhav",
    designation: "Assistant Professor"
  },
  {
    id: 4,
    facultySrc: faculty4,
    facultyName: "Mr. Rahulkumar P. Tivarekar",
    designation: "Assistant Professor"
  },
  {
    id: 5,
    facultySrc: faculty5,
    facultyName: "Mr. Akshay N. Shetye",
    designation: "Assistant Professor"
  },
  {
    id: 6,
    facultySrc: faculty6,
    facultyName: "Mrs. Madhura K. Zagade",
    designation: "Assistant Professor"
  },
  {
    id: 7,
    facultySrc: faculty7,
    facultyName: "Mrs. Sprooha S. Athalye",
    designation: "Assistant Professor"
  },
  {
    id: 8,
    facultySrc: faculty8,
    facultyName: "Ms. Swapnali R. Teli",
    designation: "Assistant Professor"
  },
  {
    id: 9,
    facultySrc: faculty9,
    facultyName: "Mrs. Mrunmayee M. Hatiskar",
    designation: "Assistant Professor"
  },
  {
    id: 10,
    facultySrc: faculty10,
    facultyName: "Mrs. Manasi G. Gore",
    designation: "Assistant Professor"
  },
  
]

const pastEvents = [
  { 
    id: 1, 
    name: "Techventure 2k24",
    description: "TechVenture 2K24, organized by the CSE(AI & ML) Department at Finolex Academy of Management and Technology, Ratnagiri, celebrated technology and innovation. The event brought together students and tech enthusiasts to enhance technical skills. It showcased groundbreaking ideas and innovations, making it a memorable experience for all. TechVenture 2K24 truly embodied the spirit of technological excellence and teamwork.", 
    imageUrl: Techventure2k24
  },
  { 
    id: 2, 
    name: "Teachers' Day",
    description: "Teachers' Day was celebrated at the CSE(AI & ML) Department of Finolex Academy of Management and Technology for honoring the faculty. Students organized Coding Round and Group discussion to show appreciation for their teachers' hard work. The day highlighted the strong bond between students and faculty, with everyone coming together to celebrate the vital role of educators.", 
    imageUrl: TeachersDay
  },
  { 
    id: 3, 
    name: "FreshFlex 2k24",
    description: "FreshFlex, the Fresher’s Party at the CSE(AI & ML) Department of Finolex Academy of Management and Technology, was an exciting and memorable event! The celebration was filled with energetic performances, music, and fun activities, creating a lively atmosphere for the new students. Freshers had a great time bonding with seniors and getting to know more about college life. It was a fantastic way to kick off their journey at Finolex College.", 
    imageUrl: FreshFlex
  },
  { 
    id: 4, 
    name: "Khandenavmi Pooja",
    description: "Khandenavmi Pooja was celebrated with devotion at the CSE Department of Finolex Academy of Management and Technology. The event began with traditional rituals, invoking blessings for knowledge and success. Faculty, students, and staff participated in the sacred ceremony, creating a spiritual atmosphere. The pooja included Vedic chants, followed by aarti, fostering unity. The beautifully decorated department enhanced the festive spirit. Students embraced cultural traditions and sought divine guidance for their academic journey. The event concluded with positivity, gratitude, and blessings for future success, making it a memorable and meaningful celebration.", 
    imageUrl: KandenavmiPooja
  },
];

const upcomingEvents = [
  {
    id: 1,
    name: "Techventure 2k25",
    date: "17 Feb 2025",
    location: "CSE Department",
    image: Techventure2k25,
  },
  {
    id: 2,
    name: "Shivjayanti",
    date: "19 Feb 2025",
    location: "CSE Department",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAUT99fTukLsuqH9YqdfmwOodaUUjHcE04iw&s",
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
                    <img src={item.facultySrc} alt="Front Image"/>
                  </div>
                  <div class={ACSEhomeStyle.facultyCardBack}>
                    <h3>{item.facultyName}</h3>
                    <p>{item.designation}</p>
                  </div>
                </div>
            </div>
          )
        })}
      </div>
    </motion.div>


    {/*********************** Past Events ***********************/}
    <motion.div 
    className={ACSEhomeStyle.pastEvents}
    variants={fadeUp}
    initial="hidden"
    whileInView="visible">
      <div className={ACSEhomeStyle.sectionTitle}>Rewind & Relive</div>

      <div className={ACSEhomeStyle.eventContainer}>
        {pastEvents.map((event) => (
          <div
            key={event.id}
            className={
              event.id % 2 === 0
                ? ACSEhomeStyle.eventEven
                : ACSEhomeStyle.eventOdd
            }
          >
            <div className={ACSEhomeStyle.eventDescription}>
              <h1>{event.name}</h1>
              {event.description}
            </div>
            <img className={ACSEhomeStyle.eventImage} src={event.imageUrl} alt={`Event ${event.id}`} />
          </div>
        ))}
      </div>

    </motion.div>




    {/*********************** Upcoming Events ***********************/}
    <motion.div 
      className={ACSEhomeStyle.upcomingEvents}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible">
      <div className={ACSEhomeStyle.sectionTitle}>Upcoming Events</div>
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