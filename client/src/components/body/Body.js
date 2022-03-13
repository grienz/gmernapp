/*import React from 'react'
//"Switch" "component" changed => "Routes" "<Route path="/" element={<Home />} />element" 

import {Routes, Route} from 'react-router-dom'
import Login from './auth/Login'

function Body() {
  return (

    
      <section>
        <Routes>
           <Route path="/login" element={<Login />} /> 
        </Routes>
      </section>
    
    
  )
}

export default Body*/

import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ActivationEmail from "./auth/ActivationEmail";
import NotFound from "../utils/NotFound/NotFound";

import ForgotPass from "../body/auth/ForgotPassword";
import ResetPass from "../body/auth/ResetPassword";

import Profile from "../body/profile/Profile";
import EditUser from "../body/profile/EditUser";

import Home from "../body/home/Home";

import { useSelector } from "react-redux";

function Body() {
  const auth = useSelector((state) => state.auth);
  const { isLogged, isAdmin } = auth;
  return (
    <Routes>
      <Route path="/" element={<Home />} exact />

      <Route
        path="/login"
        element={isLogged ? <NotFound /> : <Login />}
        exact
      />
      <Route
        path="/register"
        element={isLogged ? <NotFound /> : <Register />}
        exact
      />

      <Route
        path="/forgot_password"
        element={isLogged ? <NotFound /> : <ForgotPass />}
        exact
      />
      <Route
        path="/user/reset/:token"
        element={isLogged ? <NotFound /> : <ResetPass />}
        exact
      />

      <Route
        path="/user/activate/:activation_token"
        element={<ActivationEmail />}
        exact
      />

      <Route
        path="/profile"
        element={isLogged ? <Profile /> : <NotFound />}
        exact
      />
      <Route
        path="/edit_user/:id"
        element={isAdmin ? <EditUser /> : <NotFound />}
        exact
      />
    </Routes>
  );
}

export default Body;
