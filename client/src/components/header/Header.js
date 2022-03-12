import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (

    <header>

        <div cloud_name="logo">
            <h1><Link to="/"><i className="fa-solid fa-user-astronaut"></i> Grienz </Link></h1>
        </div>

        <ul>
            <li><Link to="/login"><i className="fas fa-solid fa-user"></i> Login </Link></li>    
            <li><Link to="/register"><i className="fa-solid fa-right-to-bracket"></i> Sign In </Link></li>
        </ul>

    </header>
    
  )
}

export default Header