import { Container, Row, Col } from "react-bootstrap";
import { HandThumbsUp } from "react-bootstrap-icons";
import { Fade, Slide } from "react-awesome-reveal";

import colorSharp2 from "../assets/images/color-sharp2.png";

export const About = () => {

  return (
    <section className="project about" id="about">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <Slide cascade direction="down" triggerOnce={true}>
                <h2>A passion for learning{" "}
                  <HandThumbsUp className="thumbsup"></HandThumbsUp></h2>
              </Slide>
              <Fade delay={1000} triggerOnce={true}>
                <Row>
                  <Col size={12}>
                    <p>I'm a young programmer, fueled by a thirst for new challenges and skills. While mastering English, I'm building a solid foundation in coding, always eager to learn and improve. My toolbox brimms with creativity, ready to tackle fresh projects. As a team player, I bring dedication and support, always going the extra mile to leave a mark. My goal? To keep growing, someday shaping the world with cutting-edge projects.</p>
                  </Col>
                </Row>
              </Fade>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}