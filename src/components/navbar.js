import React from 'react';
import logo from "../img/dp-logo-transparent-black.jpg";

function Navbar({ homeRef, scrollToSection, refs }) {
  const handleClick = (section) => {
    scrollToSection(refs[section]);
  };

  return (
    <nav className="navbar">
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        onClick={() => scrollToSection("homeRef")}
      />      
      <ul>
        <li>
          <button onClick={() => handleClick('homeRef')}>Home</button>
        </li>
        <li>
          <button onClick={() => handleClick('aboutRef')}>About</button>
        </li>
        <li>
          <button onClick={() => handleClick('experienceRef')}>Work</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
