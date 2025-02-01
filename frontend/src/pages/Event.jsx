import React from 'react';
import EventStyle from '../styles/Event.module.css';
import { useParams } from 'react-router-dom';
import Countdown from '../components/Countdown';
import { motion } from 'framer-motion';

import Image4 from '../assets/testImg4.jpg';
import GoldenTropthy from '../assets/goldenTrophy.png';
import SilverTropthy from '../assets/silverTrophy.png';
import BronzeTropthy from '../assets/bronzeTrophy.png';

import quizRelay from '../assets/quizRelay.jpeg';
import codeHunt from '../assets/codeHunt.jpeg';
import miniBattle from '../assets/miniBattle.jpeg';
import futsal from '../assets/futsal.jpeg';

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

  

  const events = [
        {
          id: 1,
          category: 'tech',
          image: codeHunt,
          name: 'Code Hunt',
          date: '17 Feb 2025',
          eventTime : "2025-02-17T10:15:00",
          description: `<p><span><strong>About:</strong></span>&emsp;Code Hunt is an exhilarating coding treasure hunt where teams must solve C programming challenges to uncover hidden locations. Each team will install the Code Hunt app, which will present them with a C snippet. The output of the snippet will serve as a clue leading them to a specific location within the campus. Upon reaching the correct location, teams must scan a QR code placed there using the app. If they have decoded the clue correctly and arrived at the right spot, they will receive the next C snippet to continue their hunt. </p>
                        <p><span><strong>Team Members:</strong></span>&emsp;maximum 3</p>
                        <p><strong>Stay sharp, think fast, and hunt smart to be the first team to complete the challenge!</strong></p>`,
          location: 'EN 1/3',
          price1: '₹600',
          price2: '₹400',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 2,
          category: 'tech',
          image: 'https://media.licdn.com/dms/image/v2/D4D12AQHsGUCYBeE2AA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1697107698641?e=2147483647&v=beta&t=LkKXefH8Oa3reHEyrGiuAF3U7z7WpD6d_ovnjWdTPMI',
          name: 'Break the Query',
          date: '19 Feb 2025',
          eventTime : "2025-02-19T11:30:00",
          description: `<p><span><strong>About:</strong></span>&emsp;Break the Query is a fast-paced SQL challenge where individual participants will put their database skills to the test. Each participant will be provided with pre-made databases and tables, along with a set of problem statements. The objective is to write accurate SQL queries that produce the required output within the given time limit of 45 minutes. The competition consists of a single round, where participants must analyze the problem statements and craft efficient queries to extract the correct results. This event is a great opportunity to showcase your SQL expertise and logical thinking. </p>
                        <p><span><strong>Team Members:</strong></span>&emsp;Solo</p>
                        <p><strong>Are you ready to break the query and emerge as the ultimate database champion?</strong></p>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 3,
          category: 'tech',
          image: quizRelay,
          name: 'Quiz Relay',
          date: '17 Feb 2025',
          eventTime : "2025-02-19T11:30:00",
          description: `<p><span"><strong>About:</strong></span>&emsp;Quiz Relay is an exciting four-phase challenge that tests participants on a variety of skills, ranging from general knowledge to problem-solving. The competition begins with the first phase, where participants answer a series of General Knowledge (GK) questions to advance. In the second phase, skills are put to the test with a cube-solving challenge. The third phase focuses on basic mathematical problems, assessing numerical ability and quick calculations. Finally, the fourth and last phase challenges participants with aptitude-based questions that require logical thinking and reasoning. With each phase presenting a new challenge, only the most well-rounded and quick-thinking participants will make it to the end.</p>
                        <p><span><strong>Team Members:</strong></span>&emsp;4</p>
                        <p><strong>Are you ready to take on the Quiz Relay and prove your skills across multiple domains?</strong></p>`,          
          location: 'EN 1/5',
          price1: '₹400',
          price2: '₹250',
          price3: '₹150',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 4,
          category: 'tech',
          image: 'https://www.shutterstock.com/image-vector/futuristic-robot-interacting-digital-data-600nw-2500204599.jpg',
          name: 'Prompt It',
          date: '18 Feb 2025',
          eventTime : "2025-02-19T11:30:00",
          description: `<p><span><strong>About:</strong></span>&emsp;Prompt It is a test of creativity and problem-solving where participants must craft the perfect prompt to make ChatGPT generate a given phrase—without using any of its words or direct synonyms. To succeed, participants must think outside the box, using indirect descriptions and clever associations to guide the AI naturally toward the target phrase. The challenge comes with strict rules: no hints about word count, starting letters, or rhyming patterns. With just 10 minutes on the clock, participants must refine their approach and find the most effective way to achieve the exact output. The participant with the most accurate and innovative prompt will be declared the winner.</p>
                        <p><span><strong>Team Members:</strong></span>&emsp;Solo</p>
                        <p><strong>Think smart, be strategic, and put your prompting skills to the test!</strong></p>`,
          location: 'EN 1/3',
          price1: '₹400',
          price2: '₹250',
          price3: '₹150',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 5,
          category: 'tech',
          image: 'https://engineering.facile.it/images/vp-may-2024/hack-the-box-v0-a56fw7h8a2aa1.webp',
          name: 'Hack The Box',
          date: '17 Feb 2025',
          eventTime : "2025-02-19T11:30:00",
          description: `<p><span><strong>About:</strong></span>&emsp;Hack the Box is a thrilling cybersecurity challenge designed to test participants' Linux command-line skills, problem-solving abilities, and efficiency under time constraints. Each participant will be provided with a unique login to a Linux machine, where they must navigate the system to locate a specific hidden file. Once found, the user must correctly configure the necessary permissions to access and utilize the file. The ultimate goal is to execute the given script, request.sh, which marks their completion of the challenge. The event is a race against time, as timestamps are recorded upon successful execution, and the participant with the shortest completion time will be declared the winner. </p>
                        <p><span><strong>Team Members:</strong></span>&emsp;Solo</p>
                        <p><strong>Are you ready to put your Linux skills to the test and claim the top spot? Good luck!</strong></p>`,
          location: 'EN 1/3',
          price1: '₹500',
          price2: '₹300',
          price3: '₹200',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 6,
          category: 'non-tech',
          image: futsal,
          name: 'Futsal',
          date: '17 Feb 2025',
          eventTime : "2025-02-19T11:30:00",
          description: `<p><span><strong>About:</strong></span>&emsp;Futsal is an exciting and fast-paced indoor game designed for teams of two players, emphasizing skill, speed, and fair play. Each match consists of two halves, each lasting 5 minutes, with a short 30-second break in between. Teams can consist of one field player and one goalkeeper or both players acting as field players. The objective is simple—score as many goals as possible by ensuring the entire ball crosses the goal line. The team with the highest number of goals at the end of regulation time will be declared the winner. Participants are expected to adhere to the rules, play competitively, and embrace the spirit of the game.</p>
                        <p><span><strong>Team Members:</strong></span>&emsp;2</p>
                        <p><span><strong>Entry Fees:</strong></span>&emsp;20/- per team</p>
                        <p><strong>Get ready to showcase your agility and teamwork on the court!</strong></p>`,
          location: 'EN 1/1',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 7,
          category: 'non-tech',
          image: miniBattle,
          name: 'Mini Battle',
          date: '17 Feb 2025',
          eventTime : "2025-02-19T11:30:00",
          description: `<p><span><strong>About:</strong></span>&emsp;</p>
                        <p><span><strong>Team Members:</strong></span>&emsp;Solo</p>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>`,
          location: 'EN 1/3',
          googleFormURL: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        },
        {
          id: 8,
          category: 'non-tech',
          image: 'https://static.vecteezy.com/system/resources/previews/000/221/232/non_2x/vector-illustration-of-blast-with-balloon.jpg',
          name: 'Balloon Blast',
          date: '17 Feb 2025',
          eventTime : "2025-02-19T11:30:00",
          description: `<p><span><strong>About:</strong></span>&emsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non, perspiciatis!</p>
                        <p><span><strong>Team Members:</strong></span>&emsp;2-3</p>
                        <p><strong>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</strong></p>`,
          location: 'EN 1/3',
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
        <Countdown eventTime={event.eventTime}/>
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