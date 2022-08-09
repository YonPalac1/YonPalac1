//  icons
import {
  FiLinkedin,
  FiMessageSquare,
  FiGithub,
  FiMail,
  FiMapPin,
  FiPhone
} from 'react-icons/fi';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

import PREVIEW from './assets/img/projects/preview.png';
import PDR from './assets/img/projects/previews.png';
import SW from './assets/img/projects/starwars.png';

import Alkemy from './assets/img/certificies/alkemy.png';
import Digital from './assets/img/certificies/digital.png';


// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'certificates',
    href: 'certificates',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];
export const navigationEsp = [
  {
    name: 'inicio',
    href: 'home',
  },
  {
    name: 'acerca',
    href: 'about',
  },
  {
    name: 'portafolio',
    href: 'portfolio',
  },
  {
    name: 'certificados',
    href: 'certificates',
  },
  {
    name: 'contacto',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/palacios-yonatan/',
  },
  {
    icon: <FiMessageSquare />,
    href: 'https://api.whatsapp.com/send/?phone=5491139366942&app_absent=0',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/YonPalac1',
  },
  {
    icon: <FiMail />,
    href: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=palaciosjonatan.dev@gmail.com',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: PREVIEW,
    name: 'El Baron de la Cerveza',
    category: 'Ecommerce',
    skills: 'Express - Node - Javascript - Api - Css - MVC - MySql - Scrum',
    repository: 'https://github.com/YonPalac1/Baron_de_la_cerveza'
  },
  {
    id: '2',
    image: PDR,
    name: 'Pizzeria don Remolo',
    category: 'Ecommerce',
    skills: 'React - Redux - Api Rest - Css - Mongoose - Scrum',
    repository: 'https://pizzeria-remolo-1d5bfc.netlify.app/'
  },
  {
    id: '3',
    image: SW,
    name: 'Star wars planets',
    category: 'React',
    skills: 'React - Redux - Redux thunk - Styled Components - Material UI - Axios',
    repository: 'https://vigorous-meninsky-264e9a.netlify.app/'
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'React',
  },
  {
    name: 'Ecommerce',
  },
  {
    name: 'Next',
  },
];

// certificies
export const certificies = [
  {
    name: 'Alkemy - Certificate',
    image: Alkemy,
  },
  {
    name: 'Digital House - Certificate',
    image: Digital,
  }
];

// skill
export const skills = [
  {
    image: SkillImg1,
    alt: 'HTML5'
  },
  {
    image: SkillImg2,
    alt: 'CSS'
  },
  {
    image: SkillImg3,
    alt: 'JAVASCRIPT'
  },
  {
    image: SkillImg4,
    alt: 'REACT'
  },
  {
    image: SkillImg5,
    alt: 'NEXT'
  },
  {
    image: SkillImg6,
    alt: 'NODEJS'
  },
  {
    image: SkillImg7,
    alt: 'GIT'
  },
  {
    image: SkillImg8,
    alt: 'FIGMA'
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'palaciosjonatan.dev@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Buenos Aires, Argentina',
    description: 'Serving clients worldwide',
  },
  {
    icon: <FiPhone />,
    title: 'Call Me or Text Me',
    subtitle: '+15 011 3936 6942',
    description: 'Serving clients worldwide',
  },
];

// Ingles - Español
export const ingles = [{
    lenguage: 'ESP',
    hi: "Hey, I'm Jonatan!",
    h1: `I Build & Design  Web Interfaces.`,
    subtitle: "I write code all day to try to program myself into a future in this career. I can help you reach the whole world by putting your idea on the web.",
    about: "I am passionate about programming. Graduated as a FullStack developer at Digital House. Codear became a strict routine that I like to feed every day and I hope to find a place where I can continue learning and working on what I enjoy doing the most.",
    dowload: "Download CV",
    portfolio: "My latest work",
    contact: "Contact me",
    question: "Have a question?",
    imhere: "I am here to help you.",
    emailme: "Email me at",
    currentLocation: "Current Location",
    certificates: "certificates"
  }];
export const español = [{
    lenguage: 'ENG',
    hi: "Hey, soy Jonatan!",
    h1: `Construyo cosas para la Web`,
    subtitle: "Escribo código todos los días para tratar de programarme en un futuro en esta carrera. Puedo ayudarte a llegar a todo el mundo poniendo tu idea en la web.",
    about: "Soy un apasionado de la programación. Graduado como desarrollador FullStack en Digital House. Codear se convirtió en una rutina estricta que me gusta alimentar todos los días y espero encontrar un lugar donde pueda seguir aprendiendo y trabajando en lo que más disfruto hacer.",
    dowload: "Descargar CV",
    portfolio: "Proyectos",
    contact: "Contactame",
    question: "Have a question?",
    imhere: "I am here to help you.",
    emailme: "Email me at",
    currentLocation: "Current Location",
    certificates: "certificados"

  }];