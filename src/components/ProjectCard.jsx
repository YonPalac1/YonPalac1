import { Container, Row, Col } from "react-bootstrap";
import { BoxArrowInUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({ project }) => {
    return <Col md="4" sm="6">
        <Container>
            <Row>
                <Col className="projects_image">
                    <div className="projects_image-img">
                        <img src={project.image} alt={project.name}></img>
                    </div>
                    <div className="project-name">
                        <h3>{project.name}</h3>
                        <span>{project.tecnologies}</span>
                        
                        <div className="project-data">
                            <a href={project.link} target="_blank"><BoxArrowInUpRight /></a>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>

        
    </Col>
}