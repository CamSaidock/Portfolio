import React, {useRef} from 'react'
import AboutDesc from '../About-Desc/AboutDesc'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Experience from '../Experience/Experience'
import Projects from '../Projects/Projects'

import './MainContent.css'

function MainContent() {
  return (
    <div className='MainContent'>
        <About/>
        <AboutDesc/>
        <Experience/>
        <Projects/>
    </div>
  )
}

export default MainContent