import React from 'react'
import "../CSS/Portfolio.css"
import logo from "../pictures/logo.png"
import moon from "../pictures/moon.png"
import etch from "../pictures/sketch.png"
import scroller from "../pictures/scroller.png"
import fang from "../pictures/FangText.png"
import tmh from "../pictures/TitlePng.png"
import wolf from "../pictures/wolf.png"
import donahan from "../pictures/donahan.png"
import donahansheet from "../pictures/donahan-sheet.png"

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

            <Carousel autoPlay interval={4000} infiniteLoop showStatus={false} showIndicators={false} className="carouselmain">
            <div>
              
              <img src={tmh} alt="Moonfang Game Guides" className='portImg'/>
              
            
            <div className="textCont">
              <h2 className="legend2">Take My Hand ? - Horror Game</h2>
                <ul className="infoList">
                  <li>Live: <a href="https://topi1.github.io/mystery-game/">https://topi1.github.io/mystery-game/</a></li>
                  <li>Repository: <a href="https://github.com/Topi1/mystery-game">https://github.com/Topi1/mystery-game</a></li>
                  <li>Oldschool Point & Click adventure/horror game.</li>
                  <li>Code: HTML, CSS, JavaScript, Phaser, Webpack</li>
                  <li>Visuals: Aseprite, GIMP, OpenShot Video Editor</li>
                  <li>Everything but environment tilesets done by me.</li>
                  <li>Work in progress!</li>
                </ul>
              
              
            </div>
          </div>

            <div>
              
                <img src={fang} alt="Moonfang Game Guides" className='portImg'/>
              
              <div className="textCont">
                <h2 className="legend2">Moonfang Game Guides</h2>
                <ul className="infoList">
                  <li>Live: <a href="https://topi1.github.io/moonfang/">https://topi1.github.io/moonfang/</a></li>
                  <li>Repository: <a href="https://github.com/Topi1/moonfang">https://github.com/Topi1/moonfang</a></li>
                  <li>Stylish and responsive website about video games.</li>
                  <li>Code: HTML, CSS, JSX</li>
                  <li>Visuals: I made the logos and icons in Canva.</li>
                  <li>All the images are usable since they are from press kits.</li>
                  <li>This was my <a href="https://www.theseus.fi/handle/10024/807539">thesis project.</a></li>
                </ul>
                
              </div>
            </div>

            <div>
              
                <img src={scroller} alt="Media Scroller" className='portImg'/>
              
              <div className="textCont">
                <h2 className="legend2">Media Scroller</h2>
                <ul className="infoList">
                  <li>Live: <a href="https://topi1.github.io/media-scroller/">https://topi1.github.io/media-scroller/</a></li>
                  <li>Repository: <a href="https://github.com/Topi1/media-scroller">https://github.com/Topi1/media-scroller</a></li>
                  <li>Simple media scroller without carousel plugin.</li>
                  <li>Code: HTML, CSS, JavaScript</li>
                  
                </ul>
              </div>
            </div>

            <div>
              
                <img src={etch} alt="Etch-a-Sketch" className='portImg'/>
              
              <div className="textCont">
                <h2 className="legend2">Etch-a-Sketch</h2>
                <ul className="infoList">
                  <li>Live: <a href="https://topi1.github.io/etch-a-sketch/">https://topi1.github.io/etch-a-sketch/</a></li>
                  <li>Repository: <a href="https://github.com/Topi1/etch-a-sketch">https://github.com/Topi1/etch-a-sketch</a></li>
                  <li>Sketching canvas with different sizes and color picker.</li>
                  <li>Code: HTML, CSS, JavaScript</li>
  
                </ul>
              </div>
            </div>

            <div>
              <img src={donahansheet} alt="Donahan" className='portImg art'/>
              <div className="textCont">
                <h2 className="legend2">Pixel Art</h2>
                  <ul className="infoList">
                    <li>Drawn in Aseprite</li>
                    <li>More at: <a href="https://github.com/Topi1/pixel-art">https://github.com/Topi1/pixel-art</a></li>
                  </ul>
              </div>
                
            </div>
          </Carousel>


                
            </span>
        </div>
    </section>
  )
}
