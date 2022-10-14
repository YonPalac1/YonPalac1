import React from "react"
import colorSharp from "../assets/img/color-sharp.png"
import css from "../assets/img/css.png"
import figma from "../assets/img/figma.png"
import git from "../assets/img/git.png"
import html from "../assets/img/html.png"
import js from "../assets/img/ja.png"
import react from "../assets/img/react.png"
import next from "../assets/img/next.png"
import node from "../assets/img/node.png"

export const Skills = () => {
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <section>
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
                        </section>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
