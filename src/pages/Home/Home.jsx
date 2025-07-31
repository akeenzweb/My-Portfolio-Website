import React, { useEffect} from 'react';

//import Img from '../../assets/images/thum4.png'
import Header from '../../components/Header/Header'

import { useProjectStore } from '../../store/projectStore';

import ProjectContainer from '../../components/ProjectContainer/ProjectContainer2';



import Section1 from '../../components/HomeComponents/Section1/Section1'
import Section2 from '../../components/HomeComponents/Section2/Section2'
import Section3 from '../../components/HomeComponents/Section3/Section3'

import Footer from '../../components/Footer/Footer'

import lenis from '../../lenisInstance'; 


import './Home.css'

//import lenis from 'lenis';
//import Lenis from '@studio-freight/lenis';

import { Element } from 'react-scroll';

export default function Home() {
  
const isProjectVisible = useProjectStore((state) => state.isProjectVisible);
const selectedProject = useProjectStore((state) => state.selectedProject);


 useEffect(() => {
    if (isProjectVisible) {
      lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    }
  }, [isProjectVisible]);

  return (
    <div>
        <Header />
        {isProjectVisible  && selectedProject &&  <ProjectContainer project={selectedProject} />}

        {/* {isProjectVisible   &&  <ProjectConTest  />} */}
        
        {!isProjectVisible &&
          <Element name="home">
            <div id="home">
              <Section1   />
            </div>
          </Element>
        }

        {!isProjectVisible &&
          <Element name="project">
            <div id="project">
              <Section2  />
            </div>
          </Element>
        }

        {!isProjectVisible &&
          <Element name="about">
            <div id='about'>
              <Section3 />
            </div>
          </Element>
        }
        
        
        <Element name="contact">
          <div id='contact'>
            <Footer />
          </div>
        </Element>
        
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
