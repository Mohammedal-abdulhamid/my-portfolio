import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "./me1.jpeg";
import "./Home.css";
const Home = () => {
  return (
    <div className="about-container">
      <div className="vh-100 d-flex container-fluid vh-100 d-flex flex-column justify-content-center align-items-center text-white">
        <Container className="my-5">
          <Row className="align-items-center vh-100">
            <Col md={4}>
              <img
                src={myPhoto}
                className="img-fluid rounded-circle"
                alt="mohammed"
                fluid
              />
            </Col>
            <Col md={8}>
              <h1 className="display-4 mb-4">Hello, I'm Mohammed</h1>
              <p className="lead ">
                I'm a full-stack developer based in Manchester,UK. I have
                passion for coding and creating beautiful, responsive, and
                user-friendly websites and applications.
              </p>
              <p>
                In my free time, I enjoy traveling, and spending time with my
                family and friends. Feel free to contact me for any inquiries or
                collaborations.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Home;
