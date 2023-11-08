import React, {useState, useEffect} from 'react'
import "../CSS/Navbar.css"
import logo from "../pictures/logo.png"



const Navbar = () => {

    
        const [color, setColor] = useState(false)

        const changeColor = () => {
            console.log(window.scrollY)
            if (window.scrollY >= 150) {
                setColor(true)
                console.log("WORKS")
            } else {
                setColor(false)
                console.log("AGAIN")
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
                <img src={logo} className='logo' />
            </section>
            <section className="navHalf2">
                <ul>
                    <li>About me</li>
                    <li>Resume</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </section>
        </section>
    </nav>
  )
}

export default Navbar
