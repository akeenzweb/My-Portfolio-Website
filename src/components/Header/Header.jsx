import React, { useState } from 'react'

import { motion, AnimatePresence } from "framer-motion";

import style from './Header.module.css'

import Logo from '../../assets/images/logo-AS.svg'
import Menu from '../../assets/icons/menu.svg'
import Close from '../../assets/icons/close.svg'



export default function Header() {

  const [isOpen, setIsOpen] = useState(false);


  return (
    <div >
      {/* For Laptops */}
      <div className={`${style.header} hidden lg:block fixed top-0 left-0 w-full h-28 z-10`}>
        <div className={`${style.blurOverlay}  lg:flex items-center justify-center  w-full h-28 z-10 px-4 md:px-20 `}>
            <div className={` flex justify-between items-center w-full`}>
                <img src={Logo} alt="" />
                <ul className={`${style.dmSans} flex text-[#787878] tracking-[6px] font-semibold`}>
                    <li>Projects</li>
                    <li className='ml-16'>About Me</li>
                    <li className='ml-16'>Contacts</li>
                    <li className='ml-16'>Projects</li>
                </ul>
            </div>
        </div>
      </div>
      

        {/* For Mobiles */}
        <div className={`${style.header} block lg:hidden fixed top-0 left-0 w-full h-24 z-10`}>
          <div className={`  flex justify-between items-center w-full px-4 md:px-20`}>
              <img src={Logo} alt="" />
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
                        <li className='mb-5'>Projects</li>
                        <li className='mb-5'>About Me</li>
                        <li className='mb-5'>Contacts</li>
                        <li className='mb-5'>Projects</li>
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
