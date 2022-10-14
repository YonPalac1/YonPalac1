import React, { useContext, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import { Banner } from '../components/Banner';
import { Footer } from '../components/Footer';
import { AppContext } from '../context/AppContext';

const Examples = () => {
  const { title, images } = useContext(AppContext);

  useEffect(() => {
    console.log(images)
  }, [images])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <Banner />
      <section className="skill" id="skills">
          <div className="container">
              <div className="row">
                  <div className="col-12">
                      <div className="skill-bx wow zoomIn carousel-container">
                          <h2>{ title }</h2>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                  {
                                    images.length ?
                                    images.map((image, i) => {
                                      return <img src={image} key={i}></img>
                                    })
                                    : 
                                    "leading..."
                                  }                              
                            </Carousel>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <Footer />
    </>
  )
}

export default Examples