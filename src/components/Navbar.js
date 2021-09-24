import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return(
        <h1> 
          <NavLink style={{textDecoration: 'none', color: 'navy'}} exact to='/'>
             <span> Home </span>
          </NavLink>
        </h1>
    )
}

export default Navbar;