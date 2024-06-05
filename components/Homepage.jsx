import React from 'react'
import "../CSS/Homepage.css"
import me from "../pictures/omakuva.png"
import resume from "../pictures/resumeTopi.pdf"

export default function Homepage() {
  return (
    <section className="homePage" id='home'>
          
          <section className="halfpage namepage">

            <header className='nameheader'>
              <section className="nameone">
                  <section className="namonesec1">

                  </section>
                  <section className="nameonesec2">
                    <h1>Topi Järvinen</h1>
                  </section>
                
              </section>
              <section className="nametwo">
                <section className="nametwosec1">
                  <h2>Junior Frontend Developer</h2>
                </section>
                <section className="nametwosec2"></section>
              </section>
              
            </header>

            <article className="welcomeartic">
              <h1>Hello there and welcome.</h1>
              
              <h1>Here you can get to know me.</h1>

              <h1>You can also take a look at my projects.</h1>

              <h1><a className='pdfD' href="../pictures/resumeTopi.pdf" download={resume}>Download my Resume as PDF</a></h1>
            </article>
            
          </section>
          <section className="halfpage mepage">
            <img src={me} className='mephoto' />
          </section>
          
        </section>
  )
}
