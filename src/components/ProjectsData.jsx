// src/data/projectsData.js

import IBCover from '../assets/projects/iambusayo/iambusayoCover.svg'
import IBCoverMobile from '../assets/projects/iambusayo/iambusayoCoverMobile.svg'
import IBSketch from '../assets/projects/iambusayo/sketch.jpg'
import IBMockupLarge from '../assets/projects/iambusayo/mockupLarge.webp'
import IBMockupMobile from '../assets/projects/iambusayo/mockupMobile.webp'
import IBWireframeLarge from '../assets/projects/iambusayo/wireframeLarge.svg'
import IBWireframeMobile from '../assets/projects/iambusayo/wireframeMobile.svg'
import IBFont from '../assets/projects/iambusayo/font1.png'
import IBColor from '../assets/projects/iambusayo/color1.png'



import KuzaCover from '../assets/projects/kuza/kuzaCoverLarge.webp'
import KuzaCoverMobile from '../assets/projects/kuza/kuzaCoverMobile.webp'
import KuzaSketch from '../assets/projects/kuza/sketch.webp'
import KuzaWireLarge from '../assets/projects/kuza/wireLarge.svg'
import KuzaWireMobile from '../assets/projects/kuza/wireMobile.svg'
import KuzaMockupLarge from '../assets/projects/kuza/mockupLarge.webp'
import KuzaMockupMobile from '../assets/projects/kuza/mockupMobile.webp'
import KuzaFont from '../assets/projects/kuza/font.jpg'
import KuzaColor from '../assets/projects/kuza/color.jpg'


import circlepotCover from '../assets/projects/circlepot/circlepot.webp'
import circlepotCoverMobile from '../assets/projects/circlepot/circle-pot-mobile.webp'
import circleWireLarge from '../assets/projects/circlepot/wireLarge.webp'
import circleWireMobile from '../assets/projects/circlepot/wireMobile.webp'
import circleSketch from '../assets/projects/circlepot/sketch.webp'
import circleMockLarge from '../assets/projects/circlepot/mockupLarge.webp'
import circleMockMobile from '../assets/projects/circlepot/mockupMobile.webp'
import circleFont from '../assets/projects/circlepot/font.jpg'
import circleColor from '../assets/projects/circlepot/color.webp'

//import project3 from '../../../assets/projects/circlepot.svg'
import project4 from '../assets/projects/project4.png'
import project5 from '../assets/projects/project5.png'
import project6 from '../assets/projects/project6.png'

const IamBusayoLink = 'https://www.iambusayosalako.com/'

const projectsData = [
        {
          name: 'IAMBUSAYO BRAND WEBSITE',
          coverImage: IBCover,
          coverImageMobile: IBCoverMobile,
          sketch: IBSketch,
          mockupLarge: IBMockupLarge,
          mockupMobile: IBMockupMobile,
          wireframeLarge: IBWireframeLarge,
          wireframeMobile: IBWireframeMobile,
          iframeVideo1: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/A95Zq_kvNl0?autoplay=1&mute=1&loop=1&playlist=A95Zq_kvNl0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>,
          font: IBFont,
          color: IBColor,
          liveUrl: IamBusayoLink,
          demoType: 'Website',
          paragraph: 'A Sleek, personal brand website for Busayo Salako that feels both elegant and approachable.',
          theIdea: 'At the heart of this project was the client’s vision: a brand website that embodies elegance while remaining approachable and relatable. Busayo wanted a digital home that reflected not only her refined taste but also her friendly, down-to-earth personality...',
          theApproach: 'The project began with discovery sessions to understand the client’s tone, preferences, and goals. We started with quick sketches and wireframes before evolving into high-fidelity designs and polished front-end implementation.',
          theBuild: 'This project was designed and built from the ground up using React. Subtle animations, image collages, and mobile-first design choices make it responsive, fast, and full of personality.',
          projectSummary: 'From discovery to development, this was a complete design and build project for Busayo Salako’s brand website. I worked closely with the client to ensure the end product was polished, performant, and truly representative of her identity.',
          
        },
        {
          name: 'SHOPKUZA FASHION WEBSITE',
          coverImage: KuzaCover,
          coverImageMobile: KuzaCoverMobile,
          sketch: KuzaSketch,
          mockupLarge: KuzaMockupLarge,
          mockupMobile: KuzaMockupMobile,
          wireframeLarge: KuzaWireLarge,
          wireframeMobile: KuzaWireMobile,
          iframeVideo1: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/MUKx3ihQjss?autoplay=1&loop=1&playlist=MUKx3ihQjss" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
          font: KuzaFont,
          color: KuzaColor,
        //   liveUrl: IamBusayoLink,
          demoType: 'Prototype',
          paragraph: 'Kuza blends exotic elegance and modern sass for bold, unforgettable fashion statements.',
          theIdea: 'Create a brand that fuses global exotic flair with confident, head-turning sophistication.',
          theApproach: 'Explored vibrant palettes, sleek layouts, and bold imagery to reflect Kuza’s striking personality.',
        //   theBuild: 'This project was designed and built from the ground up using React. Subtle animations, image collages, and mobile-first design choices make it responsive, fast, and full of personality.',
          projectSummary: 'Kuza is a distinctive fashion brand that celebrates individuality through designs that are exotic, refined, and unapologetically confident. Every collection is crafted to make wearers feel as bold and unforgettable as the pieces themselves.',
        },
        {
          name: 'CIRCLEPOT SAVINGS & INVESTMENT',
          coverImage: circlepotCover,
          coverImageMobile: circlepotCoverMobile,
          sketch: circleSketch,
          mockupLarge: circleMockLarge,
          mockupMobile: circleMockMobile,
          wireframeLarge: circleWireLarge,
          wireframeMobile: circleWireMobile,
          iframeVideo1: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/ch0vRhSYUcY?autoplay=1&loop=1&playlist=ch0vRhSYUcY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
          iframeVideo2: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/EZY3AoQOGt4?autoplay=1&loop=1&playlist=EZY3AoQOGt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
          font: circleFont,
          color: circleColor,
          //   liveUrl: IamBusayoLink,
          demoType: 'Prototype',
          paragraph: 'Circlepot lets people contribute, save, and manage shared goals together in trusted financial circles.',
          theIdea: 'What if saving wasn’t solo? Circlepot empowers groups to contribute toward shared financial goals.',
          theApproach: 'Sketched early ideas to visualize how groups can save together, simply and intuitively.',
          //   theBuild: 'This project was designed and built from the ground up using React. Subtle animations, image collages, and mobile-first design choices make it responsive, fast, and full of personality.',
          projectSummary: 'Circlepot is a collaborative savings app where groups contribute, track, and grow shared funds with ease.',
        },
        {
          name: 'LIVE MUSIC CONCERT',
          coverImage: project4,
        },
        {
          name: 'ZENDEE DATING APP',
          coverImage: project5,
        },
        {
          name: 'CHURCH POCKET APP',
          coverImage: project6,
        },
      ];



export default projectsData;
