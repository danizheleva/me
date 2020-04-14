import React from 'react';
import '../App.css';
import { GalleryItem } from '../components';
import {DATA_BAKING} from '../data';

class Baking extends React.Component {
    
    render() {
        const bakes = DATA_BAKING;
        return (
            <div className="App">
                <div className="container">
                    <div className="gallery">
                        {
                            Object.keys(bakes).map((key) => {
                                return ( 
                                    <GalleryItem key={key} details={bakes[key]}/>
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