import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Clipboard } from "react-bootstrap-icons"
import confetti from 'canvas-confetti'
import { Fade, Slide } from "react-awesome-reveal";
import Particles from "./Particles.canvas.jsx";

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:3000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  const copyText = (text) => {
    navigator.clipboard.writeText(text)
    confetti()
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col>
                <div>
                <Slide direction="down">
                  <h2>Get In Touch</h2>
                </Slide>
                {/* <form onSubmit={handleSubmit}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text" value={formDetails.lasttName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                      <button type="submit"><span>{buttonText}</span></button>
                    </Col>
                    {
                      status.message &&
                      <Col>
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Col>
                    }
                  </Row>
                </form> */}
                <Slide cascade>
                <div className="conection-medium">
                  <span>Have a question?</span>
                  <span>I am here to help you</span>
                  <div className="data_to_copy">
                    <h3>palaciosjonatan.dev@gmail.com</h3> 
                    <button onClick={() => {copyText("palaciosjonatan.dev@gmail.com")}}><Clipboard /></button>
                  </div>
                </div>
                <div className="conection-medium">
                  <span>Current Location</span>
                  <h3>Buenos Aires, Argentina</h3>
                </div>
                <div className="conection-medium">
                  <span>Call Me or Text Me</span>
                  
                  <div className="data_to_copy">
                    <h3>+54 9 11 3936 6942</h3> <button onClick={() => {copyText("9 11 3936 6942")}}><Clipboard /></button>
                  </div>
                </div>
                </Slide>
              </div>
          </Col>
        </Row>
      </Container>
      <Particles />
    </section>
  )
}

