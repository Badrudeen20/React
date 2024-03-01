import React, { Component } from 'react'
import {
      Link,
    } from "react-router-dom";
export default class Header extends Component {
  render() {
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
                  <li className="nav-item">
                        <Link className="nav-link" to="/content">
                          Content
                        </Link>
                  </li>
                  <li className="nav-item">
                        <Link className="nav-link" to="/cycle">
                          Life Cycle
                        </Link>
                  </li>
            </ul>
       </nav>
      </>
    )
  }
}
