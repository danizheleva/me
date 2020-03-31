import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home.js';
import Baking from './pages/Baking.js';
import Cooking from './pages/Cooking.js';
import Traveling from './pages/Traveling.js';

class App extends Component {
  
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/baking' component={Baking} />
        <Route exact path='/cooking' component={Cooking} />
        <Route exact path='/traveling' component={Traveling} />
      </div>
    );
  }
}

export default App;
