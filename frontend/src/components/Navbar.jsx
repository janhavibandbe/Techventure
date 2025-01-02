import React, {useState} from 'react';
import NavStyles from '../styles/Navbar.module.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(window.innerWidth>550? true : false);
  const navigate = useNavigate();

  const goToHome = () =>{
    navigate('/techventure');
  };

  const goToAbout = () =>{
    navigate('/techventure/about');
  };

  const gotToGallery = () =>{
    navigate('/techventure/gallery');
  };

  const gotToFAQ = () =>{
    navigate('/techventure/faq');
  };

  const toggleMenu = () =>{
    if(window.innerWidth < 550){
      setIsMenuOpen(!isMenuOpen);
    }
  };

  return (
      <div className={NavStyles.navContainer}>
        <div className={NavStyles.logo} onClick={goToHome}>
          TechVenture
        </div>

        <div className={`${NavStyles.navOptions} ${isMenuOpen ? NavStyles.open : NavStyles.closed}`}>
          <div className={NavStyles.home} onClick={goToHome}>Home</div>
          <div className={NavStyles.about} onClick={goToAbout}>About</div>
          <div className={NavStyles.gallery} onClick={gotToGallery}>Gallery</div>
          <div className={NavStyles.faq} onClick={gotToFAQ}>FAQs</div>
        </div>

        <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
      </div>
  )
}

export default Navbar