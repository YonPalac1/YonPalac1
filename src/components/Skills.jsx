import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

import colorSharp from "../assets/images/color-sharp.png"
import css from "../assets/images/css.png"
import figma from "../assets/images/figma.png"
import git from "../assets/images/git.png"
import html from "../assets/images/html.png"
import js from "../assets/images/ja.png"
import react from "../assets/images/react.png"
import next from "../assets/images/next.png"
import node from "../assets/images/node.png"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <Slide direction="down" triggerOnce={true}>
                <h2>Skills</h2>
              </Slide>
              <section>
                <Fade cascade direction="down" duration="1000" triggerOnce={true}>
                  <div>
                    <img src={html} alt="HTML5"></img>
                    <span>HTML5</span>
                  </div>
                  <div>
                    <img src={css} alt="css3"></img>
                    <span>CSS3</span>
                  </div>
                  <div>
                    <img src={js} alt="javascript"></img>
                    <span>Javacript</span>
                  </div>
                  <div>
                    <img src={react} alt="react"></img>
                    <span>React</span>
                  </div>
                  <div>
                    <img src={next} alt="next"></img>
                    <span>Next</span>
                  </div>
                  <div>
                    <img src={node} alt="node"></img>
                    <span>Node</span>
                  </div>
                  <div>
                    <img src={git} alt="git"></img>
                    <span>Git</span>
                  </div>
                </Fade>
              </section>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
