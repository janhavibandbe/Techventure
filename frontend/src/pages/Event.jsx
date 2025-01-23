import React from 'react';
import EventStyle from '../styles/Event.module.css';
import { useParams } from 'react-router-dom';
import Countdown from '../components/Countdown';
import { motion } from 'framer-motion';

import Image1 from '../assets/testImg1.jpg';
import Image2 from '../assets/testImg2.jpg';
import Image3 from '../assets/testImg3.jpg';
import Image4 from '../assets/testImg4.jpg';
import GoldenTropthy from '../assets/goldenTrophy.png';
import SilverTropthy from '../assets/silverTrophy.png';
import BronzeTropthy from '../assets/bronzeTrophy.png';

function Event() {
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

  const events = [
        {
          id: 1,
          category: 'tech',
          image: Image1,
          name: 'Tech Conference 2024',
          date: '15 Feb 2025',
          description: `<p><span style="font-size:22px;"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span style="font-size:22px;"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span style="font-size:22px;"><strong>Rules:</strong></span></p>
                        <ol style="list-style-type:decimal;">
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 2,
          category: 'tech',
          image: Image2,
          name: 'Music Festival',
          date: '16 Feb 2025',
          description: `<p><span style="font-size:22px;"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span style="font-size:22px;"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span style="font-size:22px;"><strong>Rules:</strong></span></p>
                        <ol style="list-style-type:decimal;">
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 3,
          category: 'tech',
          image: Image3,
          name: 'Art Expo 2024',
          date: '17 Feb 2025',
          description: `<p><span style="font-size:22px;"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span style="font-size:22px;"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span style="font-size:22px;"><strong>Rules:</strong></span></p>
                        <ol style="list-style-type:decimal;">
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,          
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 4,
          category: 'tech',
          image: Image4,
          name: 'Art Expo 2024',
          date: '18 Feb 2025',
          description: `<p><span style="font-size:22px;"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span style="font-size:22px;"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span style="font-size:22px;"><strong>Rules:</strong></span></p>
                        <ol style="list-style-type:decimal;">
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 5,
          category: 'non-tech',
          image: Image4,
          name: 'Art Expo 2024',
          date: '18 Feb 2025',
          description: `<p><span style="font-size:22px;"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span style="font-size:22px;"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span style="font-size:22px;"><strong>Rules:</strong></span></p>
                        <ol style="list-style-type:decimal;">
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 6,
          category: 'non-tech',
          image: Image4,
          name: 'Art Expo 2024',
          date: '18 Feb 2025',
          description: `<p><span"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span"><strong>Rules:</strong></span></p>
                        <ol>
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 7,
          category: 'non-tech',
          image: Image4,
          name: 'Art Expo 2024',
          date: '18 Feb 2025',
          description: `<p><span style="font-size:22px;"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span style="font-size:22px;"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span style="font-size:22px;"><strong>Rules:</strong></span></p>
                        <ol style="list-style-type:decimal;">
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 8,
          category: 'non-tech',
          image: Image4,
          name: 'Art Expo 2024',
          date: '18 Feb 2025',
          description: `<p><span style="font-size:22px;"><strong>About:</strong></span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span style="font-size:22px;"><strong>Team Members:</strong></span> 2-3</p>
                        <p><span style="font-size:22px;"><strong>Rules:</strong></span></p>
                        <ol style="list-style-type:decimal;">
                            <li>Lorem ipsum dolor sit amet. </li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing. </li>
                            <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</li>
                        </ol>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
      ];


  const {id} = useParams();
  const event = events.find(e => e.id === parseInt(id));

  const handleRgistration = () =>{
    window.open(event.googleFormURL, "_blank");
  };

  return (
    <div className={EventStyle.eventPage}>
      
      {/*********************** Event Banner ***********************/}
      <div className={EventStyle.eventBanner} style={{background: `linear-gradient(#222929d2, #222929d2), url(${event.image})`}}>
        <div className={EventStyle.eventBannerContent}>
          <motion.div className={EventStyle.eventDate}
            variants={window.innerWidth>470 ? fadeLeft : fadeUp}
            initial="hidden"
            whileInView="visible"
            >{event.date}</motion.div>

          <motion.div className={EventStyle.eventName}
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            >{event.name}</motion.div>

          <motion.div className={EventStyle.venue}
            variants={window.innerWidth>470 ? fadeRight : fadeUp}
            initial="hidden"
            whileInView="visible">{event.location}, Finolex Academy of Management and Technology, Ratnagiri.</motion.div>

        </div>

        <motion.div className={EventStyle.registerButtonContainer}
          variants={fadeIn}
          initial="hidden"
          whileInView="visible">
          <button onClick={handleRgistration}>Rgister Now →</button>
        </motion.div>
      </div>



      {/*********************** Countdown ***********************/}
      <div className={EventStyle.countdownSection}> 
        <Countdown eventTime={eventTime}/>
      </div>



      {/*********************** Event Description ***********************/}
      <motion.div className={EventStyle.eventDescription}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible">
        <div className={EventStyle.sectionTitle}>Event Overview</div>

        <div className={EventStyle.eventInfo} dangerouslySetInnerHTML={{ __html: event.description }} ></div>
      </motion.div>



      {/*********************** Prices ***********************/}
      {
        event.category === 'tech' ? 
        (
          <div className={EventStyle.prices}>
            <div className={EventStyle.sectionTitle}>Prices</div>

            <div className={EventStyle.priceOptions}>
              <div className={EventStyle.priceOption}>
                <img src={SilverTropthy} alt="" />
                <div className={EventStyle.pricelabel}>2nd Price</div>
                <div className={EventStyle.priceValue}>{event.price2}</div>
              </div>
              <div className={EventStyle.priceOption}>
                <img src={GoldenTropthy} alt="" className={EventStyle.firstPrice}/>
                <div className={EventStyle.pricelabel}>1st Price</div>
                <div className={EventStyle.priceValue}>{event.price1}</div>
              </div>
              <div className={EventStyle.priceOption}>
                <img src={BronzeTropthy} alt="" />
                <div className={EventStyle.pricelabel}>3rd Price</div>
                <div className={EventStyle.priceValue}>{event.price3}</div>
              </div>
            </div>

            <p>**Certificate of Participation for everyone.</p>
          </div>
        ) : (<> </>)
      }



      {/*********************** Register Button ***********************/}
      <div className={EventStyle.registerButtonContainer}>
        <button onClick={handleRgistration}>Rgister Now →</button>
      </div>
    </div>

  )
}

export default Event