import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <div  id="contact"className='container contact' >
      <h1>CONTACT ME</h1>
      <div className='contact_items' >
        <a  href="https://www.linkedin.com/in/anjali-maurya3011/" target="_blank"className='items'><FaLinkedin  className='icons'/> </a>
        <a  href="https://github.com/AnjaliMaurya3011" target="_blank" className='items'><FaGithub className='icons'/></a>
        <a  href="mailto:anjalimaurya1130@gmail.com" target="_blank" className='items'><SiGmail  className='icons' /></a>


      </div>
    </div>
  )
}

export default Contact