import React, { useEffect, useRef } from "react";

import style from './Footer.module.css'

import WhatsppBtn from '../../assets/images/chat-whatsapp.svg'
import DownloadDoc from '../../assets/icons/document-doc.svg'

export default function Footer() {
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
    <div>
        <div className={`${style.rippleBackground} w-full bg-[url('/public/footer-bg-mobile.png')] lg:bg-[url('/public/footer-bg.png')] min-h-screen px-4 lg:px-20 z-0 bg-[#1c1c1c]`} ref={rippleRef}>
            <div className="pt-20 lg:pt-40  text-white block lg:flex justify-between  ">
                <div>
                    <h1 className={`${style.sourceCode} text-lg lg:text-2xl text-[#AAAAAA]`}>Let’s work together</h1>
                    <h1 className={`${style.dmSans} text-xl lg:text-5xl pt-4 font-bold text-[#FFFFFF]`}>akinboladesalak@gmail.com</h1>
                    <img className="mt-10 lg:mt-20" src={WhatsppBtn} alt="" />
                </div>

                <div className={`${style.dmSans} flex justify-between mt-40 lg:mt-0`}>
                    <ul className="cursor-pointer">
                        <li className="text-xl lg:text-2xl">EXPLORE</li>
                        <li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">Projects</li>
                        <li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">About Me</li>
                        <li className="text-base lg:text-xl text-[#FF9C12] font-semibold mt-5 tracking-[6px] flex">Get CV <img className="ml-2" src={DownloadDoc} alt="" /></li>
                    </ul>

                    <ul className="ml-4 lg:ml-40 cursor-pointer">
                        <li className="text-xl lg:text-2xl">SOCIALS</li>
                        <li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">LinkedIn</li>
                        <li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">X (Twitter)</li>
                        <li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">Dribbble</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
