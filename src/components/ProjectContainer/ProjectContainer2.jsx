import React, { useEffect, useState, useLayoutEffect } from "react";



// import Header from '../../components/Header/Header'
// import Footer from "../../components/Footer/Footer";


//import style from './Project.module.css'

//import ProjectView from '../ProjectView/ProjectView'

//import Banner1 from '../../assets/images/banner1.svg'
//import Banner1Mobile from '../../assets/images/banner1-mobileiv.svg'


// ____________________________________________________________________________________


import style from './ProjectContainer.module.css'

import { useProjectStore } from '../../store/projectStore';
import { scroller } from 'react-scroll';



//import Cover1 from '../../assets/images/cover1.svg'
import Bulb from '../../assets/images/bulb.svg'
import Sketch1 from '../../assets/images/sketch1.png'
import Wireframes1 from '../../assets/images/Wireframes1.svg'
import Wireframesii from '../../assets/images/Wireframesii.svg'
import Font1 from '../../assets/images/font1.png'
import Color1 from '../../assets/images/color1.png'
import Mockup1 from '../../assets/images/Mockups1.svg'
import Mockup1ii from '../../assets/images/Mockups1ii.svg'

import BackButton from '../../assets/images/back-button.svg'

export default function Project({project}) {

  const setProjectVisible = useProjectStore((state) => state.setProjectVisible);
  
    // const [isOpen, setIsOpen] = useState(false);
  
    const handleScrollTo = (target) => {
      setProjectVisible(false);
      // setIsOpen(false)
  
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 1200,
          smooth: true,
          // offset: -80,
        });
      }, 50);
    };
  

  const [bgImage, setBgImage] = useState(project.coverImage)

  //const stableValue = JSON.stringify(project);

  useEffect(() => {
  const handleResize = () => {
    setBgImage(window.innerWidth < 768 ? project.coverImageMobile : project.coverImage);
  };

  handleResize();
  window.addEventListener('resize', handleResize);

  const scrollContainer = document.querySelector('.your-scroll-container-class'); // Update this!
  const scrollTarget = scrollContainer || window;

  const scrollTop = () => {
    if (scrollTarget === window) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    } else {
      scrollTarget.scrollTo({ top: 0, behavior: 'auto' });
    }
  };

  const timeout = setTimeout(scrollTop, 0);

  return () => {
    window.removeEventListener('resize', handleResize);
    clearTimeout(timeout);
  };
}, [project]);


useLayoutEffect(() => {
  const timeout = setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, 100); // Delay ensures DOM has rendered completely

  return () => clearTimeout(timeout);
}, []);



  return (
    <div>
      {/* <Header /> */}
        <div className="relative w-full  ">
            
            
            {/* Fixed Background */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Foreground Scrollable Content */}
            <div className=" z-10">
                {/* <ProjectView project={project} className='w-full' /> */}
                <div className='h-auto'>
                  <div className={` ${style.dmSans} relative bg-[#131313] mb-10 lg:mb-10 max-w-screen px-4 lg:px-20 py-12 lg:py-32`}>
                      {/* <Link to='/'><p className='text-white font-semibold cursor-pointer mb-4'>Home</p></Link> */}
                      <div onClick={() => handleScrollTo('home')} className="flex justify-start items-center mt-14 lg:mt-0 mb-4 lg:mb-5">
                        <img className="h-10 lg:h-14" src={BackButton} alt="" />
                        {/* <p className='text-white h-10 items-center text-center align-middle font-semibold cursor-pointer mb-4'>Back</p> */}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="order-2 sm:order-1  text-[#AAAAAA] mt-4 lg:mt-0">
                              <p className='text-base lg:text-3xl uppercase font-semibold lg:font-bold tracking-[2px] lg:tracking-[6px] leading-9 lg:leading-[60px]'>A Sleek, personal brand website for Busayo Salako that feels both elegant and approachable.</p>
                          </div>
                          <div className="order-1 sm:order-2 mt-0 lg:mt-0 text-[#AAAAAA] flex justify-end">
                              <div>
                                  <img src={project.coverImage} alt="" />
                                  <p className='uppercase tracking-[6px] mt-4'>{project.name}</p>
                              </div>
                          </div>
                      </div>
                      <p className="fixed top-5 -left-24 -z-0 text-[270px] text-white opacity-10 font-bold pointer-events-none">0{project.number + 1}</p>
                  </div>

        <div className='bg-[#1C1C1C] min-h-[590px] mt-[550px] px-4 lg:px-20 py-12 lg:py-32 text-[#AAAAAA]'>
            {/* THE IDEA */}
            <div className='relative border-b border-[#444343] pb-20'>
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>The Ideas</h1>
                <p className='text-base tracking-[1px] text-[#AAAAAA] leading-9'>At the heart of this project was the client’s vision: a brand website that embodies elegance while remaining approachable and relatable. Busayo wanted a digital home that reflected not only her refined taste but also her friendly, down-to-earth personality. The idea was to marry sophistication with simplicity—to create a visual narrative that speaks with poise but welcomes with warmth. The design needed to inspire trust, spark curiosity, and leave a lasting impression without ever feeling distant or cold.</p>
                <img className='absolute -top-44 right-0' src={Bulb} alt="" />
            </div>

            {/* THE APPROACH */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-20 ">
                <div className='col-span-3'>
                    <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>The Approach</h1>
                    <div className='col-span-2 block lg:hidden mb-4'><img className='' src={Sketch1} alt="" /></div>
                    <p className='text-base tracking-[1px] text-[#AAAAAA] leading-9'>The project began with initial discovery sessions, where I engaged the client in conversations to understand her tone, preferences, and vision. From there, I moved into the design thinking process, starting with quick sketch explorations and low-fidelity wireframes to define the structure and flow. This allowed us to experiment with layout ideas early and stay iterative. Feedback loops were constant—client input shaped every major design decision. With the sitemap and wireframes in place, I advanced into visual mockups and interactive prototypes, focusing on hierarchy, typography, and gentle micro-interactions that would eventually bring the site to life. Every step of the way, I remained in dialogue with Busayo, refining the interface based on both aesthetic goals and real usability concerns.</p>
                </div>
                <div className='col-span-2 hidden lg:block'><img className='' src={Sketch1} alt="" /></div>
            </div>

            {/* WIREFRAMES */}
            <div className='relative border-b border-[#444343] pb-20 mt-20'>
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>Wireframes</h1>
                <div className='hidden lg:block'><img src={Wireframes1} alt="" /></div>
                <div className='block lg:hidden'><img src={Wireframesii} alt="" /></div>
            </div>

            {/* THE BUILD */}
            <div className='relative border-b border-[#444343] pb-20 mt-20'>
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>The Build</h1>
                <p className='text-base tracking-[1px] text-[#AAAAAA] leading-9'>This wasn’t just a design project—I personally built the website from the ground up using React. That gave me full control over the user experience and performance. I implemented subtle yet purposeful animations, like a fine line that gently follows users as they scroll, guiding their journey without distraction. One of the more personal touches, a collage of curated images, was added later in the project after thoughtful discussions with Busayo, and it now serves as a visual anchor that tells part of her story. The site is fully responsive, lightweight, and optimized for clarity and speed, ensuring her brand is well represented across all devices.</p>
                {/* <img className='absolute -top-44 right-0' src={Bulb} alt="" /> */}
            </div>

            {/* FONT & COLOR */}
            <div className=" mt-20 ">
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>Font & Colors</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <div className=''><img className='' src={Font1} alt="" /></div>
                    <div className=''><img className='' src={Color1} alt="" /></div>
                </div>
            </div>

            {/* THE MOCKUPS */}
            <div className='relative border-b border-[#444343] pb-20 mt-20'>
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>The Mockup</h1>
                <div className='hidden lg:block'><img src={Mockup1} alt="" /></div>
                <div className='block lg:hidden'><img src={Mockup1ii} alt="" /></div>
            </div>

            {/* PROJECT SUMMARY */}
            <div className='relative border-b border-[#444343] pb-20 mt-20'>
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>Project Summary</h1>
                <p className='text-base tracking-[1px] text-[#AAAAAA] leading-9'>This project was a complete design and build of a personal brand website for Busayo Salako, a dynamic individual whose presence needed to be captured both visually and experientially. The goal was to create a digital space that communicated elegance while maintaining a warm, friendly vibe—true to Busayo’s identity. From discovery to deployment, the project involved user-centered design thinking, close client collaboration, and a focus on clean yet expressive front-end development using React. With subtle animations and personal touches like a responsive collage, the website now offers visitors a refined yet inviting user journey.</p>
                {/* <img className='absolute -top-44 right-0' src={Bulb} alt="" /> */}
            </div>

        </div>
    </div>
            </div>

            
        </div>
        {/* <Footer /> */}
    </div>
  )
}
