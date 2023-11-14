import React from 'react'
import "../CSS/MainSiteStyle.css"
import Snowfall from 'react-snowfall'
import Navbar from './Navbar'
import Footer from './Footer'
import Firstpage from './Firstpage'
import Secondpage from './Secondpage'
import Thirdpage from './Thirdpage'
import Portfolio from './Portfolio'
import me from "../pictures/omakuva.png"


export default function MainSite() {
  return (
    <>
    <Navbar></Navbar>
    <div className="main">
      <div className="container">
        <Firstpage></Firstpage>
        <Secondpage></Secondpage>
        <Thirdpage></Thirdpage>
        <Portfolio></Portfolio>
      </div>
    </div>
    <Footer></Footer>
    
      
      

    
      
    
    </>
  )
}
