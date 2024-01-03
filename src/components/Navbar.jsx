import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Fade, Slide } from "react-awesome-reveal";

import navIcon1 from '../assets/images/nav-icon1.svg';
import navIcon2 from '../assets/images/nav-icon2.svg';
import navIcon3 from '../assets/images/nav-icon3.svg';


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Fade cascade direction="down">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              </Fade>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <Fade cascade direction="up">
                <a target="_blank" href="https://www.linkedin.com/in/palacios-yonatan/"><img src={navIcon1} alt="" /></a>
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5491139366942&app_absent=0"><img src={navIcon2} alt="" /></a>
                <a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=palaciosjonatan.dev@gmail.com"><img src={navIcon3} alt="" /></a>
              </Fade>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
