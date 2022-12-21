import {React, useEffect, useState, useRef} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './About.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function About() {
  
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const headlineRef = useRef();
  const sectionRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);

  return (
    <div className='About-Container' ref={sectionRef}>
      <div className='About-Holder'>
        <div className='About-Center-Holder' data-aos="zoom-in-right">
          <div className='About-Text'>
            <h4>Entrepreneur • Software Engineer • Consultant</h4>
          </div>
          <div className='About-Image'/>
        </div>
        <div className='About-Side-Text' data-aos="fade-left">
          <h1 className='About-Title'>Cameron<br/>Saidock</h1>
          <p className='About-Subtitle'>Los Angeles, CA</p>
          <div className='Buttons'>
            <div className='GitHub' onClick={() => openInNewTab('https://github.com/CamSaidock')}></div>
            <div className='LinkedIn' onClick={() => openInNewTab('https://www.linkedin.com/in/cameronsaidock/')}></div>
            <div className='Resume' onClick={() => openInNewTab('https://drive.google.com/file/d/1I21rQdfk9lBiC8bwlRYddGd2OiDfYCKT/view')}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About