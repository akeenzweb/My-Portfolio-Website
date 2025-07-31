import React, { useEffect, useState, useLayoutEffect } from "react";



// import Header from '../../components/Header/Header'
// import Footer from "../../components/Footer/Footer";


//import style from './Project.module.css'

import ProjectView from '../ProjectView/ProjectView'

import Banner1 from '../../assets/images/banner1.svg'
import Banner1Mobile from '../../assets/images/banner1-mobileiv.svg'

export default function Project({project}) {

  const [bgImage, setBgImage] = useState(Banner1)

  useEffect(() => {
 

  // Resize listener
  const handleResize = () => {
    setBgImage(window.innerWidth < 768 ? Banner1Mobile : Banner1);
  };
  handleResize();
  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

useLayoutEffect(() => {
  // This guarantees scroll happens after the DOM layout
  const timeout = setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, 100); // Enough time for layout and images to load

  return () => clearTimeout(timeout);
}, []);



  return (
    <div>
      {/* <Header /> */}
        <div className="relative w-full min-h-screen ">
            {/* Foreground Scrollable Content */}
            <div className=" top-0 left-0 z-10">
                <ProjectView project={project} className='w-full' />
            </div>
            
            {/* Fixed Background */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            
        </div>
        {/* <Footer /> */}
    </div>
  )
}
