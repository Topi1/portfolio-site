import React from 'react'
import "../CSS/Contact.css"

import linkedin from "../icons/linkedin.png"
import email from "../icons/email.png"

export default function Contact() {
  return (
    <section className="contactmain" id="contact">
        <header className="contactheader">
            <h1>Contact me</h1>
        </header>
        <span className="contactspan">
            
                <a className='contactlink' href="https://www.linkedin.com/in/topi-j%C3%A4rvinen-854b7126b/"><img src={linkedin} className='lilogo'/><p>My LinkedIn profile</p> </a>
                
                <section className='email'>
                  <img src={email} className='lilogo'/>
                  <p>Email: topi.jarvinen1@gmail.com</p>
                </section>
                
            
        </span>

    </section>
  )
}
