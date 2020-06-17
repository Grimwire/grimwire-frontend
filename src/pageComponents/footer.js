import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Footer() {
    return <div className="footer">
      
        <h1>
          GRIMWIRE  
        </h1>

        <div>
        <NavLink to="/">Home</NavLink> 
        <NavLink to="/pages/shop">Shop</NavLink> 
        <NavLink to="/feedback/provide">Contact Us</NavLink> 
        </div><br />
        
        <NavLink to="/pages/privacy-policy">Our Privacy Policy</NavLink><br /><br />
        <a href="https://www.google.com/policies/privacy/partners/">How Google Analytics uses data when you use our app</a><br />
      
        

    </div>
}

export default Footer;
