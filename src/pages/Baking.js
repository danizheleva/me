import React from 'react';
import '../App.css';
import CardComponent from '../components/CardComponent.js';
import {DATA_BAKING} from '../data';

class Baking extends React.Component {
    render() {
        var bakes = DATA_BAKING;
        return (
            <div className="App">
                <div className="container">
                    <div className="row m-4">
                        {
                            Object.keys(bakes).map((object, i) => {
                                return ( 
                                    <div className="col-md-4">
                                        <CardComponent 
                                            title={bakes[object].title} 
                                            img={bakes[object].image} 
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
    )
    }
}

export default Baking;