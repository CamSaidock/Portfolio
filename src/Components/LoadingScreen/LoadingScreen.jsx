import React from 'react'
import './LoadingScreen.css'
import PuffLoader from "react-spinners/PuffLoader";


function LoadingScreen() {
  return (
    <div className='LoadingScreen'>
        <div className='Rose'/>
        <PuffLoader color="#852630" size="20vw"/>
    </div>
  )
}

export default LoadingScreen