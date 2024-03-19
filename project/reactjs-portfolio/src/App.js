/* import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import StickyNavbar from './components/Navbar'; */
import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar  from './components/Navbar'
import Footer from './components/Footer';
import { LoginForm } from './pages/Login';
function App() {
  return (
    <>
 

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />} >
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
