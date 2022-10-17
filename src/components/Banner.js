import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Particles from "./particles/Particles";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Friend" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
    <Particles />
      <Container>
        <Row className="aligh-items-center ">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => <>
              <div className={isVisible ? "animate__animated animate__fadeIn" : "text-container"}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Jonatan`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "FullStack", "Friend" ]'><span className="wrap">{text}</span></span></h1>
                  <p>I do things for the web. Pages, games and that kind of thing... </p>
              </div>
              <div className="text-container">
                  <a href="https://www.linkedin.com/in/palacios-yonatan/" target="_blank">Let’s Connect <ArrowRightCircle size={25} /></a>
              </div>
              </>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
