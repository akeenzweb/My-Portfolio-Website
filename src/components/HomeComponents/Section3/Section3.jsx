import React, { useEffect, useRef, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { motion, AnimatePresence } from "framer-motion";


import style from './Section3.module.css'

import Profile from '../../../assets/images/img-profile.png'
import Figma from '../../../assets/images/figma-interface.svg'

import Industry1 from '../../../assets/images/industry1.svg'
import Industry2 from '../../../assets/images/industry2.svg'
import Industry3 from '../../../assets/images/industry3.svg'
import Industry4 from '../../../assets/images/industry4ii.svg'


import FigLogo from '../../../assets/icons/fig-logo.svg'
import Slack from '../../../assets/icons/slack.svg'
import Teams from '../../../assets/icons/teams.svg'
import Jira from '../../../assets/icons/jira.svg'
import ReactLogo from '../../../assets/icons/react.svg'
import Tailwind from '../../../assets/icons/tailwind.svg'

//import RefPic1 from '../../../assets/images/ref-pic1.svg'

import RightArrow from '../../../assets/icons/right.svg'
import LeftArrow from '../../../assets/icons/left.svg'

import CloseModal from '../../../assets/icons/close-orange.svg'


import referenceData from '../../ReferenceData'



export default function Section3() {

    const [modalData, setModalData] = useState({});
    const [showModal, setShowModal] = useState(false);

    const openRefModal  = (message) => {
        setShowModal(true)
        setModalData(message)
    }

    const settings = {
        className: "center",
        // centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        slidesToShow: 3, // You can adjust this
        speed: 500,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
            slidesToShow: 2,
            centerPadding: "40px",
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            centerPadding: "20px",
            },
        },
        ],
    };

    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 
                    lg:right-[-30px] right-2 cursor-pointer"
            onClick={onClick}
        >
            <img className="w-[30px] lg:w-[40px]" src={RightArrow} alt="" />
        </div>
        );

        const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 
                    lg:left-[-30px] left-2 cursor-pointer"
            onClick={onClick}
        >
            <img className="w-[30px] lg:w-[40px]" src={LeftArrow} alt="" />
        </div>
    );


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
    <div className={`${style.rippleBackground} w-full bg-[url('/public/about-bg-mobile.png')] lg:bg-[url('/public/about-bg.png')] h-auto z-0 px-4 lg:px-20 py-12 lg:py-32`}>
        <h1 className={`${style.dmSans} mb-20 lg:mb-48 text-white text-center font-semibold text-xl lg:text-2xl tracking-[6px]`}>ABOUT ME</h1>

        <div className="grid grid-cols-1 md:grid-cols-11 gap-16 items-start mb-20 text-white">
            <div className="order-2 md:order-1 md:col-span-7">
                <div className={`${style.dmSans} hidden lg:block tracking-[6px] font-medium text-3xl text-[#AAAAAA] leading-[58px]`}><p>I’m a <span className="text-5xl font-extrabold text-white">PRODUCT DESIGNER</span> who cares about <span>clarity, craft,</span> and <span>impact.</span></p></div>
                <div className={`${style.dmSans} block lg:hidden tracking-[2px] font-medium text-2xl text-[#AAAAAA] leading-[48px]`}><p>I’m a <br /> <span className="text-5xl leading-[58px] font-extrabold text-white">PRODUCT DESIGNER</span> who cares about <span>clarity, craft,</span> and <span>impact.</span></p></div>
                <div className={`${style.dmSans} tracking-[1px] font-normal text-base text-[#AAAAAA] leading-9 mt-8 `}><p>I design with intent—shaping experiences that feel <span className=" font-extrabold text-[#FFE11D]">SEAMLESS</span>, <span className=" font-extrabold text-[#22D71C]">THOUGHTFUL</span>, and quietly <span className=" font-extrabold text-[#FF6D12]">POWERFUL</span>.
                I love working at the intersection of detail and strategy, where good ideas become great products. Always iterating, always learning, always building toward something meaningful.</p></div>
            </div>
            <div className="order-1 md:order-2 md:col-span-4">
                <img src={Profile} alt="" />
            </div>
        </div>


         <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-8 items-start mb-20 text-white mt-20 md:mt-56">
            <div className="md:col-span-2 text-[#AAAAAA] tracking-[3px] md:tracking-[6px]">
                <p className={` text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px]`}>Industries I’ve worked in</p>
                <p className="text-[#AAAAAA] tracking-[1px] leading-9 text-base mt-4">As a product designer, I’ve worked across several industries, each presenting unique design challenges and opportunities for innovation</p>
            </div>

            <div className={` ${style.dmSans} md:col-span-4`}>
                <div className="bg-[#242424] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 lg:p-5 mb-4">
                    <h1 className="block lg:hidden font-bold text-xl md:text-2xl mb-2 lg:mt-0">Supply Chain Finance</h1>
                    <img src={Industry1} alt="" />
                    <div className="md:col-span-2">
                        <h1 className="hidden lg:block font-bold text-xl md:text-2xl mt-8 lg:mt-0">Supply Chain Finance</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-8">I've designed platforms that streamline funding, invoice management, & liquidity tracking for businesses. Focused on simplifying complex financial data & workflows for users, ensuring clarity and compliance in transaction-heavy interfaces</p>
                    </div>
                </div>

                <div className="bg-[#242424] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 lg:p-5 mb-4">
                    <h1 className="block lg:hidden font-bold text-xl md:text-2xl mb-2 lg:mt-0">Ecommerce & Fashion Lines</h1>
                    <img src={Industry2} alt="" />
                    <div className="md:col-span-2">
                        <h1 className="hidden lg:block font-bold text-xl md:text-2xl mt-8 lg:mt-0">Ecommerce & Fashion Lines</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-8">Built customer-facing experiences that drive product discovery, personalization, & seamless checkouts. Also worked on merchant tools for inventory management, order fulfillment, & storefront customization—balancing user delight with business performance.</p>
                    </div>
                </div>

                <div className="bg-[#242424] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 lg:p-5 mb-4">
                    <h1 className="block lg:hidden font-bold text-xl md:text-2xl mb-2 lg:mt-0">Fintech</h1>
                    <img src={Industry3} alt="" />
                    <div className="md:col-span-2">
                        <h1 className="hidden lg:block font-bold text-xl md:text-2xl mt-8 lg:mt-0">Fintech</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-8">Contributed to digital banking and payments products, focusing on trust, transparency, and financial literacy. Designed intuitive dashboards, budgeting tools, and secure transaction flows that empower users to manage their finances confidently.</p>
                    </div>
                </div>

                <div className="bg-[#242424] grid grid-cols-1 md:grid-cols-3 gap-4 p-4 lg:p-5 mb-4">
                    <h1 className="block lg:hidden font-bold text-xl md:text-2xl mb-2 lg:mt-0">Food & Hospitality</h1>
                    <img src={Industry4} alt="" />
                    <div className="md:col-span-2">
                        <h1 className="hidden lg:block font-bold text-xl md:text-2xl mt-8 lg:mt-0">Food & Hospitality</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-8">I've designed platforms that streamline funding, invoice management, & liquidity tracking for businesses. Focused on simplifying complex financial data & workflows for users, ensuring clarity and compliance in transaction-heavy interfaces</p>
                    </div>
                </div>
            </div>

        </div>

        <div className="mt-10 md:mt-56 flex justify-center">
            <img src={Figma} alt="" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-16 items-start mb-20 text-white mt-20 md:mt-56">
            <div className="md:col-span-2 text-[#AAAAAA] tracking-[3px] md:tracking-[6px]">
                <p className={`${style.dmSans} text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px]`}>I work across various disciplines such as</p>
            </div>
            <div className={` ${style.dmSans} md:col-span-4`}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">User Experience (UX) Design</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Focusing on user research, journey mapping, wireframing, and usability testing to ensure products are intuitive and user-centered.</p>
                    </div>

                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">User Interface (UI) Design</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Crafting visually engaging and accessible interfaces that align with brand identity and enhance usability.</p>
                    </div>

                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">Design Systems</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Building scalable and consistent UI components and guidelines to streamline product development across teams.</p>
                    </div>

                    <div className="bg-[#242424] px-4 md:px-8 py-5 md:py-10 tracking-[4px]">
                        <h1 className="font-bold text-xl md:text-2xl mb-8">Prototyping & Validation</h1>
                        <p className="text-base tracking-[1px] text-[#AAAAAA] leading-9">Creating interactive prototypes to test ideas early and gather real user feedback before development.</p>
                    </div>
                </div>
            </div>
        </div>

        

       


        <div className={`mt-20 md:mt-56`}>
            <div className="md:col-span-2 text-[#AAAAAA] tracking-[3px] md:tracking-[6px]">
                <p className={`${style.dmSans} text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px]`}>Tools I use regularly</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-5 lg:mt-10">
                <div className="bg-[#242424] rounded-sm h-16 lg:h-24 flex justify-center items-center "><img className="w-5 lg:w-10" src={FigLogo} alt="" /></div>
                <div className="bg-[#242424] rounded-sm h-16 lg:h-24 flex justify-center items-center "><img className="w-5 lg:w-10" src={Slack} alt="" /></div>
                <div className="bg-[#242424] rounded-sm h-16 lg:h-24 flex justify-center items-center "><img className="w-5 lg:w-10" src={Teams} alt="" /></div>
                <div className="bg-[#242424] rounded-sm h-16 lg:h-24 flex justify-center items-center "><img className="w-5 lg:w-10" src={Jira} alt="" /></div>
                <div className="bg-[#242424] rounded-sm h-16 lg:h-24 flex justify-center items-center "><img className="w-5 lg:w-10" src={ReactLogo} alt="" /></div>
                <div className="bg-[#242424] rounded-sm h-16 lg:h-24 flex justify-center items-center "><img className="w-5 lg:w-10" src={Tailwind} alt="" /></div>
            </div>
        </div>


        <div className={`${style.dmSans} mt-20 md:mt-56`}>
            <div className="md:col-span-2 text-[#AAAAAA] tracking-[3px] md:tracking-[6px]">
                <p className={`${style.dmSans} text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px]`}>References</p>
            </div>

                {/* FOR MOBILE */}
                <div className={`flex lg:hidden gap-5 mt-5 lg:mt-10 overflow-scroll lg:overflow-hidden`}>
                {referenceData.map((ref, index) => (
                    <div key={index} className="bg-[#242424] min-w-[290px] lg:min-w-[410px] rounded-sm overflow-hidden">
                        
                        <div className="bg-[#1b1b1b] px-4 lg:px-5 py-2 flex items-center h-20">
                            <img className="mr-4 h-14 w-14 rounded-full" src={ref.image} alt="" />
                            <div>
                                <h1 className="text-base lg:text-xl font-semibold text-white tracking-[1px]">{ref.name}</h1>
                                <p className="text-[#AAAAAA] text-xs lg:text-sm">{ref.title}</p>
                            </div>
                        </div>

                       
                        <div className="p-4 lg:p-5 relative">
                            <p className="text-sm lg:text-base tracking-[1px] text-[#AAAAAA] leading-8 lg:leading-9 line-clamp-6">
                                {ref.message}
                            </p>

                            
                            {ref.message.length > 100 && (
                                <div className="absolute bottom-4 right-5 bg-[#242424] pl-2">
                                    <button
                                        onClick={() => openRefModal(ref)}
                                        className="text-[#FF9C12] bg-white rounded-sm px-4 py-2 font-semibold text-sm"
                                        >
                                            View All
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
                </div>

                {/* FOR LARGE SCREEN */}
                <div className="slider-container hidden lg:block mt-5 lg:mt-10 lg:-ml-10">
                    <Slider {...settings} nextArrow={<NextArrow />} prevArrow={<PrevArrow />}>
                        {referenceData.map((ref, index) => (
                            <div className="px-5 lg:px-20">
                                <div key={index} className="bg-[#242424] min-h-[340px] min-w-[290px] lg:min-w-[410px] rounded-sm ">
                                        {/* Image Section */}
                                        <div className="bg-[#1b1b1b] px-4 lg:px-5 py-2 flex items-center h-20">
                                            <img className="mr-4 h-14 w-14 rounded-full" src={ref.image} alt="" />
                                            <div>
                                                <h1 className="text-base lg:text-xl font-semibold text-white tracking-[1px]">{ref.name}</h1>
                                                <p className="text-[#AAAAAA] text-xs lg:text-sm">{ref.title}</p>
                                            </div>
                                        </div>

                                        {/* Text Section with line clamp */}
                                        <div className="p-4 lg:p-5 relative">
                                            <p className="text-sm lg:text-base tracking-[1px] text-[#AAAAAA] leading-8 lg:leading-9 line-clamp-6">
                                                {ref.message}
                                            </p>

                                            {/* View All button */}
                                            {ref.message.length > 100 && (
                                                <div className="absolute bottom-4 right-5 bg-[#242424] pl-2">
                                                    <button
                                                        onClick={() => openRefModal(ref)}
                                                        className="text-[#FF9C12]  rounded-sm px-4 py-2 font-semibold text-sm"
                                                        >
                                                            View All
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                            </div>
                            
                        ))}
                    </Slider>
                </div>
            


            {/* Modal */}
            <AnimatePresence>
  {showModal && (
    <motion.div
      className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-[#1b1b1b] rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto"
        initial={{ opacity: 0, y: 50 }}     // fade in & slide up
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <div className="bg-[#242424] px-4 lg:px-5 py-2 flex items-center h-20 justify-between">
          <div className="flex">
            <img className="mr-4 h-14 w-14 rounded-full" src={modalData.image} alt="" />
            <div>
              <h1 className="text-base lg:text-xl font-semibold text-white tracking-[1px]">{modalData.name}</h1>
              <p className="text-[#AAAAAA] text-xs lg:text-sm">{modalData.title}</p>
            </div>
          </div>

          <img onClick={() => setShowModal(false)} className="ml-4 cursor-pointer" src={CloseModal} alt="" />
        </div>

        <div className="p-4 lg:p-5">
          <p className="text-[#AAAAAA] leading-8">{modalData.message}</p>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

        </div>


    </div>
  )
}
