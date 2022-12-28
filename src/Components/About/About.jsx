import {React, useEffect, useState, useRef} from 'react'
import './About.css'

function About() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='About-Container'>
      <div className='About-Holder'>
        <div className='About-Center-Holder'>
          <div className='About-Text'>
            <h4>Entrepreneur • Software Engineer • Consultant</h4>
          </div>
          <div className='About-Image'/>
        </div>
        <div className='About-Side-Text'>
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