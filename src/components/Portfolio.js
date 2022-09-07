import React from 'react';
import { useSelector } from "react-redux";

// import components
import Projects from './Projects';

const Portfolio = () => {
  const data = useSelector((state) => state.data.data)

  return (
    <section id='portfolio' className='section bg-primary '>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-portfolio relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden before:lg:block'>
            {data[0].portfolio}
          </h2>
        </div>
        <Projects />
      </div>
    </section>
  );
};

export default Portfolio;
