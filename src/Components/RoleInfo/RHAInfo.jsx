import React, {useRef, useEffect} from 'react'
import { Link } from "react-router-dom"
import './RoleInfo.css'
import Aos from 'aos'
import "aos/dist/aos.css"

function RHAInfo() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className='Role-Container'>
        <div className='Role-Overview'>
            <div id='RHALogo' className='Role-Image' data-aos="fade-right" />
            <div className='Role-Resume' data-aos="fade-left" >
                <div className='Role-Grid'>
                    <div className='Role-Title'>
                        <div id='RHATitle' className='Title-H1'>
                            <h1>USC Residential Housing Association</h1>
                            <Link className='Return-Button' to="/"/>
                        </div>
                        <h4>Vice President of Operations and Development</h4>
                        <h4>Aug 2022 - Present</h4>
                    </div>
                    <div className='Role-Description'>
                        <div className='Role-Subimages'  data-aos="zoom-in">
                            <h3>RHA</h3>
                        </div>
                        <div className='Role-Bulletpoints'>
                            <ul>
                                <li>Manage $150,000 annual budget, handle distribution and tracking expenses for Association.</li>
                                <li>Promote community involvement within residential community through educational initiatives and involvement opportunities for over 5000 students living within USC’s Residential Housing System.</li>
                                <li>Lead professional development initiatives for Association throughout year across 14 USC-owned dormitories and apartment complexes.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RHAInfo