import './NavBar.css'

import React from 'react'

const NavBar = () => {
    return (
        <div className='navbar_container'>
            <div className="navbar_items_container">
            <ul>
                <li className='navbar_item'><a href="#">Home</a></li>
                <li className='navbar_item'><a href="#">Features</a></li>
                <li className='navbar_item'><a href="#">Download</a></li>
                <li className='navbar_item'><a href="#">Career</a></li>
                <li className='navbar_item'><a href="#">Pricing</a></li>

            </ul>
            </div>
            
            
        </div>
    )
}

export default NavBar
