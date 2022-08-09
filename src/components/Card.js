import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Carousel from "framer-motion-carousel";

// import data
import { imagesProjects } from "../data";

export const Card = () => {
  const i = useSelector((state) => state.data.dataProject);

  useEffect(() => {}, [i]);

  return (
    <div className="card-carousel">
      <Carousel>
        {imagesProjects[i].images.map((item) => {
          return (
            <motion.img
              
              className="object-cover h-full w-[1024px] md:mx-auto lg:mx-0 rounded-2xl"
              autoPlay="false"
              interval="false"
              draggable="false"
              src={item}
              key={i}
              width="100%"
              alt=""
            />
          );
        })}
      </Carousel>
      <div className="next">{"‣"}</div>
      <div className="prev">{"‣"}</div>
    </div>
  );
};
