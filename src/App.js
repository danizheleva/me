import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './App.css';
import baking from './images/homepage/baking.jpg'
import cooking from './images/homepage/cooking.jpg'
import pole from './images/homepage/pole.png'


function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row m-4">
          <div className="col-lg-4">
          <Card style={{height: '30rem', width: '18rem' }}>
            <Card.Img variant="top" src={baking} />
            <Card.Body>
              <Card.Title>Baking</Card.Title>
              <Card.Text>
                A collection of bakes including images and recipes.
              </Card.Text>
              <Button variant="primary">View</Button>
            </Card.Body>
          </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{height: '30rem', width: '18rem' }}>
              <Card.Img variant="top" src={cooking} />
              <Card.Body>
                <Card.Title>Cooking</Card.Title>
                <Card.Text>
                  A collection of meals including images and recipes.
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-lg-4">
            <Card style={{height: '30rem', width: '18rem' }}>
              <Card.Img variant="top" src={pole} />
              <Card.Body>
                <Card.Title>Pole</Card.Title>
                <Card.Text>
                  Progress in pole dancing
                </Card.Text>
                <Button variant="primary">View</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
