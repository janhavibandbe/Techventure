import React from 'react';
import AboutStyle from '../styles/About.module.css';

function About() {
  return (
    <div className={AboutStyle.aboutUsPage}>
      <div className={AboutStyle.aboutUsContainer}>
        <div className={AboutStyle.aboutUsHeader}>
          <div className={AboutStyle.title}>Welcome to Techventure</div>
          <p>
            Welcome to Tech Venture, the flagship event of the Computer Science
            and Engineering Department at Finolex Academy of Management and
            Technology. Organized and managed with passion by the dynamic ACSES
            committee—a group of aspiring technologists pursuing their
            undergraduate degrees in Computer Science and Engineering (AI &
            ML)—Tech Venture is where innovation meets celebration.
          </p>
        </div>
        <div className={AboutStyle.aboutUsContent}>
          <section>
            <div className={AboutStyle.sectionTitle}>What Makes Tech Venture Special?</div>
            <p>
              Tech Venture is a unique blend of technical and non-technical
              events, ensuring that there’s something exciting for everyone.
            </p>
            <ul>
              <li>
                Technical Events: Engaging activities like quizzes, Code Hunt,
                and Guess the Output.
              </li>
              <li>
                Non-Technical Events: Interactive and entertaining games for
                lasting memories.
              </li>
            </ul>
          </section>
          <section>
            <div className={AboutStyle.sectionTitle}>Behind the Event</div>
            <p>
              The event is brought to life by the relentless efforts of the
              ACSES committee, comprising talented and dedicated students who
              work tirelessly to make Tech Venture an unforgettable experience.
            </p>
          </section>
          <section>
            <div className={AboutStyle.sectionTitle}>Join Us</div>
            <p>
              Let’s create, compete, and celebrate—together at Tech Venture!
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About