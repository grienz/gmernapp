import React from 'react'
//"Switch" "component" changed => "Routes" "<Route path="/" element={<Home />} />element" 
import {Routes, Route, Link} from 'react-router-dom'
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

export default Body