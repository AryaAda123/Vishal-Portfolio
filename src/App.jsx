import React, { useEffect } from 'react'
import Navbar from './Components/Navbar'
import Experience from './Components/Experience'
import Home from './Components/Home'
import Education from './Components/Education'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Contact from './Components/Contact'
import Aos from "aos";
import "aos/dist/aos.css"

const App = () => {
  useEffect(()=>{
    Aos.init();
    
  },[])
  return (
    <>
    <div><Navbar /></div>
    <div className="container"> 
  <div id="home"><Home /></div>
  {/* <div id="education"><Education /></div> */}
  <div id="experience"><Experience /></div>
  <div id="skills"><Skills /></div>
  <div id="projects"><Projects /></div>
  <div id="contact"><Contact /></div>
</div>

    
    </>
  )
}

export default App