import {React, useLayoutEffect, useState, useRef} from 'react'
import './About.css'

function About() {

  return (
    <div className='About-Holder'>
      <div className='About-Center-Holder'>
        <div className='About-Text'>
          <h4>Entrepreneur • Software Engineer • Consultant</h4>
        </div>
        <div className='About-Image'/>
      </div>
      <div className='About-Side-Text'>
        <h1 className='About-Title'>Cameron <br/> Saidock</h1>
        <p className='About-Subtitle'>University of Southern California</p>
        <div className='Buttons'>
          <div className='GitHub'>GitHub</div>
          <div className='LinkedIn'>LinkedIn</div>
          <div className='Resume'>Resume</div>
        </div>
      </div>
    </div>
  )
}

export default About