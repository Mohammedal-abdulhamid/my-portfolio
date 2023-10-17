import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Me</h5>
            <p>
              {" "}
              I'm a passionate full-stack developer with a love for creating web
              solutions that make a difference. Let's connect and work together
              to bring your ideas to life.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Me</h5>
            <p>Email: mohammedalabdulhamid@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Me</h5>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohammed-alabdulhamid-445455209/"
                className="me-4 text-reset"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/Mohammedal-abdulhamid"
                className="me-4 text-reset"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="mailto:mohammedalabdulhamid@gmail.com"
                className="me-4 text-reset"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        <div className="container p-4">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
