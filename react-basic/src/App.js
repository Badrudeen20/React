import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import React from 'react';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about">
                <Route index element={<AboutPage />} />
                <Route path=":number" element={<AboutPage />} />
            </Route>
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
