import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import data
import { imagesProjects } from "../data";

export const Card = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1030 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1030, min: 570 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 569, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const i = useSelector((state) => state.data.dataProject);


  useEffect(() => {}, [i]);

  return (
    <div className="card-carousel max-w-[1024px] m-auto bg-primary body-project">
      <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 ">
       Project
      </h2>
      <Carousel
        responsive={responsive}
        arrows={true}
        showDots={false}
        swipeable={true}
        draggable={true}
        infinite={true}
        slidesToSlide={1}
        containerClass="carousel-container"
      >
        {imagesProjects[i].images.map((item) => {
          return (
            <img
              className="p-3 md:mx-auto lg:mx-0 rounded-2xl"
              src={item}
              key={i}
              alt=""
            />
          );
        })}
      </Carousel>
    </div>
  );
};