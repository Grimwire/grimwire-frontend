import React from 'react'
import {NavLink} from 'react-router-dom'

function Footer() {
    return <div className="footer">
      
        <h1>
          GRIMWIRE  
        </h1>

        <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/pages/questions">FAQ</NavLink> 
        <NavLink to="/pages/magick-statement">Rules & Guidelines</NavLink>
        <NavLink to="/pages/shop">Shop</NavLink> 
        <NavLink to="/feedback/provide">Contact/Report</NavLink> 
        </div>
        
        <NavLink to="/pages/privacy-policy">Our Privacy Policy</NavLink><br />
        <a href="https://www.google.com/policies/privacy/partners/">How Google Analytics uses data when you use our app</a><br />
      
        

    </div>
}

export default Footer;
