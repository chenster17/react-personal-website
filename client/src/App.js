import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';


import Home from './components/home.components';
import About from "./components/about.components";

function App() {
  return (
      <Router>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
      </Router>
  );
}

export default App;
