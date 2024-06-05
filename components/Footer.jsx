import React from 'react'
import "../CSS/Footer.css"
import logo2 from "../pictures/logo2.png"
import github from "../icons/github.png"

export default function Footer() {
  return (
    <footer className="footerMain">
      <div className="footercontent">
        <section className='footsec1'>
          <h1>Thank you for visiting my site!</h1>
          <h2>-Topi</h2>
        </section>

        <section className='footsec2'>
          <img src={logo2}  className='footlogo'/>
          <a className='footlink' href="https://github.com/Topi1">Topi1@GitHub <img src={github} className='giticon'/></a>
        </section>
      </div>
    </footer>
  )
}
