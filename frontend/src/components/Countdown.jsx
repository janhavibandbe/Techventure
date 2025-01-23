import React, {useState, useEffect} from 'react';
import CountdownStyle from '../styles/Countdown.module.css';
import { motion } from 'framer-motion';

function Countdown({eventTime}) {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1, 
      x: 0,
      transition: { duration: 0.8, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

     const calculateTimeLeft = () => {
        const eventDate = new Date(eventTime); // Set your event date here
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
        }else {
            // If the countdown ends, return all zeros
            timeLeft = {
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            };
          }
        return timeLeft;
      };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [isEventLive, setIsEventLive] = useState(false);
    
    // Update the timer every second
    useEffect(() => {
        const timer = setInterval(() => {
          const time = calculateTimeLeft();
          setTimeLeft(time);
    
          // Check if the event is live
          if (
            time.days === 0 &&
            time.hours === 0 &&
            time.minutes === 0 &&
            time.seconds === 0
          ) {
            setIsEventLive(true);
            clearInterval(timer); // Stop the timer
          }
        }, 1000);
    
        // Cleanup interval on component unmount
        return () => clearInterval(timer);
      }, [eventTime]); // Re-run effect when eventTime changes


  return (
    <motion.div 
      className={CountdownStyle.countdownContainer}
      variants={window.innerWidth>470 ? fadeLeft : fadeUp}
      initial="hidden"
      whileInView="visible"
      >
        <div className={CountdownStyle.countdown}>
          {Object.keys(timeLeft).map((interval, index) => (
              <div key={index} className={CountdownStyle.timeBlock}>
                  <div className={CountdownStyle.time}>{timeLeft[interval] || "00"}</div>
                  <div className={CountdownStyle.label}>{interval.toUpperCase()}</div>
              </div>
          ))}
        </div>
        {isEventLive ? (
            <div className={CountdownStyle.eventLive}>
                <h2>Event is Live Now!</h2>
            </div>
      ):(
        <div></div>
      )}
    </motion.div>
  )
}

export default Countdown