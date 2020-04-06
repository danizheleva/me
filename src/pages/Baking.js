import React from 'react';
import '../App.css';
import {CardComponent, RecipeDetails} from '../components';
import {DATA_BAKING} from '../data';
import { Modal, Button } from 'react-bootstrap';

class Baking extends React.Component {

    constructor(){
        super();
        this.state = {
            show: false,
            recipeTitle: "",
            recipeImage: "",
            ingredients: [],
            method: []
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        };

    handleOpenModal (bakingObject) {
        this.setState({ 
            show: true,
            recipeTitle: bakingObject.title,
            recipeImage: bakingObject.image,
            ingredients: bakingObject.ingredients,
            method: bakingObject.method
        });
    };

    handleCloseModal () {
        this.setState({ show: false });
    };
    
    render() {
        var bakes = DATA_BAKING;
        return (
            <div className="App">
                <div className="container">
                    <div className="row m-4">
                        {
                            Object.keys(bakes).map((object, i) => {
                                {console.log(bakes)}
                                return ( 
                                    <div className="col-md-4">
                                        <div onClick={() => this.handleOpenModal(bakes[object])}>
                                            <CardComponent 
                                                title={bakes[object].title} 
                                                img={bakes[object].image} 
                                            />
                                        </div>

                                        <Modal dialogClassName="modal-size" show={this.state.show} onHide={() => this.handleCloseModal(bakes[object])}>
                                            <Modal.Header closeButton className="justify-content-center">
                                                <h1 className="col-11 text-center">{this.state.recipeTitle}</h1>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <RecipeDetails 
                                                    img={this.state.recipeImage}
                                                    ingredients={this.state.ingredients}
                                                    method={this.state.method}
                                                />
                                            </Modal.Body>
                                        </Modal>
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