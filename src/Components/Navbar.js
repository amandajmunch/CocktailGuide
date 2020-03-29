import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  return(
    <div className="nav">
      <nav>
        <ul>
          <li>Cocktail Database</li>
          <li><Link to='/drinks'>Cocktails & Mixed Drinks</Link></li>
          <li><Link to='/beer'>Beer</Link></li>
          <li><Search/></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
