import React from 'react';
import '../App.css';
import CardComponent from '../components/CardComponent.js';
import {DATA_BAKING} from '../data';

function Baking() {
    return (

        <div className="App">
            <div className="container">
                <div className="row m-4">
                    <div className="col-md-4">
                        <CardComponent 
                            title={DATA_BAKING.title}
                            img={DATA_BAKING.image} />
                    </div>
                    <div className="col-md-4">
                        <CardComponent title="Bake #2"/>
                    </div>
                    <div className="col-md-4">
                        <CardComponent title="Bake #3"/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Baking;