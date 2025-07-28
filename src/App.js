// src/App.js
//import React, { useEffect, useRef } from "react";
import React, { useEffect } from "react";
import Lenis from '@studio-freight/lenis';


//import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import $ from "jquery";
import Home from "./pages/Home/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import "./App.css";


import Lines from '../src/assets/images/lines2.png'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // optional easing
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);


  
  
  // const rippleRef = useRef();

  // useEffect(() => {
  //   const rippleEl = rippleRef.current;

  //   if (rippleEl && window.$) {
  //     try {
  //       window.$(rippleEl).ripples({
  //         resolution: 512,
  //         dropRadius: 20,
  //         perturbance: 0.04,
  //         interactive: true,
  //       });
  //     } catch (e) {
  //       console.error("Ripples failed to load:", e);
  //     }
  //   }

  //   return () => {
  //     if (rippleEl && window.$) {
  //       try {
  //         window.$(rippleEl).ripples("destroy");
  //       } catch (e) {
  //         console.warn("Failed to destroy ripples:", e);
  //       }
  //     }
  //   };
  // }, []);

  return (
     <Router>
      <div className="App">
        {/* <div className="ripple-background" ref={rippleRef}> */}
        <div>
          <img src={Lines} alt="lines" className="fixed top-0 left-0 w-screen h-screen z-[9999] object-cover pointer-events-none" />
          
          
          {/* Navigation Links */}
          {/* <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav> */}

          {/* Render Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </div>
     </Router>
  );
}

export default App;
