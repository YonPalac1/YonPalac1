import React from 'react';
import { useDispatch } from 'react-redux';
import { modalChange, projectData } from '../redux/dataReducer';


const Project = ({ item }) => {
  const dispatch = useDispatch()
  
  const handleSelected = (item) => {
    dispatch(projectData(item))
    dispatch(modalChange(true))
  }

  return (
    <div onClick={() => handleSelected(item.id)}>
      <div className='mb-8'>
          <img className='rounded-2xl' src={item.image} alt='' />
      </div>
      <p className='capitalize text-accent text-sm mb-3'>{item.category}</p>
      <h3 className='text-2xl font-semibold capitalize mb-3'>{item.name}</h3>
      <p className='text-base max-w-md'>
        {item.skills}
      </p><br />
      <a className='text-white hover:text-accent cursor-pointer' href={item.repository}>Visitar</a>
    </div>
  );
};

export default Project;
