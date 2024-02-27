import { Container, Row, Col } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";

import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../commons";

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
              <Row fluid="md">
                {
                  PROJECTS.map((project, i) => {
                    return <ProjectCard project={project} key={i} />
                  })
                }
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}