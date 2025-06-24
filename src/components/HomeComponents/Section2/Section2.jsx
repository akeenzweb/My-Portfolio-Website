import React, { useEffect, useRef } from "react";

//import Img from '../../assets/images/thum4.png'

import style from './Section2.module.css'

import project1 from '../../../assets/projects/project1.png'
import project2 from '../../../assets/projects/project2.png'
import project3 from '../../../assets/projects/project3.png'
import project4 from '../../../assets/projects/project4.png'
import project5 from '../../../assets/projects/project5.png'
import project6 from '../../../assets/projects/project6.png'

//import bg from '../../../assets/images/Section2bg.png'

export default function Home() {

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
          coverImage: project1,
        },
        {
          name: 'SHOPKUZA FASHION WEBSITE',
          coverImage: project2,
        },
        {
          name: 'QA ALL IN ONE SOFTWARE',
          coverImage: project3,
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
          <div className={`${style.dmSans}w-full grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 lg:gap-x-16 lg:gap-y-60 `}>
              {items.map((item, index) => {
                  const isMiddleColumn = index % 3 === 1;

                  return (
                    <div
                      key={index}
                      className={` ${isMiddleColumn ? 'lg:-mt-24' : ''}`}
                    >
                      
                        <div className="relative">
                          <h1 style={{ WebkitTextStroke: '1.22px white', textShadow: '1px 1px 2px rgba(0,0,0,0.25)' }} className="drop-shadow-md text-white text-5xl lg:text-7xl font-bold absolute -top-8 lg:-top-10 right-1 ">0{index + 1}</h1>
                          <img className="w-full h-full object-cover" src={item.coverImage} alt="" />
                          <h1 className="text-[#AAAAAA] tracking-[3px] mt-4 text-lg">{item.name}</h1>
                        </div>
                      
                    </div>
                  );
                })}
          </div>
          <h3 className={`${style.dmSans} mt-20 lg:mt-48 text-[#AAAAAA] text-center font-semibold text-base lg:text-xl tracking-[6px]`}>and many more...</h3>
    </div>
  )
}
