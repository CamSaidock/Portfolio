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
            </div>
            <div className='Project' id="Project-One">
              <h1 onClick={() => openInNewTab('https://open-ai-note-parser-s1h9.vercel.app/')}>AI Note Parser</h1>
            </div>
            <div className='Project' id="Project-Two">
              <h1 onClick={() => openInNewTab('https://twitter-sentiment-analysis-three.vercel.app/')}>Twitter Analysis</h1>
            </div>
            <div className='Project' id="Project-Three">
              <h1 onClick={() => openInNewTab('https://github.com/CamSaidock/Schedule-Optimizer-and-Wordle-Solver')}>Wordle Solver</h1>
            </div>
            <div className='Project' id="Project-Four">
              <h1 onClick={() => openInNewTab('https://github.com/CamSaidock/BST-and-AVL-Implementation')}>BST & AVL</h1>
            </div>
            <div className='Project' id="Project-Five">
              <h1 onClick={() => openInNewTab('https://github.com/CamSaidock/Cpp-Amazon-Clone')}>Amazon Clone</h1>
            </div>
        </div>
    </div>
  )
}

export default Projects