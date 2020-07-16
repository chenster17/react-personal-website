import React from 'react';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import Home from './components/home.components';
import About from './components/about.components';
import Portfolio from "./components/portfolio.components";
import Contact from "./components/contact.components";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/Contact' component={Contact}/>
        </Switch>
      </Router>
  );
}

export default App;
