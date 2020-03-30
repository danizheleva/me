import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home.js'

const Baking = () => (
  <div>
    <p> Hello world</p>
  </div>
)

class App extends Component {
  
  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/baking' component={Baking} />
      </div>
    );
  }
}

export default App;
