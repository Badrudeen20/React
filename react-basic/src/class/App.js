import React, { Component } from 'react';
/* import TodoList from './components/TodoList';
import CommentList from './components/CommentList'; */
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import {LazyLoader} from './components/LazyLoader';
const Home = LazyLoader(()=>import('./pages/Home'))
const About = LazyLoader(()=>import('./pages/About'))
const Cycle = LazyLoader(()=>import('./pages/LifeCycle'))
const Contact = LazyLoader(()=>import('./pages/Contact'))
/* import Home from "./pages/Home";
import About from "./pages/About"; */


class AppClass extends Component {
 
  // Lifecycle method: componentDidUpdate
 /*  componentDidUpdate(prevProps, prevState) {} */

  render() {
    return (
      <>
       <Router>
          <div className="App">
              <Header />
              <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/content" element={<Contact />} />
                  <Route path="/cycle" element={<Cycle />} />
              </Routes>
          </div>
      </Router>
        
      </>
    );
  }
}

export default AppClass;
