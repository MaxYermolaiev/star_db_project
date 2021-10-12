import React from 'react';

import './header.css';
import {Link, Route} from 'react-router-dom'
import {PeoplePage} from "../Pages";
const Header = ({onEngineChange}) => {
  return (
    <div className="header d-flex">
      <h3>
          <Link to="/">Star DB</Link>
      </h3>
      <ul className="d-flex">
        <li>
          <Link to="/People">People</Link>
        </li>

        <li>
          <Link to="/Planet">Planet</Link>
        </li>
          <li>
              <Link to="/Login">Login</Link>
          </li>
          <li>
              <Link to="/SecretPage">SecretPage</Link>
          </li>
      </ul>
        <button className="btn btn-primary btn-sm"
        onClick={onEngineChange}>change server</button>
    </div>
  );
};

export default Header;