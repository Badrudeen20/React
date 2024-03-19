import "./App.css"
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Team from "./pages/Team";
import Reducer from "./pages/hooks/Reducer";
function App() {
 
  return (
    <BrowserRouter>
      {/* Window Size: {windowSize.width} x {windowSize.height} */}
     
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />   
          <Route path="/team" element={<Team />} />   
          <Route path="/project" element={<Project />} />    
          <Route path="hooks">
                <Route path=":hook" element={<Reducer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
