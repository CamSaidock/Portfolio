import React, {useRef, useEffect} from 'react'
import { Link } from "react-router-dom"
import './RoleInfo.css'
import Aos from 'aos'
import "aos/dist/aos.css"

//data-aos="fade-left" 
//data-aos="zoom-in-right" 

function MakersInfo() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className='Role-Container'>
        <div className='Role-Overview' id='MakersOverview'>
            <div id='MakersLogo' className='Role-Image' data-aos="fade-right" />
            <div className='Role-Resume' data-aos="fade-left" >
                <div className='Role-Grid'>
                    <div className='Role-Title'>
                        <div className='Title-H1'>
                            <h1>Makers</h1>
                            <Link className='Return-Button' to="/"/>
                        </div>
                        <h4>Associate Director of Technical Resources</h4>
                        <h4>Jul 2022 - Present</h4>
                    </div>
                    <div className='Role-Description'>
                        <div className='Role-Subimages'  data-aos="zoom-in">
                            <h3>Starry Starry Bot</h3>
                        </div>
                        <div className='Role-Bulletpoints'>
                            <ul>
                                <li>Design software for an astronomical device used to direct lasers to point out constellations and stars relative to user.</li>
                                <li>Build a front-end GUI using React.js which controls all operations of device and saves a list of known constellations and stars based on current location.</li>
                                <li>Calculate location of stars and constellations relative to location of device using data from SIMBAD astronomical database and Python’s Astropy package.</li>
                            </ul>
                        </div>
                        <div className='Role-Subimages'  data-aos="zoom-in">
                            <h3>SafeBoard</h3>
                        </div>
                        <div className='Role-Bulletpoints'>
                            <ul>
                                <li>Collaborated with project’s electrical team to create software for an attachable safety device on skateboards, providing headlights and blind spot detection using an Arduino.</li>
                                <li>Applied in-depth understanding of C++ to calculate distance between objects and the skateboard to best determine when to turn on blind spot detection.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MakersInfo