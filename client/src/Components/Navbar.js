import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  console.log(props);

  return (
    <nav>
      <div className="nav-wrapper" style={{ background: '#6200ee' }}>
        <Link to="/" className="brand-logo">
          WishList
        </Link>
        <ul id="nav-mobile" className="right ">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
