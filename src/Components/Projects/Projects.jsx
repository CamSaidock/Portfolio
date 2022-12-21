import {React, useEffect, useRef} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import './Projects.css'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useEffect(() => {
    Aos.init({duration: 2000});
}, []);

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

//data-aos='zoom-in'
  return (
    <div className='Projects-Container' ref={sectionRef}>
        <div className='Project-Overview' ref={headlineRef}>
            <div className='Projects-Title'>
              <h4>Projects (Updates in progress!)</h4>
            </div>
            <div className='Project' id="Project-One">

            </div>
            <div className='Project' id="Project-Two">
                
            </div>
            <div className='Project' id="Project-Three">
                
            </div>
            <div className='Project' id="Project-Four">
                
            </div>
            <div className='Project' id="Project-Five">
                
            </div>
        </div>
    </div>
  )
}

export default Projects