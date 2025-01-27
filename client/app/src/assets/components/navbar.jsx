import { useState } from 'react'
import './component-css/navbar.css';

import E_logo from '../e-logo.png'

function Navbar() {
    // adding the states 
    const [isActive, setIsActive] = useState(false);
    //add the active class
    const toggleActiveClass = () => {
      setIsActive(!isActive);
    };
    //clean up function to remove the active class
    const removeActive = () => {
      setIsActive(false)
    }
    return (
      <div class ="outer-navbar-div">
        <div class ="nav-header">
        <nav class ={`${ 'navbar'}`}>
            <a href='#home' class ={`${ 'class-logo'}`}><img src={E_logo} alt="Logo" /></a>
            <ul class ={`${ 'navMenu'} ${isActive ? 'active' : ''}`}>
              <li onClick={removeActive}>
                <a href='#asdf' class ={`${ 'navLink'}`}>Home</a>
              </li>
              <li onClick={removeActive}>
                <a href='#hdf' class ={`${ 'navLink'}`}>Catalog</a>
              </li>
              <li onClick={removeActive}>
                <a href='#adsb' class ={`${ 'navLink'}`}>All products</a>
              </li>
              <li onClick={removeActive}>
                <a href='#cc' class ={`${ 'navLink'}`}>Contact</a>
              </li>
            </ul>
            <div class ={`${ 'hamburger'} ${isActive ?  'active' : ''}`}  onClick={toggleActiveClass}>
              <span class ={`${ 'bar'}`}></span>
              <span class ={`${ 'bar'}`}></span>
              <span class ={`${ 'bar'}`}></span>
            </div>
          </nav>
        </div>
      </div>
    );
  }
  export default Navbar;