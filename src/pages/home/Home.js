import { Container, Row, Col, Image } from "react-bootstrap";
import myPhoto from "./Photo.jpg";
const Home = () => {
  return (
    <div className="vh-100 d-flex container-fluid vh-100 d-flex flex-column justify-content-center align-items-center bg-dark text-white">
      <Container className="my-5">
        <Row className="align-items-center vh-100">
          <Col md={4}>
            <img
              src={myPhoto}
              class="rounded-3"
              alt="My photo"
              fluid
              width="250"
            />
          </Col>
          <Col md={8}>
            <h1 className="display-4 mb-4">Hello, I'm Mohammed</h1>
            <p className="lead ">
              I'm a full-stack developer based in Manchester,UK. I have a
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
  );
};

export default Home;
