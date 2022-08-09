import React from 'react';
import {  useSelector } from "react-redux";

// import woman image
import codingImg from '../assets/img/foto.png';
import { ParticlesComp } from './ParticlesComp';

const Hero = () => {
  const data = useSelector((state) => state.data.data)

  return (
    <section
      id='home'
      className='lg:h-[85vh] flex items-center bg-primary lg:h-screen lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
    {/* <ParticlesComp /> */}
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              {data[0].hi} 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              {data[0].h1}
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              {data[0].subtitle}
            </p>
            {/* <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button> */}
          </div>
          <div className='hidden lg:flex flex-1 h-full'>
            <img className="scale-75 " src={codingImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
