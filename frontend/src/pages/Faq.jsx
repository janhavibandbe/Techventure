import React, { useState } from "react";
import { motion } from 'framer-motion';

const FAQ = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, 
      y: 0,
      transition: { duration: 1, ease: 'easeOut', staggerChildren: 0.2 }
    }
  };

  const childAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TechVenture?",
      answer: "TechVenture is an annual technology festival of Computer Science and Engineering Department(AI & ML) that showcases innovation and competitions in various tech domains.",
    },
    {
      question: "What is motive behind TechVenture?",
      answer: "The motive behind TechVenture is to provide a platform for students to explore, enhance, and showcase their technical skills. It aims to foster innovation, creativity, and knowledge sharing, while encouraging collaboration and critical thinking.",
    },
    {
      question: "I am from a different college. Can I still apply for the events?",
      answer: "Yes, absolutely! You are welcome to apply for the events, regardless of which college you are from.",
    },
    {
      question: "Are there any consolation prizes for participants?",
      answer: "There will not be any consolation prizes. However, all participants will receive a certificate of participation.",
    },
    {
      question: "What are the eligibility criteria for participation?",
      answer: "There are no specific criteria for participation in the event. Anyone can apply.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "20px",
        paddingTop: "5rem",
        fontFamily: "'Bruno Ace', serif",
        backgroundColor: "#1a1a2e",
        color: "#fff",
        minHeight: "80vh"
      }}
    >
      {/*********************** Header ***********************/}
      <h2
        style={{
          color: "#09f4fd",
          textAlign: "center",
          marginBottom: "20px",
          fontSize: "2rem",
          paddingBottom: "10px",
          
        }}
      >
        Frequently Asked Questions
      </h2>
      <motion.div 
        style={{ marginTop: "20px"}}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={childAnimation}
            style={{
              marginBottom: "15px",
              border: "1px solid #09f4fd",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#16213e",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              transform: activeIndex === index ? "scale(1.02)" : "scale(1)",
              boxShadow:
                activeIndex === index
                  ? "0 4px 15px rgba(0, 212, 255, 0.4)"
                  : "0 2px 5px rgba(0, 0, 0, 0.2)",
            }}
          >

            {/*********************** Questions ***********************/}
            <div
              style={{
                backgroundColor: activeIndex === index ? "#00d4ff" : "#0f3460",
                color: activeIndex === index ? "#1a1a2e" : "#fff",
                padding: "15px",
                cursor: "pointer",
                fontWeight: "bold",
                borderBottom: activeIndex === index ? "none" : "1px solid #09f4fd",
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
            </div>


            {/*********************** Answers ***********************/}
            {activeIndex === index && (
              <div
                style={{
                  padding: "15px",
                  backgroundColor: "#1a1a2e",
                  color: "#09f4fd",
                  borderTop: "1px solid #09f4fd",
                }}
              >
                {faq.answer}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FAQ;
