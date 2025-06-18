import React, { useEffect, useRef, useState } from "react";

//import Img from '../../assets/images/thum4.png'

import style from './Section1.module.css'

import Profile from '../../../assets/images/profile-orange-2.png'

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

      const [isActive, setIsActive] = useState(true);


  return (
    <div className="fixed top-0 left-0 w-full h-screen z-0">
        <div className={style.section}>
            <div className={`${style.rippleBackground} bg-[url('/public/bggg-m1.png')] md:bg-[url('/public/bggg.png')] px-20`} ref={rippleRef}>
              <div className={` relative cursor-pointer flex items-center justify-center pt-6` } >
                <div className={`  w-full`}>
                  <div className="-mb-6">
                    <ul className={`${style.jetBrains} flex text-white text-sm items-center`}>
                      <li className={`mr-6 ${isActive ? 'bg-[#424242] px-8 py-2 rounded-[40px]' : ''}`}>Everyone</li>
                      <li>Developers</li>
                    </ul>
                  </div>
                  <div>
                    <img className="hidden lg:block w-[70px] md:w-[140px] absolute right-[10px] md:right-[90px] top-96" src={Profile} alt="" />
                    <img className=" block lg:hidden w-[140px] absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={Profile} alt="" />
                    <div className="flex items-center justify-center h-screen w-full text-white -mt-10">
                      <div className={`${style.dmSans}  center`}>
                          <p className={`${style.dmSans} text-center text-xl mb-10`}>Hi, I’m</p>
                          <h1 className="mb-4 text-center text-3xl md:text-6xl lg:text-9xl font-semibold italic tracking-[12px] lg:tracking-[28px] leading-[60px] lg:leading-[166px]">AKINBOLADE <br /> SALAKO</h1>
                          <p className="mb-4 text-center tracking-[4px] font-medium opacity-25">Or just <span className="font-semibold text-[#92FF90]">Salaks</span> for short</p>
                          <p className="mb-4 text-center tracking-[4px]">A <span className="text-xl text-[#FF9C12] font-extrabold">PRODUCT DESIGNER</span> turning complex ideas into simple, intuitive experiences.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
            </div>
        </div>
        
    </div>
  )
}
