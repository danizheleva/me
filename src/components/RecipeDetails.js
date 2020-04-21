import React from 'react';
import CapitalisedTitle from './CapitalisedTitle';

class RecipeDetails extends React.Component {
    render() {
        const isSectioned = this.props.isSectioned
        var ingredients = this.props.ingredients;
        var method = this.props.method;

        return (
            <div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-3 col-sm-12 text-center">
                        <h3>Ingredients</h3>

                        {Object.keys(ingredients).map(section_name => {
                            return (
                                <div>
                                    {isSectioned ? (
                                        <CapitalisedTitle size={4} title={ingredients[section_name].sectionName} />) : null
                                    }
                                    <ul className="list-unstyled">
                                        {
                                            ingredients[section_name].ingredients.map(ingredient => {
                                                { console.log(ingredient) }
                                                return (<li>{ingredient.name.displayName} ({ingredient.quantity} {ingredient.measurement}) </li>)
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                        }


                    </div>
                    <div className="col-md-6 col-sm-12">
                        <h3 className="text-center">Method</h3>

                        {Object.keys(method).map((section_name) => {
                            return (
                                <div>
                                    {isSectioned ? (
                                        <CapitalisedTitle size={4} title={method[section_name].sectionName} /> ) : null}
                                    <ol>
                                        {
                                            method[section_name].steps.map(step => {
                                                return (<li>{step.description}</li>)
                                            })
                                        }
                                    </ol>
                                </div>
                            )
                        })}

                    </div>
                    <div className="col-md-3 col-sm-12 text-center">
                        <h3>Result</h3>
                        <div className="d-flex justify-content-center">
                            <img src={this.props.img} height="200" width="200"></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RecipeDetails;