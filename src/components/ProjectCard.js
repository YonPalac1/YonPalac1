import { useContext } from 'react';
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { AppContext } from '../context/AppContext';


export const ProjectCard = ({ id, title, type, description, imgUrl, images }) => {
  const { setImages, setTitle } = useContext(AppContext)
  
  const handleChargeImages = (title, images) => {
    setImages(images);
    setTitle(title);
  }
  
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <Link to={`/projects-examples`} onClick={() => handleChargeImages(title, images)}>
        <div className="proj-txtx text-white">
          <h4>{type}</h4>
          <span>{description}</span>
        </div>
        </Link>
      </div>
    </Col>
  )
}
