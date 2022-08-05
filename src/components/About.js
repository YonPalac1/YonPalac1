import React from "react";
import { useDispatch, useSelector } from "react-redux";

// import img
import Image from "../assets/img/sunset.jpg";

import MyPdf from '../assets/Web developer - Jonatan Palacios CV.pdf'

const About = () => {
  const data = useSelector((state) => state.data.data)

  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Jonatan Palacios
              </h2>
              <p className="mb-4 text-accent">Frontend Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                {data[0].about} <br />
                <br />
              </p>
            </div>
            <a
              href={MyPdf}
              download="Web developer - Jonatan Palacios CV"
              className="btn btn-md border-2 border-cyan-400 hover:bg-cyan-400 transition-all"
            >
              {data[0].dowload}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
