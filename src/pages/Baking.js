import React from 'react';
import '../App.css';
import {CardComponent, RecipeDetails} from '../components';
import {DATA_BAKING} from '../data';
import ReactModal from 'react-modal';

class Baking extends React.Component {

    constructor(){
        super();
        this.state = {
            showModal:false,
            recipeTitle: "",
            recipeImage: ""
        };
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    };

    handleOpenModal (bakingObject) {
        this.setState({ 
            showModal: true,
            recipeTitle: bakingObject.title,
            recipeImage: bakingObject.image
        });
    };

    handleCloseModal () {
        this.setState({ showModal: false });
    };
    
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
                                        <div onClick={() => this.handleOpenModal(bakes[object])}>
                                            <CardComponent 
                                                title={bakes[object].title} 
                                                img={bakes[object].image} 
                                            />
                                        </div>
                                        <ReactModal
                                            isOpen={this.state.showModal}
                                            contentLabel="test">
                                                <RecipeDetails 
                                                    title={this.state.recipeTitle} 
                                                />
                                            <button onClick={this.handleCloseModal}>Close Modal</button>
                                        </ReactModal>
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