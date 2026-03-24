import React, { useEffect, useRef } from "react";

//import { Link } from "react-router-dom";

//import { useCaseStudyStore } from '../../../store/caseStudyStore';
import { useCaseStudyStore } from '../../../store/caseStudyStore'

//import Img from '../../assets/images/thum4.png'
import { useNavigate } from 'react-router-dom';

import style from './CaseStudies.module.css'

import caseStudies from '../../CaseStudiesData'
//import bg from '../../../assets/images/Section2bg.png'

export default function Home() {
  
  const setSelectedCaseStudy = useCaseStudyStore((state) => state.setSelectedCaseStudy);
  

const navigate = useNavigate();
const handleCaseStudyClick = (caseStudy, index) => {
  const updatedCaseStudy = {
    ...caseStudy,
    number: index, // or use `id` or `selectedIndex` — whatever fits your logic
  };

  setSelectedCaseStudy(updatedCaseStudy);
   navigate('/case-study');
  
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
      
      
      

  return (
    // <div className="relative z-20 mt-[100vh]">
        // <div className={style.section}> 
    // <div className={`${style.rippleBackground} h-[2200px] lg:h-[1500px] z-0 px-4 lg:px-20 py-12 lg:py-32`} ref={rippleRef}>
    <div className={`${style.rippleBackground} h-[900px] lg:h-[1000px] z-0 px-4 lg:px-20 py-12 lg:py-32`} ref={rippleRef}>
        {/* <div > */}
          <h1 className={`${style.dmSans} mb-20 lg:mb-24 text-white text-center font-semibold text-xl lg:text-2xl tracking-[6px]`}>MY CASE STUDIES</h1>
          

         {/* Testing */}
          {/* <div className={`${style.dmSans}w-full grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-24 lg:gap-x-16 lg:gap-y-60 `}>
              {caseStudies.map((caseStudy, index) => {
                  const isMiddleColumn = index % 3 === 1;

                  return (
                    <div
                      key={index}
                      className={` ${isMiddleColumn ? 'lg:-mt-24' : ''}`}
                    >
                      <div>
                        <div  onClick={() => handleCaseStudyClick(caseStudy, index)} className="relative cursor-pointer">
                          <h1 style={{ WebkitTextStroke: '1.22px white', textShadow: '1px 1px 2px rgba(0,0,0,0.25)' }} className="drop-shadow-md text-white text-5xl lg:text-7xl font-bold absolute -top-8 lg:-top-10 right-1 ">0{index + 1}</h1>
                          <img className="w-full h-full object-cover" src={caseStudy.coverImage} alt="" />
                          <h1 className="text-[#AAAAAA] tracking-[3px] mt-4 text-lg">{caseStudy.name}</h1>
                        </div>
                      </div>
                    </div>
                  );
                })}
          </div> */}

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {caseStudies.map((caseStudy, index) => {
              return (
                  <div key={index} onClick={() => handleCaseStudyClick(caseStudy, index)} className=" text-white text-left">
                    <div class="w-full">
                      <img src={caseStudy.coverImage} alt="Example" class="w-full h-auto lg:h-96 object-cover"/>
                    </div>

                    <div className="bg-[#242424] w-full px-8 py-4 lg:px-16 lg:py-8">
                      <h1 className="text-[#AAAAAA] tracking-[3px] mt-4 text-lg">{caseStudy.name}</h1>
                    </div>
                  </div>
                )
              
              // <div class="bg-green-500 text-white p-6 text-center">
              //   Column 2
              // </div>
              })}
          </div>
          {/* <h3 className={`${style.dmSans} mt-20 lg:mt-48 text-[#AAAAAA] text-center font-semibold text-base lg:text-xl tracking-[6px]`}>and many more...</h3> */}
    </div>
  )
}
