import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is TechVenture?",
      answer: "TechVenture is an annual technology festival that showcases innovation, workshops, and competitions in various tech domains.",
    },
    {
      question: "When and where will TechVenture take place?",
      answer: "TechVenture 2025 will take place from Feb 18 at the CSE Department.",
    },
    {
      question: "How can I register for events?",
      answer: "You can register on our official website by navigating to the 'Register' section and selecting the event of your choice.",
    },
    {
      question: "Are there any fees to attend TechFest?",
      answer: "Entry to TechFest is free, but some workshops and competitions may have registration fees.",
    },
    {
      question: "Who can participate in the competitions?",
      answer: "Competitions are open to students, professionals, and enthusiasts. Specific eligibility criteria will be listed for each competition.",
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
        minHeight: "35rem"
      }}
    >
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
      <div style={{ marginTop: "20px"}}>
        {faqs.map((faq, index) => (
          <div
            key={index}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
