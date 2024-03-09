import React from "react";
import { Link } from "react-router-dom";

const Navbar:React.FC = ()=> {
  return (
    <nav className="navbar  bg-light">
      <ul className="nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Multi Select
          </Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/multi-step">
            Multi Step
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar
