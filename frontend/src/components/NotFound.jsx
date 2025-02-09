import React from 'react';
import NotFoundStyle from '../styles/NotFound.module.css';

function NotFound() {
  return (
    <div className={NotFoundStyle.notFoundContainer}>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/concept-of-error-404-and-robot-not-working-illustration-download-in-svg-png-gif-file-formats--android-logo-alert-landing-page-pack-business-illustrations-1779236.png?f=webp" alt="404GIF"/>
        <h1>Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <a href="/" className={NotFoundStyle.backButton}>Go Back</a>
    </div>
  )
}

export default NotFound