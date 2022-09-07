import React from 'react';
import { useSelector } from "react-redux";

// import contact data
import { contact } from '../data';


const Contact = () => {
  const data = useSelector((state) => state.data.data)

  return (
    <section className='section bg-secondary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block'>
            {data[0].contact}
          </h2>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-col mx-auto space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col text-center lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm h-14 mt-2 mb-4 lg:mb-0'>
                    {icon}
                  </div>
                  <div className='text-center'>
                    <h4 className='font-body  mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <p className='text-accent font-normal '>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
