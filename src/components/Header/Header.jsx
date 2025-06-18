import React from 'react'

import style from './Header.module.css'

import Logo from '../../assets/images/logo-AS.svg'



export default function Header() {
  return (
    <div className={`${style.header} fixed top-0 left-0 w-full h-28 z-10`}>
        <div className={`${style.blurOverlay}  flex items-center justify-center  w-full h-28 z-10 px-4 md:px-20 `}>
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
  )
}
