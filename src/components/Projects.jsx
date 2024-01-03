import { Container, Row, Col } from "react-bootstrap";
import { keyframes } from "@emotion/react";
import { Fade, Slide } from "react-awesome-reveal";

import { ProjectCard } from "./ProjectCard";

export const Projects = () => {

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>

              <Slide direction="down" triggerOnce={true}>
                <h2>Projects</h2>
              </Slide>
              <Row>
                <ProjectCard
                />
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right"></img>
    </section>
  )
}