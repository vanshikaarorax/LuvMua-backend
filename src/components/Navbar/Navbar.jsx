import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for navigation
import logo from '../../media/l.png';
import BtnBookNow from '../BtnBookNow/BtnBookNow';
import BtnInstagram from '../BtnInstagram/BtnInstagram';

import './Navbar.scss';

function Navbar() {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const [hamburgerClass, setHamburgerClass] = useState('hamburger-contracted'); // Initialize hamburgerClass state

  const handleButtonClick = (path) => {
    navigate(path);  // Navigate to the corresponding path
  };

  const animateHamburger = () => {
    // Toggle hamburger menu expansion on click
    if (hamburgerClass === 'hamburger-contracted') {
      setHamburgerClass('hamburger-expanded');
    } else {
      setHamburgerClass('hamburger-contracted');
    }
  };

  return (
    <nav className="Navbar">
      <div className="shish-kebab">
        <div className="logo-container">
          <img className="logo" src={logo} alt="logo" data-testid="nb-link-home" />
        </div>

        <div className="buttons">
          <button
            onClick={() => handleButtonClick('/about-me')}
            data-testid="nb-btn-about"
          >
            ABOUT
          </button>

          <button
            onClick={() => handleButtonClick('/services')}
            data-testid="nb-btn-services"
          >
            SERVICES
          </button>

          <button
            onClick={() => handleButtonClick('/join-page')}
            data-testid="nb-btn-portfolio"
          >
            PORTFOLIO
          </button>

          <button
            onClick={() => handleButtonClick('/faq')}
            data-testid="nb-btn-faq"
          >
            FAQ
          </button>

          <button
            onClick={() => handleButtonClick('/contact')}
            data-testid="nb-btn-contact"
          >
            CONTACT
          </button>

          {/* Add Sign Up Button */}
          <button
            onClick={() => handleButtonClick('/signup')}
            data-testid="nb-btn-signup"
          >
            SIGN UP
          </button>
        </div>

        <BtnBookNow customLink={''} />
        <BtnInstagram />

        <div className="hamburger">
          <div className={`${hamburgerClass}-btn`} onClick={animateHamburger}>
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </div>

          <div className={`${hamburgerClass}`}>
            <ul>
              <button onClick={() => handleButtonClick('/about-me')}><li>ABOUT</li></button>
              <button onClick={() => handleButtonClick('/services')}><li>SERVICES</li></button>
              <button onClick={() => handleButtonClick('/join-page')}><li>PORTFOLIO</li></button>
              <button onClick={() => handleButtonClick('/faq')}><li>FAQ</li></button>
              <button onClick={() => handleButtonClick('/contact')}><li>CONTACT</li></button>

              <div className="book-insta-container">
                <BtnBookNow />
                <BtnInstagram />
              </div>

              {/* Add Sign Up Button in Hamburger Menu */}
              <button onClick={() => handleButtonClick('/signup')}><li>SIGN UP</li></button>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
