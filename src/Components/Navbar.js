import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return(
    <div classname="nav">
      <nav>
        <ul>
          <li>Cocktail Database</li>
          <li><Link to='/drinks'>Cocktails & Mixed Drinks</Link></li>
          <li><Link to='/search'>Search</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
