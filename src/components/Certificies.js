import React from 'react';
import {  useSelector } from "react-redux";

// import services data
import { certificies } from '../data';

const Certificies = () => {
    const data = useSelector((state) => state.data.data)

  return (
    <section id='certificates' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg:block'>
            {data[0].certificates}
          </h2>
        </div>
        <div className='grid lg:grid-cols-4 gap-8'>
          <div></div>
          {certificies.map((cer, index) => {
            const { name, image } = cer;
            return (
              <div className='p-6 rounded-2xl cursor-pointer' key={index}>
                <div className='text-accent rounded-sm flex justify-center items-center text-[28px]'>
                  <img src={image} />
                </div>
                <p>{name}</p>
              </div>
            );
          })}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Certificies;