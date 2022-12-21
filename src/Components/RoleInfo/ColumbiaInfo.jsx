import React, {useRef, useEffect} from 'react'
import { Link } from "react-router-dom"
import './RoleInfo.css'
import Aos from 'aos'
import "aos/dist/aos.css"

function ColumbiaInfo() {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

  return (
    <div className='Role-Container'>
        <div className='Role-Overview' id='MakersOverview'>
            <div id='ColumbiaLogo' className='Role-Image' data-aos="fade-right" />
            <div className='Role-Resume' data-aos="fade-left" >
                <div className='Role-Grid'>
                    <div className='Role-Title'>
                        <div id='RHATitle' className='Title-H1'>
                            <h1>Columbia University Teachers College</h1>
                            <Link className='Return-Button' to="/"/>
                        </div>
                        <h4>Data Analyst</h4>
                        <h4>Jun 2019 - Jul 2019</h4>
                    </div>
                    <div className='Role-Description'>
                        <div className='Role-Subimages'  data-aos="zoom-in">
                            <h3>Columbia</h3>
                        </div>
                        <div className='Role-Bulletpoints'>
                            <ul>
                                <li>Designed and implemented a Python-based software tool utilizing Boto3 library to perform analysis and categorization of college's online Amazon servers according to security protocols</li>
                                <li>Leveraged the tool to optimize server utilization, resulting in a monthly cost reduction of approximately $1000</li>
                                <li>Enhanced security measures by automating server shutdown when not in use and identifying and classifying previously unknown servers</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ColumbiaInfo