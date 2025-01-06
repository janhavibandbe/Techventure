import React from 'react';
import acsesLogo from '../assets/acsesLogo.png';
import FooterStyle from '../styles/Footer.module.css';

function Footer() {

  return (
    <footer className={FooterStyle.footer}>
      <div className={FooterStyle.footerContent}>
        <div className={FooterStyle.footerLeft}>
          <img src={acsesLogo} alt="Logo" className={FooterStyle.footerLogo} />
          <span>&#9400; 2025 ACSES</span>
        </div>
        <div className={FooterStyle.footerRight}>
          <a
            href="https://www.instagram.com/acses_famt/profilecard/?igsh=ZjQyOWIwd3J1d2Fn"
            target="_blank"
            rel="noopener noreferrer"
            className={FooterStyle.footerIcon}
          >
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
