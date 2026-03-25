import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Element } from "react-scroll";
import { useCaseStudyStore } from '../../store/caseStudyStore'
import Header from "../../components/Header/Header";
import Footer from '../../components/Footer/Footer'
import style from "./CaseStudy.module.css";
import lenis from "../../lenisInstance";

//import Bulb from "../../assets/images/bulb2.svg";
import BackButton from "../../assets/images/back-button.svg";

export default function Project() {
  const navigate = useNavigate();
  //const setProjectVisible = useProjectStore((state) => state.setProjectVisible);
  const selectedCaseStudy = useCaseStudyStore((state) => state.selectedCaseStudy);

  //const [bgImage, setBgImage] = useState(null);

  // Redirect to home if selectedCaseStudy is null
  useEffect(() => {
    if (!selectedCaseStudy) {
      navigate("/");
    }
  }, [selectedCaseStudy, navigate]);

  // Set background image based on screen size
  useEffect(() => {
    if (!selectedCaseStudy) return;

    // const handleResize = () => {
    //   setBgImage(
    //     window.innerWidth < 768
    //       ? selectedCaseStudy.coverImageMobile
    //       : selectedCaseStudy.coverImage
    //   );
    // };

    // handleResize();
    // window.addEventListener("resize", handleResize);

    // return () => {
    //   window.removeEventListener("resize", handleResize);
    // };
  }, [selectedCaseStudy]);

  // Scroll to top using lenis
  useEffect(() => {
    lenis.scrollTo(0, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
  }, []);

  const handleScrollTo = (target) => {
    // navigate("/");
    // Redirect to homepage and pass scroll target
    navigate('/', { state: { scrollTo: target } });
  };

  // If still loading or redirecting
  if (!selectedCaseStudy) {
    return <div className="text-white p-8">Redirecting...</div>;
  }

  return (
    <div>
      <Header />
      <div className="relative w-full">
        {/* Fixed Background */}
        {/* {bgImage && (
          <div
            className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat z-[-1]"
            style={{ backgroundImage: `url(${bgImage})` }}
          />
        )} */}

        {/* Foreground Scrollable Content */}
        <div className="z-10">
          <div className="h-auto">
            <div
              className={`${style.dmSans} relative bg-[#131313] max-w-screen px-4 lg:px-20 py-12 lg:py-32`}
            >
              {/* Back Button */}
              <div
                onClick={() => handleScrollTo('project')}
                className="flex justify-start items-center mt-14 lg:mt-0 mb-4 lg:mb-5 cursor-pointer"
              >
                <img className="h-10 lg:h-14" src={BackButton} alt="Back" />
              </div>

              {/* Intro Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:items-center">
                <div className="order-2 sm:order-1 text-[#AAAAAA] mt-4 lg:mt-0">
                  <p className="text-base lg:text-3xl font-semibold lg:font-bold tracking-[2px] lg:tracking-[3px] leading-9 lg:leading-[60px]">
                    {selectedCaseStudy.paragraph}
                  </p>
                </div>
                <div className="order-1 sm:order-2 text-[#AAAAAA] flex justify-end">
                  <div>
                    <img src={selectedCaseStudy.coverImage} alt={selectedCaseStudy.name} />
                    <p className="uppercase tracking-[6px] mt-4">{selectedCaseStudy.name}</p>
                  </div>
                </div>
              </div>

              <p className="fixed top-5 -left-24 -z-0 text-[270px] text-white opacity-10 font-bold pointer-events-none">
                0{selectedCaseStudy.number + 1}
              </p>
            </div>

            {/* Sections */}
            {/* <div className="bg-[#1C1C1C] min-h-[590px] mt-[550px] px-4 lg:px-20 py-12 lg:py-32 text-[#AAAAAA]">
              <div className="relative border-b border-[#444343] pb-20">
                <h1 className="text-2xl md:text-3xl font-semibold leading-10 md:leading-[52px] mb-4">The Ideas</h1>
                <p className="text-base tracking-[1px] leading-9">
                  {selectedCaseStudy.theIdea}
                </p>
                <img className="absolute -top-44 right-0" src={Bulb} alt="" />
              </div>
            </div> */}

            {/* <div className="h-auto">
                
                {selectedCaseStudy.contents.map((content, index) => {
                  return (
                    <img key={index} src={content} alt={`Content ${index + 1}`} />
                  );
                })}
            </div> */}

            {selectedCaseStudy?.isMobile ? (
                <>
                  {/* Mobile */}
                  <div className="block md:hidden">
                    {/* <img
                      src={selectedCaseStudy.contentMobile}
                      className="w-full h-auto"
                      alt="Mobile content"
                    /> */}
                    {selectedCaseStudy.contentsMobile.map((content, index) => (
                      <img
                        key={index}
                        src={content}
                        className="w-full h-auto"
                        alt={`Content ${index + 1}`}
                      />
                    ))}

                  </div>

                  {/* Desktop fallback (optional) */}
                  <div className="hidden md:block">
                    {selectedCaseStudy.contents.map((content, index) => (
                      <img
                        key={index}
                        src={content}
                        className="w-full h-auto"
                        alt={`Content ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  {selectedCaseStudy.contents.map((content, index) => (
                    <img
                      key={index}
                      src={content}
                      className="w-full h-auto"
                      alt={`Content ${index + 1}`}
                    />
                  ))}
                </div>
              )}

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
