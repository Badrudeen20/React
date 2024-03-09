
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutPage from './pages/About';
import React from 'react';
import Navbar from './components/Navbar';
import SelectForm from './pages/multiselect/SelectForm';
import StepForm from './pages/multistep/StepForm';


const App:React.FC = ()=> {
  return (
    <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<SelectForm />} />
                <Route path="/multi-step" element={<StepForm />} />
               
                <Route path="about">
                    <Route index element={<AboutPage />} />
                    <Route path=":number" element={<AboutPage />} />
                </Route>
               
            </Routes>
        </BrowserRouter>
  );
}

export default App;
