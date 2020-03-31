import React from 'react';
import { render } from '@testing-library/react';

class RecipeDetails extends React.Component {
    render() {
        return (
            <div>
                <h1>Details will go here</h1>
                <h3>{this.props.title}</h3>
            </div>
        )
    }
}

export default RecipeDetails;