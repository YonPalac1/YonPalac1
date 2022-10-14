import React, { useEffect, useRef } from 'react';
import { ClassCircle } from './ClassCircle';


  let w = window.innerWidth; 
  let h = window.innerHeight; 
  let newCircle = [];
  
	let mouse = {
		x: undefined,
		y: undefined
	}
	let hue = 0

const Circle = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    
    const animate = () => {
      requestAnimationFrame(animate);


      ctx.clearRect(0, 0, w, h);
      
      newCircle.forEach(circle => {
        circle.draw(ctx)
        circle.update()
        if (circle.size >= 250) {
          newCircle.splice(circle, 1);
          circle--;
        }
      })
      

      hue++;
    }
    const resizeReset = () =>{
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    
    const mousemove = (e)=> {
      mouse.x = e.x;
      mouse.y = e.y;    
    }
    canvas.addEventListener("resize", resizeReset);
    canvas.addEventListener("click", onclick);
    canvas.addEventListener("mousemove", mousemove);
    canvas.addEventListener("mouseout", function () {
      mouse.x = undefined;
      mouse.y = undefined
    });
    animate();
  }, [])

  const onclick = () => {
    newCircle.push(new ClassCircle(mouse, hue))
  }

  

  return (
    <canvas 
    id="canvasCircles"
    ref={canvasRef}
    width={w}
    height={h}
   ></canvas>

  )
}

export default Circle