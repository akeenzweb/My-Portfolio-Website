import ComplyCover from '../assets/case-studies/complyPass/cover.png'
import ComplyContent from '../assets/case-studies/complyPass/content.svg'
import Content1 from '../assets/case-studies/complyPass/contents/content1.svg'
import Content2 from '../assets/case-studies/complyPass/contents/content2.svg'
import Content3 from '../assets/case-studies/complyPass/contents/content3.svg'
import Content4 from '../assets/case-studies/complyPass/contents/content4.svg'
import Content5 from '../assets/case-studies/complyPass/contents/content5.svg'
import Content6 from '../assets/case-studies/complyPass/contents/content6.jpg'
import Content7 from '../assets/case-studies/complyPass/contents/content7.svg'
import Content8 from '../assets/case-studies/complyPass/contents/content8.jpg'
import Content9 from '../assets/case-studies/complyPass/contents/content9.svg'
import Content10 from '../assets/case-studies/complyPass/contents/content10.jpg'
import Content11 from '../assets/case-studies/complyPass/contents/content11.webp'
import Content12 from '../assets/case-studies/complyPass/contents/content12.webp'
import Content13 from '../assets/case-studies/complyPass/contents/content13.svg'
import Content14 from '../assets/case-studies/complyPass/contents/content14.svg'
import ComplyContentMobile from '../assets/case-studies/complyPass/contents/content-mobile.jpg'   


import PlaceItContent1 from '../assets/case-studies/placeIt/contents/content1.jpg'
import PlaceItContent2 from '../assets/case-studies/placeIt/contents/content2.webp'
import PlaceItContent3 from '../assets/case-studies/placeIt/contents/content3.webp'
import PlaceItContent4 from '../assets/case-studies/placeIt/contents/content4.webp'
import PlaceItContent5 from '../assets/case-studies/placeIt/contents/content5.webp'
import PlaceItContent6 from '../assets/case-studies/placeIt/contents/content6.webp'
import PlaceItContent7 from '../assets/case-studies/placeIt/contents/content7.webp'
import PlaceItContent8 from '../assets/case-studies/placeIt/contents/content8.webp'
import PlaceItContent9 from '../assets/case-studies/placeIt/contents/content9.webp'
import PlaceItContent10 from '../assets/case-studies/placeIt/contents/content10.webp'
import PlaceItContent11 from '../assets/case-studies/placeIt/contents/content11.webp'
import PlaceItContent12 from '../assets/case-studies/placeIt/contents/content12.webp'
import PlaceItContent13 from '../assets/case-studies/placeIt/contents/content13.webp'
import PlaceItContent14 from '../assets/case-studies/placeIt/contents/content14.webp'
import PlaceItContent15 from '../assets/case-studies/placeIt/contents/content15.webp'


const caseStudiesData = [
        {
          name: 'COMPLYPASS COMPLIANCE',
          coverImage: ComplyCover,
          isMobile: true,
          contentMobile: ComplyContentMobile,
          content: ComplyContent,
          contents: [
            Content1, Content2, Content3, Content4, Content5, Content6, Content7, Content8, Content9, Content10, Content11, Content12, Content13, Content14
          ],
          //coverImageMobile: IBCoverMobile,
        //   sketch: IBSketch,
        //   mockupLarge: IBMockupLarge,
        //   mockupMobile: IBMockupMobile,
        //   wireframeLarge: IBWireframeLarge,
        //   wireframeMobile: IBWireframeMobile,
        //   iframeVideo1: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/A95Zq_kvNl0?autoplay=1&mute=1&loop=1&playlist=A95Zq_kvNl0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
        //   font: IBFont,
        //   color: IBColor,
        //   liveUrl: IamBusayoLink,
        //   demoType: 'Website',
           paragraph: 'Designing a compliance automation platform that turns a 12-month certification nightmare into a 6-week guided process.',
        //    theIdea: 'At the heart of this project was the client’s vision: a brand website that embodies elegance while remaining approachable and relatable. Busayo wanted a digital home that reflected not only her refined taste but also her friendly, down-to-earth personality...',
        // //   theApproach: 'The project began with discovery sessions to understand the client’s tone, preferences, and goals. We started with quick sketches and wireframes before evolving into high-fidelity designs and polished front-end implementation.',
        //   theBuild: 'This project was designed and built from the ground up using React. Subtle animations, image collages, and mobile-first design choices make it responsive, fast, and full of personality.',
        //   projectSummary: 'From discovery to development, this was a complete design and build project for Busayo Salako’s brand website. I worked closely with the client to ensure the end product was polished, performant, and truly representative of her identity.',
        },
        {
          name: 'PLACEIT APP',
          coverImage: PlaceItContent1,
          isMobile: false,
          content: ComplyContent,
          contents: [
            PlaceItContent1, PlaceItContent2, PlaceItContent3, PlaceItContent4, PlaceItContent5, PlaceItContent6, PlaceItContent7, PlaceItContent8, PlaceItContent9, PlaceItContent10, PlaceItContent11, PlaceItContent12, PlaceItContent13, PlaceItContent14, PlaceItContent15
          ],
           paragraph: 'Augmented Reality Furniture Shopping — End-to-End UX Case Study',
           //theIdea: 'At the heart of this project was the client’s vision: a brand website that embodies elegance while remaining approachable and relatable. Busayo wanted a digital home that reflected not only her refined taste but also her friendly, down-to-earth personality...',
        }
]



export default caseStudiesData;
