import React from "react";

//import Img from '../../assets/images/thum4.png'
import Header from '../../components/Header/Header'


import Section1 from '../../components/HomeComponents/Section1/Section1'
import Section2 from '../../components/HomeComponents/Section2/Section2'
import Section3 from '../../components/HomeComponents/Section3/Section3'


import './Home.css'

export default function Home() {

    

  return (
    <div>
        <Header />
        <Section1  />
        <Section2 />
        <Section3 />
        {/* <div className='section1'>
            <div className="ripple-background" ref={rippleRef}>
                <h1 className="text-3xl font-bold text-blue-600">Tailwind is Working 🎉</h1>
                <p className="text-sm text-gray-600">If you can see this styled text, it’s all good.</p>

                
            </div>
        </div> */}

        {/* <div className="section2" ref={rippleRef}>
            <p>Some random text</p>
        </div> */}
        
        
    </div>
  )
}
