import React from 'react'
import {NavLink, Link} from 'react-router-dom'

function Footer() {
    return <div className="footer">
      
        <h1>
          GRIMWIRE  
        </h1>

        <div>
        <NavLink to="/">Home</NavLink><br />
        <NavLink to="/pages/shop">Shop</NavLink> <br />
        <NavLink to="/feedback/provide">Contact/Report</NavLink> <br />
        </div>
        
        <NavLink to="/pages/privacy-policy">Our Privacy Policy</NavLink><br />
        <a href="https://www.google.com/policies/privacy/partners/">How Google Analytics uses data when you use our app</a><br />
      
        

    </div>
}

export default Footer;
