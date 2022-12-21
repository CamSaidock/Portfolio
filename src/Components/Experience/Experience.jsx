import {React, useEffect, useState, useRef} from 'react'
import Aos from 'aos'
import './Experience.css'
import "aos/dist/aos.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Link } from "react-router-dom"

gsap.registerPlugin(ScrollTrigger);

function Experience() {
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
            x: -40,
        },
        {
            x: 0,
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
    <div id='ScrollHere' className='Experience-Container' ref={sectionRef}>
        <div className='Experience-Cards' ref={headlineRef}>
            <div className='Card-Container'>
                <Link className='Card' id='TroyLabs' to="/TroyLabs">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>TroyLabs</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='Makers' to="/Makers">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>Makers</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='AIM' to="/AIM">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>AIM</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='RHA' to="/RHA">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>RHA</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='Columbia' to="/Columbia">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>Columbia</h3>
            </div>
        </div>
    </div>
  )
}

export default Experience