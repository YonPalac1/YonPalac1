import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { changeLenguage } from '../redux/dataReducer'


// import icons
import { social, ingles, español, navigation, navigationEsp } from '../data';

const Socials = () => {
  const dispatch = useDispatch()
  const [leng, setLeng] = useState(false)
  const data = useSelector((state) => state.data.data)
  
  const handleLenguage = () => {
    if(!leng){
      dispatch(changeLenguage(español, navigationEsp))
      console.log("true")
      setLeng(true)
    } else {
      dispatch(changeLenguage(ingles, navigation))
      console.log("false")
      setLeng(false)
    }
  }

  return (
    <ul className='flex space-x-6 '>
      {social.map((item, index) => {
        return (
          <li
            className='flex justify-center items-center text-accent'
            key={index}
          >
            <a className='text-base' href={item.href}>
              {item.icon}
            </a>
          </li>
        );
      })}
      <li>|</li> 
      <li className="cursor-pointer" onClick={handleLenguage}>{data[0].lenguage}</li>
    </ul>
  );
};

export default Socials;
