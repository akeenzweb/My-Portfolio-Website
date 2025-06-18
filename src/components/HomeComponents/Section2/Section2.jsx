import React, { useEffect, useRef } from "react";

//import Img from '../../assets/images/thum4.png'

import style from './Section2.module.css'

export default function Home() {

    const rippleRef = useRef();
    
      useEffect(() => {
        const rippleEl = rippleRef.current;
    
        if (rippleEl && window.$) {
          try {
            window.$(rippleEl).ripples({
              resolution: 512,
              dropRadius: 20,
              perturbance: 0.04,
              interactive: true,
            });
          } catch (e) {
            console.error("Ripples failed to load:", e);
          }
        }
    
        return () => {
          if (rippleEl && window.$) {
            try {
              window.$(rippleEl).ripples("destroy");
            } catch (e) {
              console.warn("Failed to destroy ripples:", e);
            }
          }
        };
      }, []);


  return (
    <div className="relative z-20 mt-[100vh]">
        <div className={style.section}>
            <div className={style.rippleBackground} ref={rippleRef}>
                <h1 className="text-3xl font-bold text-blue-600">Tailwind is Working 🎉</h1>
                <p className="text-sm text-gray-600">If you can see this styled text, it’s all good.</p>

            </div>
        </div>
        
    </div>
  )
}
