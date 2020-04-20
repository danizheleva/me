import { measurements, ingredients } from '../../constants';
import pic1 from '../../images/baking/peanut_butter_cookies.jpg';

const INGREDIENTS = [
    {
        sectionName: "All",
        ingredients: [
            {
                name: ingredients.EGG,
                quantity: 1,
                measurement: measurements.IETM
            }, {
                name: ingredients.PLAIN_FLOUR,
                quantity: 180,
                measurement: measurements.GRAM
            }, {
                name: ingredients.SUGAR_BROWN,
                quantity: 100,
                measurement: measurements.GRAM
            }, {
                name: ingredients.CHOCOLATE_70,
                quantity: 70,
                measurement: measurements.GRAM
            }, {
                name: ingredients.BUTTER_PEANUT,
                quantity: 95,
                measurement: measurements.GRAM
            }]
    }
]

const METHOD = [
    {
        step: 1,
        description: "Cream the butter and sugar together on medium speed for 3-4 minutes."
    }, {
        step: 2,
        description: "Mix in the egg, then add the peanut butter and mix until combined."
    }, {
        step: 3,
        description: "Sift the flour, and fold it into the liquid mixture. Finally stir in the chunks of chocolate."
    }, {
        step: 4,
        description: "Weigh out roughly equal amounts of the mixture (mine ranged between 20-25g) and use your hands " +
            "to shape each into a round ball which fits in the palm of your hand. If you have time, leave them in the fridge " +
            "around 10 minutes. Flatten the ball and create the design on top of each cookie by gently pressing the back of a fork" +
            "into each cookie twice, as if making a plus sign with the fork."
    }, {
        step: 5,
        description: "Bake on a baking sheet in a pre-heated oven at 180C for 10 minutes. (While one batch is baking you can chill " +
            "and shape the next)."
    }, {
        step: 6,
        description: "Remove from the oven and let the cookies cool and set on the baking sheet for 10 minutes before moving."
    }
]

export default {
    PEANUT_BUTTER_COOKIES: {
        title: "peanut butter and chocolate cookies",
        ingredients: INGREDIENTS,
        method: METHOD,
        image: pic1,
        isSectioned: false
    }
}