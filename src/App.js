import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import Aboutus from './Components/AboutUs/AboutUs';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Router>
          <Route path="/" exact component={Home} />
          <Route path="/aboutus" exact component={Aboutus} />
        </Router>
      </div>
    );

  }
}

export default App;
