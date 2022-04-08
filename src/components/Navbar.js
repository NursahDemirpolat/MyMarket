import React from 'react'
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <div>
     <Link to="/">Welcome</Link>
     <Link to="home">Home</Link>   
     <Link to="register">Register</Link>
     <Link to="Login">Login</Link>
    </div>
  )
}

export default Navbar