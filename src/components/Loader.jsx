import React, { useRef } from 'react';
import { gsap, Circ, Power3 } from 'gsap';
import { useGSAP } from '@gsap/react';

function Loader() {
  const reveal = useRef();
  const green = useRef();
  const tl = gsap.timeline();
  useGSAP(() => {
    tl.from(
      reveal.current.querySelectorAll('span'),
      {
        x: 100,
        delay: 0.5,
        stagger: 0.2,
        duration: 1,
        ease: Power3.easeInOut
      }
    ).to(
      reveal.current.querySelectorAll('.animate'), {
        y: "-100%",
        duration: 0.5,
        delay: 0.5,
        ease: Circ.easeInOut,
      }
    ).to(
      reveal.current, {
        y: "-100%",
        height: 0,
        duration: 1,
        ease: Circ.easeInOut
      },
    ).to(
      green.current, {
        height: '100%',
        top: 0,
        duration: 1,
        ease: Circ.easeInOut
      },
      ">-1"
    ).to(
      green.current,{
        height: '0%',
        duration: 1,
        ease: Circ.easeInOut
      }
    )
  });
  
  
  return (
    <div>
      <section>
        <div className='w-100% h-screen bg-black truncate' ref={reveal}>
          <div className='block truncate text-white absolute top-8 left-1/2 transform -translate-x-1/2 font-sans font-thin text-sm text-center'>
            <h5 className='animate'>Designing Portfolio <br/> &copy; 2024</h5>
          </div>
          <div className='block truncate text-7xl text-white font-sans font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'> 
            <h1 className='animate h-24'><span className='inline-block'>Nikita</span> <span className='inline-block italic font-display font-normal text-green'>Mundaye </span> <span className='inline-block'>is</span> <span className='inline-block'>a</span></h1>
          </div>
          <div ref={green} className='absolute top-full w-100% h-0 bg-green'>

          </div>
        </div> 
      </section>
      
    </div>
  )
}

export default Loader
