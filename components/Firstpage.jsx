import React from 'react'
import "../CSS/Firstpage.css"
import me from "../pictures/omakuva.png"

export default function Firstpage() {
  return (
    <section className="firstPage" id='home'>
          
          <section className="halfpage">

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
              <h1>This is my personal site.</h1>
              <h1>Here you can get to know me.</h1>
            </article>
            
          </section>
          <section className="halfpage">
            <img src={me} className='mephoto' />
          </section>
          
        </section>
  )
}
