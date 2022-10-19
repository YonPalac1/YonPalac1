import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

import colorSharp2 from "../assets/img/color-sharp2.png";

const About = () => {
  return (
    <section className="project" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>About me</h2>
                <Row>
                    <Col size={12}>
                        <p>Graduated from Digital House (2021) as a fullstack. Now self-taught in continuous learning. passionate about
The programing. My goal is a job where I can combine
my skills in an environment where I can continue to learn.</p>
                    </Col>
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default About