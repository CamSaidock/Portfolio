import {React, useEffect, useRef} from 'react'
import './Projects.css'

  function Projects() {

  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='Projects-Container'>
        <div className='Project-Overview'>
            <div className='Projects-Title'>
              <h4>Projects (Updates in progress!)</h4>
            </div>
            <div className='Project' id="Project-One">
              <h1 onClick={() => openInNewTab('https://open-ai-note-parser-s1h9.vercel.app/')}>AI Note Parser</h1>
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