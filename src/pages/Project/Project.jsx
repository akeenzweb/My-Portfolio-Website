import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import { useProjectStore } from "../../store/projectStore";
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import style from "./Project.module.css";
import lenis from "../../lenisInstance";

import Bulb from "../../assets/images/bulb.svg";
//import Sketch1 from "../../assets/images/buSketch1.jpg";
// import Wireframes1 from "../../assets/images/Wireframes1.svg";
// import Wireframesii from "../../assets/images/Wireframesii.svg";
import Font1 from "../../assets/images/font1.png";
import Color1 from "../../assets/images/color1.png";
// import Mockup1 from "../../assets/images/Mockups2i.svg";
// import Mockup1ii from "../../assets/images/Mockups2ii.svg";
import BackButton from "../../assets/images/back-button.svg";

export default function Project() {
  const navigate = useNavigate();
  //const setProjectVisible = useProjectStore((state) => state.setProjectVisible);
  const selectedProject = useProjectStore((state) => state.selectedProject);

  const [bgImage, setBgImage] = useState(null);

  // Redirect to home if selectedProject is null
  useEffect(() => {
    if (!selectedProject) {
      navigate("/");
    }
  }, [selectedProject, navigate]);

  // Set background image based on screen size
  useEffect(() => {
    if (!selectedProject) return;

    const handleResize = () => {
      setBgImage(
        window.innerWidth < 768
          ? selectedProject.coverImageMobile
          : selectedProject.coverImage
      );
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [selectedProject]);

  // Scroll to top using lenis
  useEffect(() => {
    lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }, []);

  const handleScrollTo = () => {
    navigate("/");
  };

  // If still loading or redirecting
  if (!selectedProject) {
    return <div className="text-white p-8">Redirecting...</div>;
  }

  return (
    <div>
      <Header />
      <div className="relative w-full">
        {/* Fixed Background */}
        {bgImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )}

        {/* Foreground Scrollable Content */}
        <div className="z-10">
          <div className="h-auto">
            <div
              className={`${style.dmSans} relative bg-[#131313] mb-10 lg:mb-10 max-w-screen px-4 lg:px-20 py-12 lg:py-32`}
            >
              {/* Back Button */}
              <div
                onClick={() => handleScrollTo()}
                className="flex justify-start items-center mt-14 lg:mt-0 mb-4 lg:mb-5 cursor-pointer"
              >
                <img className="h-10 lg:h-14" src={BackButton} alt="Back" />
              </div>

              {/* Intro Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="order-2 sm:order-1 text-[#AAAAAA] mt-4 lg:mt-0">
                  <p className="text-base lg:text-3xl uppercase font-semibold lg:font-bold tracking-[2px] lg:tracking-[6px] leading-9 lg:leading-[60px]">
                    A Sleek, personal brand website for Busayo Salako that feels both elegant and approachable.
                  </p>
                </div>
                <div className="order-1 sm:order-2 text-[#AAAAAA] flex justify-end">
                  <div>
                    <img src={selectedProject.coverImage} alt={selectedProject.name} />
                    <p className="uppercase tracking-[6px] mt-4">{selectedProject.name}</p>
                  </div>
                </div>
              </div>

              <p className="fixed top-5 -left-24 -z-0 text-[270px] text-white opacity-10 font-bold pointer-events-none">
                0{selectedProject.number + 1}
              </p>
            </div>

            {/* Sections */}
            <div className="bg-[#1C1C1C] min-h-[590px] mt-[550px] px-4 lg:px-20 py-12 lg:py-32 text-[#AAAAAA]">
              {/* The Idea */}
              <div className="relative border-b border-[#444343] pb-20">
                <h1 className="text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4">The Ideas</h1>
                <p className="text-base tracking-[1px] leading-9">
                  At the heart of this project was the client’s vision: a brand website that embodies elegance while remaining approachable and relatable. Busayo wanted a digital home that reflected not only her refined taste but also her friendly, down-to-earth personality...
                </p>
                <img className="absolute -top-44 right-0" src={Bulb} alt="" />
              </div>

              {/* The Approach */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-20 items-center">
                <div className="col-span-3">
                  <h1 className="text-2xl md:text-3xl font-semibold mb-4">The Approach</h1>
                  <div className="block lg:hidden mb-4">
                    <img src={selectedProject.sketch} alt="" />
                  </div>
                  <p className="text-base tracking-[1px] leading-9">
                    The project began with discovery sessions to understand the client’s tone, preferences, and goals. We started with quick sketches and wireframes before evolving into high-fidelity designs and polished front-end implementation.
                  </p>
                </div>
                <div className="col-span-2 hidden lg:block">
                  <img src={selectedProject.sketch} alt="" />
                </div>
              </div>

              {/* Wireframes */}
              <div className="relative border-b border-[#444343] pb-20 mt-20">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">Wireframes</h1>
                <div className="hidden lg:block">
                  <img src={selectedProject.wireframeLarge} alt="Wireframes" />
                </div>
                <div className="block lg:hidden">
                  <img src={selectedProject.wireframeMobile} alt="Wireframes Mobile" />
                </div>
              </div>

              {/* The Build */}
              <div className="relative border-b border-[#444343] pb-20 mt-20">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">The Build</h1>
                <p className="text-base tracking-[1px] leading-9">
                  This project was designed and built from the ground up using React. Subtle animations, image collages, and mobile-first design choices make it responsive, fast, and full of personality.
                </p>
              </div>

              {/* Font & Colors */}
              <div className="mt-20">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">Font & Colors</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <img src={Font1} alt="Fonts" />
                  <img src={Color1} alt="Colors" />
                </div>
              </div>

              {/* Mockups */}
              <div className="relative border-b border-[#444343] pb-20 mt-20">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">The Mockup</h1>
                <div className="hidden lg:block">
                  <img src={selectedProject.mockupLarge} alt="Mockup" />
                </div>
                <div className="block lg:hidden">
                  <img src={selectedProject.mockupMobile} alt="Mockup Mobile" />
                </div>
              </div>

              <div className="iframe-wrapper w-full max-w-4xl mx-auto mt-10">
                {selectedProject.iframeVideo}

              </div>

              {/* Summary */}
              <div className="relative border-b border-[#444343] pb-20 mt-20">
                <h1 className="text-2xl md:text-3xl font-semibold mb-4">Project Summary</h1>
                <p className="text-base tracking-[1px] leading-9">
                  From discovery to development, this was a complete design and build project for Busayo Salako’s brand website. I worked closely with the client to ensure the end product was polished, performant, and truly representative of her identity.
                </p>
              </div>
            </div>
            <Element name="contact">
              <div id='contact'>
                <Footer />
              </div>
            </Element>
          </div>
        </div>
      </div>
    </div>
  );
}
