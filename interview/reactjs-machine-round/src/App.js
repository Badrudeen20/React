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
import FileManager from "./pages/fileManager/Manager";
import InputForm from "./pages/debouning/InputForm";
import Theme from "./pages/ThemeContext/Theme";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<StopWatch />} />   
         {/*  <Route path="/clock" element={<Clock />} />   
          <Route path="/file-manager" element={<FileManager />} />   
          <Route path="/debounc" element={<InputForm />} />   */} 
          <Route path="/theme" element={<Theme />} />   
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
