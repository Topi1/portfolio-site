import React from 'react'
import "../CSS/Portfolio.css"
import logo from "../pictures/logo.png"
import moon from "../pictures/moon.png"
import etch from "../pictures/etch.png"
import scroller from "../pictures/scroller.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Portfolio() {
  return (
    <section className='portfolio' id="portfolio">
        <div className='portfoliocontainer'>
            <header className="portfolioheader">
                <h1>Portfolio</h1>
            </header>
            <span className="portfoliospan">
                <Carousel className="carouselmain" autoPlay interval="4000" infiniteLoop  >
                  <div className='carouseldiv'>
                    
                    <img className='cimg' src={moon} />
                  </div>

                  <div className='carouseldiv'>
                    <img src={scroller} className='cimg'/>
                    
                  </div>

                  <div className='carouseldiv'>
                    <img src={etch} className='cimg'/>
                    
                  </div>
                </Carousel>
            </span>
        </div>
    </section>
  )
}
