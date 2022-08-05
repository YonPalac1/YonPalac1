import React from 'react';

// import framer
import { motion } from 'framer-motion';

const Project = ({ item }) => {
  return (
    <motion.div 
        key={item.id} className='flex flex-col items-center text-center' 
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
      <div className='mb-8'>
        <a href={item.repository}>
          <img className='rounded-2xl' src={item.image} alt='' />
        </a>
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.skills}
      </p>
    </motion.div>
  );
};

export default Project;
