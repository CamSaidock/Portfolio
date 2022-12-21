import React, {useRef, useEffect} from 'react'
import { Link } from "react-router-dom"
import './RoleInfo.css'
import Aos from 'aos'
import "aos/dist/aos.css"

function TroylabsInfo() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className='Role-Container'>
        <div className='Role-Overview' >
            <div className='Role-Image' id='TroyLabsLogo' data-aos="fade-right"/>
            <div className='Role-Resume' data-aos="fade-left">
                <div className='Role-Grid'>
                    <div className='Role-Title'>
                        <div className='Title-H1'>
                            <h1>TroyLabs</h1>
                            <Link className='Return-Button' to="/"/>
                        </div>
                        <h4>Engineer and Strategy Consultant</h4>
                        <h4>Sep 2022 - Present</h4>
                    </div>
                    <div className='Role-Description'>
                        <div className='Role-Subimages' data-aos="zoom-in">
                            <h3>TroyLabs</h3>
                        </div>
                        <div className='Role-Bulletpoints'>
                            <ul>
                                <li>Implement & improve various technology requirements for TroyLabs’ initiatives including an internal database, admin platform, and website development.</li>
                                <li>Design and create an internship platform using Figma, ReactJS, MongoDB, NodeJS, and Express to aid startups in finding diverse talent and help students find meaningful experiences.</li>
                                <li>Consult start-up founders on technology and marketing as apart of TroyLabs’ BUILD initiative, aiding in venture growth development.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TroylabsInfo