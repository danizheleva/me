import React from 'react';
import '../App.css';
import {CardComponent, RecipeDetails} from '../components';
import {DATA_BAKING} from '../data';
import ReactModal from 'react-modal';
import { ingredients } from '../constants';
import { Modal, Button } from 'react-bootstrap';

class Baking extends React.Component {

    constructor(){
        super();
        this.state = {
            show: false,
            recipeTitle: "",
            recipeImage: "",
            ingredients: []
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        };

    handleOpenModal (bakingObject) {
        this.setState({ 
            show: true,
            recipeTitle: bakingObject.title,
            recipeImage: bakingObject.image,
            ingredients: bakingObject.ingredients
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

                                        <Modal dialogClassName="modal-size" show={this.state.show} onHide={() => this.handleOpenModal(bakes[object])}>
                                            <Modal.Body>
                                                <RecipeDetails 
                                                    title={this.state.recipeTitle}
                                                    img={this.state.recipeImage}
                                                    ingredients={this.state.ingredients}
                                                />
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button variant="secondary" onClick={this.handleCloseModal}>
                                                    Close
                                                </Button>
                                            </Modal.Footer>
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