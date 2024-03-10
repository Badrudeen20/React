import React, { Suspense, useContext }from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeProvider'
export default function Navbar() {
  const {toggle} = useContext(ThemeContext)

  // bg-body-tertiary
  return (
    <>
     <nav class={`navbar navbar-expand-lg ${toggle ? 'bg-secondary' : 'bg-body-tertiary'}`}>
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link"  to="/">Home</Link>
            </li>
           {/*  <li class="nav-item">
              <Link class="nav-link "  to="/progress">Progress</Link>
            </li> */}
            {/* <li class="nav-item">
              <Link class="nav-link "  to="/clock">Clock</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link "  to="/file-manager">File Manager</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link "  to="/debounc">Debounce</Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link "  to="/theme">Theme</Link>
            </li>
           
          </ul>
      
        </div>
      </div>
    </nav>
    
      <Suspense fallback={<>...</>}>
        <Outlet />
      </Suspense>
    </>
  )
}
