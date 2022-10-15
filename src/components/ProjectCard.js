import { useContext } from 'react';
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AppContext } from '../context/AppContext';


export const ProjectCard = ({ title, type, description, imgUrl, images, web }) => {
  const { setImages, setTitle } = useContext(AppContext)
  
  const handleChargeImages = (title, images) => {
    setImages(images);
    setTitle(title);
  }
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        {
          web ?
          <a href={`${web}`} target='_blank'>
          <div className="proj-txtx text-white">
            <h4>{type}</h4>
            <span>{description}</span>
          </div>
          </a>
          :
        <Link to={`/projects-examples`} onClick={() => handleChargeImages(title, images)}>
        <div className="proj-txtx text-white">
          <h4>{type}</h4>
          <span>{description}</span>
        </div>
        </Link>
        }
      </div>
    </Col>
  )
}
