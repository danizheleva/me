import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import CardComponent from '../components/CardComponent.js'
import cooking from '../images/homepage/cooking.jpg'
import pole from '../images/homepage/pole.png'
import baking from '../images/homepage/baking.jpg'

function Home() {
  return (
    <div className="App">
      <div className="container">
        <div className="row m-4">
          <div className="col-lg-4">
            <div onClick={() => alert("click")}>
              <CardComponent 
                title="Baking" 
                img={baking} 
                description="Collection of things I have baked, includign recipes"
                onClick={() => alert("card click worked")}
              />
            </div>
          </div>
          <div className="col-lg-4">
          <CardComponent 
              title="Cooking" 
              img={cooking} 
              description="Collection of meals I have cooked, includign recipes"
            />
          </div>
          <div className="col-lg-4">
          <CardComponent 
              title="Pole Dancing" 
              img={pole} 
              description="Progress in pole dancing"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
