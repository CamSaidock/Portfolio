import React, {useRef, useEffect} from 'react'
import { Link } from "react-router-dom"
import './RoleInfo.css'
import Aos from 'aos'
import "aos/dist/aos.css"

function AIMInfo() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className='Role-Container'>
        <div className='Role-Overview'>
            <div id='AIMLogo' className='Role-Image' data-aos="fade-right"/>
            <div className='Role-Resume' data-aos="fade-left">
                <div className='Role-Grid'>
                    <div className='Role-Title' id='AIMTitle'>
                        <div className='Title-H1'>
                            <h1>Assoc. of Innovative Marketing</h1>
                            <Link className='Return-Button' to="/"/>
                        </div>
                        <h4>Business Marketing Consultant</h4>
                        <h4>Feb 2022 - Present</h4>
                    </div>
                    <div className='Role-Description' id='AIMDescription'>
                        <div className='Role-Subimages'  data-aos="zoom-in">
                            <h3>Doordash</h3>
                        </div>
                        <div className='Role-Bulletpoints'>
                            <ul>
                                <li>Developed go-to-market strategies focused on optimization of social channels, brand identity, and influencer partnerships for client, Doordash.</li>
                                <li>Conducted primary market research and competitor analysis to sculpt Doordash’s social media personality for Generation-Z, improving engagement and perception.</li>
                            </ul>
                        </div>
                        <div className='Role-Subimages'  data-aos="zoom-in">
                            <h3>Octi / Ultraviolet</h3>
                        </div>
                        <div className='Role-Bulletpoints'>
                            <ul>
                                <li>Aided development of student ambassador program for client, focusing on reward and responsibility systems, contributing to platform growth.</li>
                                <li>Audited user experience through client’s app interface and currency model to increase user retention rate and improve app functionality.</li>
                                <li>Conducted primary and secondary market research surrounding competitive landscape of student ambassador programs between different competitors</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AIMInfo