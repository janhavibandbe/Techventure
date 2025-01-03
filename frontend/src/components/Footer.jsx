import React from 'react';
import { ReactComponent as CustomLogo } from '../assets/acsesLogo.svg'; // Imported the SVG as a React component

function Footer() {
  const footerStyle = {
    backgroundColor: '#000', /* Background color */
    color: '#09f4fd', /* Font color */
  };

  const iconStyle = {
    color: '#09f4fd', /* Instagram Icon color */
  };

  return (
    <div className="container-fluid" style={footerStyle}>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3">
        <div className="col-md-4 d-flex align-items-center">
          <div className='px-2'>
             <CustomLogo width="30" height="30" /> {/* Custom SVG Logo */}
          </div>
          <span className="mb-3 mb-md-0" style={{ color: '#09f4fd' }}>© 2025 ACSES</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a
              className="text-body-secondary"
              href="https://www.instagram.com/acses_famt/profilecard/?igsh=ZjQyOWIwd3J1d2Fn"
            >
              <i className="bi bi-instagram" style={iconStyle}></i> {/* Instagram Icon */}
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer;
