import React, {useState, useEffect} from 'react'
import "../CSS/Navbar.css"
import logo from "../pictures/logo.png"
import logo2 from "../pictures/logo2.png"

import open from "../icons/open.png"
import x from "../icons/X.png"




const Navbar = () => {

        const [show ,setShow] = useState(true)
        const [color, setColor] = useState(false)

        function handleClick() {
            setShow(!show)
        }

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
    <>
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
                    <li><a href='#contact'>Contact</a></li>
                </ul>
            </section>
        </section>
    </nav>

    <nav className="mobile">
        <section className="mobilesec">
            <a href="#home" className='mobilehome'>
                <img src={logo2} className='mobilelogo'/> 
            </a>
            <img src={open} className='open' onClick={() => handleClick()}/>
                
        </section>
           
    </nav>

    {!show ?
    <div className="mobilemenu">
        <section className="menuup">
            <img src={x} className='close' onClick={() => handleClick()}/>
        </section>
        <section className="menucont">
                <ul className='mobilelist'>
                    <li><a href='#about' className='mobilelink'>About me</a></li>
                    <li><a href='#resume' className='mobilelink'>Resume</a></li>
                    <li><a href='#portfolio' className='mobilelink'>Portfolio</a></li>
                    <li><a href='#contact' className='mobilelink'>Contact</a></li>
                </ul>
        </section>
    </div> :null}

    </>
  )
}

export default Navbar
