import React, { useEffect, useRef } from "react";

import style from './Section3.module.css'

import Profile from '../../../assets/images/img-profile.png'
import Figma from '../../../assets/images/figma-interface.svg'



export default function Section3() {

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
    <div className={`${style.rippleBackground} h-[3800px] lg:h-[2800px] z-0 px-4 lg:px-20 py-12 lg:py-32`} ref={rippleRef}>
        <h1 className={`${style.dmSans} mb-20 lg:mb-48 text-white text-center font-semibold text-xl lg:text-2xl tracking-[6px]`}>ABOUT ME</h1>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-16 items-start mb-20 text-white">
            <div className="order-2 md:order-1 md:col-span-7">
                <div className={`${style.dmSans} tracking-[6px] font-medium text-3xl text-[#AAAAAA] leading-[58px]`}><p>I’m a <span className="text-5xl font-extrabold text-white">PRODUCT DESIGNER</span> who cares about <span>clarity, craft,</span> and <span>impact.</span></p></div>
                <div className={`${style.dmSans} tracking-[1px] font-normal text-base text-[#AAAAAA] leading-9 mt-8 `}><p>I design with intent—shaping experiences that feel <span className=" font-extrabold text-[#FFE11D]">SEAMLESS</span>, <span className=" font-extrabold text-[#22D71C]">THOUGHTFUL</span>, and quietly <span className=" font-extrabold text-[#FF6D12]">POWERFUL</span>.
                I love working at the intersection of detail and strategy, where good ideas become great products. Always iterating, always learning, always building toward something meaningful.</p></div>
            </div>
            <div className="order-1 md:order-2 md:col-span-4">
                <img src={Profile} alt="" />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-16 items-start mb-20 text-white mt-10 md:mt-56">
            <div className="md:col-span-2 text-[#AAAAAA] tracking-[3px] md:tracking-[6px]">
                <p className={` text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px]`}>I work across various disciplines not limited to</p>
            </div>
            <div className={` ${style.dmSans} md:col-span-4`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">User Experience (UX) Design</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Focusing on user research, journey mapping, wireframing, and usability testing to ensure products are intuitive and user-centered.</p>
                    </div>

                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">User Experience (UX) Design</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Focusing on user research, journey mapping, wireframing, and usability testing to ensure products are intuitive and user-centered.</p>
                    </div>

                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">User Experience (UX) Design</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Focusing on user research, journey mapping, wireframing, and usability testing to ensure products are intuitive and user-centered.</p>
                    </div>

                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">User Experience (UX) Design</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Focusing on user research, journey mapping, wireframing, and usability testing to ensure products are intuitive and user-centered.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-10 md:mt-56 flex justify-center">
            <img src={Figma} alt="" />
        </div>


    </div>
  )
}
