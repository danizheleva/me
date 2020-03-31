import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CardComponent from '../components/CardComponent.js'
import cooking from '../images/homepage/cooking.jpg'
import travel from '../images/homepage/travel.jpeg'
import baking from '../images/homepage/baking.jpg'

function Home() {
  return (
    <div className="App">
      <div className="container">
        <div className="row m-4">
          <div className="col-lg-4">
            <Link to="/baking">
              <CardComponent 
                title="Thing's I've Baked" 
                img={baking} 
                onClick={() => alert("card click worked")}
              />
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/cooking">
              <CardComponent 
                  title="Meals I've cooked" 
                  img={cooking} 
                />
            </Link>
          </div>
          <div className="col-lg-4">
            <Link to="/traveling">
              <CardComponent 
                  title="Places I've Been" 
                  img={travel} 
                />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
