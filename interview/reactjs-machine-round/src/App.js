import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import StopWatch from "./pages/timer/StopWatch";
/* import Progress from "./pages/progress/Progress"; */
import Clock from "./pages/clock/Clock";
import Selectbox from "./pages/multiselect/Selectbox";

function App() {
 
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<StopWatch />} />   
          <Route path="/clock" element={<Clock />} />   
          <Route path="/multi-select" element={<Selectbox />} />   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
