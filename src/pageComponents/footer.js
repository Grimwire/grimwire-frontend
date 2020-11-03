import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Footer() {
    return <div className="footer">
      
        <h3>
          GrimWire's
          Online Grimoire  
        </h3>

        <NavLink to="/">Home</NavLink><br />
        <a href="#">Contact Us</a><br />
        <a href="#">GrimWire HQ</a><br />
        <NavLink to="/users/login">Admin Login</NavLink> 
        
        <br />
        
        <NavLink to="/pages/privacy-policy">Our Privacy Policy</NavLink><br />
        <a href="https://www.google.com/policies/privacy/partners/">How Google Analytics uses data when you use our app</a><br />
      
        

    </div>
}

export default Footer;
