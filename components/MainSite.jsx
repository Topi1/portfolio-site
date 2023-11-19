import React from 'react'
import "../CSS/MainSiteStyle.css"

import Navbar from './Navbar'
import Footer from './Footer'
import Homepage from './Homepage'
import Aboutpage from './Aboutpage'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'

import me from "../pictures/omakuva.png"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


export default function MainSite() {
  return (
    <>
    
    
    <div className="main">
      <div className="container" id="home">

        <Navbar/>

            <Homepage/>
            <Aboutpage/>
            <Resume/>
            <Portfolio/>
            <Contact/>
          
      </div>
    </div>
    <Footer></Footer>
    
    
      

    
      
    
    </>
  )
}
