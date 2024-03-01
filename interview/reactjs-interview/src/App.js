import { useEffect, useState } from "react";
import useThrottle from "./hooks/Throttle";
import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Team from "./pages/Team";
function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const handleResize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  const throttledHandleResize = useThrottle(handleResize, 1000);
  
/*   useEffect(() => {
    console.log(throttledHandleResize)
    window.addEventListener("resize", throttledHandleResize);
    return () => {
      window.removeEventListener("resize", throttledHandleResize);
    };
  }, []); */

  
  

  return (
    <BrowserRouter>
      {/* Window Size: {windowSize.width} x {windowSize.height} */}
      <Routes>

        <Route path="/" element={<Navbar />}>
          <Route path="/team" element={<Team />} />   
          <Route path="/project" element={<Project />} />   
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
