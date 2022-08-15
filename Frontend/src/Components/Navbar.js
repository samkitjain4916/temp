import React from 'react';
import {NavLink} from "react-router-dom";
import Apply from "./Apply";

const Navbar = () => {
  return (
    <>
         <nav class="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
    {/* <a class="navbar-brand" href="#">Home</a> */}
    {/* <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb"
      aria-expanded="true">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div id="navb" class="navbar-collapse collapse hide">
      <ul class="navbar-nav">
      <li class="nav-item">
      <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/udid">UDID Card</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/eligibility">Check eligibility</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/about">About Us</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link" aria-current="page" to="/contact">Contact</NavLink>
        </li>
      </ul>

      <ul class="nav navbar-nav ml-auto">
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/signup"><span class="fas fa-user"></span>Sign up</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/login"><span class="fas fa-sign-in-alt"></span>Login</NavLink> 
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/govtlogin"><span class="fas fa-sign-in-alt"></span>Admin</NavLink>
        </li>
        <li class="nav-item">
        <NavLink className="nav-link active" aria-current="page" to="/agencylogin"><span class="fas fa-sign-in-alt"></span>Agency</NavLink>
        </li>
      </ul>
    </div>
  </nav>
    </>
  )
}

export default Navbar