import React, { useEffect, useRef } from "react";

//import { Link } from "react-router-dom";

import { useProjectStore } from '../../../store/projectStore';

//import Img from '../../assets/images/thum4.png'
import { useNavigate } from 'react-router-dom';

import style from './Section2.module.css'

import IBCover from '../../../assets/projects/iambusayo/iambusayoCover.svg'
import IBCoverMobile from '../../../assets/projects/iambusayo/iambusayoCoverMobile.svg'
import IBSketch from '../../../assets/projects/iambusayo/sketch.jpg'
import IBMockupLarge from '../../../assets/projects/iambusayo/mockupLarge.webp'
import IBMockupMobile from '../../../assets/projects/iambusayo/mockupMobile.webp'
import IBWireframeLarge from '../../../assets/projects/iambusayo/wireframeLarge.svg'
import IBWireframeMobile from '../../../assets/projects/iambusayo/wireframeMobile.svg'



import project2 from '../../../assets/projects/project2.png'
import circlepotCover from '../../../assets/projects/circlepot/circlepot.webp'
import circlepotCoverMobile from '../../../assets/projects/circlepot/circle-pot-mobile.webp'
//import project3 from '../../../assets/projects/circlepot.svg'
import project4 from '../../../assets/projects/project4.png'
import project5 from '../../../assets/projects/project5.png'
import project6 from '../../../assets/projects/project6.png'

//import bg from '../../../assets/images/Section2bg.png'

export default function Home() {
  //const setProjectVisible = useProjectStore((state) => state.setProjectVisible);
  const setSelectedProject = useProjectStore((state) => state.setSelectedProject);
  // const isProjectVisible = useProjectStore((state) => state.isProjectVisible);
  // const selectedProject = useProjectStore((state) => state.selectedProject);

  

//  const handleProjectClick = (project, index) => {
//   const updatedProject = {
//     ...project,
//     number: index, // or use `id` or `selectedIndex` — whatever fits your logic
//   };

//   setSelectedProject(updatedProject);
//   setProjectVisible(true);
// };
const navigate = useNavigate();
const handleProjectClick2 = (project, index) => {
  const updatedProject = {
    ...project,
    number: index, // or use `id` or `selectedIndex` — whatever fits your logic
  };

  setSelectedProject(updatedProject);
   navigate('/project');
  // setProjectVisible(true);
};

    const rippleRef = useRef();
    
      useEffect(() => {
        const rippleEl = rippleRef.current;
    
        if (rippleEl && window.$) {
          try {
            window.$(rippleEl).ripples({
              resolution: 512,
              dropRadius: 20,
              perturbance: 0.04,
              interactive: true,
            });
          } catch (e) {
            console.error("Ripples failed to load:", e);
          }
        }
    
        return () => {
          if (rippleEl && window.$) {
            try {
              window.$(rippleEl).ripples("destroy");
            } catch (e) {
              console.warn("Failed to destroy ripples:", e);
            }
          }
        };
      }, []);
      

      const items = [
        {
          name: 'IAMBUSAYO BRAND WEBSITE',
          coverImage: IBCover,
          coverImageMobile: IBCoverMobile,
          sketch: IBSketch,
          mockupLarge: IBMockupLarge,
          mockupMobile: IBMockupMobile,
          wireframeLarge: IBWireframeLarge,
          wireframeMobile: IBWireframeMobile,
          iframeVideo: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/A95Zq_kvNl0?autoplay=1&mute=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        },
        {
          name: 'SHOPKUZA FASHION WEBSITE',
          coverImage: project2,
        },
        {
          name: 'CIRCLEPOT SAVINGS & INVESTMENT',
          coverImage: circlepotCover,
          coverImageMobile: circlepotCoverMobile
        },
        {
          name: 'LIVE MUSIC CONCERT',
          coverImage: project4,
        },
        {
          name: 'ZENDEE DATING APP',
          coverImage: project5,
        },
        {
          name: 'CHURCH POCKET APP',
          coverImage: project6,
        },
      ];


  return (
    // <div className="relative z-20 mt-[100vh]">
        // <div className={style.section}> 
    <div className={`${style.rippleBackground} h-[2200px] lg:h-[1500px] z-0 px-4 lg:px-20 py-12 lg:py-32`} ref={rippleRef}>
        {/* <div > */}
          <h1 className={`${style.dmSans} mb-20 lg:mb-48 text-white text-center font-semibold text-xl lg:text-2xl tracking-[6px]`}>MY PROJECTS</h1>
          {/* <div className={`${style.dmSans}w-full grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 lg:gap-x-16 lg:gap-y-60 `}>
              {items.map((item, index) => {
                  const isMiddleColumn = index % 3 === 1;

                  return (
                    <div
                      key={index}
                      className={` ${isMiddleColumn ? 'lg:-mt-24' : ''}`}
                    >
                      <div>
                        <div  onClick={() => handleProjectClick(item, index)} className="relative">
                          <h1 style={{ WebkitTextStroke: '1.22px white', textShadow: '1px 1px 2px rgba(0,0,0,0.25)' }} className="drop-shadow-md text-white text-5xl lg:text-7xl font-bold absolute -top-8 lg:-top-10 right-1 ">0{index + 1}</h1>
                          <img className="w-full h-full object-cover" src={item.coverImage} alt="" />
                          <h1 className="text-[#AAAAAA] tracking-[3px] mt-4 text-lg">{item.name}</h1>
                        </div>
                      </div>
                        
                      
                    </div>
                  );
                })}
          </div> */}

         {/* Testing */}
          <div className={`${style.dmSans}w-full grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 lg:gap-x-16 lg:gap-y-60 `}>
              {items.map((item, index) => {
                  const isMiddleColumn = index % 3 === 1;

                  return (
                    <div
                      key={index}
                      className={` ${isMiddleColumn ? 'lg:-mt-24' : ''}`}
                    >
                      <div>
                        <div  onClick={() => handleProjectClick2(item, index)} className="relative">
                          <h1 style={{ WebkitTextStroke: '1.22px white', textShadow: '1px 1px 2px rgba(0,0,0,0.25)' }} className="drop-shadow-md text-white text-5xl lg:text-7xl font-bold absolute -top-8 lg:-top-10 right-1 ">0{index + 1}</h1>
                          <img className="w-full h-full object-cover" src={item.coverImage} alt="" />
                          <h1 className="text-[#AAAAAA] tracking-[3px] mt-4 text-lg">{item.name}</h1>
                        </div>
                      </div>
                        
                      
                    </div>
                  );
                })}
          </div>
          <h3 className={`${style.dmSans} mt-20 lg:mt-48 text-[#AAAAAA] text-center font-semibold text-base lg:text-xl tracking-[6px]`}>and many more...</h3>
    </div>
  )
}
