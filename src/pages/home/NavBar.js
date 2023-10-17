import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from 'react-bootstrap';
import { Navbar, Nav } from "react-bootstrap";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      {/* <Navbar.Brand href="/">My Portfolio</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/projects">
            Projects
          </Nav.Link>
          <Nav.Link as={Link} to="/skills">
            Skills
          </Nav.Link>
          <Nav.Link as={Link} to="/more">
            More
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
