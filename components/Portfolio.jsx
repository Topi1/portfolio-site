import React from 'react'
import "../CSS/Portfolio.css"
import logo from "../pictures/logo.png"
import moon from "../pictures/moon.png"
import etch from "../pictures/sketch.png"
import scroller from "../pictures/scroller.png"
import fang from "../pictures/FangText.png"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

export default function Portfolio() {
  return (
    <section className='portfolio' id="portfolio">
        <div className='portfoliocontainer'>
            <header className="portfolioheader">
                <h1>Projects</h1>
            </header>
            <span className="portfoliospan">

              <section className="projectsection">
                  <div className="halfsec">
                    <a href="https://topi1.github.io/moonfang/" className='piclink'>
                      <img src={fang} className='cimg' />
                    </a>
                  </div>
                  <div className="halfsec">
                    <a href="https://topi1.github.io/moonfang/">
                      <h2>Moonfang Game Guides</h2>
                    </a>
                    
                  </div>
              </section>
              <section className="projectsection">
                  <div className="halfsec">
                    <a href="https://topi1.github.io/media-scroller/">
                      <h2>Media Scroller</h2>
                    </a>
                  </div>
                  <div className="halfsec">
                    <a href="https://topi1.github.io/media-scroller/" className='piclink'>
                      <img src={scroller} className='cimg' />
                    </a>
                  </div>
              </section>
              <section className="projectsection">
                  <div className="halfsec">
                    <a href="https://topi1.github.io/etch-a-sketch/" className='piclink'>
                      <img src={etch} className='cimg' />
                    </a>
                  </div>
                  <div className="halfsec">
                    <a href="https://topi1.github.io/etch-a-sketch/">
                      <h2>Etch-a-Sketch</h2>
                    </a>
                  </div>
              </section>


                {/*<Carousel className="carouselmain" autoPlay interval="4000" infiniteLoop  >
                  <div className='carouseldiv'>
                    
                    <img className='cimg' src={moon} />

                    
                  </div>

                  <div className='carouseldiv'>
                    <img src={scroller} className='cimg'/>
                    
                  </div>

                  <div className='carouseldiv'>
                    <img src={etch} className='cimg'/>
                    
                  </div>
                </Carousel>*/}
            </span>
        </div>
    </section>
  )
}
