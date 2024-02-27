import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Slide } from "react-awesome-reveal";
import { Github, BoxArrowInUpRight } from "react-bootstrap-icons";


import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../commons";

export const Projects = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
        <Row>
          <Col size={12} className="text-center">
            <button onClick={handleShow} className="btn bg-dark text-white more-proyects mt-5">more projects?</button>
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>more projects</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {
                  PROJECTS.map((project, i) => {
                    return <Container>
                        <Row className="modal-links">
                          <Col>
                            <a href={project.link}>{project.name}</a>
                          </Col>
                          <Col className="modal-links_link">
                          <h4><a href={project.repository} target="_blank"><Github /></a></h4>
                          <h4><a href={project.link} target="_blank"><BoxArrowInUpRight /></a></h4>
                          </Col>
                        </Row>
                      </Container>
                  })
                }
            </Modal.Body>
        </Modal>
    </section>
  )
}