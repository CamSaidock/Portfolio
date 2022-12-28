import React, {useEffect, useRef, useState} from 'react'
import './AboutDesc.css'

function AboutDesc() {

  return (
    <div className='AboutDesc-Container'>
        <div className='AboutDesc-Holder'>
            <div className='Image-Border'>
                <div className='AboutDesc-Image'/>
            </div>
            <p className='AboutDesc-Text'>As a driven and ambitious computer science and business administration student at the University of Southern California, Cameron has a strong background in software engineering and has developed expertise in technologies such as React, Node.js, Python, and C++. In addition to his technical skills, he has gained experience in marketing, strategy consulting, and business development through his involvement with various student organizations and projects. <br/><br/> As the Vice President of Operations & Development for the Residential Housing Association, Cameron demonstrates strong leadership skills and manages a $150,000 annual budget, overseeing professional development initiatives across 14 dormitories and apartment complexes. He is also actively involved in innovative projects, including the development of an attachable safety device for skateboards and an astronomical laser device that can point out constellations from anywhere in the world. <br/><br/> With a passion for entrepreneurship and a desire to make a positive impact on society, Cameron is motivated to use his skills as a software engineer and consultant to create high-functioning startups that will revolutionize the way people view entrepreneurship as a means for implementing change. </p>
        </div>
    </div>
  )
}

export default AboutDesc