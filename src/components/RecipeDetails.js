import React from 'react';
import { render } from '@testing-library/react';

class RecipeDetails extends React.Component {
    render() {
        var ingredients = this.props.ingredients;

        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">{this.props.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <ul>
                            {Object.keys(ingredients).map((number, i) => {
                                return(
                                    <li>{ingredients[number].ingredient.displayName} ({ingredients[number].quantity} {ingredients[number].measurement}) </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                    <div className="col-6">
                        METHOD GOES HERE
                    </div>
                    <div className="col-2 justify-content-center">
                        <img src={this.props.img} height="200" width="200"></img>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default RecipeDetails;