import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showLinks ,setShowLinks] =useState(false);
  const closeMenu = () => setShowLinks(false);
  

  return (
    <>
   <nav class="navbar">
        <ul className="navbar-list-left">
            <li><a href="#home" className='heading'><i> <span style={{fontWeight:"bolder", fontSize:"30px",color:"yellow" ,webkitTextStroke: "2px red" }}>A</span></i>njali <nbsp></nbsp>
            <i> <span style={{fontWeight:"bolder", fontSize:"30px" ,color:"yellow", webkitTextStroke: "2px red" }}>M</span></i>aurya
             </a></li>
        </ul>
        <ul className={showLinks ? "navbar-list-right mobile-list": "navbar-list-right"}>
            <li><a href="#home" onClick={closeMenu} > Home</a></li>
            <li><a href="#skills" onClick={closeMenu} >Skills</a></li>
            <li><a href="#project" onClick={closeMenu} >Projects</a></li>
            <li><a href="#contact" onClick={closeMenu} >Contact</a></li>
        </ul>
        <div className='hamburger-menu'>
          <p onClick={()=> setShowLinks(!showLinks)}><GiHamburgerMenu /></p>
        </div>
    </nav>
</>
  )
}

export default Navbar


