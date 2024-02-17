import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
      <nav className="navbar  bg-light">
      <ul className="nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">
           About
          </Link>
        </li>
      </ul>
    </nav>
    </>
  )
}
