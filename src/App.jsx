import React from 'react';
import { useState,useEffect } from 'react';
import Home from './Components/Home';
import logo from './assets/logo.png';
import {Routes,Route,Link} from 'react-router-dom';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import './App.css'

const App=()=> {

  // scroll animation
  const [navbarscroll, setNavbarScroll] = useState(false);

  useEffect(()=>{

    const handleScroll=()=>{
      if (scrollY>50){
        setNavbarScroll(true)
      }else{
        setNavbarScroll(false)
      }
    }
    window.addEventListener("scroll",handleScroll)

  },[])
  
  return (
    <>
    {/* navbar */}
    
      <nav className={`navbar navbar-expand-lg bg-body-tertiary   fixed-top scroll-navbar ${navbarscroll ? "navbar-colored":"custom-navbar-transparent"}`}>
  <div className="container-fluid ">
    {/* navbar left side image */}
     <a className="navbar-brand ms-5" href="#">
      <img src={logo} alt="Logo" style={{ width: '169px', height: '150px', objectFit: 'contain' }} className="d-inline-block align-text-top"/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    {/* navbar right side menu list */}
    <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link navbar-font pe-5" aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-font pe-5" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-font pe-5" to="/Service">Service</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link navbar-font pe-5" to="/contact" >Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>


{/* routing navbr by router dom  */}
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/Home" element={<Home/>} />
  <Route path="/About" element={<About/>} />
  <Route path="/Service" element={<Service/>} />
  <Route path="/Contact" element={<Contact/>} />
  
  
</Routes>

    </>
  )
}

export default App
