import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Project from './Components/Project'
import Skill from './Components/Skill'
import Contact from './Components/Contact'
import  Aos from 'aos'
import 'aos/dist/aos.css'
import './App.css'


const App = () => {
  useEffect(() => {
    Aos.init();

  },[])




  return (
    <div>
      <Navbar/>
      <div>
      <Home/>
      <Skill/>
      <Project/>
      <Contact/>
      </div>
      
    </div>
  )
}

export default App