import React from 'react'
import "../CSS/Aboutpage.css"

export default function Aboutpage() {
  return (
    <section className='aboutpage' id='about'>
        <div className='secondcontainer'>
            <header className="secondpageheader">
                <h1>About me</h1>
            </header>
            <span className="secondpagespan">
              <section className="aboutsection"></section>
              <section className="aboutsection">
                <p>25-years old, Bachelor of Business Administration, Information Technologies. Fresh graduate from Vaasa University of Applied Sciences.</p>
                <p>Looking for entry level job as Frontend developer.</p>
                <p>I like stylish design.</p>
              </section>
            </span>
        </div>
    </section>
  )
}
