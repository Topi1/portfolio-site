import React from 'react'
import "../CSS/MainSiteStyle.css"
import Snowfall from 'react-snowfall'
import Navbar from './Navbar'
import Footer from './Footer'
import me from "../pictures/omakuva.png"

export default function MainSite() {
  return (
    <>
    <Navbar></Navbar>
    <div className="main">
      <div className="container">
        
        <section className="secondPage">
          
          <section className="halfpage">

          </section>
          <section className="halfpage">
          <img src={me} className='mephoto' />
          </section>
          
        </section>
        <section className="secondPage"></section>
        <section className="secondPage"></section>
        <section className="secondPage"></section>
        <section className="secondPage"></section>
        <section className="secondPage"></section>
      </div>
    </div>
    <Footer></Footer>
    
      
      

    
      
    
    </>
  )
}
