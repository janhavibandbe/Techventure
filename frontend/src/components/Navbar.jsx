import React, {useState} from 'react';
import NavStyles from '../styles/Navbar.module.css';
import { useNavigate } from 'react-router-dom';

import acsesLogo from '../assets/acsesLogo.png';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth>550? true : false);
  const navigate = useNavigate();

  const goToACSEShome = () =>{
    navigate('/');
    toggleMenu();
  };

  const goToTechventure = () =>{
    navigate('/techventure');
    toggleMenu();
  };

  const goToAbout = () =>{
    navigate('/techventure/about');
    toggleMenu();
  };

  const gotToGallery = () =>{
    navigate('/techventure/gallery');
    toggleMenu();
  };

  const gotToFAQ = () =>{
    navigate('/techventure/faq');
    toggleMenu();
  };

  const toggleMenu = () =>{
    if(window.innerWidth < 1100){
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
      <div className={NavStyles.navContainer}>
        <div className={NavStyles.logo} onClick={goToACSEShome}>
          <img src={acsesLogo} alt="Logo" className={NavStyles.logoImg} />
          ACSES
        </div>

        <div className={`${NavStyles.navOptions} ${isMenuOpen ? NavStyles.open : NavStyles.closed}`}>
          <div className={NavStyles.techventure} onClick={goToTechventure}>Techventure</div>
          <div className={NavStyles.about} onClick={goToAbout}>About</div>
          <div className={NavStyles.gallery} onClick={gotToGallery}>Gallery</div>
          <div className={NavStyles.faq} onClick={gotToFAQ}>FAQs</div>
        </div>

        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      </div>
  )
}

export default Navbar