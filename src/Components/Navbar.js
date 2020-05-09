import React from 'react';
import { Link } from 'react-router-dom';
import Search from './Search';

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("mobileNav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  return(
    <div className="nav">
    <h1>Cocktail Database</h1>
      <nav>
        <ul>
          <li><Link to='/drinks'>Cocktails & Mixed Drinks</Link></li>
          <li><Link to='/beer'>Beer Cocktails</Link></li>
        </ul>
      </nav>
      <p><Search/></p>
      <div className="mobileNav">
        <ul>
          <li><Link to='/drinks'>Cocktails & Mixed Drinks</Link></li>
          <li><Link to='/beer'>Beer Cocktails</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
