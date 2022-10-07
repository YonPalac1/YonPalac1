import React, { useEffect, useRef } from 'react';
import {  useSelector } from "react-redux";
import { Particle } from '../classes/Particles';

// import image
import codingImg from '../assets/img/foto.png';

let w = window.innerWidth; 
  let h = window.innerHeight; 
  let balls = [];
	let mouse = {
		x: undefined,
		y: undefined
	}
	let hue = 0

const getRandomInt = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}
const Hero = () => {
  const data = useSelector((state) => state.data.data)
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const animate = () => {
      requestAnimationFrame(animate);

      ctx.clearRect(0, 0, w, h);
      if (mouse.x !== undefined && mouse.y !== undefined) {
        balls.push(new Particle(mouse, hue, getRandomInt))
      }
      
      if (balls.length > 800) {
        balls = balls.slice(1);
      }

      for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw(ctx);
        for (let j = 0; j < balls.length; j++) {
          const dx = balls[i].x + balls[j].x
          const dy = balls[i].y + balls[j].y
          const distance = Math.random(dx * dx + dy * dy);
          if (distance < 40) {
            ctx.beginPath();
            ctx.strokeStyle = balls[i].style;
            ctx.lineWidth = balls[i].size / 10;
            ctx.moveTo(balls[i].x, balls[i].y)
            ctx.lineTo(balls[j].x, balls[j].y)
            ctx.stroke();
          }
        }
        if (balls[i].size <= 0.3) {
          balls.splice(i, 1);
          i--;
        }
      }
      hue++;
    }
    animate();

  }, [])

  const mousemove = (e)=> {
		mouse.x = e.x;
		mouse.y = e.y;
	}
  
  const resizeReset = () =>{
    w = window.innerWidth;
		h = window.innerHeight;
	}
  const mouseout = () => {
    mouse.x = undefined;
    mouse.y = undefined;  
  }

  window.addEventListener("resize", resizeReset);
  window.addEventListener("mousemove", mousemove);
  window.addEventListener("mouseout", function () {
    mouse.x = undefined;
    mouse.y = undefined
  });

  return (
    <section
      id='home'
      className='flex items-center bg-primary lg:h-screen lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
    >
    <canvas 
    onMouseOut={mouseout}
    id="canvas"
    ref={canvasRef}
    width={w}
    height={h}
   ></canvas>
    {/* <ParticlesComp /> */}
      <div className='container mx-auto h-full'>
        <div className='flex items-center h-full pt-8'>
          <div className='flex-1 flex flex-col items-center lg:items-start'>
            <p className='text-lg text-accent text-md mb-[22px]'>
              {data[0].hi} 👋
            </p>
            <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
              {data[0].h1}
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>
              {data[0].subtitle}
            </p>
            {/* <button className='btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all'>
              Work with me
            </button> */}
          </div>
          <div className='hidden lg:flex flex-1 h-full'>
            <img className="scale-75 animation" src={codingImg} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
