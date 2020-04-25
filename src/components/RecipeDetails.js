import React from 'react';
import CapitalisedTitle from './CapitalisedTitle';

class RecipeDetails extends React.Component {
    constructor(props) {
        super(props);
        this.calculateCaloriesPerSection = this.calculateCaloriesPerSection.bing(this);
        this.state = {
            totalCals: 0
        }
    }

    calculateCaloriesPerSection() {
        console.log(this)
        // Object.keys(ingredients).map(section_name => {
        //     { console.log("in loop") }
        //     { console.log(ingredients[section_name].ingredients) }
        //     let totalCalsPerSection = 0;
        //     {
        //         ingredients[section_name].ingredients.map(element => {
        //             const amountUsed = element.quantity;
        //             const calories = element.name.nutrition?.macronutrients.filter(mn => mn.macro == "kcal")[0].amount
        //             const perAmount = element.name.nutrition?.quantity;
        //             console.log("calories per ingredient:")
        //             console.log((calories / perAmount) * amountUsed);
        //             totalCalsPerSection += ((calories / perAmount) * amountUsed);

        //             console.log("total cals:")
        //             console.log(totalCalsPerSection);
        //             console.log(this)
        //             return totalCalsPerSection;
        //         });
        //     }
        // }
    }

    render() {
        const isSectioned = this.props.isSectioned
        var ingredients = this.props.ingredients;
        var method = this.props.method;

        console.log(ingredients)
        return (
            <div>
                <div className="row justify-content-center mt-3">
                    <div className="col-md-3 col-sm-12 text-center">
                        <h3>Ingredients</h3>

                        {}

                            return (
                                <div>
                            {isSectioned ? (
                                <CapitalisedTitle size={4} title={ingredients[section_name].sectionName} />) : null
                            }
                            <ul className="list-unstyled">
                                {
                                    ingredients[section_name].ingredients.map(ingredient => {
                                        // { console.log(ingredient) }
                                        return (<li>{totalCalsPerSection} {ingredient.name.displayName} ({ingredient.quantity} {ingredient.measurement}) </li>)
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
                                        <CapitalisedTitle size={4} title={method[section_name].sectionName} />) : null}
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