import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import  SidebarMenu  from './components/SiderBar';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SidebarMenu />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
