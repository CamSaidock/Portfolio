import React from 'react'
import './Experience.css'

function Experience() {
  return (
    <div className='Experience-Container'>
        <div className='Experience-Cards'>
            <div className='Card' id='TroyLabs'>
                <div className='Card-Top'/>
                <div className='Card-Center'/>
                <div className='Card-Bottom'/>
                <div className='Card-Category'>
                    <h4>Entrepreneurship</h4>
                </div>
            </div>
            <div className='Card' id='Makers'>
                <div className='Card-Top'/>
                <div className='Card-Center'/>
                <div className='Card-Bottom'/>
                <div className='Card-Category'>
                    <h4>Engineering</h4>
                </div>
            </div>
            <div className='Card' id='AIM'>
                <div className='Card-Top'/>
                <div className='Card-Center'/>
                <div className='Card-Bottom'/>
                <div className='Card-Category'>
                    <h4>Consulting</h4>
                </div>
            </div>
            <div className='Card-Back'>
                <div className='Card-Back-Top'>
                    <h2>Makers</h2>
                    <h4>• Associate Director of Technical Resources</h4>
                    <h4>• Software Engineer</h4>
                </div>
                <div className='Card-Back-Description'>
                    <p></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Experience