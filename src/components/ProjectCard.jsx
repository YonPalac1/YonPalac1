import { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { Github, BoxArrowInUpRight, ArrowRightShort } from "react-bootstrap-icons";

export const ProjectCard = ({ project }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return <>
        <Container className="projects">
            <Row>
                <Col>
                    <div className="projects_name">
                        <h4>{project.name}</h4>
                        <a href={project.repository} target="_blank"><Github /></a>
                        <a href={project.link} target="_blank"><BoxArrowInUpRight /></a>
                    </div>
                    <p>{project.tecnologies}</p>
                </Col>
                <Col className="projects_image">
                    <img onClick={handleShow} src={project.image} alt={project.name}></img>
                </Col>
            </Row>
        </Container>

        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{project.name}</Modal.Title>{" "} 
                <a href={project.link}><BoxArrowInUpRight /></a>
            </Modal.Header>
            <Modal.Body>
                <img src={project.image}></img>
                {project.tecnologies}</Modal.Body>
            <Modal.Footer>
                <p>Mas detalles en <ArrowRightShort />
                <a href={project.repository} target="_blank"><Github /> </a> </p>
            </Modal.Footer>
        </Modal>
    </>
}