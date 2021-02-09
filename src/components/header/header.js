import React from 'react';

import './header.css';

const Header = ({onEngineChange}) => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="www.google.com">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="www.google.com">People</a>
        </li>
        <li>
          <a href="www.google.com">Planets</a>
        </li>
        <li>
          <a href="www.google.com">Starships</a>
        </li>
      </ul>
        <button className="btn btn-primary btn-sm"
        onClick={onEngineChange}>change server</button>
    </div>
  );
};

export default Header;