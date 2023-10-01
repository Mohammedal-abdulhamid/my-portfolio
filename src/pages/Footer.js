import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './Footer.css';

function Footer() {
  return (
    <footer className="bg-dark text-center m-3 text-white" style={{ backgroundColor:'inherit'}}>
      
      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      <div className="container p-4">
        <section className="mb-4">
          <a href="https://www.linkedin.com/in/mohammed-alabdulhamid-445455209/" className="me-4 text-reset">
          <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/Mohammedal-abdulhamid" className="me-4 text-reset">
          <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="mailto:mohammedalabdulhamid@gmail.com" className="me-4 text-reset">
          <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </section>
      </div>
        © {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
