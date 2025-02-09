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
      toast.error("Please fill all required fields!", {autoClose: 2000});
      return;
    }
    else{
      emailjs.sendForm('service_z4z0enc', 'template_lj0bkhy', form.current, {
        publicKey: 'DxD4cflabYfezODzI',
      })
      .then(() => {
          toast.success('Email Sent 🙂');
          setTimeout(()=>{
            window.location.reload();
          }, 2000);
        },
        (error) => {
          toast.error('Something Went Wrong ☹️');
        },
      );
    }
  };

  return (
    <div className={AboutStyle.aboutUsPage}>
      <div className={AboutStyle.aboutUsContainer}>
        <div className={AboutStyle.aboutUsHeader}>
          <div className={AboutStyle.title}>About Computer Science & Engineering (AI & ML)</div>
          <p>
            Computer Science & Engineering (CSE) is one of the most sought-after academic programs that integrates the fields of computer 
            engineering and computer science, providing knowledge of computing systems in both hardware and software design. <br/><br/>
            Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and 
            mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning 
            and problem-solving. <br/><br/>
            Machine learning (ML) is a form of AI that enables a system to learn from data rather than through explicit programming.  Machine 
            learning is closely related to computational statistics, which focuses on making predictions using computers. The study of mathematical 
            optimization delivers methods, theory and application domains to the field of machine learning.
          </p>
        </div>
        <div className={AboutStyle.aboutUsContent}>
          <section>
            <div className={AboutStyle.sectionTitle}>VISION</div>
            <p>
              To provide state of the art Computer Science Engineering and prepare the students for a globalized technological society and orient 
              them towards serving the society.
            </p>
          </section>



          <section>
            <div className={AboutStyle.sectionTitle}>MISSION</div>
            <ul>
              <li>
                Lead the advancement of computer science, computer engineering, information technology, and cybersecurity 
                through internationally recognized research and education, as well as technology transfer.
              </li>
              <li>
                Provide quality learning experiences through effective classroom practices, active learning styles of teaching, and opportunities 
                for meaningful interactions between students and faculty.
              </li>
              <li>
                To imbibe skills in students to address the need of the industry.
              </li>
              <li>
                To inculcate professional behavior, strong ethical values, innovative research capabilities and leadership abilities.
              </li>
            </ul>
          </section>



          {/* <section>
            <div className={AboutStyle.sectionTitle}>Join Us</div>
            <p>
              Let’s create, compete, and celebrate—together at Techventure!
            </p>
          </section> */}
        </div>
      </div>





      <div className={AboutStyle.contactUs}>
        <div className={AboutStyle.title}>Contact Us</div>

        <div className={AboutStyle.contactContainer}>
          <div className={AboutStyle.map}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.597056662537!2d73.3337650746191!3d17.01170041352034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bea0cf7395a491f%3A0x9fb0040484638864!2sFinolex%20Academy%20of%20Management%20and%20Technology!5e1!3m2!1sen!2sin!4v1738421936743!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>

          <form ref={form} onSubmit={sendEmail} className={AboutStyle.email}>
            <input name="name" type="text" placeholder='Name' onChange={(e) => setSname(e.target.value)}/>
            <input name="subject" type="text" placeholder='Subject' onChange={(e) => setSsubject(e.target.value)}/>
            <input name="emailid" type="text" placeholder='Your Email ID' onChange={(e) => setSemailid(e.target.value)}/>
            <textarea name="message" id="" placeholder='Write here...' onChange={(e) => setSmessage(e.target.value)}></textarea>
            <div className={AboutStyle.sendButton}>
              <button type='submit'>Send</button>
            </div>
          </form>
        </div>


        <div className={AboutStyle.phoneNos}>
          <div className={AboutStyle.phone1}>
           <Link to={`tel:9423290580`} className={AboutStyle.phone}>Head of the Department (9423290580)</Link>
          </div>

          <div className={AboutStyle.phone2}>
           <Link to={`tel:9075781856`} className={AboutStyle.phone}>Faculty Incharge (9075781856)</Link>
          </div>

          <div className={AboutStyle.phone3}>
            <Link to={`tel:9075781856`} className={AboutStyle.phone}>Coordinator (9362822828)</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About