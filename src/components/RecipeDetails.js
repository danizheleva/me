import React from 'react';

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
                                        <h4>{ingredients[section_name].sectionName}</h4>) : null
                                    }
                                    <ul className="list-unstyled">
                                        {
                                            ingredients[section_name].ingredients.map(ingredient => {
                                                { console.log(ingredient) }
                                                return (<li>{ingredient.name.displayName} ({ingredient.quantity}{ingredient.measurement}) </li>)
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
                                        <h4>{method[section_name].sectionName}</h4>) : null
                                    }
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