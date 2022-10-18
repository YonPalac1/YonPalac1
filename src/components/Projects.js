import { Container, Row, Col } from "react-bootstrap";
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

import projImg3 from "../assets/img/projects/project3/project-img3.png";
import projImg4 from "../assets/img/projects/project4/img1.png";
import projImg5 from "../assets/img/projects/project5/chat.png";
import admin from "../assets/img/projects/project6/admin.png";

export const Projects = () => {

  const projects = [
    {
      title: "Dashboard",
      type: "Design & Development",
      description: "Material UI, SASS, Recharts",
      imgUrl: admin,
      web: "https://darshboard.vercel.app/",
    },
    {
      title: "Chat room",
      type: "Chat with Firebase",
      description: "Firebase, sass",
      imgUrl: projImg5,
      web: "https://yonpalac1.github.io/chat-room/",
    },
    {
      title: "Cerveceria",
      type: "Design & Development",
      description: "Express, Nodejs, MySql, CSS, JS",
      imgUrl: projImg1,
      images: [example1, example2, example3, example4, example5]
    },
    {
      title: "Pizzeria - Delivery App",
      type: "FrontEnd dev",
      description: "React, Redux, CSS",
      imgUrl: projImg2,
      web: "https://pizzeria-remolo-1d5bfc.netlify.app/", 
    },
    {
      title: "Effects",
      type: "Canvas effects",
      description: "Efectos on mouse",
      imgUrl: projImg4,
      web: "https://canvas-proyects-8n2g.vercel.app/", 
    },
    {
      title: "Star Wars Planet",
      type: "Api Star Wars",
      description: "Design & Development",
      imgUrl: projImg3,
      web:"https://vigorous-meninsky-264e9a.netlify.app/"
    },
    
  ];

  return (
    <section className="project" id="projects">
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
