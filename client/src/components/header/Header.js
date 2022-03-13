import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

function Header() {
  const auth = useSelector((state) => state.auth);

  const { user, isLogged } = auth;

  const handleLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.removeItem("firstLogin");
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  };

  const userLink = () => {
    return (
      <li className="drop-nav">
        <Link to="#" className="avatar">
          <img src={user.avatar} alt="" /> {user.name}{" "}
          <i className="fas fa-angle-down"></i>
        </Link>
        <ul className="dropdown">
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/" onClick={handleLogout}>
              Logout
            </Link>
          </li>
        </ul>
      </li>
    );
  };

  const transForm = {
    transform: isLogged ? "translateY(-5px)" : 0,
  };

  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">
            <i className="fa-solid fa-user-astronaut"></i> Grienz{" "}
          </Link>
        </h1>
      </div>

      <ul style={transForm}>
        <li>
          <a href="https://github.com/grienz">
            <i className="fa-brands fa-github"></i> GitHub{" "}
          </a>
        </li>
        {isLogged ? (
          userLink()
        ) : (
          <li>
            <Link to="/login">
              <i className="fas fa-user"></i> Sign in
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;

/*
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

*/
