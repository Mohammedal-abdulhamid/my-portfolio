import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./About.css";
import myPhoto from "./home/me1.jpeg";
const AboutPage = () => {
  return (
    <div className="vh-100 d-flex container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      <Container className="py-5">
        <Row>
          <Col md={6}>
            <img
              src={myPhoto}
              alt="placeholder"
              className="img-fluid rounded-circle"
            />
          </Col>
          <Col md={6}>
            <h2>About Me</h2>
            <p>
              I am a computer science student at Open University. I am also a
              full-stack developer who graduated from Code Your Future. I have
              had the pleasure of working on several projects with my team in an
              Agile environment. One of my favorite projects was building a web
              application that allowed users to create and customize their own
              workout plans. In my free time, I enjoy exploring new technologies
              and contributing to open-source projects. I am passionate about
              using my skills to make a positive impact in the world and I am
              excited to see what the future holds for me in the world of tech.
            </p>
            <p>
              In addition to my technical skills, I also have a strong passion
              for learning and personal growth. I enjoy challenging myself to
              continuously improve and expand my knowledge, both in and out of
              the field of computer science. When I'm not coding, you can often
              find me reading books, attending online courses, or participating
              in coding challenges and hackathons. I believe that this
              dedication to ongoing learning and development is key to staying
              relevant and innovative in this constantly evolving industry.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutPage;
