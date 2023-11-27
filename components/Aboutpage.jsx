import React from 'react'
import "../CSS/Aboutpage.css"

import me from "../pictures/omakuva2.jpg"
import me2 from "../pictures/omakuva3.png"

export default function Aboutpage() {
  return (
    <section className='aboutpage' id='about'>
        <div className='secondcontainer'>
            <header className="secondpageheader">
                <h1>About me</h1>
            </header>
            <span className="secondpagespan">
              <section className="aboutsection">
                <img src={me2} className='pic' />
              </section>
              <section className="aboutsection">
                <p>25-years old, Bachelor of Business Administration, Information Technologies. Fresh graduate from Vaasa University of Applied Sciences.</p>
                
                
              </section>
            </span>
        </div>
    </section>
  )
}
