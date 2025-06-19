import React, { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

//import Img from '../../assets/images/thum4.png'


import ScrambleText from "../../ScrambleText";
import style from './Section1.module.css'

import Profile from '../../../assets/images/profile-orange-2.png'
import RightImg from '../../../assets/images/right-image.png'

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

      // const [isActive, setIsActive] = useState(true);
      const [isEveryone, setIsEveryone] = useState(true);


  return (
    // <div className="fixed top-0 left-0 w-full h-screen z-0">
    <div className={`${style.rippleBackground} w-full bg-[url('/public/bggg-m3.png')] lg:bg-[url('/public/bggg.png')] min-h-screen px-4 lg:px-20 z-0 bg-[#1c1c1c]`} ref={rippleRef}>
        <div className={`${style.section}`}>
            <div  >
              <div className={` relative cursor-pointer flex items-center justify-center pt-36` } >
                <div className={`  w-full`}>
                  <div className="-mb-6">
                    <ul className={`${style.jetBrains} flex text-white text-sm items-center`}>
                      <li onClick={() => setIsEveryone(true)} className={`mr-6 ${isEveryone ? 'bg-[#424242] px-8 py-2 rounded-[40px]' : ''}`}>Everyone</li>
                      <li onClick={() => setIsEveryone(false)} className={`mr-6 ${!isEveryone ? 'bg-[#424242] px-8 py-2 rounded-[40px]' : ''}`}>Developers</li>
                    </ul>
                  </div>

                  <AnimatePresence mode="wait">
                  {isEveryone ? (
                    <motion.div
                      key="active"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      // className="p-4 bg-green-200 rounded"
                      className="grid place-items-center"
                    >
                      <img className="hidden lg:block w-[70px] md:w-[140px] absolute right-[10px] md:right-[90px] top-96" src={Profile} alt="" />
                      <img className=" block lg:hidden w-[140px] mt-14 " src={Profile} alt="" />
                      <div className="flex items-center justify-center h-screen w-full text-white -mt-44 lg:-mt-32 pointer-events-none">
                        <div className={`${style.dmSans}  center`}>
                            {/* <p className={`${style.dmSans} text-center text-xl mb-2 lg:mb-10 tracking-[6px]`}>Hi, I’m</p> */}
                            {/* <h1 className="mb-4 text-center text-3xl md:text-6xl lg:text-9xl font-semibold italic tracking-[12px] lg:tracking-[28px] leading-[60px] lg:leading-[166px]">AKINBOLADE <br /> SALAKO</h1> */}
                            <ScrambleText text="Hi, I’m" className={`${style.dmSans} block text-center text-sm lg:text-xl mb-2 lg:mb-10 tracking-[6px]`} speed={120} delay={0.3} duration={5}/><br />
                            <ScrambleText text="AKINBOLADE" className="-mb-10 lg:mb-4 -mt-8 lg:-mt-0 text-center block text-3xl md:text-6xl lg:text-9xl font-semibold italic tracking-[12px] lg:tracking-[28px] leading-[60px] lg:leading-[166px]" speed={120} delay={0.3} duration={5}/><br />
                            <ScrambleText text="SALAKO" className="mb-4 text-center block text-3xl md:text-6xl lg:text-9xl font-semibold italic tracking-[12px] lg:tracking-[28px] leading-[60px] lg:leading-[166px]"speed={120}  delay={0.3} duration={2}/>
                            <p className="mb-4  text-xs lg:text-base text-center tracking-[4px] font-medium opacity-25">Or just <span className="font-semibold text-[#92FF90]">Salaks</span> for short</p>
                            <p className="mb-4 text-center tracking-[4px] text-sm lg:text-base">A <span className="text-base lg:text-xl text-[#FF9C12] font-extrabold">PRODUCT DESIGNER</span> turning complex ideas into simple, intuitive experiences.</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="inactive"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      // className="p-4 bg-red-200 rounded"
                    >
                      <div className="mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-11 gap-4 items-center mb-20">
                          {/* Right section: comes first on mobile, right side on desktop */}
                          <div className="order-1 md:order-2 md:col-span-4">
                            <div className="">
                              <img src={RightImg} alt="" />
                            </div>
                          </div>

                          {/* Left section: comes second on mobile, left side on desktop */}
                          <div className="order-2 md:order-1 md:col-span-7">
                            <div className="flex justify-start items-start font-bold">
                              {/* For Large screen */}
                              <div className={`${style.sourceCode} hidden lg:block text-left text-sm  lg:text-3xl`}>
                                <ScrambleText text="Hi!" className={`${style.sourceCode} text-[#FFE11D] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <div className="flex">
                                  <ScrambleText text="I'm {" className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="highly_technical" className={`${style.sourceCode} text-[#4b8de9] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="}, and" className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                <div className="flex mt-2">
                                  <ScrambleText text="while (" className={`${style.sourceCode} text-[#ffffff] whitespace-nowrap block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="I’m ≠ engineer" className={`${style.sourceCode} text-[#D218DC] whitespace-nowrap block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="), I know my way /" className={`${style.sourceCode} text-[#ffffff]  block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                <div className="flex mt-2 ">
                                  <ScrambleText text="around && speak “" className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="dev" className={`${style.sourceCode} text-[#FFE11D] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="” fluently." className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                <ScrambleText text="I use Figma, Notion, and front-end " className={`${style.sourceCode} mt-1 text-[#FFFFFF] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <div className="flex -mt-3">
                                  <ScrambleText text="(React) " className={`${style.sourceCode} text-[#737374] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text=" - with ease." className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                <div className="flex mt-8">
                                  <ScrambleText text="I designed & Developed (" className={`${style.sourceCode} text-[#ffffff] whitespace-nowrap block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="this.site" className={`${style.sourceCode} text-[#22D71C] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text=") too 😄" className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                              </div>

                              {/* For Mobile */}
                              <div className={`${style.sourceCode} block lg:hidden text-left text-xl  lg:text-3xl`}>
                                <ScrambleText text="Hi!" className={`${style.sourceCode} text-[#FFE11D] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <div className="flex">
                                  <ScrambleText text="I'm {" className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="highly_technical" className={`${style.sourceCode} text-[#4b8de9] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="}, " className={`${style.sourceCode} text-[#ffffff] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                  <ScrambleText text="and" className={`${style.sourceCode} text-[#ffffff] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <div className="flex mt-2">
                                  <ScrambleText text="while (" className={`${style.sourceCode} text-[#ffffff] whitespace-nowrap block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="I’m ≠ engineer" className={`${style.sourceCode} text-[#D218DC] whitespace-nowrap block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="), " className={`${style.sourceCode} text-[#ffffff]  block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                  <ScrambleText text="I know my way /" className={`${style.sourceCode} text-[#ffffff]  block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <div className="flex mt-2 ">
                                  <ScrambleText text="around && speak “" className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="dev" className={`${style.sourceCode} text-[#FFE11D] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="”." className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                  <ScrambleText text="Fluently." className={`${style.sourceCode} text-[#ffffff] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <ScrambleText text="I use Figma, Notion, and  " className={`${style.sourceCode} mt-1 text-[#FFFFFF] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <div className="flex -mt-3">
                                  <ScrambleText text=" front-end " className={`${style.sourceCode} mt-1 text-[#FFFFFF] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="(React) " className={`${style.sourceCode} text-[#737374] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                                  <ScrambleText text=" - with ease." className={`${style.sourceCode} text-[#ffffff] block text-left  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="I designed & Developed " className={`${style.sourceCode} text-[#ffffff] whitespace-nowrap block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                <div className="flex mt-8">
                                  <ScrambleText text="(" className={`${style.sourceCode} text-[#ffffff] whitespace-nowrap block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text="this.site" className={`${style.sourceCode} text-[#22D71C] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                  <ScrambleText text=") too 😄" className={`${style.sourceCode} text-[#ffffff] block text-center  mb-0 tracking-[2px]`} speed={120} delay={0.3} duration={5}/><br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  </AnimatePresence>
                </div>
              </div>
                
            </div>
        </div>
        
    </div>
  )
}
