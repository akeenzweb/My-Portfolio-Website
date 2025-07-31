import React, { useState } from 'react'

import { scroller } from 'react-scroll';

import { motion, AnimatePresence } from "framer-motion";

import style from './Header.module.css'

import Logo from '../../assets/images/logo-AS.svg'
import Menu from '../../assets/icons/menu.svg'
import Close from '../../assets/icons/close.svg'

import DownloadDoc from '../../assets/icons/document-doc.svg'

import { useProjectStore } from '../../store/projectStore';



export default function Header() {

  const setProjectVisible = useProjectStore((state) => state.setProjectVisible);

  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (target) => {
    setProjectVisible(false);
    setIsOpen(false)

    setTimeout(() => {
      scroller.scrollTo(target, {
        duration: 1200,
        smooth: true,
        // offset: -80,
      });
    }, 50);
  };

  

  


  return (
    <div >
      {/* For Laptops */}
      <div className={`${style.header} hidden lg:block fixed top-0 left-0 w-full h-28 z-10 items-center`}>
        {/* <div className={`${style.blurOverlay}  lg:flex items-center justify-center  w-full h-28 z-10 px-4 md:px-20 `}> */}
            <div className={` absolute top-3 left-0 flex justify-between items-center w-full z-[9999] px-4 lg:px-20`}>
                <span to="home" smooth={true} duration={1200}><img src={Logo} alt="" /></span>
                <ul className={`${style.dmSans} flex text-[#787878] tracking-[6px] font-semibold items-center`}>
                    <li className=''><span onClick={() => handleScrollTo('home')}   activeClass="text-[#FF9C12] font-bold border-b-2 border-[#FF9C12]" className="cursor-pointer"> Home </span></li>
                    <li className=''><span onClick={() => handleScrollTo('project')}  activeClass="text-[#FF9C12] font-bold border-b-2 border-[#FF9C12]" className="ml-16 cursor-pointer"> Projects </span></li>
                    <li className=''><span onClick={() => handleScrollTo('about')}  activeClass="text-[#FF9C12] font-bold border-b-2 border-[#FF9C12]" className="ml-16 cursor-pointer"> About Me </span></li>
                    {/* <Link to="project" smooth={true} duration={1200}><li className='ml-16 cursor-pointer'>Projects</li></Link> */}
                    {/* <Link to="about" smooth={true} duration={1200}><li className='ml-16 cursor-pointer'>About Me</li></Link> */}
                    <li className='ml-16 cursor-pointer flex items-center text-[#f3ece2] font-semibold'>Get CV <img className="ml-2 w-6" src={DownloadDoc} alt="" /></li>
                    <li onClick={() => handleScrollTo('contact')} className='bg-white uppercase text-[#222222] px-5 py-2 rounded-[4px] ml-16 cursor-pointer'><span to="contact" smooth={true} duration={1200} spy={true} offset={-80} activeClass="text-[#CF8113] " className=""> Contacts</span></li>
                    {/* <Link to="contact" smooth={true} duration={1200}><li className='ml-16 cursor-pointer'><div className='bg-white uppercase text-[#222222] px-5 py-2 rounded-[4px]'>Contacts</div></li></Link> */}
                </ul>
            </div>
            <div className={`${style.blurOverlay} absolute top-0 left-0 lg:flex items-center justify-center  w-full h-28 z-[-9999] px-4 md:px-20 `}>

            </div>
        {/* </div> */}
      </div>
      

        {/* For Mobiles */}
        <div className={`${style.header} block lg:hidden fixed top-0 left-0 w-full h-24 z-50`}>
          <div className={`bg-[#1c1c1c] opacity-90  flex justify-between items-center w-full px-4 md:px-20`}>
              <span to="home" smooth={true} duration={1200}><img src={Logo} alt="" /></span>
              <div onClick={() => setIsOpen(prev => !prev)}>
                <img src={Menu} alt="" className={isOpen ? 'hidden' : 'block'} />
                <img src={Close} alt="" className={isOpen ? 'block' : 'hidden'} />
              </div>
          </div>
          <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="active"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5 }}
                      // className="p-4 bg-green-200 rounded"
                      className='bg-[#1c1c1c] w-screen p-4'
                    >
                      <ul className={`${style.dmSans}  text-[#787878] tracking-[6px] font-semibold`}>
                        <span onClick={() => handleScrollTo('home')}><li className='mb-5'>Home</li></span>
                        <span onClick={() => handleScrollTo('project')}><li className='mb-5'>Projects</li></span>
                        <span onClick={() => handleScrollTo('about')}><li className='mb-5'>About Me</li></span>
                        <li className='mb-5 flex items-center font-semibold'>Get CV <img className="ml-2 w-6" src={DownloadDoc} alt="" /></li>
                        <span onClick={() => handleScrollTo('contact')}><li className='mb-5'><div className='bg-white uppercase text-[#222222] px-5 py-2 rounded-[4px]'>Contacts</div></li></span>
                      </ul>
                    </motion.div>
                     ) : null
                    }
                </AnimatePresence>
            <div className={`${style.blurOverlay} absolute top-0 left-0 block lg:hidden items-center justify-center  w-full  z-50  `}>
              {/* <p className='text-white'>SUP</p> */}
            </div>
        </div>
        
    
    </div>
  )
}
