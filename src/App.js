import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Home.js';
import Baking from './pages/Baking.js';
import Cooking from './pages/Cooking.js';
import Traveling from './pages/Traveling.js';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#/">Dani Zheleva</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#/baking">Baking</Nav.Link>
            <Nav.Link href="#/cooking">Cooking</Nav.Link>
            <Nav.Link href="#/traveling">Traveling</Nav.Link>

          </Nav>
        </Navbar>

        <Route exact path='/' component={Home} />
        <Route exact path='/baking' component={Baking} />
        <Route exact path='/cooking' component={Cooking} />
        <Route exact path='/traveling' component={Traveling} />
      </div>
    );
  }
}

export default App;
