import React from 'react'

// import components
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import BackTopBtn from '../components/BackTopBtn';
import Certificies from '../components/Certificies';

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Portfolio />
        <Certificies />
        <Contact />
        <Footer />
        <BackTopBtn />
    </div>
  )
}

export default Home