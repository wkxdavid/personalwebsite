import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  if (location.pathname === '/') {
    return null;
  }

  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/experience'>Work</Link>
        </li>
        {/* <li>
          <Link to='/resume'>Resume</Link>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;
