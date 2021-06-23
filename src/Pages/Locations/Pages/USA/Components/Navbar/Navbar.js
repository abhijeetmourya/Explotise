import React from 'react';
import './Navbar.css';

function Navbar() {


    return (
      <header>
      <section>
      <a href="#" id="logo" >USA</a>

      <label for="toggle-1" className="toggle-menu"><ul><li></li> <li></li> <li></li></ul></label>
      <input type="checkbox" id="toggle-1" />

      <nav>
      <ul>
      <li><a href="#"><i className="icon-home"></i>Home</a></li>
      <li><a href="#about"><i className="icon-user"></i>About</a></li>
      <li><a href="#places"><i className="icon-compass"></i>Places</a></li>
      </ul>
      </nav>
      </section>
      </header>
    )

}

export default Navbar;