import React from 'react'
import "../CSS/MainSiteStyle.css"

import Navbar from './Navbar'
import Footer from './Footer'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'
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

            <Firstpage/>
            <Secondpage/>
            <Thirdpage/>
            <Portfolio/>
            <Contact/>
          
      </div>
    </div>
    <Footer></Footer>
    
    
      

    
      
    
    </>
  )
}
