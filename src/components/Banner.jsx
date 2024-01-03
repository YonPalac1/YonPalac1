import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { Fade, Slide } from "react-awesome-reveal";

export const Banner = () => {
  const trackMouse = (e) => {
    document.documentElement.style.setProperty(
      "--cursorXPos",
      `${e.clientX}px`
    )
    document.documentElement.style.setProperty(
      "--cursorYPos",
      `${e.clientY}px`
    )
  }

  document.addEventListener("mousemove", trackMouse)

  return (
    <section className="banner" id="home">
     {/* <Particles />  */}
      
     <div className="filter"></div>
     <div className="pointer"></div>
      <Container>
        <Row className="aligh-items-center ">
          <Col>
              <div className="text-container">
                <Slide delay={500}>
                  <span className="tagline">Welcome to my Portfolio</span>
                </Slide>
                <Fade direction="down" delay={800}>
                <h1>Hi! I'm Jonatan {` `}
                  <span className="shakeLetter" content="W">W</span>
                  <span content="e">e</span>
                  <span content="b">b</span>
                  <span>{` `}</span>
                  <span content="d">d</span>
                  <span content="e">e</span>
                  <span content="v">v</span>
                  <span content="e">e</span>
                  <span content="l">l</span>
                  <span content="o">o</span>
                  <span content="p">p</span>
                  <span content="e">e</span>
                  <span content="r">r</span>
                </h1>
                </Fade>
                <Fade delay={1000}>
                  <p>I do things for the web: pages, games and that kind of thing... </p>
                </Fade>
              </div>
              <Slide delay={1300}>
              <div className="text-container">
                  <a href="https://www.linkedin.com/in/palacios-yonatan/" target="_blank">Let’s Connect <ArrowRightCircle size={25} /></a>
              </div>
              </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
