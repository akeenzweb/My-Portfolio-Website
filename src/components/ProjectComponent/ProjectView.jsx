import React from 'react'

import style from './ProjectView.module.css'

import Cover1 from '../../assets/images/cover1.svg'
import Bulb from '../../assets/images/bulb.svg'
import Sketch1 from '../../assets/images/sketch1.png'
import Wireframes1 from '../../assets/images/Wireframes1.svg'

export default function ProjectView() {
  return (
    <div className='h-auto'>
        <div className={` ${style.dmSans} relative bg-[#131313] h-[480px] max-w-screen px-4 lg:px-20 py-12 lg:py-32`}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="order-2 sm:order-1  text-[#AAAAAA] mt-4 lg:mt-0">
                    <p className='text-base lg:text-3xl uppercase font-semibold lg:font-bold tracking-[2px] lg:tracking-[6px] leading-9 lg:leading-[60px]'>A Sleek, personal brand website for Busayo Salako that feels both elegant and approachable.</p>
                </div>
                <div className="order-1 sm:order-2 text-[#AAAAAA] flex justify-end">
                    <div>
                        <img src={Cover1} alt="" />
                        <p className='uppercase tracking-[6px]'>IAMBUSAYO BRAND WEBSITE</p>
                    </div>
                </div>
            </div>
            <p className="fixed top-5 -left-24 -z-0 text-[270px] text-white opacity-10 font-bold">01</p>
        </div>

        <div className='bg-[#1C1C1C] min-h-[590px] mt-[550px] px-4 lg:px-20 py-12 lg:py-32 text-[#AAAAAA]'>
            {/* THE IDEA */}
            <div className='relative border-b border-[#444343] pb-20'>
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>The Ideas</h1>
                <p className='text-base tracking-[1px] text-[#AAAAAA] leading-9'>At the heart of this project was the client’s vision: a brand website that embodies elegance while remaining approachable and relatable. Busayo wanted a digital home that reflected not only her refined taste but also her friendly, down-to-earth personality. The idea was to marry sophistication with simplicity—to create a visual narrative that speaks with poise but welcomes with warmth. The design needed to inspire trust, spark curiosity, and leave a lasting impression without ever feeling distant or cold.</p>
                <img className='absolute -top-44 right-0' src={Bulb} alt="" />
            </div>

            {/* THE APPROACH */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-20 ">
                <div className='col-span-3'>
                    <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>The Approach</h1>
                    <p className='text-base tracking-[1px] text-[#AAAAAA] leading-9'>The project began with initial discovery sessions, where I engaged the client in conversations to understand her tone, preferences, and vision. From there, I moved into the design thinking process, starting with quick sketch explorations and low-fidelity wireframes to define the structure and flow. This allowed us to experiment with layout ideas early and stay iterative. Feedback loops were constant—client input shaped every major design decision. With the sitemap and wireframes in place, I advanced into visual mockups and interactive prototypes, focusing on hierarchy, typography, and gentle micro-interactions that would eventually bring the site to life. Every step of the way, I remained in dialogue with Busayo, refining the interface based on both aesthetic goals and real usability concerns.</p>
                </div>
                <div className='col-span-2 '><img className='' src={Sketch1} alt="" /></div>
            </div>

            {/* WIREFRAMES */}
            <div className='relative border-b border-[#444343] pb-20 mt-20'>
                <h1 className='text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4'>Wireframes</h1>
                <div className=''><img src={Wireframes1} alt="" /></div>
            </div>

        </div>
    </div>
  )
}
