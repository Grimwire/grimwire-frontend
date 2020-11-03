import React from 'react'
import {NavLink} from 'react-router-dom'

const displayLink = (item) => {
    if (item.link) { return item.link }
    else if (item.linkTo) {
        switch (item.linkTo) {
            case 'user_profile':
                const user = localStorage.user ? JSON.parse(localStorage.user) : null
                return `/users/${user.user_id}`
        }
    } 
}

const MenuLink = (props) => {
    const item = props.item
    if(item.remoteLink) {
        return <a className="hmenu-item" href={item.remoteLink}> 
    
        <span>{item.name}</span> <span className={`fas fa-${item.symbol}`}></span>
        
        </a>

    } else {
    return <NavLink className="hmenu-item" to={displayLink(item)}> 

    <span>{item.name}</span> <span className={`fas fa-${item.symbol}`}></span>
    
    </NavLink>
    }
}

export default MenuLink