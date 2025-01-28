import { useState } from 'react'
import './component-css/navbar.css';

import E_logo from '../e-logo.png'

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active className
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active className
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div id ="outer-navbar-div">
        <div id ="nav-header">
        <nav className ={`${ 'navbar'}`}>
            <a href='#home' className ={`${ 'class-logo'}`}><img src={E_logo} alt="Logo" /></a>
            <ul className ={`${ 'navMenu'} ${isActive ? 'active' : ''}`}>
              <li onClick={removeActive}>
                <a href='#asdf' className ={`${ 'navLink'}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='#hdf' className ={`${ 'navLink'}`}>About Me</a>
              </li>
              <li onClick={removeActive}>
                <a href='#adsb' className ={`${ 'navLink'}`}>Work Experience</a>
              </li>
              <li onClick={removeActive}>
                <a href='#cc' className ={`${ 'navLink'}`}>Contact Me</a>
              </li>
            </ul>
            <div className ={`${ 'hamburger'} ${isActive ?  'active' : ''}`}  onClick={toggleActiveClass}>
              <span className ={`${ 'bar'}`}></span>
              <span className ={`${ 'bar'}`}></span>
              <span className ={`${ 'bar'}`}></span>
            </div>
          </nav>
        </div>
      </div>
    );
  }
  export default Navbar;