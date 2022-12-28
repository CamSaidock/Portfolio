import {React, useEffect, useState, useRef} from 'react'
import './Experience.css'
import { Link } from "react-router-dom"

function Experience() {


  return (
    <div id='ScrollHere' className='Experience-Container'>
        <div className='Experience-Cards'>
            <div className='Card-Container'>
                <Link className='Card' id='TroyLabs' to="/TroyLabs">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>TroyLabs</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='Makers' to="/Makers">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>Makers</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='AIM' to="/AIM">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>AIM</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='RHA' to="/RHA">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>RHA</h3>
            </div>
            <div className='Card-Container'>
                <Link className='Card' id='Columbia' to="/Columbia">
                    <div className='Card-Top'/>
                    <div className='Card-Center'/>
                    <div className='Card-Bottom'/>
                </Link>
                <h3>Columbia</h3>
            </div>
        </div>
    </div>
  )
}

export default Experience