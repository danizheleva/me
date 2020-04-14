import React from 'react';
import '../App.css';
import { CapitalisedTitle, RecipeDetails } from '../components';
import { Modal } from 'react-bootstrap';

class GalleryItem extends React.Component {
    constructor() {
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

    handleOpenModal(bakingObject) {
        this.setState({
            show: true,
            recipeTitle: bakingObject.title,
            recipeImage: bakingObject.image,
            ingredients: bakingObject.ingredients,
            method: bakingObject.method
        });
    };

    handleCloseModal() {
        this.setState({ show: false });
    };

    render() {
        const { details } = this.props;

        return (
            <div className="col-4 gallery-item img-responsive">
                <div onClick={() => this.handleOpenModal(details)}>
                    <img className="gallery-image" src={details.image} />
                    <div class="gallery-item-info">
                        <ul>
                            <li class="gallery-item-title">
                                <span class="visually-hidden" >
                                    <CapitalisedTitle size={2} title={details.title} />
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Modal dialogClassName="modal-size" show={this.state.show} onHide={() => this.handleCloseModal(details)}>
                    <Modal.Header closeButton className="d-flex justify-content-center">
                        <div className="col-11 text-center baking-detail-title" >
                            <CapitalisedTitle size={1} title={this.state.recipeTitle} />
                        </div>
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
    }
}

export default GalleryItem;