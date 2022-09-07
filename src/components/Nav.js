import React from 'react';
import { useDispatch, useSelector } from "react-redux";

// import Link
import { Link } from 'react-scroll';

const Nav = () => {
  const data = useSelector((state) => state.data.nav)
  
  return (
    <nav>
      <ul className='flex space-x-8 capitalize text-[15px]'>
        {data.map((item, idx) => {
          return (
            <li
              className='text-white hover:text-accent cursor-pointer'
              key={idx}
            >
              <Link
                to={item.href}
                activeClass='active'
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='transition-all duration-300'
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
