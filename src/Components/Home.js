import React, { useEffect, useRef } from "react";
import pdf from "./pdf/Anjali Maurya CV.pdf" 
import hero from './data/hero.json'
import Typed from "typed.js";

const Home = () => {

  const typedRef =useRef(null)
  useEffect(()=>{
    const options ={
      strings: ["Welcome to my portfolio", "I'm Anjali Maurya", "I'm a Web Developer"],
      typeSpeed:40,
      backSpeed:40,
      loop:true
    }
    const typed =new Typed(typedRef.current ,options)
      
    return()=>{
      typed.destroy()
    }
  })
  
  return (
    <>
      <div className="container home" id="home">
        <div className="left"
        data-aos="fade-up-right" 
        data-aos-duration="900"
        >
          <h1 ref={typedRef}></h1>
          <a href={pdf} download="AnjaliResume.pdf" className="btn" >Download Resume</a>
        </div>
        <div className="right">
          <div className="img"
          data-aos="fade-up-left" data-aos-duration="900">
          <img src={`/assets/${hero.imgSrc}`} className="heroImg" alt="hero"/>
        </div>
        </div> 
      </div>
    </>
  );
}; 

export default Home;
   