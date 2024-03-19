import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
const Navbar = lazy(()=>import('./components/Navbar'))
/* import Navbar from './components/Navbar';
import AboutPage from './pages/About';
import HomePage from './pages/Home'; */
const HomePage = lazy(()=>import('./pages/Home'))
// const ContentPage = lazy(()=>import('./pages/query/Content'))
const AboutPage = lazy(()=>import('./pages/About').then(module=>{
  return {default:module.About}
}))


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navbar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="about">
                <Route index element={<AboutPage />} />
                <Route path=":number" element={<AboutPage />} />
            </Route>
           {/*  <Route path="/content" element={<ContentPage />} /> */}
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
