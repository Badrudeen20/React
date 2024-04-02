import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {useState,useLayoutEffect} from "react"
import Home from './pages/Home';
import  SidebarMenu  from './components/SiderBar';

function App() {
  const [size, setSize] = useState([0, 0]);
  const [toggle,setToggle] = useState(false)  
  let flexFirst = 45
  let flexSecond = 55
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  const sidebar = {
    width:"280px",
  }
  if(size[0] < 540 && toggle==false){
    sidebar.position = 'absolute';
    sidebar.left = "-280px";
    flexFirst = 0
    flexSecond = 100
  }

  return (
    <>
      <div className='flex'>
        <div className={`flex-none w-${flexFirst}`}>
           <SidebarMenu sidebar={sidebar} />
        </div>
        <div className={`flex-auto w-${flexSecond}`}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home handleSidebar={setToggle} />} />
            </Routes>
          </BrowserRouter>
        </div>
        
      </div>
      
    </>
  );
}

export default App;
