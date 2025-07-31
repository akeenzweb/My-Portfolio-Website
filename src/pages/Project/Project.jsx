import React, { useEffect, useState } from "react";



import Header from '../../components/Header/Header'
import Footer from "../../components/Footer/Footer";


//import style from './Project.module.css'

import ProjectView from '../../components/ProjectView/ProjectView'

import Banner1 from '../../assets/images/banner1.svg'
import Banner1Mobile from '../../assets/images/banner1-mobileiv.svg'

export default function Project() {

  const [bgImage, setBgImage] = useState(Banner1)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(Banner1Mobile)
      } else {
        setBgImage(Banner1)
      }
    }

    handleResize() // call on mount
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div>
      <Header />
        <div className="relative w-full min-h-screen ">
            {/* Fixed Background */}
            <div
                className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Foreground Scrollable Content */}
            <div className=" top-0 left-0 z-10">
                <ProjectView className='w-full' />
            </div>
        </div>
        <Footer />
    </div>
  )
}
