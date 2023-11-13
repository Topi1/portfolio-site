import React, {useState, useEffect} from 'react'
import "../CSS/Navbar.css"
import logo from "../pictures/logo.png"
import logo2 from "../pictures/logo2.png"



const Navbar = () => {

    
        const [color, setColor] = useState(false)

        const changeColor = () => {
            console.log(window.scrollY)
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
                <img src={logo2} className='logo' />
            </section>
            <section className="navHalf2">
                <ul className='links'>
                    
                    <li><a>About me</a></li>
                    <li><a>Resume</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </section>
        </section>
    </nav>
  )
}

export default Navbar
