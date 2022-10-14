import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

import projImg1 from "../assets/img/projects/project1/project-img1.png";
import example1 from "../assets/img/projects/project1/1.png";
import example2 from "../assets/img/projects/project1/2.png";
import example3 from "../assets/img/projects/project1/3.png";
import example4 from "../assets/img/projects/project1/4.png";
import example5 from "../assets/img/projects/project1/5.png";

import projImg2 from "../assets/img/projects/project2/project-img2.png";
import examplep1 from "../assets/img/projects/project2/1.png";
import examplep2 from "../assets/img/projects/project2/2.png";
import examplep3 from "../assets/img/projects/project2/3.png";
import examplep4 from "../assets/img/projects/project2/4.png";
import examplep5 from "../assets/img/projects/project2/5.png";
import examplep6 from "../assets/img/projects/project2/6.png";
import examplep7 from "../assets/img/projects/project2/7.png";
import examplep8 from "../assets/img/projects/project2/8.png";
import examplep9 from "../assets/img/projects/project2/9.png";

import projImg3 from "../assets/img/projects/project3/project-img3.png";

export const Projects = () => {

  const projects = [
    {
      id: 1,
      title: "Cerveceria",
      type: "Ecommerce",
      description: "Design & Development",
      imgUrl: projImg1,
      images: [example1, example2, example3, example4, example5]
    },
    {
      id: 2,
      title: "Pizzeria",
      type: "Delivery App",
      description: "FrontEnd dev",
      imgUrl: projImg2,
      images: [examplep1, examplep2, examplep3, examplep4, examplep5, examplep6, examplep7, examplep8, examplep9]
    },
    {
      id: 3,
      title: "Star Wars Planet",
      type: "Api Star Wars",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Row>
                {
                  projects.map((project, index) => {
                    return (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                       )
                        })
                       }
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
