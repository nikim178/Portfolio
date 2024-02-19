import React, { useRef } from 'react';
import { gsap, Circ } from 'gsap';
import { useGSAP } from '@gsap/react';

function Loader() {
  const reveal = useRef();
  useGSAP(()=>{
      gsap.to(
        reveal.current.querySelectorAll('.animate'),{ 
        y: "-100%", 
        duration: 1, 
        delay: 1, 
        ease: Circ.easeInOut,
      }
      )
  });
  
  return (
    <div className='w-100% h-screen bg-black' ref={reveal}>
      <div className='block truncate text-white absolute top-8 left-1/2 transform -translate-x-1/2 font-sans font-thin text-sm text-center'>
        <h5 className='animate'>Designing Portfolio <br/> &copy; 2024</h5>
      </div>
      <div className='w-24'>
      <div className='block truncate text-7xl text-white font-sans font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
      <h1 className='animate'><span>Nikita </span><span className='italic font-display font-normal text-indigo-400'>Mundaye </span><span>is</span> <span>a</span></h1>
      </div>
      </div>
    </div>
  )
}

export default Loader
