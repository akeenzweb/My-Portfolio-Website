import React, { useEffect, useRef } from "react";

import { useLocation, Link } from "react-router-dom";

import style from './Footer.module.css'

import { Link as ScrollLink } from 'react-scroll';

import WhatsppBtn from '../../assets/images/chat-whatsapp.svg'
import DownloadDoc from '../../assets/icons/document-doc.svg'

export default function Footer() {
  const location = useLocation();

   const cvUrl = '/CV/Akinbolade_Salako.docx'
  // const path = location.pathname;

  const message = 'Hi, I came across your portfolio and wanted to reach out'
  const whatsappLink = `https://wa.me/2349132690912?text=${message}`;
  //const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const linkedinLink = 'https://www.linkedin.com/in/akinbolade-salako-835ba41b3/'
  //const twitterLink = 'https://www.linkedin.com/in/akinbolade-salako-835ba41b3/'
  const dribbbleLink = 'https://dribbble.com/Akinbolade_Salako'

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
        <div className={`${style.rippleBackground} w-full bg-[url('/public/footer-bg-mobile2.png')] lg:bg-[url('/public/footer-bg.png')] min-h-screen px-4 lg:px-20 z-0 bg-[#1c1c1c]`} ref={rippleRef}>
            <div className="pt-10 lg:pt-40  text-white block lg:flex justify-between  ">
                <div>
                    <h1 className={`${style.sourceCode} text-lg lg:text-2xl text-[#AAAAAA]`}>Let’s work together</h1>
                    <a href="mailto:akinboladesalako.tech@gmail.com"><h1 className={`${style.dmSans} cursor-pointer text-xl lg:text-5xl pt-4 font-bold text-[#FFFFFF]`}>akinboladesalako.tech@gmail.com</h1></a>
                    <img className={`${style.btnHover} mt-10 lg:mt-20` } onClick={() => window.open(whatsappLink, "_blank")} src={WhatsppBtn} alt="" />
                </div>

                <div className={`${style.dmSans} flex justify-between mt-40 lg:mt-0`}>
                    <ul className={location.pathname === "/" ? "block cursor-pointer" : "hidden cursor-pointer"}>
                        <li className="text-xl lg:text-2xl">EXPLORE</li>
                        <ScrollLink to="home" smooth={true} duration={1200}><li className={`${style.btnHover} text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]`}>Home</li></ScrollLink>
                        <ScrollLink to="project" smooth={true} duration={1200}><li className={`${style.btnHover} text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]`}>Projects</li></ScrollLink>
                        <ScrollLink to="about" smooth={true} duration={1200}><li className={`${style.btnHover} text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]`}>About Me</li></ScrollLink>
                        <li onClick={() => window.open(cvUrl, "_blank")} className="text-base lg:text-xl text-[#FF9C12] font-semibold mt-5 tracking-[6px] flex">Get CV <img className="ml-2" src={DownloadDoc} alt="" /></li>
                    </ul>

                    <ul className={location.pathname !== "/" ? "block cursor-pointer" : "hidden cursor-pointer"}>
                        <li className="text-xl lg:text-2xl">EXPLORE</li>
                        <Link to="/"><li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">Home</li></Link>
                        {/* <Link to="project" smooth={true} duration={1200}><li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">Projects</li></Link>
                        <Link to="about" smooth={true} duration={1200}><li className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">About Me</li></Link> */}
                        <li onClick={() => window.open(cvUrl, "_blank")} className="text-base lg:text-xl text-[#FF9C12] font-semibold mt-5 tracking-[6px] flex">Get CV <img className="ml-2" src={DownloadDoc} alt="" /></li>
                    </ul>

                    <ul className="ml-4 lg:ml-40 cursor-pointer">
                        <li className="text-xl lg:text-2xl">SOCIALS</li>
                        <li onClick={() => window.open(linkedinLink, "_blank")} className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">LinkedIn</li>
                        {/* <li onClick={() => window.open(twitterLink, "_blank")} className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">X (Twitter)</li> */}
                        <li onClick={() => window.open(dribbbleLink, "_blank")} className="text-base lg:text-xl text-[#6E6E6E] font-semibold mt-5 tracking-[6px]">Dribbble</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
