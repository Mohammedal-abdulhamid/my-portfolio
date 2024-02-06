import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from 'react-bootstrap';
import "./NavBar.css";
import { Navbar, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function NavBar() {
  return (
    <Navbar bg="light" expand="lg" >
      {/* <Navbar.Brand href="/">My Portfolio</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" >
          <Nav.Link  as={Link} to="/"  className="nav-link">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about"  className="nav-link">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/projects"  className="nav-link">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/skills"  className="nav-link">
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/more"  className="nav-link">
            More
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/mohammed-alabdulhamid-445455209/"
                className="me-4 text-reset"
              >
                <FontAwesomeIcon  icon={faLinkedin} />
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
    </Navbar>
  );
}

export default NavBar;
