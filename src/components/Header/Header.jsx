import React, { useState, useEffect } from 'react'

import { useNavigate, useLocation } from 'react-router-dom';

import { scroller } from 'react-scroll';

import { motion, AnimatePresence } from "framer-motion";

import style from './Header.module.css'

import Logo from '../../assets/images/logo-AS.svg'
import Menu from '../../assets/icons/menu.svg'
import Close from '../../assets/icons/close.svg'

import DownloadDoc from '../../assets/icons/document-doc.svg'

//import { useProjectStore } from '../../store/projectStore';



export default function Header() {

  const [activeSection, setActiveSection] = useState('home');

  const navigate = useNavigate();
  const location = useLocation();

  const cvUrl = '/CV/Akinbolade_Salako.docx'
  
useEffect(() => {
  if (location.pathname !== '/') {
    setTimeout(() => {
      setActiveSection('project');
    }, 100);
  } else {
    setActiveSection('home');
  }
}, [location.pathname])

useEffect(() => {
  const handleScroll = () => {
    const sections = ['home', 'project', 'about', 'contact'];
    const scrollY = window.scrollY;

    for (let i = 0; i < sections.length; i++) {
      const section = document.getElementById(sections[i]);
      if (section) {
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (scrollY >= offsetTop - 150 && scrollY < offsetTop + offsetHeight - 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  //const setProjectVisible = useProjectStore((state) => state.setProjectVisible);

  const [isOpen, setIsOpen] = useState(false);

  

  const handleScrollTo = (target) => {
    // setProjectVisible(false);
     setIsOpen(false)

    if (location.pathname !== '/') {
      if (target === 'contact') {
        setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 1200,
          smooth: true,
        });
      }, 50);
      } else {
        // Redirect to homepage and pass scroll target
        navigate('/', { state: { scrollTo: target } });
      }
      
    } else {
      // Already on homepage, scroll directly
      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 1200,
          smooth: true,
        });
      }, 50);
    }
  };

  

  


  return (
    <div >
      {/* For Laptops */}
      <div className={`${style.header} hidden lg:block fixed top-0 left-0 w-full h-28 z-10 items-center`}>
        {/* <div className={`${style.blurOverlay}  lg:flex items-center justify-center  w-full h-28 z-10 px-4 md:px-20 `}> */}
            <div className={` absolute top-3 left-0 flex justify-between items-center w-full z-[9999] px-4 lg:px-20`}>
                <span to="home" smooth={true} duration={1200}><img src={Logo} alt="" /></span>
                <ul className={`${style.dmSans} flex text-[#787878] tracking-[6px] font-semibold items-center`}>
                    <li className=''><span onClick={() => handleScrollTo('home')}   className={`cursor-pointer ${activeSection === 'home' ? 'text-[#FF9C12] pb-2 font-bold border-b-2 border-[#FF9C12]' : ''}`}> Home </span></li>
                    <li className=''><span onClick={() => handleScrollTo('project')}   className={`ml-16 cursor-pointer ${activeSection === 'project' ? 'text-[#FF9C12] pb-2 font-bold border-b-2 border-[#FF9C12]' : ''}`}> Projects </span></li>
                    <li className=''><span onClick={() => handleScrollTo('about')}   className={`ml-16 cursor-pointer ${activeSection === 'about' ? 'text-[#FF9C12] pb-2 font-bold border-b-2 border-[#FF9C12]' : ''}`}> About Me </span></li>
                    {/* <Link to="project" smooth={true} duration={1200}><li className='ml-16 cursor-pointer'>Projects</li></Link> */}
                    {/* <Link to="about" smooth={true} duration={1200}><li className='ml-16 cursor-pointer'>About Me</li></Link> */}
                    <li onClick={() => window.open(cvUrl, "_blank")} className='ml-16 cursor-pointer flex items-center text-[#f3ece2] font-semibold'>Get CV <img className="ml-2 w-6" src={DownloadDoc} alt="" /></li>
                    <li onClick={() => handleScrollTo('contact')} className={`${style.btnHover} bg-white uppercase text-[#222222] px-5 py-2 rounded-[4px] ml-16 cursor-pointer`}><span to="contact" smooth={true} duration={1200} spy={true} offset={-80} activeClass="text-[#CF8113] " className=""> Contacts</span></li>
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
                        <span onClick={() => handleScrollTo('home')}><li className={`mb-5 ${activeSection === 'home' ? 'text-[#FF9C12] pb-2 font-bold border-b-2 border-[#FF9C12]' : ''}`}>Home</li></span>
                        <span onClick={() => handleScrollTo('project')}><li className={`mb-5 ${activeSection === 'project' ? 'text-[#FF9C12] pb-2 font-bold border-b-2 border-[#FF9C12]' : ''}`}>Projects</li></span>
                        <span onClick={() => handleScrollTo('about')}><li className={`mb-5 ${activeSection === 'about' ? 'text-[#FF9C12] pb-2 font-bold border-b-2 border-[#FF9C12]' : ''}`}>About Me</li></span>
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
