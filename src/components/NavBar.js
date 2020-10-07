import React from 'react';
import './NavBar.scss';
import { NavLink } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <nav className="nav-bar-container">
        <div className="nav container">
          <div className="logo">
            <h1>Beans Love Beers</h1>
          </div>
          <ul>
            <li><NavLink to="/demo-project">Home</NavLink></li>
            <li><NavLink to="/demo-project/favourites">Favourites</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default NavBar;