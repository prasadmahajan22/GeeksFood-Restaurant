import { useState } from 'react';
import './navbar.css'
import { FaAlignJustify } from "react-icons/fa";
let Navbar = () => {
    const [hamburger , setHamnburger] = useState(false)
    
    let change = () => {
        setHamnburger(!hamburger)
    }

    let submenu = {
        display : (hamburger) ? "flex" : "none"
    }


    return (
        <div className="navbar">
            <div className="logo-name">
                <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
                <h1>GeekFoods</h1>
            </div>

            <div className="links">
                <a href="#" className='home'>Home</a>
                <a href="#">Quote</a>
                <a href="#">Restaurants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
            </div>

            <div className="button">
                <button>Get Started</button>
            </div>

            <div className="icon-submenu">
                <div className="icon" onClick={change}><FaAlignJustify /></div>
                <div className="submenu" style={submenu}>
                <a href="#" className='home'>Home</a>
                <a href="#">Quote</a>
                <a href="#">Restaurants</a>
                <a href="#">Foods</a>
                <a href="#">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;