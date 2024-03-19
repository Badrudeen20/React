
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import HomePage from './pages/Home';
import React from 'react';
import Navbar from './components/Navbar';
import StorePage from './pages/Store';


const App:React.FC = ()=> {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
                <Route path="/store" element={<StorePage />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
