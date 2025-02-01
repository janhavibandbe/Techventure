import React, { useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';


import AboutStyle from '../styles/About.module.css';

function About() {
  const [sname, setSname] = useState('');
  const [ssubject, setSsubject] = useState('');
  const [semailid, setSemailid] = useState('');
  const [smessage, setSmessage] = useState('');
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    if(sname==='' || ssubject==='' || semailid==='' || smessage===''){
      debugger;
      toast.error("Please fill all required fields!", {autoClose: 2000});
      return;
    }
    else{
      debugger;
      emailjs.sendForm('service_yo4omcg', 'template_8ai5zws', form.current, {
        publicKey: 'QQLYGU8R53JTtpyGH',
      })
      .then(() => {
          debugger;
          toast.success('Email Sent 🙂');
          setTimeout(()=>{
            window.location.reload();
          }, 2000);
        },
        (error) => {
          debugger;
          toast.error('Something Went Wrong ☹️');
        },
      );
    }
  };

  return (
    <div className={AboutStyle.aboutUsPage}>
      <div className={AboutStyle.aboutUsContainer}>
        <div className={AboutStyle.aboutUsHeader}>
          <div className={AboutStyle.title}>Welcome to Techventure</div>
          <p>
            Welcome to TechVenture, the flagship event of the Computer Science
            and Engineering Department at Finolex Academy of Management and
            Technology. Organized and managed with passion by the dynamic ACSES
            committee—a group of aspiring technologists pursuing their
            undergraduate degrees in Computer Science and Engineering (AI &
            ML)—Techventure is where innovation meets celebration.
          </p>
        </div>
        <div className={AboutStyle.aboutUsContent}>
          <section>
            <div className={AboutStyle.sectionTitle}>What Makes Techventure Special?</div>
            <p>
              Techventure is a unique blend of technical and non-technical
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
              work tirelessly to make Techventure an unforgettable experience.
            </p>
          </section>
          <section>
            <div className={AboutStyle.sectionTitle}>Join Us</div>
            <p>
              Let’s create, compete, and celebrate—together at Techventure!
            </p>
          </section>
        </div>
      </div>

      <div className={AboutStyle.contactUs}>
        <div className={AboutStyle.sectionTitle}>Contact Us</div>

        <div className={AboutStyle.contactContainer}>
          <div className={AboutStyle.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.597056662537!2d73.3337650746191!3d17.01170041352034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0cf7395a491f%3A0x9fb0040484638864!2sFinolex%20Academy%20of%20Management%20and%20Technology!5e1!3m2!1sen!2sin!4v1738421936743!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <form ref={form} onSubmit={sendEmail} className={AboutStyle.email}>
            <input name="name" type="text" placeholder='Name' onChange={(e) => setSname(e.target.value)}/>
            <input name="Subject" type="text" placeholder='Subject' onChange={(e) => setSsubject(e.target.value)}/>
            <input name="emailid" type="text" placeholder='Email ID' onChange={(e) => setSemailid(e.target.value)}/>
            <textarea name="message" id="" placeholder='Write here...' onChange={(e) => setSmessage(e.target.value)}></textarea>
            <div className={AboutStyle.sendButton}>
              <button type='submit'>Send</button>
            </div>
          </form>
        </div>


        <div className={AboutStyle.phoneNos}>
          <div className={AboutStyle.phone1}>
           <Link to={`tel:9423290580`} className={AboutStyle.phone}>9423290580 - Prof. V. V. Nimbalkar (HOD of CSE(AI & ML))</Link>
          </div>

          <div className={AboutStyle.phone2}>
           <Link to={`tel:9075781856`} className={AboutStyle.phone}>9075781856 - Prof. A. N. Shetye (Coordinator ) </Link>
          </div>

          <div className={AboutStyle.phone3}>
            <Link to={`tel:9075781856`} className={AboutStyle.phone}>9362822828 - Giriprasath K (Coordinator CSE(AI & ML))</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About