import React from 'react'
import  "./Header.css"
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div >
    <nav className="navbar">
        <h4 className="logo">
        <span>Disney</span>
        </h4>
        <div>
        <ul className="navbar-btn">
      <Link to='/'>
                <li>Home</li>
            </Link>

            <Link to='/favorite'>
                <li> Favorites</li>
            </Link>
        </ul>
        </div>
    </nav>
    </div>
  )
}
