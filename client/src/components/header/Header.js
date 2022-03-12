import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
  return (

    <header>
        <div cloud_name="logo">
            <h1><Link to="/">Grienz</Link></h1>
        </div>

        <ul>
            <li><Link to="/"><i class="fa-solid fa-user"></i>Cart</Link></li>
            

        </ul>

    </header>
    
  )
}

export default Header