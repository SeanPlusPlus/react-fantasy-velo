import React from 'react';

function Nav() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Draft <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/stages">Stages</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
