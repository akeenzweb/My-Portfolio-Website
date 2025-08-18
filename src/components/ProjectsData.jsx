// src/data/projectsData.js

import IBCover from '../assets/projects/iambusayo/iambusayoCover.webp'
import IBCoverMobile from '../assets/projects/iambusayo/iambusayoCoverMobile.webp'
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


import mrlCoverLarge from '../assets/projects/mrl/mrlCoverLarge.webp'
import mrlCoverMobile from '../assets/projects/mrl/mrlCoverMobile.webp'
import mrlSketch from '../assets/projects/mrl/sketch.webp'
import mrlWireLarge from '../assets/projects/mrl/wireLarge.webp'
import mrlWireMobile from '../assets/projects/mrl/wireMobile.webp'
import mrlMockupLarge from '../assets/projects/mrl/mockupLarge.webp'
import mrlMockupMobile from '../assets/projects/mrl/mockupMobile.webp'
import mrlFont from '../assets/projects/mrl/font.webp'
import mrlColor from '../assets/projects/mrl/color.svg'


import lcaCoverLarge from '../assets/projects/lca/lcaCoverLarge.webp'
import lcaCoverMobile from '../assets/projects/lca/lcaCoverMobile.webp'
import lcaWireLarge from '../assets/projects/lca/wireLarge.svg'
import lcaMockupLarge from '../assets/projects/lca/mockupLarge.webp'
import lcaSketch from '../assets/projects/lca/sketch.webp'
import lcaFont from '../assets/projects/lca/font.jpg'
import lcaColor from '../assets/projects/lca/color.jpg'
//import project6 from '../assets/projects/project6.png'

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
          name: 'MR. LOGISTIC DELIVERIES',
          coverImage: mrlCoverLarge,
          coverImageMobile: mrlCoverMobile,
          sketch: mrlSketch,
          mockupLarge: mrlMockupLarge,
          mockupMobile: mrlMockupMobile,
          wireframeLarge: mrlWireLarge,
          wireframeMobile: mrlWireMobile,
          iframeVideo1: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/ip_aG1A5RBI?si=nkg6lj_oAfjuKcTO&autoplay=1&loop=1&playlist=ip_aG1A5RBI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
          //iframeVideo2: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/EZY3AoQOGt4?autoplay=1&loop=1&playlist=EZY3AoQOGt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
          font: mrlFont,
          color: mrlColor,
          //   liveUrl: IamBusayoLink,
          demoType: 'Prototype',
          paragraph: 'Mr. Logistics helps businesses move cargo seamlessly with smart transport options and transparent pricing.',
          theIdea: 'Mr. Logistics was built to simplify how businesses—whether SMEs or large enterprises—move their goods. Instead of dealing with fragmented systems, companies can log in, request transfers, and instantly access multiple transport options tailored to cargo type, size, and destination.',
          theApproach: 'We designed a platform that streamlines logistics decisions: from choosing between trucks, ships, or trains, to comparing dynamic pricing options. The interface reduces complexity, giving businesses clarity and control while ensuring their cargo gets where it needs to go, efficiently.',
          //   theBuild: 'This project was designed and built from the ground up using React. Subtle animations, image collages, and mobile-first design choices make it responsive, fast, and full of personality.',
          projectSummary: 'Mr. Logistics is an end-to-end transport management solution for modern businesses. Clients can request deliveries, explore transport modes suited to their cargo, and compare prices instantly. By unifying logistics into one platform, it helps companies save time, cut costs, and scale their operations with confidence.',
        },
        {
          name: 'CHURCH POCKET APP',
          coverImage: lcaCoverLarge,
          coverImageMobile: lcaCoverMobile,
          sketch: lcaSketch,
          mockupLarge: lcaMockupLarge,
          mockupMobile: lcaMockupLarge,
          wireframeLarge: lcaWireLarge,
          wireframeMobile: lcaWireLarge,
          iframeVideo1: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/cNmU-509qrA?autoplay=1&loop=1&playlist=cNmU-509qrA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
          iframeVideo2: <iframe className="w-full aspect-video pointer-events-auto" src="https://www.youtube.com/embed/499q61APee0?autoplay=1&loop=1&playlist=499q61APee0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
          font: lcaFont,
          color: lcaColor,
          //   liveUrl: IamBusayoLink,
          demoType: 'Prototype',
          paragraph: 'A vibrant church app where members connect, share, and grow together in faith.',
          theIdea: 'To create a digital space where church members can stay connected, share inspiration, and build relationships beyond Sunday services, making faith and fellowship part of daily life.',
          theApproach: 'Designed an intuitive platform with message streaming, group chats, community feeds, and event updates—bringing the warmth of church fellowship into a modern, interactive space.',
          //   theBuild: 'This project was designed and built from the ground up using React. Subtle animations, image collages, and mobile-first design choices make it responsive, fast, and full of personality.',
          projectSummary: 'This church community app is a hub for connection, learning, and encouragement. Members can watch sermons, engage in group or community chats, view admin posts, and socialize in a safe and uplifting environment, strengthening both faith and friendships..',
        },
      ];



export default projectsData;
