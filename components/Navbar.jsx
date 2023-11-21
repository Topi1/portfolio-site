import React, {useState, useEffect} from 'react'
import "../CSS/Navbar.css"
import logo from "../pictures/logo.png"
import logo2 from "../pictures/logo2.png"
import { HashLink } from 'react-router-hash-link'



const Navbar = () => {

    
        const [color, setColor] = useState(false)

        const changeColor = () => {
            
            if (window.scrollY >= 100) {
                setColor(true)
                
            } else {
                setColor(false)
                
            }
        }
    
        useEffect(() => {
            changeColor()
            window.addEventListener("scroll", changeColor, true)

            return() => {
                window.removeEventListener("scroll", changeColor)
            }
        }, [])
        
        
        
    


  return (
    <nav className={color ? "navMain bg" : "navMain"}>
        <section className="navSection">
            <section className="navHalf">
                <a href="#home">
                    <img src={logo2} className='logo' />
                </a>
                <div className="line"></div>
                {/*<hr width="60%" color="#292929" className='line'/>*/}
            </section>
            <section className="navHalf2">
                <ul className='links'>
                    
                    <li><a href='#about'>About me</a></li>
                    <li><a href='#resume'>Resume</a></li>
                    <li><a href='#portfolio'>Portfolio</a></li>
                    <li><a href='"#contact'>Contact</a></li>
                </ul>
            </section>
        </section>
    </nav>
  )
}

export default Navbar
